# Z Badminton - Design rationale

## Design intent

The project explores how a specialist sports storefront can combine a distinctive identity with straightforward product selection. The homepage establishes the atmosphere of the sport; catalogue, product, and checkout pages focus on the customer's immediate task.

The direction is **editorial sports e-commerce**: large typography and photographic compositions supported by restrained surfaces and familiar shopping controls. MAAP informed the campaign aesthetic, while On informed the emphasis on clear product presentation. These references describe the design direction, not a reproduction of either website.

## Visual identity

### Typography

**Barlow Condensed** gives campaign messages and page titles a compact, poster-like presence. Its heavy weights and tight headline spacing establish a sporting character.

**Archivo** handles navigation, prices, descriptions, and forms. The pairing separates expressive headlines from practical information while maintaining a consistent sans-serif system.

Responsive type sizing adapts headings to the available space. Supporting labels are deliberately quieter, although some small text remains an area for further readability refinement.

### Colour

| Colour | Value | Role |
| --- | --- | --- |
| Deep green | `#18221b` | Primary text, dark sections, and action buttons |
| Warm neutral | `#f2f1ec` | Main page surface |
| Olive | `#3b533e` | Supporting emphasis |
| Lime | `#d9fc6a` | Selected campaign accents and the hero action |
| Pale grey-green | `#d8ddd2` | Dividers and control boundaries |

Colour is used selectively so that photographs, product names, and actions remain the main points of attention. Square edges and thin rules reinforce the structured presentation.

### Photography and composition

The hero pairs tournament photography with a large headline and a direct shopping action. A dark overlay separates the text from the image. The supporting tagline was removed to keep this opening composition focused.

The "Find your edge" section introduces a contrasting image-and-text composition between product sections. Product imagery uses consistent containers and contained sizing, allowing different equipment silhouettes to sit within the same grid. Images that fail to load become neutral grey placeholders without collapsing their layout.

## Page structure

| Page or section | Design role |
| --- | --- |
| Hero | Establish the brand atmosphere and offer an immediate route to equipment |
| Featured products | Bring concrete product choices into the homepage early |
| Editorial feature | Reinforce the sporting identity through photography and a short message |
| Category grid | Offer clear routes into rackets, shoes, shuttles, and accessories |
| Catalogue | Support scanning, filtering, and comparison within a consistent grid |
| Product details | Bring imagery, price, specifications, and configuration together |
| Bag | Keep selected options, quantities, and costs visible and editable |
| Checkout and confirmation | Present delivery details, a receipt-style summary, and a clear completion state |

Decorative category counts and the hero edition label were removed because they contributed little to product discovery.

## Interaction principles

- **Hierarchy:** Scale, spacing, and contrast distinguish campaign messages, product information, and primary actions.
- **Proximity and similarity:** Related product information is grouped together; repeated card structures make the catalogue easier to scan.
- **Recognition:** Visible option selectors and bag summaries expose the chosen configuration without requiring customers to remember it.
- **Progressive disclosure:** String tension choices appear when a stringing option is selected. Product specifications sit within an expandable details section.
- **Feedback:** The bag count, drawer, quantity updates, and status notifications acknowledge shopping actions. Notifications sit at the top with mobile safe-area spacing.
- **User control:** Back links, editable quantities, removal controls, and filter reset actions provide ways to revise a decision.
- **Error prevention:** Required fields, email input, and Singapore postal-code validation support the delivery form; the unit field remains optional.

## Checkout composition

The journey is expressed through page titles and actions:

| Page | Primary action |
| --- | --- |
| Your bag | Continue to delivery |
| Delivery details | Review order |
| Order summary | Place order |
| Order confirmed | Continue shopping |

A separate progress indicator was removed to avoid repeating the page context. Back links share a consistent left-aligned position above the page content.

The final summary retains a receipt-like structure: labels on the left, amounts on the right, quiet separators, and a prominent total. The summary and primary action remain centred, while navigation stays aligned to the page margin. Confirmation preserves the same totals after the local bag is cleared.

## Responsive and accessible behaviour

Product grids reduce their column count on smaller screens. Navigation becomes a mobile menu, filters move into a panel, and form fields stack vertically. The bag drawer expands to the available mobile width.

The implementation includes semantic landmarks, labelled controls, visible focus styling, a skip link, polite status announcements, and reduced-motion support. Further review would cover small-text readability, drawer focus management, and keyboard use throughout the shopping journey.

## Evaluation scope

These decisions describe the implemented design and its intended effects. The project has not established conversion improvements or usability outcomes through customer research. Further evaluation could examine product-option clarity, mobile readability, and whether shoppers need item and delivery details repeated in the final receipt.
