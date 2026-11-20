/*
  Z BADMINTON — lightweight, framework-free storefront.
  Edit the PRODUCTS array to replace catalogue items and imagery.
  Hash routing (#/shop) lets all pages work without a server-side router.
  Cart is saved locally; checkout completion runs entirely in the browser.
*/

const ASSETS = {
  play: './assets/court-players.png',
};

// Stretch a solid grey placeholder into the existing image box on load failure.
const IMAGE_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1" height="1"%3E%3Cpath fill="%23ccc" d="M0 0h1v1H0z"/%3E%3C/svg%3E';

const PRODUCTS = [
  {
    id: 'astrox-88-d-pro', category: 'Rackets', brand: 'Yonex', name: 'Astrox 88 D Pro',
    price: 319.90, descriptor: '3rd Generation · Black / Silver', tag: 'Best seller',
    image: 'https://res.cloudinary.com/da4mrfwne/image/upload/v1714404080/2024/03/3AX88D-Pro.png',
    imagePosition: 'center',
    options: { label: 'Weight / Grip', values: ['4U / G5', '3U / G5', '4U / G6', '3U / G6'] },
    stringing: true, details: [['Balance','Head heavy'],['Flex','Stiff'],['Playing style','Attack / rear court']],
    description: 'A head-heavy racket engineered for powerful back-court attacks, with a stiff shaft and precise response.',
    featured: true
  },
  {
    id: 'astrox-88-s-pro', category: 'Rackets', brand: 'Yonex', name: 'Astrox 88 S Pro',
    price: 319.90, descriptor: '3rd Generation · Silver / Black', tag: 'Court favourite',
    image: 'https://res.cloudinary.com/da4mrfwne/image/upload/v1714404041/2024/03/3AX88S-Pro.png',
    options: { label: 'Weight / Grip', values: ['3U / G5', '4U / G5', '3U / G6', '4U / G6'] },
    stringing: true, details: [['Balance','Head heavy'],['Flex','Stiff'],['Playing style','Front-court control']],
    description: 'Built for decisive front-court play, fast reactions and controlled attacking shots.',
    featured: true
  },
  {
    id: 'sound-wave-ii', category: 'Shoes', brand: 'Li-Ning', name: 'Sound Wave II',
    price: 95.00, descriptor: 'Black / Yellow', tag: 'For the footwork',
    image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/120149842/5006201260.jpg',
    options: { label: 'EU shoe size', values: ['39','40','41','42','43','44','45'] },
    stringing: false, details: [['Outsole','Non-marking'],['Upper','Breathable mesh'],['Level','Intermediate']],
    description: 'A responsive badminton court shoe with breathable mesh and a wave-shaped midsole.',
    featured: true
  },
  {
    id: 'aero-lite-ii', category: 'Shoes', brand: 'Li-Ning', name: 'Aero Lite II',
    price: 84.90, compareAt: 89.90, descriptor: 'White / Light Blue / Lime', tag: 'Light on court',
    image: 'https://sg.lining.studio/cdn/shop/files/Aero_Lite_II.jpg?v=1759901512&width=650',
    options: { label: 'EU shoe size', values: ['39','40','41','42','43','44','45','46'] },
    stringing: false, details: [['Outsole','Non-marking'],['Weight','Approx. 311 g'],['Level','Intermediate']],
    description: 'Lightweight court footwear with ventilated mesh, cushioning and a non-marking outsole.',
    featured: true
  },
  {
    id: 'lining-g800', category: 'Shuttles', brand: 'Li-Ning', name: 'G800 Feather Shuttle',
    price: 58.00, descriptor: 'Goose feather · Tube of 12', tag: 'Match ready',
    image: 'https://sg.lining.studio/cdn/shop/files/AYQR_004_4_S_a3523220ab.jpg?v=1752148589&width=650',
    options: { label: 'Speed', values: ['76','77'] },
    stringing: false, details: [['Feathers','Goose feather'],['Quantity','12 shuttles'],['Level','Professional']],
    description: 'Premium goose-feather shuttles in a 12-piece tube for match play.',
  },
  {
    id: 'lining-d6', category: 'Shuttles', brand: 'Li-Ning', name: 'D6 Feather Shuttle',
    price: 37.00, descriptor: 'Feather shuttle · Tube of 12', tag: 'Training & play',
    image: 'https://sg.lining.studio/cdn/shop/files/2_e4af80578b.jpg?v=1752147570&width=650',
    options: { label: 'Speed', values: ['76','77'] },
    stringing: false, details: [['Feathers','Duck feather'],['Quantity','Tube'],['Use','Training / games']],
    description: 'Durable feather shuttlecocks suitable for regular club sessions.',
  },
  {
    id: 'yonex-ac102', category: 'Accessories', brand: 'Yonex', name: 'Super Grap AC102EX',
    price: 12.10, descriptor: 'Overgrip · Pack of 3', tag: 'Court essential',
    image: 'https://sfycdn.speedsize.com/8140516e-7833-475e-b70f-6e943a98adee/badmintonhq.co.uk/cdn/shop/products/37499412-5dd1-4138-b161-398adf62b3fb.jpg?v=1731964084&width=1946',
    options: { label: 'Colour', values: ['Black','White','Deep Blue','Wine Red'] },
    stringing: false, details: [['Material','Polyurethane'],['Feel','Tacky'],['Quantity','Pack of 3']],
    description: 'A tacky-feel overgrip for comfort and control, sold as a three-pack.',
  }
];

const CATEGORIES = [
  { name: 'Rackets', image: 'https://sportsshop.asia/cdn/shop/files/3ax88s-p-417-1_02.png?v=1722580489', product: true },
  { name: 'Shoes', image: 'https://sg.lining.studio/cdn/shop/files/Aero_Lite_II.jpg?v=1759901512&width=650', product: true },
  { name: 'Shuttles', image: 'https://sg.lining.studio/cdn/shop/files/AYQR_004_4_S_a3523220ab.jpg?v=1752148589&width=650', product: true },
  { name: 'Accessories', image: 'https://sfycdn.speedsize.com/8140516e-7833-475e-b70f-6e943a98adee/badmintonhq.co.uk/cdn/shop/products/37499412-5dd1-4138-b161-398adf62b3fb.jpg?v=1731964084&width=1946', product: true },
];

const SHOP_CATEGORIES = ['All equipment','Rackets','Shoes','Shuttles','Accessories'];
const money = amount => new Intl.NumberFormat('en-SG',{style:'currency',currency:'SGD'}).format(amount);
const $ = selector => document.querySelector(selector);
const app = $('#app');
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icons = {
 search: '<svg viewBox="0 0 24 24"><circle cx="10.7" cy="10.7" r="6.8"/><path d="m16 16 5 5"/></svg>',
 bag: '<svg viewBox="0 0 24 24"><path d="M4 8h16l-1 13H5L4 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
 arrow: '<svg viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
 back: '<svg viewBox="0 0 24 24"><path d="M20 12H5m6-6-6 6 6 6"/></svg>',
 close: '<svg viewBox="0 0 24 24"><path d="M5 5l14 14M19 5 5 19"/></svg>',
 menu: '<svg viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"/></svg>',
 plus: '<svg viewBox="0 0 24 24"><path d="M12 4v16M4 12h16"/></svg>',
 minus: '<svg viewBox="0 0 24 24"><path d="M4 12h16"/></svg>',
 check: '<svg viewBox="0 0 24 24"><path d="m4 12 5 5L20 6"/></svg>',
 caret: '<svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg',
};
function icon(name) { return `<span class="icon" aria-hidden="true">${icons[name]||''}</span>`; }

function loadCart() { try { const items=JSON.parse(localStorage.getItem('zb-cart-v1')||'[]'); return Array.isArray(items)?items:[]; } catch { return []; } }
const state = {
  cart: loadCart(), lastOrder: null, page: '', searchOpen: false, searchQuery: '', menuOpen: false, bagOpen: false, filterOpen: false,
  category: 'All equipment', brands: [], sort: 'featured', query: '', detailOption: '', string: 'Unstrung', tension:'24 lbs', detailQty:1, photoIndex:0,
  checkout: {email:'',first:'',last:'',address:'',unit:'',postal:'',phone:'',shipping:'standard'},
};
function saveCart(){try{localStorage.setItem('zb-cart-v1',JSON.stringify(state.cart));}catch{} }
function cartCount(){return state.cart.reduce((n,i)=>n+i.qty,0);}
function bagCountLabel(){const n=cartCount();return `${n} ${n===1?'item':'items'}`;}
function checkoutNavigation(href,label){
 return `<div class="checkout-navigation">${backLink(href,label)}</div>`;
}
function subtotal(){return state.cart.reduce((n,i)=>n+i.qty*i.unitPrice,0);}
function shippingCost(){return subtotal()===0 || subtotal()>=80?0:9;}
function lineTotal(){return subtotal()+shippingCost();}
function productById(id){return PRODUCTS.find(p=>p.id===id);}
function cartKey(id,option,string,tension){return [id,option,string,tension].join('~');}
function resolveProductImage(p){return p.image;}
function picture(src, alt, className='', extras=''){
  return `<img class="${className}${src?'':' is-placeholder'}" src="${esc(src||IMAGE_PLACEHOLDER)}" alt="${esc(alt)}" loading="lazy" ${extras} onerror="this.onerror=null;this.classList.add('is-placeholder');this.src='${esc(IMAGE_PLACEHOLDER)}';" />`;
}
function productCard(p,idx=0){
 return `<article class="product-card" style="--card-i:${idx}">
  <a class="product-card__image" href="#/product/${p.id}" aria-label="View ${esc(p.brand+' '+p.name)}">
   ${picture(resolveProductImage(p),p.brand+' '+p.name,'product-card__photo')}
   <span class="product-card__view">VIEW PRODUCT ${icon('arrow')}</span>
  </a>
  <div class="product-card__info">
   <div class="product-card__top"><span class="eyebrow">${esc(p.brand)}</span><span class="eyebrow muted">${esc(p.category)}</span></div>
   <a href="#/product/${p.id}" class="product-card__name">${esc(p.name)}</a>
   <div class="product-card__bottom"><span class="muted detail-line">${esc(p.descriptor)}</span><strong>${money(p.price)}</strong></div>
  </div>
 </article>`;
}
function backLink(href,label){return `<a class="back-link" href="${href}">${icon('back')} ${esc(label)}</a>`;}
function siteHeader(){
 const n=cartCount();
 return `<div class="announcement"><div class="container announcement__inner"><span>THE COURT EDIT / Z BADMINTON</span><span>SINGAPORE &nbsp;·&nbsp; SGD</span></div></div>
 <header class="site-header" id="site-header"><div class="container header__inner">
  <a class="brand" href="#/" aria-label="Z Badminton home"><span class="brand__monogram">Z<span class="brand__dot">.</span></span><span class="brand__word">BADMINTON</span></a>
  <nav class="desktop-nav" aria-label="Main menu"><a href="#/shop">SHOP ALL</a><a href="#/shop/rackets">RACKETS</a><a href="#/shop/shoes">SHOES</a><a href="#/shop/shuttles">SHUTTLES</a><a href="#/shop/accessories">ACCESSORIES</a></nav>
  <div class="header__tools"><button class="icon-button search-toggle" data-action="toggle-search" aria-label="Search products">${icon('search')}</button><button class="cart-trigger" data-action="open-cart" aria-label="Open shopping bag">${icon('bag')}<span class="cart-trigger__label">BAG</span><span class="cart-count">${n}</span></button><button class="icon-button menu-toggle" data-action="toggle-menu" aria-label="Open menu" aria-expanded="${state.menuOpen}">${icon(state.menuOpen?'close':'menu')}</button></div>
 </div></header>
 ${state.menuOpen ? `<nav class="mobile-menu" aria-label="Mobile menu"><a href="#/shop">SHOP ALL ${icon('arrow')}</a>${SHOP_CATEGORIES.slice(1).map(c=>`<a href="#/shop/${c.toLowerCase()}">${c.toUpperCase()} ${icon('arrow')}</a>`).join('')}</nav>`:''}
 ${state.searchOpen?searchUI():''}`;
}
function searchUI(){
 const q=state.searchQuery.toLowerCase(); const matches=PRODUCTS.filter(p=>(p.name+' '+p.brand+' '+p.category).toLowerCase().includes(q));
 return `<div class="search-panel" role="search"><div class="container"><div class="search-panel__bar">${icon('search')}<input id="site-search" aria-label="Search products" type="search" placeholder="Search rackets, shoes, shuttles…" value="${esc(state.searchQuery)}" autocomplete="off"><button data-action="close-search" aria-label="Close search">${icon('close')}</button></div><div class="search-panel__results"><span class="eyebrow muted">${q?'MATCHES':'SUGGESTED'}</span>${matches.slice(0,5).map(p=>`<a href="#/product/${p.id}"><span>${esc(p.brand)} / ${esc(p.name)}</span><span>${money(p.price)} ${icon('arrow')}</span></a>`).join('')||'<p>No products found.</p>'}</div></div></div>`;
}
function footer(){
 return `<footer class="footer"><div class="container footer__grid"><div><a class="brand footer__brand" href="#/"><span class="brand__monogram">Z<span class="brand__dot">.</span></span><span class="brand__word">BADMINTON</span></a><p>Equipment for the next game.</p></div><div><span class="footer__heading">SHOP</span><a href="#/shop/rackets">Rackets</a><a href="#/shop/shoes">Shoes</a><a href="#/shop/shuttles">Shuttles</a><a href="#/shop/accessories">Accessories</a></div><div><span class="footer__heading">THE DETAILS</span><a href="#/info">About Z Badminton</a></div><div><span class="footer__heading">SINGAPORE / SGD</span><p>Rackets. Footwear.<br>Court essentials.</p></div></div><div class="container footer__bottom"><span>© Z BADMINTON</span><span>MADE FOR THE COURT / 2026</span></div></footer>`;
}
function categoryTile(c){
 return `<a href="#/shop/${c.name.toLowerCase()}" class="category-tile ${c.product?'category-tile--product':''}"><div class="category-tile__media">${picture(c.image,c.name+' equipment','category-tile__photo')}</div><div class="category-tile__meta"><span class="category-tile__name">${esc(c.name)} ${icon('arrow')}</span></div></a>`;
}
function homePage(){
 return `<main id="main">
 <section class="hero"><div class="hero__photo">${picture(ASSETS.play,'Badminton players on an indoor court photographed through a racket','hero__image','fetchpriority="high"')}</div><div class="hero__veil"></div><div class="container hero__content"><div class="hero__topline"><span class="eyebrow">Z BADMINTON / THE COURT EDIT</span></div><div class="hero__bottom"><h1>THE COURT<br><span>IS YOURS.</span></h1><div class="hero__aside"><a class="button button--lime" href="#/shop">EXPLORE EQUIPMENT ${icon('arrow')}</a></div></div><div class="hero__foot"><span>THE SPORT / THE SPACE / THE GAME</span><span>SCROLL TO EXPLORE ↓</span></div></div></section>
 <section class="section section--featured"><div class="container"><div class="section-heading"><div><span class="eyebrow accent">01 / THE SELECTION</span><h2>IN THE <em>ROTATION.</em></h2></div><a class="text-link" href="#/shop">SHOP ALL ${icon('arrow')}</a></div><div class="product-grid product-grid--featured">${PRODUCTS.filter(p=>p.featured).map(productCard).join('')}</div></div></section>
 <section class="editorial"><div class="editorial__media">${picture('https://www.yonex.com/media/catalog/category/heroimage_b_racquets_260206_1.jpg','Badminton racket and feather shuttles on a green court','editorial__photo')}</div><div class="editorial__copy"><span class="eyebrow">02 / EQUIPMENT, NOT EXCESS</span><h2>FIND<br>YOUR <span>EDGE.</span></h2><div class="editorial__foot"><p>Choose the setup that fits how you play.</p><a href="#/shop/rackets" class="text-link text-link--light">EXPLORE RACKETS ${icon('arrow')}</a></div></div></section>
 <section class="section category-section"><div class="container"><div class="section-heading"><div><span class="eyebrow accent">03 / THE RANGE</span><h2>SHOP THE <em>COURT.</em></h2></div></div><div class="category-grid">${CATEGORIES.map(categoryTile).join('')}</div></div></section>
 <section class="bottom-feature"><div class="container bottom-feature__inner"><div><span class="eyebrow">Z BADMINTON / SELECTED EQUIPMENT</span><h2>READY FOR THE<br>NEXT SESSION?</h2></div><a class="button button--lime" href="#/shop">SHOP EVERYTHING ${icon('arrow')}</a></div></section>
 </main>`;
}
function filteredProducts(){
 let ps=PRODUCTS.filter(p=>(state.category==='All equipment'||p.category===state.category) && (state.brands.length===0||state.brands.includes(p.brand)) && (!state.query||(p.brand+' '+p.name+' '+p.descriptor).toLowerCase().includes(state.query.toLowerCase())));
 if(state.sort==='low') ps.sort((a,b)=>a.price-b.price);
 if(state.sort==='high') ps.sort((a,b)=>b.price-a.price);
 if(state.sort==='name') ps.sort((a,b)=>a.name.localeCompare(b.name));
 return ps;
}
function filterPanel(){
 const brands=['Yonex','Li-Ning'];
 return `<div class="filters ${state.filterOpen?'filters--open':''}" id="filters"><div class="filters__title"><strong>REFINE</strong><button data-action="close-filters" class="filter-dismiss" aria-label="Close filters">${icon('close')}</button></div><fieldset><legend>CATEGORY</legend>${SHOP_CATEGORIES.map(c=>`<label class="filter-radio"><input type="radio" name="category" value="${esc(c)}" ${state.category===c?'checked':''}><span>${esc(c)}</span></label>`).join('')}</fieldset><fieldset><legend>BRAND</legend>${brands.map(b=>`<label class="filter-radio"><input type="checkbox" name="brand" value="${esc(b)}" ${state.brands.includes(b)?'checked':''}><span>${b}</span></label>`).join('')}</fieldset><button class="filter-apply" data-action="close-filters">VIEW RESULTS ${icon('arrow')}</button></div>`;
}
function shopPage(categoryParam=''){
 const category=SHOP_CATEGORIES.find(c=>c.toLowerCase()===categoryParam.toLowerCase()); state.category=category||'All equipment';
 const ps=filteredProducts();
 return `<main id="main" class="shop"><div class="container"><div class="shop__intro"><div>${backLink('#/','BACK TO HOME')}<div class="eyebrow accent">THE SHOP / ${esc(state.category.toUpperCase())}</div><h1>${state.category==='All equipment'?'THE EQUIPMENT.':state.category.toUpperCase()+'.'}</h1></div><span class="shop__count">${String(ps.length).padStart(2,'0')} ITEMS / SGD</span></div><div class="shop__controls"><button class="filter-mobile-button" data-action="open-filters">FILTER +</button><span class="shop__counter">${ps.length} PRODUCTS</span><div class="sort-select"><label for="sort">SORT</label><select id="sort" aria-label="Sort products"><option value="featured" ${state.sort==='featured'?'selected':''}>Featured</option><option value="low" ${state.sort==='low'?'selected':''}>Price: low to high</option><option value="high" ${state.sort==='high'?'selected':''}>Price: high to low</option><option value="name" ${state.sort==='name'?'selected':''}>Name A–Z</option></select>${icon('caret')}</div></div><div class="shop__layout">${filterPanel()}<div class="shop__results">${ps.length?`<div class="product-grid product-grid--shop">${ps.map(productCard).join('')}</div>`:`<div class="empty-results"><h2>NOTHING FOUND.</h2><p>Try another brand or category.</p><button class="text-link" data-action="reset-filters">CLEAR FILTERS ${icon('arrow')}</button></div>`}</div></div></div></main>`;
}
function detailPage(id){
 const p=productById(id); if(!p) return notFound();
 if(!p.options.values.includes(state.detailOption))state.detailOption=p.options.values[0];
 return `<main id="main" class="detail-page"><div class="container"><div class="detail__back">${backLink('#/shop/'+p.category.toLowerCase(),'BACK TO '+p.category.toUpperCase())}<span class="eyebrow muted">SHOP / ${esc(p.category.toUpperCase())} / ${esc(p.name.toUpperCase())}</span></div><div class="detail-layout"><div class="detail-gallery"><div class="detail-gallery__main">${picture(resolveProductImage(p),p.brand+' '+p.name,'detail-gallery__image')}</div><div class="detail-gallery__thumbs"><div class="thumb is-active" aria-label="Product photo 1">${picture(resolveProductImage(p),'Product photo thumbnail')}</div><div class="detail-gallery__note"><span class="eyebrow">${esc(p.brand)}</span><span>PRODUCT<br>DETAIL / 01</span></div></div></div><div class="detail-config"><div class="eyebrow accent">${esc(p.brand)} / ${esc(p.category).toUpperCase()}</div><h1>${esc(p.name)}</h1><p class="detail-config__descriptor">${esc(p.descriptor)}</p><div class="detail-config__price">${money(p.price)}${p.compareAt?` <s>${money(p.compareAt)}</s>`:''}</div><div class="detail-config__rule"></div><div class="option-group"><div class="option-group__label"><strong>${esc(p.options.label.toUpperCase())}</strong><span>SELECT OPTION</span></div><div class="chip-group">${p.options.values.map(opt=>`<button class="chip ${state.detailOption===opt?'chip--selected':''}" data-option="${esc(opt)}" aria-pressed="${state.detailOption===opt}">${esc(opt)}</button>`).join('')}</div></div>${p.stringing?`<div class="option-group"><div class="option-group__label"><strong>STRINGING</strong><span>+ S$9.00 FOR STRINGING</span></div><select id="string-choice" class="styled-select" aria-label="Choose racket stringing"><option value="Unstrung" ${state.string==='Unstrung'?'selected':''}>Unstrung (default)</option><option value="Yonex BG65" ${state.string==='Yonex BG65'?'selected':''}>Yonex BG65 (+S$9.00)</option><option value="Yonex BG80" ${state.string==='Yonex BG80'?'selected':''}>Yonex BG80 (+S$9.00)</option></select>${state.string!=='Unstrung'?`<label class="tension-label" for="tension-choice">TENSION <select id="tension-choice" class="styled-select">${['22 lbs','23 lbs','24 lbs','25 lbs','26 lbs','27 lbs','28 lbs'].map(x=>`<option ${state.tension===x?'selected':''}>${x}</option>`).join('')}</select></label>`:''}</div>`:''}<div class="detail-buy"><div class="quantity-stepper"><button aria-label="Decrease quantity" data-action="decrease-detail">${icon('minus')}</button><span>${state.detailQty}</span><button aria-label="Increase quantity" data-action="increase-detail">${icon('plus')}</button></div><button class="button button--dark add-button" data-action="add-to-cart">ADD TO BAG ${icon('arrow')}</button></div><div class="detail-accordion"><details open><summary>THE DETAILS ${icon('caret')}</summary><p>${esc(p.description)}</p><div class="specs">${p.details.map(([key,val])=>`<div><span>${esc(key)}</span><strong>${esc(val)}</strong></div>`).join('')}</div></details></div></div></div><div class="related"><div class="section-heading"><div><span class="eyebrow accent">MORE FOR YOUR BAG</span><h2>KEEP <em>EXPLORING.</em></h2></div><a href="#/shop" class="text-link">SHOP ALL ${icon('arrow')}</a></div><div class="product-grid product-grid--related">${PRODUCTS.filter(x=>x.id!==p.id).slice(0,3).map(productCard).join('')}</div></div></div><div class="sticky-buy"><div><span>${esc(p.name)}</span><strong>${money(p.price)}</strong></div><button data-action="add-to-cart" class="button button--dark">ADD TO BAG ${icon('arrow')}</button></div></main>`;
}
function cartLine(item){
 const p=productById(item.id);if(!p)return '';
 const opt=[item.option, item.string!=='Unstrung'?item.string:null,item.string!=='Unstrung'?item.tension:null].filter(Boolean).join(' / ');
 return `<article class="bag-item"><a class="bag-item__media" href="#/product/${p.id}">${picture(resolveProductImage(p),p.name)}</a><div class="bag-item__info"><span class="eyebrow accent">${esc(p.brand)}</span><a class="bag-item__name" href="#/product/${p.id}">${esc(p.name)}</a><p class="muted">${esc(opt)}</p><div class="bag-item__bottom"><div class="quantity-stepper quantity-stepper--small"><button data-action="cart-minus" data-key="${esc(item.key)}" aria-label="Decrease quantity for ${esc(p.name)}">${icon('minus')}</button><span>${item.qty}</span><button data-action="cart-plus" data-key="${esc(item.key)}" aria-label="Increase quantity for ${esc(p.name)}">${icon('plus')}</button></div><button class="remove-link" data-action="cart-remove" data-key="${esc(item.key)}">REMOVE</button></div></div><strong class="bag-item__price">${money(item.unitPrice*item.qty)}</strong></article>`;
}
function cartSummary(withButton=true,totals={subtotal:subtotal(),delivery:shippingCost(),total:lineTotal()}){return `<aside class="order-summary"><div class="order-summary__heading">ORDER SUMMARY</div><div class="summary-row"><span>Subtotal</span><strong>${money(totals.subtotal)}</strong></div><div class="summary-row"><span>Delivery</span><span>${totals.delivery===0?'FREE':money(totals.delivery)}</span></div><div class="summary-row total"><strong>ESTIMATED TOTAL</strong><strong>${money(totals.total)}</strong></div>${withButton?`<a href="#/checkout" class="button button--dark button--wide">CONTINUE TO DELIVERY ${icon('arrow')}</a>`:''}</aside>`;}
function bagPage(){
 return `<main class="bag-page" id="main"><div class="container">${checkoutNavigation('#/shop','CONTINUE SHOPPING')}<div class="bag__heading"><h1>YOUR BAG.</h1><p class="bag__count">${bagCountLabel()}</p></div>${state.cart.length?`<div class="bag-layout"><div class="bag-lines">${state.cart.map(cartLine).join('')}</div>${cartSummary()}</div>`:`<div class="empty-cart"><span class="eyebrow accent">NOTHING IN THE BAG / YET</span><h2>THE COURT IS WAITING.</h2><p>Start with the right equipment.</p><a href="#/shop" class="button button--dark">EXPLORE THE SHOP ${icon('arrow')}</a></div>`}</div></main>`;
}
function checkoutPage(){
 if(!state.cart.length)return `<main class="checkout-page" id="main"><div class="container">${backLink('#/bag','BACK TO BAG')}<div class="empty-cart"><h2>YOUR BAG IS EMPTY.</h2><a href="#/shop" class="button button--dark">SHOP EQUIPMENT ${icon('arrow')}</a></div></div></main>`;
 const d=state.checkout;
 const input=(name,label,type='text',auto='',placeholder='')=>`<label class="field"><span>${label.toUpperCase()}</span><input ${name==='unit'?'':'required'} name="${name}" type="${type}" value="${esc(d[name])}" autocomplete="${auto}" placeholder="${placeholder}" ${name==='postal'?'inputmode="numeric" pattern="[0-9]{6}" title="Use a 6-digit Singapore postal code"':''} ${name==='phone'?'inputmode="tel" pattern="[0-9 +()-]{8,}" title="Enter a valid phone number"':''}></label>`;
 return `<main class="checkout-page" id="main"><div class="container">${checkoutNavigation('#/bag','BACK TO BAG')}</div><div class="container checkout-layout"><div class="checkout-form"><h1>DELIVERY<br>DETAILS.</h1><form id="checkout-form"><h2>CONTACT</h2>${input('email','Email address','email','email','you@example.com')}<h2>DELIVERY ADDRESS</h2><div class="field-grid">${input('first','First name','text','given-name')}${input('last','Last name','text','family-name')}</div>${input('address','Street address','text','street-address')}${input('unit','Unit / Floor (optional)','text','address-line2')}<div class="field-grid">${input('postal','Singapore postal code','text','postal-code','6 digits')}${input('phone','Mobile number','tel','tel','+65')}</div><div class="shipping-choice"><span>DELIVERY</span><label><input type="radio" name="shipping" value="standard" checked><span><strong>Standard delivery</strong><small>Estimated delivery cost · ${shippingCost()===0?'Free':'S$9.00'}</small></span></label></div><button class="button button--dark button--wide" type="submit">REVIEW ORDER ${icon('arrow')}</button></form></div><div class="checkout__sidebar">${cartSummary(false)}<div class="checkout-preview">${state.cart.map(item=>{const p=productById(item.id);return p?`<div class="checkout-preview__line"><span>${esc(p.name)} <small>× ${item.qty}</small></span><b>${money(item.unitPrice*item.qty)}</b></div>`:''}).join('')}</div></div></div></main>`;
}
function checkoutSummaryPage(){if(!state.cart.length)return bagPage();return `<main class="confirmation checkout-summary" id="main"><div class="container">${checkoutNavigation('#/checkout','BACK TO DELIVERY DETAILS')}<div class="confirmation__inner"><h1>ORDER<br>SUMMARY.</h1><p>One step closer to your next game.</p>${cartSummary(false)}<button class="button button--dark" data-action="place-order">PLACE ORDER ${icon('arrow')}</button></div></div></main>`;}
function confirmationPage(){if(!state.lastOrder)return bagPage();return `<main class="confirmation checkout-summary" id="main"><div class="container">${checkoutNavigation('#/shop','CONTINUE SHOPPING')}<div class="confirmation__inner"><div class="confirmation__check">${icon('check')}</div><h1>ORDER<br>CONFIRMED.</h1><p>Thank you for choosing Z Badminton.</p>${cartSummary(false,state.lastOrder)}<a href="#/shop" class="button button--dark">CONTINUE SHOPPING ${icon('arrow')}</a></div></div></main>`;}
function placeOrder(){if(!state.cart.length)return;state.lastOrder={subtotal:subtotal(),delivery:shippingCost(),total:lineTotal()};state.cart=[];saveCart();location.hash='#/confirmed';render();}
function infoPage(){return `<main class="info-page" id="main"><div class="container">${backLink('#/','BACK TO HOME')}<h1>THE DETAILS.</h1><div class="info-copy"><h2>ABOUT Z BADMINTON</h2><p>Equipment for every rally. Explore badminton rackets, court shoes, shuttles and accessories, and build a setup that fits the way you play.</p><h2>FIND YOUR SETUP</h2><p>Compare racket balance and flexibility, choose your preferred grip and stringing, and complete your kit with court footwear and everyday essentials.</p><h2>YOUR BAG</h2><p>Keep your selection together, adjust quantities and review the estimated total before your next session.</p></div></div></main>`;}
function notFound(){return `<main class="not-found" id="main"><div class="container"><h1>NOT ON<br>THIS COURT.</h1><a class="button button--dark" href="#/">BACK TO HOME ${icon('arrow')}</a></div></main>`;}
function cartDrawer(){if(!state.bagOpen)return '';
 return `<div class="overlay" data-action="close-cart" aria-hidden="true"></div><aside class="cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping bag"><div class="cart-drawer__header"><h2>YOUR BAG <span class="cart-drawer__count">${bagCountLabel()}</span></h2><button aria-label="Close bag" data-action="close-cart">${icon('close')}</button></div><div class="cart-drawer__items">${state.cart.length?state.cart.map(cartLine).join(''):'<div class="cart-drawer__empty">Nothing in your bag yet.</div>'}</div>${state.cart.length?`<div class="cart-drawer__footer"><div class="summary-row total"><span>SUBTOTAL</span><strong>${money(subtotal())}</strong></div><a class="button button--dark button--wide" href="#/bag">VIEW YOUR BAG ${icon('arrow')}</a><a class="drawer-checkout" href="#/checkout">CONTINUE TO DELIVERY</a></div>`:`<div class="cart-drawer__footer"><a class="button button--dark button--wide" href="#/shop">SHOP EQUIPMENT ${icon('arrow')}</a></div>`}</aside>`;
}
function render({scroll=true}={}){
 const route=(location.hash||'#/').replace(/^#/,'');const parts=route.split('/').filter(Boolean);
 const type=parts[0]||'home';state.page=type;
 let content;if(type==='home')content=homePage();else if(type==='shop')content=shopPage(parts[1]||'');else if(type==='product')content=detailPage(parts[1]);else if(type==='bag')content=bagPage();else if(type==='checkout')content=parts[1]==='summary'?checkoutSummaryPage():checkoutPage();else if(type==='review')content=checkoutSummaryPage();else if(type==='confirmed')content=confirmationPage();else if(type==='info')content=infoPage();else content=notFound();
 app.innerHTML=siteHeader()+content+footer()+cartDrawer();
 document.body.classList.toggle('no-scroll',state.bagOpen||state.menuOpen||state.filterOpen);
 if(scroll)window.scrollTo({top:0,behavior:'instant'});
}
function refresh(){const oldY=window.scrollY;render({scroll:false});window.scrollTo({top:oldY,behavior:'instant'});}
let toastTimer;
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('toast--visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('toast--visible'),3000);}
function resetDetail(){state.detailOption='';state.string='Unstrung';state.tension='24 lbs';state.detailQty=1;state.photoIndex=0;}
function addToCart(){const id=(location.hash.split('/')[2]||'');const p=productById(id);if(!p)return;
 const opt=state.detailOption||p.options.values[0],str=p.stringing?state.string:'Unstrung',ten=str==='Unstrung'?'':state.tension,unitPrice=p.price+(str!=='Unstrung'?9:0),key=cartKey(id,opt,str,ten);
 const found=state.cart.find(i=>i.key===key);if(found)found.qty+=state.detailQty;else state.cart.push({key,id,option:opt,string:str,tension:ten,qty:state.detailQty,unitPrice});
 saveCart();state.bagOpen=true;render({scroll:false});toast(`${p.name} added to bag`);
}
function updateCart(key,change){const item=state.cart.find(i=>i.key===key);if(!item)return;if(change===0)state.cart=state.cart.filter(i=>i.key!==key);else {item.qty+=change;if(item.qty<=0)state.cart=state.cart.filter(i=>i.key!==key);}saveCart();refresh();}
function navigate(){state.menuOpen=false;state.searchOpen=false;state.bagOpen=false;state.filterOpen=false;if(location.hash.startsWith('#/product'))resetDetail();render();}
window.addEventListener('hashchange',navigate);
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-action]');if(!button)return;
 const action=button.dataset.action;
 if(action==='toggle-menu'){state.menuOpen=!state.menuOpen;state.searchOpen=false;refresh();}
 if(action==='toggle-search'){state.searchOpen=!state.searchOpen;state.menuOpen=false;refresh();if(state.searchOpen)$('#site-search')?.focus();}
 if(action==='close-search'){state.searchOpen=false;refresh();}
 if(action==='open-cart'){state.bagOpen=true;refresh();}
 if(action==='close-cart'){state.bagOpen=false;refresh();}
 if(action==='open-filters'){state.filterOpen=true;refresh();}
 if(action==='close-filters'){state.filterOpen=false;refresh();}
 if(action==='reset-filters'){state.category='All equipment';state.brands=[];state.query='';location.hash='#/shop';refresh();}
 if(action==='increase-detail'){state.detailQty=Math.min(state.detailQty+1,10);refresh();}
 if(action==='decrease-detail'){state.detailQty=Math.max(state.detailQty-1,1);refresh();}
 if(action==='cart-plus')updateCart(button.dataset.key,+1);
 if(action==='cart-minus')updateCart(button.dataset.key,-1);
 if(action==='cart-remove')updateCart(button.dataset.key,0);
 if(action==='add-to-cart')addToCart();
 if(action==='place-order')placeOrder();
});
document.addEventListener('click',event=>{
 const option=event.target.closest('[data-option]');if(option){state.detailOption=option.dataset.option;refresh();}
});
document.addEventListener('change',event=>{
 const el=event.target;
 if(el.name==='category'){state.category=el.value;const path=state.category==='All equipment'?'#/shop':'#/shop/'+state.category.toLowerCase();history.replaceState(null,'',path);refresh();}
 if(el.name==='brand'){state.brands=el.checked?[...state.brands,el.value]:state.brands.filter(b=>b!==el.value);refresh();}
 if(el.id==='sort'){state.sort=el.value;refresh();}
 if(el.id==='string-choice'){state.string=el.value;refresh();}
 if(el.id==='tension-choice'){state.tension=el.value;refresh();}
});
document.addEventListener('input',event=>{
 const el=event.target;
 if(el.id==='site-search'){state.searchQuery=el.value;const pos=el.selectionStart;refresh();const input=$('#site-search');input?.focus();input?.setSelectionRange(pos,pos);}
 if(el.closest('#checkout-form')&&el.name&&el.name!=='shipping'){state.checkout[el.name]=el.value;}
});
document.addEventListener('submit',event=>{
 if(event.target.id!=='checkout-form')return;
 event.preventDefault();
 if(!event.target.reportValidity())return;
 location.hash='#/checkout/summary';render();
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){if(state.searchOpen||state.menuOpen||state.filterOpen||state.bagOpen){state.searchOpen=false;state.menuOpen=false;state.filterOpen=false;state.bagOpen=false;refresh();}}});
render();
