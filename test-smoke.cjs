// Tiny no-dependency smoke checks of the catalogue and shopping logic.
// Run: node test-smoke.cjs
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const context = {
  console, Intl, JSON, String, Array, Number, Math, Date,
  setTimeout, clearTimeout,
  location: {hash: '#/'},
  history: {replaceState(_a,_b,path){context.location.hash=path;}},
  localStorage: {getItem(){return null;},setItem(){}},
  window: {scrollY:0, scrollTo(){}, addEventListener(){}},
  document: {
    listeners:{},
    body:{classList:{toggle(){}}},
    querySelector(selector){return selector==='#app'?this.app:this.toast;},
    addEventListener(type,handler){(this.listeners[type]??=[]).push(handler);},
    app:{innerHTML:''},
    toast:{textContent:'',classList:{add(){},remove(){}}}
  }
};
vm.createContext(context);
vm.runInContext(fs.readFileSync(__dirname+'/app.js','utf8'), context);
const read = () => context.document.app.innerHTML;
const execute = js => vm.runInContext(js,context);
assert.match(read(), /THE COURT/);
assert.match(read(), /category-tile__photo/);
assert.match(read(), /Astrox 88 D Pro/);

context.location.hash='#/shop/shoes';execute('render()');
assert.match(read(), /SOUND WAVE II|Sound Wave II/);
assert.doesNotMatch(read(), /<article class="product-card"[^>]*>[\s\S]*?astrox-88-d-pro/); // filtered listings

context.location.hash='#/shop';execute('render()');
assert.match(read(), /Astrox 88 D Pro/); // resets category

context.location.hash='#/product/astrox-88-d-pro';execute('render()');
assert.match(read(), /WEIGHT \/ GRIP/);
assert.match(read(), /STRINGING/);
execute('state.detailOption="4U / G5";state.string="Yonex BG65";state.tension="24 lbs";state.detailQty=2;addToCart()');
assert.equal(execute('cartCount()'),2);
assert.equal(execute('subtotal()'),657.8); // (319.90+9)*2
context.location.hash='#/bag';execute('state.bagOpen=false;render()');
assert.match(read(), /CONTINUE TO DELIVERY/);
assert.match(read(), /CONTINUE SHOPPING/);
context.location.hash='#/checkout';execute('render()');
assert.match(read(), /BACK TO BAG/);
assert.match(read(), /REVIEW ORDER/);
const match = read().match(/<input[^>]*name="unit"[^>]*>/);
assert.ok(match,'Unit field exists');
assert.ok(!/\brequired\b/.test(match[0]),'Unit field is optional');
context.document.listeners.submit[0]({
  target:{id:'checkout-form',reportValidity(){return true;}},
  preventDefault(){}
});
assert.equal(context.location.hash,'#/checkout/summary');
assert.equal(execute('cartCount()'),2,'Final checkout must retain the bag before placing the order');
assert.match(read(),/PLACE ORDER/);
assert.match(read(),/ORDER SUMMARY/);
assert.doesNotMatch(read(),/Online ordering is not available yet/);
for(const route of ['#/','#/shop','#/shop/rackets','#/product/astrox-88-d-pro','#/bag','#/checkout','#/review','#/checkout/summary','#/confirmed','#/info']){
  context.location.hash=route;execute('render()');
  assert.doesNotMatch(read(),/checkout-stages|Checkout progress|demo|concept|prototype|FOUR CATEGORIES|\d{2} \/ \d{2} styles/i,route);
}
context.location.hash='#/checkout/summary';execute('render()');
context.document.listeners.click[0]({target:{closest(){return {dataset:{action:'place-order'}};}}});
assert.equal(context.location.hash,'#/confirmed');
assert.equal(execute('cartCount()'),0);
assert.equal(execute('state.lastOrder.total'),657.8);
assert.match(read(),/ORDER<br>CONFIRMED/);
assert.match(read(),/ORDER SUMMARY/);
assert.match(read(),/657.80/);
execute('placeOrder()');
assert.equal(execute('state.lastOrder.total'),657.8,'Repeated completion preserves the receipt');
context.location.hash='#/checkout';execute('render()');
assert.match(read(), /YOUR BAG IS EMPTY/);
console.log('PASS: home, categories, filters, product options, stringing, cart totals, back navigation, checkout & empty state');
