# Z Badminton

**The court is yours.**

A responsive badminton storefront exploring the intersection of editorial sports design and everyday shopping. Bold typography, court photography, and a restrained green palette establish the identity, while familiar shopping patterns carry the experience from product discovery to checkout.

## Project overview

Z Badminton is a frontend portfolio project built with HTML, CSS, and vanilla JavaScript. It demonstrates a complete browser-based shopping journey across rackets, footwear, shuttles, and accessories, with Singapore dollar pricing and delivery details tailored to Singapore.

The interface presents a cohesive retail experience. Checkout completion is simulated locally; the project has no payment processing, order submission, or inventory backend.

## Experience highlights

| Experience | What it demonstrates |
| --- | --- |
| Editorial homepage | Full-width sports imagery, oversized campaign typography, featured products, and category discovery |
| Product catalogue | Category and brand filters, product search, and sorting by price or name |
| Product details | Equipment specifications, variant selection, and optional racket stringing with tension choices |
| Shopping bag | Editable quantities, selected-option summaries, a slide-out drawer, and locally saved items |
| Checkout | Delivery form validation, clear next-step actions, a receipt-style order summary, and confirmation |
| Responsive interface | Adaptive product grids, mobile navigation and filters, and notifications positioned at the top |

## Design direction

The visual language combines magazine-style composition with a structured retail interface. Barlow Condensed supplies the expressive headings; Archivo supports navigation, product information, and forms. Deep green, warm neutral surfaces, and selective lime accents connect the pages without overwhelming the equipment.

The checkout uses descriptive page titles and back links instead of a repeated progress indicator. Its receipt-style summary keeps costs and the final action together.

[Explore the design rationale](DESIGN_NOTES.md)

## Built with

- Semantic HTML and inline SVG icons
- CSS Grid, Flexbox, custom properties, and responsive typography
- Vanilla JavaScript with hash-based navigation
- Local storage for the shopping bag and in-memory checkout state
- Node.js smoke checks for catalogue and shopping behaviour

The implementation includes visible keyboard focus, a skip link, labelled controls, live status announcements, and reduced-motion styling. These are implemented accessibility features, rather than a claim of audited conformance.

## Credits

Visual references include MAAP and On. Product names, photographs, and other third-party material are documented in [Sources and credits](SOURCES.md). Z Badminton is an independent portfolio project and is not presented as an official store for the featured brands.
