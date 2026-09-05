---
name: Codeylon
description: A navy-and-gold pixel workshop for websites with character.
colors:
  navy: "#091a44"
  gold: "#bd9a41"
  paper: "#f7f5ee"
  cream: "#ece9df"
  muted: "#505869"
  line: "#c9cbd0"
  gold-ink: "#80611e"
  inverse-muted: "#c5c9d4"
  inverse-line: "#6a7388"
  olio-butter: "#f9e8bd"
  olio-terracotta: "#662e21"
  olio-menu: "#733323"
  forma-stone: "#ebe9e2"
  forma-charcoal: "#30372f"
  forma-muted: "#596051"
  forma-line: "#a4a79d"
  still-sage: "#e2e9dc"
  still-forest: "#263e2d"
typography:
  display:
    fontFamily: "Space Grotesk Variable, sans-serif"
    fontSize: "clamp(3.9rem, 6.05vw, 5.3rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Space Grotesk Variable, sans-serif"
    fontSize: "clamp(2.45rem, 4vw, 3.45rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Space Grotesk Variable, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Space Grotesk Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Space Grotesk Variable, sans-serif"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1.5
  action:
    fontFamily: "Space Grotesk Variable, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.35
  action-small:
    fontFamily: "Space Grotesk Variable, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.35
  pixel:
    fontFamily: "Pixelify Sans, monospace"
    fontWeight: 400
    letterSpacing: "-0.035em"
  concept-serif:
    fontFamily: "Georgia, serif"
    fontWeight: 400
rounded:
  square: "0px"
spacing:
  gap-small: "12px"
  gap-medium: "16px"
  gap-large: "24px"
  panel: "40px"
  section: "100px"
  section-tablet: "76px"
  section-phone: "64px"
  gutter: "56px"
  gutter-compact: "36px"
  gutter-phone: "20px"
  gutter-narrow: "18px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    typography: "{typography.action}"
    rounded: "{rounded.square}"
    padding: "14px 23px"
  button-small:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    typography: "{typography.action-small}"
    rounded: "{rounded.square}"
    padding: "10px 17px"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.square}"
    padding: "14px 23px"
  text-link:
    textColor: "{colors.navy}"
    rounded: "{rounded.square}"
  main-navigation:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
  concept-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "2px 7px"
  sample-panel:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.navy}"
    rounded: "{rounded.square}"
    padding: "40px"
  faq-disclosure:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.navy}"
    rounded: "{rounded.square}"
  process-marker:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    typography: "{typography.pixel}"
    rounded: "{rounded.square}"
    width: "52px"
    height: "46px"
---

# Design System: Codeylon

## Overview

**Creative North Star: "The Pixel Workshop"**

Codeylon's neo-brutalism is tactile and deliberately constructed: warm paper, navy rules, gold surfaces, square edges, and hard offset shadows. Pixel type and original pixel artwork give the work its immediately visible character. Generous section spacing and readable sans-serif copy keep the expressive details easy to follow.

The Codeylon frame retains its supplied identity while the three fictional concepts carry their own coherent palettes, typography, and photography. These are complete static design presentations within the site. Their illustrative names, content, and imagery are visibly identified as fictional.

This record describes the implementation in `src/app/globals.css`, the shared components, and the homepage and concept routes. `.impeccable/design.json` supplies component specimens and extensions. Its generated tonal ramps are panel aids, not additional colors used by the website.

**Key Characteristics:**

- Square frames, visible rules, and selective hard offset shadows.
- Space Grotesk text with short Pixelify Sans accents.
- Original pixel scenes alongside the protected supplied logo.
- Three distinct fictional worlds inside a consistent Codeylon frame.

## Colors

Deep navy gives the system its structure; muted gold adds warmth against paper and cream.

### Primary

- **Deep Navy** (`navy`): headings, primary ink, structural borders, service and footer surfaces, and dark contact buttons.
- **Muted Gold** (`gold`): primary action surfaces, the brand strip, numbered steps, decorative pixels, and contact-section backgrounds.
- **Dark Gold Ink** (`gold-ink`): small numbered accents, decision checkmarks, and the 404 numeral on light backgrounds.

### Secondary

These palettes belong to their respective concept presentations; the surrounding Codeylon interface retains the primary system.

| Concept | Palette | Implemented use |
| --- | --- | --- |
| Olio | Butter, terracotta, deep menu terracotta | Butter page, terracotta text, and an inverted three-course menu section. |
| Forma | Stone, charcoal, muted olive, stone rule | Stone portfolio, charcoal typography, fine dividers, and a dark approach section. |
| Still | Sage and forest | Sage collection page, forest text, and an inverted ritual section. |

### Neutral

- **Warm Paper** (`paper`): the main page, navigation, light button text, and project labels.
- **Cream Board** (`cream`): process and FAQ sections, presentation surrounds, and sample-content panels.
- **Slate Copy** (`muted`): body copy and secondary metadata on light surfaces.
- **Quiet Rule** (`line`): light-surface dividers and borders that separate content without competing with navy frames.
- **Inverse Copy** (`inverse-muted`) and **Inverse Rule** (`inverse-line`): supporting text and service dividers on navy.

**The Gold Legibility Rule.** Use navy text on gold surfaces. Small gold text belongs on navy; light-surface numbered accents use Dark Gold Ink.

## Typography

**Display Font:** Space Grotesk Variable (sans-serif fallback), with Pixelify Sans (monospace fallback) for short contrasting phrases.

**Body Font:** Space Grotesk Variable (sans-serif fallback).

**Character:** The main face is clear, compact, and geometric. The pixel face adds a visibly digital rhythm without taking over prose. Olio and Still use the installed Georgia serif for expressive concept headings; Forma retains restrained sans-serif typography.

### Hierarchy

- **Display:** the frontmatter display role defines the default heading scale. The desktop hero combines sans-serif and pixel lines; the final phone override uses `clamp(2.2rem, 10.6vw, 4.8rem)` and keeps its short pixel phrase together. Wide-screen hero text is 87px from 1500px.
- **Headline:** large, tightly spaced section headings, often with one pixel phrase. Concept-page titles have their own larger scale; they are not body-heading defaults.
- **Title:** compact service, process, and supporting headings. Local sizing establishes hierarchy within each section.
- **Body:** the frontmatter body role is the base. Supporting paragraphs commonly use 14–16px with 1.75–1.85 line height; lead copy is larger. Text columns are deliberately bounded, commonly around 440–660px.
- **Label:** compact outlined concept labels. Small uppercase tracking is reserved for illustrative preview metadata and short section captions.
- **Pixel:** short headline phrases, process numbers, the workshop caption, and decorative brand-strip words. It has no universal fixed font size.

**The Two Voices Rule.** Keep readable information in Space Grotesk and use Pixelify Sans for short emphasis. Georgia remains inside the Olio and Still presentations.

## Layout

The page container is centered with a maximum width of 1280px. Desktop gutters and section spacing use the frontmatter spacing tokens. Full-width color bands alternate with contained grids; section borders, scale changes, and changing column proportions establish rhythm.

| Viewport | Implemented adjustment |
| --- | --- |
| From 1500px | The hero gains height and compact concept previews become taller. |
| At most 1190px | Gutters use `gutter-compact`; navigation, artwork, and project surrounds become tighter. |
| At most 980px | Section space uses `section-tablet`; the header is 80px tall and concept details scale down. |
| At most 760px | Gutters use `gutter-phone`, section space uses `section-phone`, and the header is 76px tall. Major content grids stack; process steps remain in two columns. |
| At most 400px | Gutters use `gutter-narrow`; controls, artwork, and presentation padding reduce again. |

The desktop header is 91px tall and remains sticky at every screen width. Its mobile navigation disclosure expands in normal flow inside the header. Anchors account for the header with 110px scroll padding; focused elements have additional scroll margin.

The homepage's three concept cards form equal columns with 28px gaps on desktop and become a single column on phones. Service content moves from two columns to a list. The expanded project presentation uses a 1040px maximum inner width within a bordered cream surround. Its opening preview scales from 870px tall on desktop to 580px on phones and 460px on narrow phones, followed by content with natural height.

All three concept continuations are implemented. Olio has a table introduction, three-course menu, and closing wordmark; its menu stacks on phones. Forma has a courtyard project with a cropped photograph and material details, an approach section, and closing wordmark; the project and approach grids stack. Still has two product presentations using separate crops of the same photograph, a ritual section, and closing wordmark; the collection stacks on phones. These are sections within their respective concept routes, not additional live websites.

## Elevation & Depth

Most depth is structural: opaque offsets make a framed object look lifted from the paper. Broad sections stay flat. Slight rotations belong to decorative workshop pieces, including the browser illustration, phone, palette, and stamp. The enlarged concept preview has the system's deliberate soft-shadow exception.

### Shadow Vocabulary

- **Primary action:** `5px 5px 0 var(--navy)`; hover compresses to `2px 2px 0 var(--navy)` and active removes the shadow. The navy button uses paper for its offset.
- **Small action and step:** `3px 3px 0 var(--navy)`.
- **Concept card:** `4px 4px 0 var(--navy)`; hover lifts the card and increases its offset to 7px.
- **Workshop stamp:** `8px 8px 0 var(--navy)`.
- **Illustrated browser:** `10px 10px 0 var(--navy)`.
- **Expanded presentation:** `0 12px 30px #091a4414`, beneath the enlarged concept preview only.

**The Hard Edge Rule.** Use opaque offset shadows for Codeylon actions and workshop objects. Preserve the existing soft shadow only on the enlarged concept preview.

## Shapes

The interface uses square corners. Content rules are generally 1px; primary controls and frames use 2px; the illustrated browser and phone use 3px. Arrow icons have square caps and miter joins. Original pixel icons and landscapes use crisp SVG edges; dotted paper and square grid textures remain quiet behind the foreground content.

The supplied gold logo geometry is unchanged. Its display SVG crops empty viewBox space; the header places it inside a navy rectangle. Original repeated taper motifs, stars, and pixel scenes support that identity without replacing the supplied mark. Concept photography is self-hosted WebP with deliberate object-fit crops and descriptive alternatives in expanded presentations.

## Components

### Buttons and links

Actions are tactile, square, and explicit. The gold primary button uses the frontmatter padding, a 2px navy border, a 56px minimum height, and the primary offset shadow. The compact variant starts at 45px minimum height. Navy buttons sit on gold contact surfaces with paper text and a paper offset.

Hover moves a button down and right by 3px; active moves it 5px and compresses the shadow completely. Transitions use 140ms in two steps. Text links use a visible bottom rule, a 44px minimum height, and an arrow that moves slightly on hover. Real links, buttons, and FAQ summaries receive a 3px current-color focus outline with a 6px offset.

Dedicated contact CTAs open the verified Codeylon Instagram profile in a new tab, with accessible new-tab wording. The header's contact shortcut and some internal invitations scroll to the contact section. There are no form fields or checkout controls in this implementation.

### Navigation

The shared header keeps the brand at the left, concise text links in the middle, and the contact shortcut at the right. Links underline on hover. Below the mobile breakpoint, an outlined toggle controls an in-flow list with dividing rules. The disclosure closes on navigation, outside pointer interaction, or Escape; Escape restores focus to the toggle. The skip link appears on keyboard focus.

### Labels, cards, and disclosures

Concept labels are small, square outlined tags. The concept card combines a paper browser bar, a colored static presentation, a visible fiction label, descriptive metadata, and real links to the concept route. Card hover lifts the frame slightly; its photograph scales to 1.025 over 300ms. Sample-content panels use cream, generous padding, a navy top rule, and simple divided lists.

FAQs use native `details` and `summary`, with one open answer at a time. A CSS plus becomes a minus when open. Summary hover uses dark warm ink; answer text remains Slate Copy. Numbered process markers are small gold rectangles with pixel numerals and a hard navy offset; they are not controls.

### Concept presentations

The previews and their designed continuations use real HTML text and original imagery. The name, introductory disclosure, and “Concept project” labeling establish their status. Olio's menu, Forma's project and approach, and Still's collection and ritual are designed reading sections. The presentations contain no live-demo navigation, booking, shopping, or enquiry controls. Real actions belong to the surrounding Codeylon navigation, next-project link, and contact section.

### Signature artwork and motion

The hero workshop scene has a single accessible image description. Its browser, phone, palette, pixel landscape, and cursor are decorative; internal illustrative controls cannot be activated. The cursor enters once over 700ms in five steps. There is no looping artwork animation. Reduced-motion preferences disable animation and transitions and restore automatic scrolling. The repeating gold strip and pixel section edge are decorative and hidden from assistive technology.

## Do's and Don'ts

### Do:

- Do preserve navy, gold, square frames, and immediately visible pixel artwork as Codeylon's identity.
- Do keep the supplied SVG paths and fill unchanged when cropping or placing the logo.
- Do use readable sans-serif copy, explicit focus treatment, and native disclosure semantics.
- Do retain the separate Olio, Forma, and Still palettes inside their concept presentations.
- Do keep fiction labels visible and distinguish presentation content from real navigation and contact actions.

### Don't:

- Don't set paragraphs or long interface instructions in the pixel face.
- Don't place small muted-gold text on light surfaces; use the established dark ink treatment.
- Don't round the Codeylon frames or replace their hard structural offsets with ambient shadows.
- Don't turn decorative artwork or static concept labels into controls with no working destination.
- Don't present generated concept imagery as evidence of clients, commissioned work, operating businesses, or live demos.
