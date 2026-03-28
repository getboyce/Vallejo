# Vallejo Design System

**1.1.2** | Last updated: March 28, 2026

---

> **Source of Truth:** The [Copart Design Vault](https://github.com/getboyce/Copart-Design-Vault) defines *why* we design the way we do — philosophy, principles, anti-patterns, and language. This spec defines *how* — tokens, components, patterns, and execution rules. When they conflict, the Vault wins.
>
> Every decision in this system passes the Vault's design filter: **Does this build trust? Does this respect expertise? Does this read at multiple depths?** If the answer to any is no, the design is wrong. See [Vault > north-star.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/language/north-star.md).

---

## Table of Contents

1. [Design Principles](#1-design-principles)
2. [UX Writing](#2-ux-writing)
3. [Foundations — Color](#3-foundations--color)
4. [Foundations — Typography](#4-foundations--typography)
5. [Foundations — Layout Grid](#5-foundations--layout-grid)
6. [Foundations — Spacing](#6-foundations--spacing)
7. [Components](#7-components)
8. [Patterns](#8-patterns)
9. [Animation & Motion](#9-animation--motion)
10. [Mobile Platform](#10-mobile-platform)
11. [Design Tokens](#11-design-tokens)
12. [Documentation & Guidelines](#12-documentation--guidelines)

---

# 1. Design Principles

Three principles guide every decision in the Copart design system. They come from the [Copart Design Vault](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/language/aesthetic-principles.md), which defines the full rationale. Vallejo executes them at the component level.

## Principle 1: Precision

*The warmth of competence.*

Obsessive attention to alignment, spacing, and typographic discipline. Every pixel is intentional. When members stake five figures on vehicles they may never have touched, the interface's precision is itself a trust signal. Every misaligned element, every arbitrary spacing value, every inconsistent label whispers *we cut corners.*

**Execution in Vallejo:**
- 4px baseline grid. 8px spacing scale. No arbitrary values — every measurement comes from the token system.
- Numbers are first-class citizens. JetBrains Mono for numbers being *compared* (stacked in lists, cards, ladders); Inter for numbers being *read* (singular, dominant, display-scale impact). Mono never bleeds into labels or prose.
- Tabular alignment always — JetBrains Mono for compare contexts, Inter with `font-feature-settings: "tnum"` for prose-adjacent alignment. Columns must align regardless of typeface.
- Verb-first button labels. "Place bid" not "Submit." Specific verbs, not generic actions.
- Consistent terminology from the [glossary](#24-terminology-glossary) everywhere. If it's a "lot" on the search page, it's a "lot" on the detail page.

See [Vault > aesthetic-principles.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/language/aesthetic-principles.md) for the full case.

## Principle 2: Institutional Confidence

*The quiet authority of a platform that has moved millions of vehicles.*

We do not hedge, over-explain, or decorate. Copart knows what it is. The interface reflects that track record through restraint — one primary action per view, no exclamation marks, no "Oops," no hedging language ("should," "might," "try"). Confidence is expressed through what we choose *not* to show as much as what we show.

**Execution in Vallejo:**
- One Primary (blue) button per view. The primary button represents the single most important action. Everything else is Secondary or Tertiary.
- No humor, sarcasm, or playful language in error states. Members may be frustrated or anxious — meet them with calm directness.
- Error format: "[what happened] — [how to fix]." Never blame the member. "We couldn't process your payment — update your payment method to continue."
- No empty platitudes. "Your bid has been placed" — not "Awesome! You just bid!"
- Blue earns authority through restraint. If everything on a surface is blue, nothing has emphasis. This is the "blue flood" anti-pattern.

See [Vault > aesthetic-principles.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/language/aesthetic-principles.md) for the full case.

## Principle 3: Vitality

*Auctions are alive.*

Bidding is competitive, time-bound, and consequential. The design channels that energy without letting it become chaos. Motion confirms action. Status is always visible. Urgency is real, not manufactured. The interface has a pulse — live auction indicators, counter ticks, bid price updates — but that pulse serves information, not decoration.

**Execution in Vallejo:**
- Live auction indicators with pulsing dot + "Live Now" label. Status is always visible, always current.
- Orange 600 for genuine urgency only — registration CTAs, countdown timers, urgency badges. Never decorative, never for primary actions.
- Motion registers match context: transactional interactions (150–250ms, Stripe-like), live auction events (100–350ms, fluid), celebration moments (500ms–1s, expressive). See [Section 9](#9-animation--motion).
- Bid price pulse animation when competing bids land. Counter tick when stats update. The interface feels alive because the data is alive.
- `prefers-reduced-motion` is always respected — vitality never comes at the cost of accessibility.

See [Vault > aesthetic-principles.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/language/aesthetic-principles.md) for the full case.

---

**Baseline standard:** WCAG 2.1 AA compliance is not a principle — it is a non-negotiable engineering requirement. Every component in this system meets or exceeds it. Color is never the sole state indicator. Minimum touch target: 44px. All interactive elements have visible focus states. All content reflows at 200% zoom. See the [accessibility checklist](#123-implementation-guide-for-developers) for the full per-component requirements.

# 2. UX Writing

Words are interface. Every label, message, and instruction shapes how members understand and trust Copart. This is the one section in Vallejo that carries both the "why" and the "how" — because language cannot be separated from its rationale. The same Precision we apply to spacing and alignment applies to every word. For all other design philosophy, see the [Copart Design Vault](https://github.com/getboyce/Copart-Design-Vault).

## 2.1 Voice & Tone Charter

### Brand Voice

Copart's voice is consistent across every touchpoint. Four attributes define it:

| Attribute | Definition | Example |
|-----------|-----------|---------|
| **Professional** | We respect the member's time and money. No fluff, no filler. | "Your bid of $4,500 has been placed." — not "Awesome! You just bid!" |
| **Straightforward** | Say exactly what's happening. No jargon unless the audience expects it. | "This lot has a clean title." — not "This vehicle's documentation status is clear." |
| **Confident** | We know our platform. Statements, not hedging. | "Bidding closes at 2:30 PM EST." — not "Bidding should close around 2:30 PM EST." |
| **Helpful** | Every message moves the member toward their goal. | "Enter your VIN to check eligibility." — not "VIN required." |

**Triad alignment:** Professional and Straightforward execute **Precision** — obsessive clarity in every word, no ambiguity, no filler. Confident executes **Institutional Confidence** — the voice of a platform that has moved millions of vehicles, stated as fact not hedging. Helpful executes **Vitality** — every message propels the member toward their next action. See [Vault > aesthetic-principles.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/language/aesthetic-principles.md).

### Tone Spectrum

Voice is constant. Tone adapts to context:

| Context | Tone | Example |
|---------|------|---------|
| **Informational** | Neutral, factual | "This lot is located in Dallas, TX." |
| **Encouraging** | Warm, supportive | "You're all set — your watchlist will notify you when bidding opens." |
| **Urgent** | Direct, clear | "Bidding closes in 2 minutes. Place your bid now." |
| **Error** | Calm, solution-focused | "Payment failed — update your payment method to continue." |

**Rule:** Never use humor, sarcasm, or playful language in error states. Members may be frustrated or anxious — meet them with clarity, not cleverness.

## 2.2 Capitalization & Punctuation

### Sentence Case Everywhere

All UI text uses **sentence case** — capitalize the first word and proper nouns only.

| Element | Correct | Incorrect |
|---------|---------|-----------|
| Page headings | "My saved vehicles" | "My Saved Vehicles" |
| Button labels | "Place bid" | "Place Bid" |
| Nav items | "Find vehicles" | "Find Vehicles" |
| Tab labels | "Bid history" | "Bid History" |
| Table headers | "Sale date" | "Sale Date" |
| Menu items | "Account settings" | "Account Settings" |

**Exceptions — always capitalize:**
- Proper nouns: Copart, CrashedToys, Copart Dealer Services (CDS), Copart Wholesale Auction, Copart Alliance Gateway
- Acronyms: VIN, CDV, NMVTIS
- Product names when used as proper nouns

### Punctuation Rules

| Rule | Example |
|------|---------|
| **No periods** on buttons, labels, table headers, nav items, badges | "Place bid" not "Place bid." |
| **Periods** on full sentences in descriptions, helper text, tooltips, body copy | "Enter the 17-character VIN found on the vehicle dashboard." |
| **Serial (Oxford) comma** required in all lists | "Year, make, and model" — not "Year, make and model" |
| **Em dash (—)** for interruption or to join clauses | "Payment failed — update your payment method." |
| **En dash (–)** for ranges | "$1,200–$3,500" or "Mon–Fri" |
| **No exclamation marks** in UI copy | "Bid placed successfully" — not "Bid placed!" |
| **Question marks** only in genuine questions | "Are you sure you want to remove this lot?" |

## 2.3 Grammar & Tense Conventions

### Active Voice Always

| Correct (active) | Incorrect (passive) |
|-------------------|---------------------|
| "We saved your bid." | "Your bid has been saved." |
| "Enter your lot number." | "The lot number should be entered." |
| "Copart charges a buyer fee." | "A buyer fee is charged." |

### Tense Rules

| Context | Tense | Example |
|---------|-------|---------|
| Current state | Present | "3 items in your watchlist" |
| Completed action | Past | "Bid placed successfully" |
| Instruction | Imperative | "Enter your VIN" |
| Future event | Future | "Bidding opens tomorrow at 10:00 AM ET" |

### Person & Pronouns

- **Second person** ("you/your") for addressing the member — never "the user" in UI copy
- **First person plural** ("we") when Copart is the subject — "We'll notify you when bidding opens"
- **Contractions allowed:** don't, won't, can't, it's, you'll, we'll, you're, we're, that's
- **Contractions to avoid:** ain't, y'all, would've, could've (too informal or ambiguous)

## 2.4 Terminology Glossary

Use these terms consistently. Never alternate between synonyms within the same flow or page.

| Preferred Term | Never Use | Notes |
|---------------|-----------|-------|
| **Lot** | Listing, item, product, vehicle (when referring to the auction entity) | "Lot" is Copart's canonical term for an auctioned vehicle |
| **Vehicle** | Car, automobile, unit | Use when referring to the physical object, not the auction entity |
| **Bid** | Offer, price, amount | "Bid" for the action and the value |
| **Place bid** | Submit bid, make bid, enter bid | Canonical CTA verb |
| **Watchlist** | Favorites, saved items, bookmarks | Single canonical term |
| **Member** | User, customer, client, account holder | "Member" for all Copart users |
| **Sign in** | Log in, login, sign on | Two words as verb ("Sign in"), one word as adjective ("sign-in page") |
| **Sign out** | Log out, logout, sign off | Same pattern as "sign in" |
| **Register** | Sign up, create account, join | "Register" is the canonical onboarding term |
| **VIN** | Vehicle identification number (in UI) | Always abbreviation in interface; spell out only in help docs |
| **Clean title** | Non-salvage, clear title | "Clean title" is the industry-standard term Copart uses |
| **Salvage** | Damaged, wrecked, total loss | "Salvage" is the legal/industry classification |
| **Pre-bid** | Preliminary bid, early bid, advance bid | Canonical short form everywhere |
| **Live auction** | Real-time auction, active auction | "Live" is the canonical modifier |
| **Buy it now** | Instant purchase, direct buy | Phrase used as-is; capitalize only first word: "Buy it now" |
| **Buyer fee** | Service fee, transaction fee, premium | "Buyer fee" is the Copart-specific term |
| **Sale date** | Auction date, event date | "Sale date" is canonical |
| **Location** | Yard (internal only), facility, branch | "Location" is the public-facing term for Copart sites. "Yard" is internal only — never use in member-facing UI. |
| **Item number** | Run number, lane number, sequence | "Item number" for auction ordering |
| **Title type** | Title status, title category | "Title type" as the field label |
| **Damage type** | Damage category, loss type | "Damage type" as the field label |
| **Odometer** | Mileage, miles | "Odometer" as the field label; use "miles" in conversational copy |
| **Highlights** | Features, specs, details | "Highlights" for the vehicle summary section |
| **Condition** | Quality, grade | "Condition" as the vehicle state descriptor |
| **Seller** | Consigner, provider, vendor | "Seller" for the entity listing the vehicle |
| **Storage fees** | Yard fees, holding fees | "Storage fees" is canonical |
| **Copart Alliance Gateway** | Lounge, Copart Lounge, waiting area | "Copart Alliance Gateway" is the official name for on-site member facilities (formerly Copart Lounges) |
| **Wholesale** / **Copart Wholesale** | Select, Copart Select, Wholecar | "Wholesale" or "Copart Wholesale" is the current brand. "Select" / "Copart Select" / "Wholecar" are deprecated. Use "Copart Wholesale Auction" for the full product name. |

**Rule:** If a term is not in this glossary, choose the simplest, most common word and use it consistently. Add new terms to the glossary when they appear in more than one flow.

## 2.5 Copy Length Guidelines

Every UI element has a character budget. These limits maintain scannability and prevent layout breakage.

| Element | Word Count | Max Characters | Example |
|---------|------------|----------------|---------|
| Button label | 1–3 words | 20 chars | "Place bid" |
| Field label | 1–4 words | 30 chars | "Lot number" |
| Placeholder text | 2–5 words | 30 chars | "e.g., 12345678" |
| Helper text | 1 sentence | 80 chars | "8-digit number found on the vehicle page." |
| Error message | 1–2 sentences | 120 chars | "Enter a valid lot number (8 digits)." |
| Toast message | 1 sentence | 60 chars | "Lot added to watchlist." |
| Empty state heading | 3–8 words | 40 chars | "No saved lots yet" |
| Empty state body | 1–2 sentences | 120 chars | "Search for vehicles and save them here." |
| Modal title | 3–8 words | 50 chars | "Confirm your bid" |
| Table header | 1–3 words | 20 chars | "Sale date" |
| Badge / tag | 1–2 words | 15 chars | "Clean title" |
| Tooltip | 1–2 sentences | 100 chars | "Your maximum bid. Copart bids on your behalf up to this amount." |
| Breadcrumb segment | 1–3 words | 25 chars | "Search results" |
| Nav item | 1–2 words | 15 chars | "My bids" |

**Rule:** If copy exceeds the character budget, rewrite — don't just truncate. Truncation is a last resort for dynamic content only.

## 2.6 Component Microcopy Patterns

Specific copy patterns for every component type. These are rules, not suggestions.

### Buttons

- **Start with a verb.** The label describes the action: "Place bid", "Save to watchlist", "Remove lot"
- **Be specific.** "Place bid" beats "Submit". "Remove from watchlist" beats "Delete"
- **No numerical values in buttons.** Never put pricing, amounts, or counts inside button labels. Display pricing, bid amounts, and totals elsewhere in the UI (summary text, confirmation area, adjacent labels). Buttons are for actions only. Exception: only include a value if explicitly instructed to.
- **Never use:** "Click here", "Submit", "OK", "Yes", "No" (except in confirmation dialogs where "Cancel" is the alternative)
- **Destructive buttons:** State what will be destroyed — "Remove from watchlist", not "Delete"
- **Loading state:** Change label to present participle — "Placing bid…", "Saving…"

### Text Fields

- **Labels** describe what to enter, not instructions: "Lot number" — not "Enter lot number here"
- **Placeholders** show example format only: "e.g., 12345678" — never repeat the label
- **Helper text** adds context the label can't: "8-digit number found on the vehicle page."
- **Error messages** say what went wrong AND how to fix it: "Enter a valid lot number (8 digits)." — not "Invalid input"
- **Success messages** confirm the value is accepted: "VIN verified." (optional — use only when verification is non-obvious)

### Alerts & Banners

- **Lead with what happened, then what to do.**
- Success: "Bid placed — you'll receive a confirmation email."
- Warning: "Your session expires in 5 minutes — save your work."
- Error: "Payment failed — update your payment method to continue."
- Info: "Auction for this lot starts tomorrow at 10:00 AM ET."
- **Never use:** "Oops", "Uh oh", "Whoops", "Something went wrong" (be specific)
- **Never blame the member:** "We couldn't process your payment" — not "You entered an invalid card"

### Toasts & Snackbars

- Confirmation of the action just taken. Past tense, one sentence.
- "Lot added to watchlist."
- "Bid placed successfully."
- "Settings saved."
- Include undo action where reversible: "Lot removed from watchlist. **Undo**"
- Auto-dismiss after 5 seconds. No user action needed except undo.

### Modals & Dialogs

- **Title** = what this modal is about: "Confirm your bid", "Remove lot from watchlist"
- **Body** = what the member needs to know to make a decision. Keep it to 1–3 sentences.
- **Primary button** = the specific action: "Place bid", "Confirm purchase" — never "OK" or "Yes". Do not include pricing in the button — display amounts in the modal body or a summary line above the button.
- **Secondary button** = "Cancel" — not "No", "Go back", "Dismiss"
- **Destructive confirmation:** Repeat the consequence: "This will permanently remove the lot from your watchlist."

### Empty States

- **Heading:** Describe what's missing — "No saved lots yet", "No bid history"
- **Body:** Explain how to fill it — "Search for vehicles and tap the heart icon to save them here."
- **CTA:** Action to resolve — "Browse vehicles"
- **Never say:** "No data", "Nothing to show", "Empty" (always provide context and a next step)

### Tables

- **Headers:** Short noun or noun phrase — "Sale date", "Current bid", "Damage type"
- **No verbs** in table headers
- **Null values:** Use em dash "—" — never "N/A", "null", "none", or leave blank
- **Truncation:** Ellipsis (…) after last full word. Include tooltip with full value.
- **Monospace** for VIN, lot numbers, bid amounts, timestamps

### Badges & Tags

- **1–2 words maximum**
- **Status badges:** Past participle or adjective — "Sold", "Awarded", "Active", "Upcoming", "Ended"
- **Category tags:** Nouns — "Clean title", "Salvage", "Flood damage"
- **Count badges:** Numerals only — "3", "12", "99+"

**Badge Shape Rules:**
- **Round-rect** (`radius-lg`): Status badges inside tables — "Active", "Sold", "On Hold" in table cells. Padding 4px 12px. The rectangular shape with rounded corners fits cleanly inline with data rows.
- **Round-rect** (`radius-md` or `radius-lg`): Standalone badges on cards, detail pages, and anywhere outside a table. The rectangular shape reads better with surrounding content when the badge has more visual room.
- **Circle** (`radius-full`): Status dots / indicators with no text — color-only markers next to a label. The circle's fill color must match its accompanying text color.
- **Don't mix shapes** for the same badge type in different contexts. If "Active" is a pill in a table, it should not be a round-rect on a card — choose one shape per badge label.

### Navigation

- **Top-level items:** 1–2 word nouns — "Vehicles", "My bids", "Dashboard"
- **Never use verbs** in primary navigation items
- **Breadcrumbs** match the page title exactly — no abbreviations or rewording
- **Tab labels:** Short nouns or noun phrases — "Details", "Bid history", "Similar lots"

## 2.7 Inclusive Language

### Gender & Identity
- **Gender-neutral** by default: "they/them" for unknown members
- "Member" — not "he or she", "his/her"
- "Salesperson" — not "salesman/saleswoman"

### Jargon & Accessibility
- If a term needs explanation for a new member, add a tooltip or inline definition
- **Reading level:** Aim for grade 8 (Flesch-Kincaid) for all member-facing copy
- **Accessible descriptions:** Alt text on all images, aria-labels match visible text
- No idioms, colloquialisms, or cultural references — Copart serves a global audience
- "Accessible parking" — not "handicapped parking"
- Person-first language where relevant: "members who use screen readers" — not "blind members"

## 2.8 Dynamic & Adaptive Copy

### Numbers & Formats
- **Spell out 1–9** in body copy ("three vehicles") — numerals for 10+ ("42 results")
- **Always use numerals** for prices, bids, lot numbers, counts in UI elements, data tables
- **Currency:** "$1,200" format — no cents unless partial dollars ("$0.50"). No cents on amounts over $100 — "$47,250" not "$47,250.00"
- **Thousands separator:** Always use commas — "$12,500" not "$12500"

### Date & Time Formatting

| Format | Example | Usage |
|--------|---------|-------|
| Abbreviated date | Feb 22, 2026 | Default for all dates in UI |
| Relative date | Today, Yesterday, 3 days ago | Use within 7 days; absolute date after that |
| Time | 2:30 PM EST | 12-hour clock, full timezone abbreviation (EST, CST, PST) |
| Date range | Feb 22–28, 2026 | En dash, no spaces around dash |

### Pluralization

Always handle three states: zero, one, and many.

| Count | Copy |
|-------|------|
| 0 | "No results" or "No saved lots" |
| 1 | "1 result" or "1 saved lot" |
| 2+ | "24 results" or "8 saved lots" |

Never show "0 results" — use the zero-state phrasing instead.

### Truncation Rules

- Ellipsis (…) after the last **full** word — never mid-word
- Minimum 3 visible words before truncation
- Always provide the full text via tooltip on hover
- Vehicle titles: truncate after year + make + model if space is limited ("2024 Toyota Cam…" → show full in tooltip)

### Number Formatting

| Type | Format | Example |
|------|--------|---------|
| Currency | $X,XXX | $4,500 |
| Large numbers | Comma-separated | 1,234,567 |
| Percentages | No decimal unless needed | "85%" or "99.5%" |
| Lot numbers | Monospace, no separators | `78901234` |
| VIN | Monospace, uppercase | `1HGCM82633A004352` |

## 2.9 Do / Don't Library

Real examples of correct and incorrect copy across common patterns.

---

### Button Labels

**Do:** "Place bid" / "Save to watchlist" / "Remove lot"
**Don't:** "Submit" / "Click here" / "OK" / "Yes" / "Process"

**Why:** Specific verbs tell the member exactly what will happen. Generic labels force them to guess.

---

### Error Messages

**Do:** "Enter a valid email address (e.g., name@example.com)."
**Don't:** "Invalid input." / "Error." / "Please try again."

**Why:** Good error messages name the problem and show the fix. Bad ones make the member figure it out alone.

---

### Empty States

**Do:** Heading: "No saved lots yet" / Body: "Search for vehicles and tap the heart icon to save them here." / CTA: "Browse vehicles"
**Don't:** "No data." / "Nothing to show." / "Your list is empty."

**Why:** Empty states are onboarding opportunities. Guide the member toward the next action.

---

### Confirmation Messages

**Do:** "Your bid of $4,500 on Lot 78901234 has been placed."
**Don't:** "Success!" / "Done!" / "Action completed."

**Why:** Specific confirmations prove the system did what the member intended. Vague ones create doubt.

---

### Field Labels

**Do:** "Lot number" / "Email address" / "Zip code"
**Don't:** "Enter your lot number here" / "Type email" / "Input zip"

**Why:** Labels name the field. Instructions belong in placeholder or helper text, not the label.

---

### Tone in Errors

**Do:** "We couldn't process your payment. Update your payment method to try again."
**Don't:** "Oops! Something went wrong. Please try again later!"

**Why:** Members dealing with payment failures are already frustrated. Be calm and direct — never cute.

---

### Placeholder Text

**Do:** "e.g., 12345678" / "Search by make, model, or VIN"
**Don't:** "Enter lot number" / "Type here" / "Lot number"

**Why:** Placeholders demonstrate format — they don't replace labels. Repeating the label wastes the placeholder.

---

### Modal Actions

**Do:** Primary: "Place bid" / Secondary: "Cancel" (display bid amount in the modal body or summary line, not in the button)
**Don't:** Primary: "OK" / "Yes" / Secondary: "No" / "Go back"

**Why:** The member should understand what each button does without reading the modal body.

---

### Toast Messages

**Do:** "Lot added to watchlist." / "Settings saved."
**Don't:** "Success! Item has been added to your favorites list!" / "Your changes have been saved successfully."

**Why:** Toasts are glanceable confirmations. Short, past tense, no exclamation marks.

---

### Navigation Labels

**Do:** "Vehicles" / "My bids" / "Dashboard"
**Don't:** "Find vehicles" / "View my bids" / "Go to dashboard"

**Why:** Navigation items are nouns (destinations), not verbs (actions). Members click to go somewhere, not to do something.

---

### Status Communication

**Do:** "Bidding closes Feb 22 at 2:30 PM EST" / "Lot sold — final bid: $12,400"
**Don't:** "Auction ending soon!" / "This item has been sold."

**Why:** Specific status copy includes the data the member needs. Vague status creates anxiety and follow-up questions.

---

# 3. Foundations — Color

## 3.1 Primary Palette

Built around the brand color `#2662D9`, expanded into a functional 6-color primary scale.

### Blue 600 — Brand Primary
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#2662D9`                      |
| **RGB**     | 38, 98, 217                    |
| **HSL**     | 220°, 70%, 50%                 |
| **WCAG on White** | 4.56:1 — **AA (large text)** |
| **Usage**   | Primary CTAs, active links, key interactive elements, selected states |

### Blue 800 — Brand Dark
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#063598`                      |
| **RGB**     | 6, 53, 152                     |
| **HSL**     | 221°, 92%, 31%                 |
| **WCAG on White** | 8.45:1 — **AAA**         |
| **Usage**   | Hover states on primary, high-emphasis headings, focus rings |

### Blue 900 — Brand Darkest
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#0F2757`                      |
| **RGB**     | 15, 39, 87                     |
| **HSL**     | 220°, 71%, 20%                 |
| **WCAG on White** | 13.52:1 — **AAA**        |
| **Usage**   | Page titles, critical text on light backgrounds, info alert text |

### Blue 400 — Brand Mid
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#83B3E2`                      |
| **RGB**     | 131, 179, 226                  |
| **HSL**     | 210°, 62%, 70%                 |
| **WCAG on White** | 2.43:1 (decorative only)  |
| **Usage**   | Decorative accent fills, icon circle backgrounds, progress bar fills, marketing CTA bands. **Use for:** non-interactive visual emphasis only — never as a text color or interactive state. |

### Blue 300 — Brand Soft
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#B9D6F4`                      |
| **RGB**     | 185, 214, 244                  |
| **HSL**     | 210°, 72%, 84%                 |
| **WCAG on Black** | 12.33:1 — **AAA**        |
| **Usage**   | Marketing/landing page section backgrounds, branded content bands, soft info fills. **Use for:** large surface areas that need a branded feel without competing with Blue 600 interactive elements. **Don't use for:** component backgrounds in product UI — use Blue 100 or 200 instead. |

### Blue 200 — Brand Light
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#E1ECF9`                      |
| **RGB**     | 225, 236, 249                  |
| **HSL**     | 214°, 69%, 93%                 |
| **WCAG on Black** | 17.42:1 — **AAA**        |
| **Usage**   | Selected/active row backgrounds (tables, lists), pressed button states (Secondary, Tertiary), active tab fills. **Use for:** interactive feedback — anywhere a member's action needs a visible "you selected this" state. **Don't use for:** static decorative backgrounds — use Blue 100 for hover fills and Blue 300 for marketing bands. |

### Blue 100 — Brand Lightest
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#EEF3FB`                      |
| **RGB**     | 238, 243, 251                  |
| **HSL**     | 216°, 64%, 96%                 |
| **WCAG on Black** | 18.45:1 — **AAA**        |
| **Usage**   | Hover backgrounds on secondary elements, subtle tinted surfaces |

### Blue 50 — Brand Tint
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#F6F9FD`                      |
| **RGB**     | 246, 249, 253                  |
| **HSL**     | 214°, 64%, 98%                 |
| **WCAG on Black** | 19.42:1 — **AAA**        |
| **Usage**   | Page backgrounds, card surfaces, content area fill |

---

## 3.2 Secondary Accent — Orange

A warm counterweight to the blue primary. Orange provides urgency cues, promotional emphasis, and visual variety on data-dense pages without triggering the semantic connotations of success (green), warning (amber), or error (rose). It also serves as the registration/onboarding CTA, replacing the former standalone CTA Yellow.

**Why orange:** Urgency without danger — complementary to blue, channels Vitality without the semantic weight of error/rose. Orange breaks the "blue flood" on complex pages. See [Vault > aesthetic-principles.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/language/aesthetic-principles.md).

### Orange 600 — Accent Primary
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#D86518`                      |
| **RGB**     | 216, 101, 24                   |
| **HSL**     | 24°, 80%, 47%                  |
| **WCAG on White** | 3.62:1 — **AA (large text)** |
| **Usage**   | Secondary CTAs (registration, onboarding), urgency badges, featured indicators, data visualization accent |

### Orange 800 — Accent Dark
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#933C06`                      |
| **RGB**     | 147, 60, 6                     |
| **HSL**     | 23°, 92%, 30%                  |
| **WCAG on White** | 7.27:1 — **AAA**         |
| **Usage**   | Hover/pressed states on accent elements, high-emphasis text on orange surfaces |

### Orange 900 — Accent Darkest
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#50250B`                      |
| **RGB**     | 80, 37, 11                     |
| **HSL**     | 22°, 75%, 18%                  |
| **WCAG on White** | 13.04:1 — **AAA**        |
| **Usage**   | Text on light orange backgrounds, headings in warm/promotional contexts |

### Orange 200 — Accent Light
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#F8E2D3`                      |
| **RGB**     | 248, 226, 211                  |
| **HSL**     | 25°, 74%, 90%                  |
| **WCAG on Black** | 16.05:1 — **AAA**        |
| **Usage**   | Badge fills, "Featured" backgrounds, selected states in warm contexts |

### Orange 100 — Accent Lightest
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#FAEEE5`                      |
| **RGB**     | 250, 238, 229                  |
| **HSL**     | 26°, 70%, 94%                  |
| **WCAG on Black** | 17.52:1 — **AAA**        |
| **Usage**   | Hover fills on accent elements, subtle warm highlights |

### Orange 50 — Accent Tint
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#FDF7F2`                      |
| **RGB**     | 253, 247, 242                  |
| **HSL**     | 27°, 68%, 97%                  |
| **WCAG on Black** | 18.82:1 — **AAA**        |
| **Usage**   | Promotional surface backgrounds, warm page tints, marketing sections |

---

## 3.3 Neutral Palette

### Neutral 900 — Ink
| **Hex** | **RGB** | **HSL** | **WCAG on White** | **Usage** |
|---------|---------|---------|-------------------|-----------|
| `#2F333C` | 47, 51, 60 | 222°, 12%, 21% | 13.01:1 — **AAA** | Headlines, primary text, icons |

### Neutral 700 — Body
| **Hex** | **RGB** | **HSL** | **WCAG on White** | **Usage** |
|---------|---------|---------|-------------------|-----------|
| `#46525D` | 70, 82, 93 | 209°, 14%, 32% | 8.19:1 — **AAA** | Body copy, descriptions, secondary text |

### Neutral 500 — Subtle
| **Hex** | **RGB** | **HSL** | **WCAG on White** | **Usage** |
|---------|---------|---------|-------------------|-----------|
| `#7A8691` | 122, 134, 145 | 209°, 9%, 52% | 3.72:1 — **AA Large** | Placeholder text, captions, metadata |

### Neutral 300 — Border
| **Hex** | **RGB** | **HSL** | **WCAG on White** | **Usage** |
|---------|---------|---------|-------------------|-----------|
| `#C5CCD3` | 197, 204, 211 | 210°, 13%, 80% | 1.79:1 | Form field borders, dividers, separators |

### Neutral 200 — Muted
| **Hex** | **RGB** | **HSL** | **WCAG on White** | **Usage** |
|---------|---------|---------|-------------------|-----------|
| `#E2E5E9` | 226, 229, 233 | 214°, 10%, 90% | 1.37:1 | Disabled states, subtle dividers, table borders |

### Neutral 100 — Surface
| **Hex** | **RGB** | **HSL** | **WCAG on White** | **Usage** |
|---------|---------|---------|-------------------|-----------|
| `#F4F5F6` | 244, 245, 246 | 210°, 7%, 96% | 1.10:1 | Background surfaces, alternating table rows, sidebar fills |

---

## 3.4 Semantic Colors

> **Critical brand rule:** Red is prohibited in the Copart brand system. Error and destructive states use a deep rose/magenta tone instead of pure red.

### Success
| Token | Hex | Usage |
|-------|-----|-------|
| `success-bg` | `#D7E8D1` | Alert backgrounds, success banners |
| `success-text` | `#1B6600` | Success message text (9.03:1 on success-bg — **AAA**) |
| `success-border` | `#4CA830` | Success alert borders, positive indicators |
| `success-icon` | `#238202` | Checkmarks, auction-live indicators |

### Warning
| Token | Hex | Usage |
|-------|-----|-------|
| `warning-bg` | `#FFF7D1` | Warning alert backgrounds |
| `warning-text` | `#705700` | Warning message text (5.64:1 on warning-bg — **AA**) |
| `warning-border` | `#EC9C0D` | Warning borders, caution indicators |
| `warning-icon` | `#B07800` | Alert icons, time-sensitive badges |

### Error (Rose — No Pure Red)
| Token | Hex | Usage |
|-------|-----|-------|
| `error-bg` | `#FCE5E9` | Error alert backgrounds, destructive action surfaces |
| `error-text` | `#8C1D35` | Error message text (7.12:1 on error-bg — **AAA**) |
| `error-border` | `#D42A54` | Error borders, validation outlines |
| `error-icon` | `#C22248` | Error icons, form validation indicators |

### Info
| Token | Hex | Usage |
|-------|-----|-------|
| `info-bg` | `#E0EBFF` | Info alert backgrounds |
| `info-text` | `#0F2757` | Info message text (11.23:1 on info-bg — **AAA**) |
| `info-border` | `#2662D9` | Info borders |
| `info-icon` | `#2662D9` | Info icons |

---

## 3.5 Dark Mode

Dark mode uses the same hue families with adjusted lightness and saturation to maintain readability and reduce eye strain. Each primitive color ramp has a full dark mode counterpart — tints (50-200) become dark tinted backgrounds, while core values (600-900) become lighter for contrast on dark surfaces.

### Dark Mode — Surfaces
| Token | Light Mode | Dark Mode | Purpose |
|-------|-----------|-----------|---------|
| `surface-primary` | `#FFFFFF` | `#1A1D23` | Base canvas |
| `surface-secondary` | `#F4F5F6` | `#22262E` | Elevated surfaces, cards |
| `surface-tertiary` | `#F6F9FD` | `#2E3340` | Inset areas, sidebar |
| `surface-overlay` | `rgba(0,0,0,0.5)` | `rgba(0,0,0,0.7)` | Modal scrims |

### Dark Mode — Text
| Token | Light Mode | Dark Mode | Contrast (on dark surface) |
|-------|-----------|-----------|--------------------------|
| `text-primary` | `#2F333C` | `#F0F1F3` | 15.2:1 — **AAA** |
| `text-secondary` | `#46525D` | `#A8B2BC` | 8.4:1 — **AAA** |
| `text-tertiary` | `#7A8691` | `#6E7A86` | 4.6:1 — **AA** |
| `text-disabled` | `#C5CCD3` | `#454D58` | 2.8:1 (intentionally reduced) |

### Dark Mode — Primary Blue (Full Ramp)
| Token | Light Mode | Dark Mode | Notes |
|-------|-----------|-----------|-------|
| `blue-50` | `#F6F9FD` | `#0D1117` | Subtle blue-tinted dark backgrounds |
| `blue-100` | `#EEF3FB` | `#141E33` | Info backgrounds, hover fills |
| `blue-200` | `#E1ECF9` | `#1E2A45` | Selected/active backgrounds on dark |
| `blue-300` | `#B9D6F4` | `#1A2D4A` | Section backgrounds, marketing bands |
| `blue-400` | `#83B3E2` | `#2A4A6E` | Accent fills, decorative elements |
| `blue-600` | `#2662D9` | `#5B8EF0` | Primary — CTAs, active links (5.8:1 on `#1A1D23`) |
| `blue-800` | `#063598` | `#7AAAF5` | Hover state on dark |
| `blue-900` | `#0F2757` | `#B8D4FA` | High-contrast text on dark surfaces |

### Dark Mode — Accent Orange (Full Ramp)
| Token | Light Mode | Dark Mode | Notes |
|-------|-----------|-----------|-------|
| `orange-50` | `#FDF7F2` | `#1A1008` | Warm dark page tint |
| `orange-100` | `#FAEEE5` | `#221710` | Warm hover fills |
| `orange-200` | `#F8E2D3` | `#2E1F14` | Badge fills, featured backgrounds |
| `orange-600` | `#D86518` | `#E8873F` | Accent primary — CTAs, badges (4.1:1 on `#1A1D23`) |
| `orange-800` | `#933C06` | `#F0A566` | Hover/pressed state on dark |
| `orange-900` | `#50250B` | `#F8C99A` | Text on dark warm surfaces |

### Dark Mode — Neutral (Full Ramp)
| Token | Light Mode | Dark Mode | Notes |
|-------|-----------|-----------|-------|
| `neutral-50` | `#FFFFFF` | `#1A1D23` | Page background — base canvas |
| `neutral-100` | `#F4F5F6` | `#22262E` | Surface backgrounds, cards |
| `neutral-200` | `#E2E5E9` | `#2E3340` | Subtle dividers, disabled |
| `neutral-300` | `#C5CCD3` | `#3A4150` | Borders, separators |
| `neutral-500` | `#7A8691` | `#6E7A86` | Placeholders, captions |
| `neutral-700` | `#46525D` | `#A8B2BC` | Body copy, descriptions |
| `neutral-900` | `#2F333C` | `#F0F1F3` | Headlines, primary text |

### Dark Mode — Semantic
| Token | Light BG → Dark BG | Light Text → Dark Text | Dark Border | Dark Icon |
|-------|--------------------|-----------------------|-------------|-----------|
| Success | `#D7E8D1` → `#1A2E14` | `#1B6600` → `#6ABF4D` | `#4CA830` | `#6ABF4D` |
| Warning | `#FFF7D1` → `#2E2510` | `#705700` → `#E8B830` | `#E8B830` | `#E8B830` |
| Error | `#FCE5E9` → `#2E1219` | `#8C1D35` → `#F06080` | `#F06080` | `#F06080` |
| Info | `#E0EBFF` → `#141E33` | `#0F2757` → `#7AAAF5` | `#5B8EF0` | `#5B8EF0` |

---

## 3.6 Color Usage Rules

### Hierarchy
1. **Blue 600 (`#2662D9`)** is reserved for the single most important action on any screen. Do not use it decoratively.
2. **Blue 800 (`#063598`)** is used exclusively for hover/pressed states of Blue 600 elements.
3. **Blue 900 (`#0F2757`)** is for text that needs authority — page titles, modal headings, critical labels.
4. **Orange 600 (`#D86518`)** is reserved for secondary emphasis: registration CTAs, urgency badges, and promotional highlights. Do not use for primary actions.
5. **Orange 800 (`#933C06`)** is used exclusively for hover/pressed states of Orange 600 elements.

### Backgrounds
- **White (`#FFFFFF`)** for primary content areas.
- **Blue 50 (`#F6F9FD`)** for page-level backgrounds behind cards.
- **Orange 50 (`#FDF7F2`)** for promotional/marketing surface backgrounds — use sparingly for warmth.
- **Neutral 100 (`#F4F5F6`)** for alternating table rows, sidebar panels, and grouped content areas.

### Never
- Never use Blue 600 for body text — it lacks sufficient contrast at small sizes.
- **Never let blue dominate a surface.** If everything is Blue 600, nothing is primary. Blue earns its authority through restraint. This is the "blue flood" anti-pattern — when an entire page is blue, the hierarchy collapses and nothing reads as the primary action. See [Vault > anti-patterns.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/language/anti-patterns.md).
- Never use pure red (`#FF0000`, `#E00000`, etc.) anywhere in the system. Use the rose/magenta error palette instead.
- Never combine Warning amber and Error Rose in adjacent elements — it creates visual noise that damages trust.
- Never use Orange 600 for body text or as a primary action — it is a secondary accent only. Orange channels Vitality — genuine urgency, not decoration.
- Never place Orange and Warning elements adjacent to each other — despite different hues (24° vs 37°), they can blur at a glance in dense UIs.
- Never use color as the sole indicator of state. Always pair with icons, labels, or patterns.

---

# 4. Foundations — Typography

## 4.1 Primary Font Family: Inter

**Why Inter:** Tall x-height, open apertures, tabular number support — optimized for data-heavy auction UI. See [Vault > typography-voice.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/craft/typography-voice.md) for the full design case.

**Fallback stack:** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`

**License:** SIL Open Font License 1.1 (free for all uses)

### Font Weights

| Weight Name | CSS Weight | Token | Usage |
|------------|-----------|-------|-------|
| Thin | 100 | `font-thin` | Decorative hero text only (72px+) |
| Extra Light | 200 | `font-extralight` | Large display text (48px+) |
| Light | 300 | `font-light` | Display headings, hero subtitles |
| Regular | 400 | `font-regular` | Body text, descriptions, form inputs |
| Medium | 500 | `font-medium` | Emphasized body, card content, labels |
| Semi Bold | 600 | `font-semibold` | Subheadings, table headers, nav items |
| Bold | 700 | `font-bold` | Section headers, H2-H3, button text |
| Extra Bold | 800 | `font-extrabold` | H1 headings, page titles |
| Black | 900 | `font-black` | Hero text, marketing display, stat numbers |

---

## 4.2 Type Scale

### Display Styles (Marketing, Hero Sections)

#### Display Large
| Property | Desktop (1440px+) | Tablet (768px) | Mobile (375px) |
|----------|-------------------|----------------|----------------|
| **Size** | 64px / 4rem | 48px / 3rem | 36px / 2.25rem |
| **Line Height** | 72px / 1.125 | 56px / 1.167 | 44px / 1.222 |
| **Letter Spacing** | -0.02em | -0.02em | -0.015em |
| **Weight** | 900 (Black) | 900 (Black) | 800 (Extra Bold) |
| **Token** | `type-display-lg` | | |

**Use for:** Homepage hero banners, marketing landing page headlines, full-screen takeover titles, campaign splash screens.
**Don't use for:** In-app page titles (use Headline), dashboard headers, or any element that repeats on multiple pages. Display Large should appear at most once per page.

#### Display Small
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 48px / 3rem | 36px / 2.25rem | 28px / 1.75rem |
| **Line Height** | 56px / 1.167 | 44px / 1.222 | 36px / 1.286 |
| **Letter Spacing** | -0.02em | -0.015em | -0.01em |
| **Weight** | 800 (Extra Bold) | 800 (Extra Bold) | 700 (Bold) |
| **Token** | `type-display-sm` | | |

**Use for:** Secondary marketing headlines, feature section titles on landing pages, stat/KPI hero numbers (Inter weight 800), empty-state hero text.
**Don't use for:** In-app content headings — even on dashboards. If the text appears inside the logged-in product shell, use Headline or Title 1 instead.

### Heading Styles (Page Structure)

#### Headline (H1)
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 40px / 2.5rem | 32px / 2rem | 28px / 1.75rem |
| **Line Height** | 48px / 1.2 | 40px / 1.25 | 36px / 1.286 |
| **Letter Spacing** | -0.015em | -0.01em | -0.01em |
| **Weight** | 800 (Extra Bold) | 800 (Extra Bold) | 700 (Bold) |
| **Color** | Neutral 900 (`#2F333C`) | | |
| **Token** | `type-headline` | | |

**Use for:** Top-level page titles in the product shell — "Search Results," "My Bids," "Lot #12345678," "Account Settings." One per page, always the first heading in the content area.
**Don't use for:** Section headings within a page (use Title 1), card titles (use Title 2 or Title 3), or marketing hero text (use Display).

#### Title 1 (H2)
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 28px / 1.75rem | 24px / 1.5rem | 22px / 1.375rem |
| **Line Height** | 36px / 1.286 | 32px / 1.333 | 30px / 1.364 |
| **Letter Spacing** | -0.01em | -0.005em | 0em |
| **Weight** | 700 (Bold) | 700 (Bold) | 700 (Bold) |
| **Token** | `type-title-1` | | |

**Use for:** Major section headings within a page — "Vehicle Details," "Bid History," "Similar Vehicles." Also modal titles for large/complex modals and shelf panel headers.
**Don't use for:** Card titles (use Title 2), sidebar section labels (use Subheadline), or anything that repeats more than 3-4 times on a single page.

#### Title 2 (H3)
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 22px / 1.375rem | 20px / 1.25rem | 18px / 1.125rem |
| **Line Height** | 30px / 1.364 | 28px / 1.4 | 26px / 1.444 |
| **Letter Spacing** | 0em | 0em | 0em |
| **Weight** | 700 (Bold) | 600 (Semi Bold) | 600 (Semi Bold) |
| **Token** | `type-title-2` | | |

**Use for:** Card titles, subsection headings, accordion headers, modal titles (standard-size modals), dashboard widget titles, shelf panel titles.
**Don't use for:** Inline emphasis within body text (use Body Emphasis), or button labels. If you have more than 6 Title 2s on one page, the hierarchy may be flat — consider promoting one to Title 1.

#### Title 3 (H4)
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 18px / 1.125rem | 16px / 1rem | 16px / 1rem |
| **Line Height** | 26px / 1.444 | 24px / 1.5 | 24px / 1.5 |
| **Letter Spacing** | 0em | 0em | 0em |
| **Weight** | 600 (Semi Bold) | 600 (Semi Bold) | 600 (Semi Bold) |
| **Token** | `type-title-3` | | |

**Use for:** Tertiary headings within cards or sections, list group headers, sidebar navigation section labels, small modal titles, alert titles, stat labels when the stat has a title-level heading.
**Don't use for:** Form field labels (use Subheadline), metadata labels (use Caption 1), or body text that just needs emphasis (use Body Emphasis).

### Body Styles (Content)

#### Body Large
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 18px / 1.125rem | 16px / 1rem | 16px / 1rem |
| **Line Height** | 28px / 1.556 | 26px / 1.625 | 26px / 1.625 |
| **Letter Spacing** | 0em | 0em | 0em |
| **Weight** | 400 (Regular) | 400 (Regular) | 400 (Regular) |
| **Color** | Neutral 700 (`#46525D`) | | |
| **Token** | `type-body-lg` | | |

**Use for:** Lead paragraphs (first paragraph of a page or section), lot detail descriptions, marketing body copy, empty-state descriptions, onboarding explanation text.
**Don't use for:** Standard body copy in product UI (use Body), form field values, or table cell content. Body Large is for moments that deserve more breathing room.

#### Body (Default)
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 16px / 1rem | 16px / 1rem | 16px / 1rem |
| **Line Height** | 24px / 1.5 | 24px / 1.5 | 24px / 1.5 |
| **Letter Spacing** | 0em | 0em | 0em |
| **Weight** | 400 (Regular) | 400 (Regular) | 400 (Regular) |
| **Color** | Neutral 700 (`#46525D`) | | |
| **Token** | `type-body` | | |

**Use for:** All standard body text — descriptions, paragraphs, form field values, table cell text, list item content, alert descriptions, toast messages, modal body text. This is the default for any text that isn't a heading, label, or utility text.
**Don't use for:** Labels (use Subheadline or Caption 1), small metadata (use Footnote or Caption), or anything that needs emphasis over surrounding body text (use Body Emphasis or Callout).

#### Body Emphasis
| Property | All Breakpoints |
|----------|----------------|
| **Size** | Same as Body |
| **Weight** | 500 (Medium) |
| **Token** | `type-body-emphasis` |

**Use for:** Inline emphasis within body text — key terms, important values, selected filter labels, "bold" content within a paragraph without breaking to a heading. Also for button labels at body size.
**Don't use for:** Headings or titles (too subtle — use a Title style). If an entire paragraph needs emphasis, the hierarchy is wrong — promote the section or add a heading.

#### Callout
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 16px / 1rem | 14px / 0.875rem | 14px / 0.875rem |
| **Line Height** | 24px / 1.5 | 22px / 1.571 | 22px / 1.571 |
| **Letter Spacing** | 0em | 0em | 0em |
| **Weight** | 500 (Medium) | 500 (Medium) | 500 (Medium) |
| **Token** | `type-callout` | | |

**Use for:** Secondary content that sits between body and label — card subtitles, alert titles (when short), navigation item labels, dropdown menu items, tag/chip text, breadcrumb links.
**Don't use for:** Primary body text (use Body), form field labels (use Subheadline), or very small metadata (use Footnote). Callout is the "in-between" weight — use it when Body feels too light and Subheadline feels too small.

#### Subheadline
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 14px / 0.875rem | 14px / 0.875rem | 14px / 0.875rem |
| **Line Height** | 20px / 1.429 | 20px / 1.429 | 20px / 1.429 |
| **Letter Spacing** | 0.005em | 0.005em | 0.005em |
| **Weight** | 600 (Semi Bold) | 600 (Semi Bold) | 600 (Semi Bold) |
| **Token** | `type-subheadline` | | |

**Use for:** Form field labels, alert titles, table column headers, small button labels (SM/XS buttons), sidebar section labels, stat component labels, card metadata labels ("Make:", "Year:", "Damage:").
**Don't use for:** Body text or descriptions (too small and heavy), page headings (use Title styles), or decorative labels (use Overline).

### Utility Styles (Small Text, Labels)

#### Footnote
| Property | All Breakpoints |
|----------|----------------|
| **Size** | 13px / 0.8125rem |
| **Line Height** | 18px / 1.385 |
| **Letter Spacing** | 0.01em |
| **Weight** | 400 (Regular) |
| **Color** | Neutral 500 (`#7A8691`) |
| **Token** | `type-footnote` |

**Use for:** Helper text below form fields, timestamps in feeds/activity logs, "Last updated" lines, legal disclaimers, character counts, secondary metadata that doesn't need the weight of Caption 1.
**Don't use for:** Primary labels (use Subheadline or Caption 1), body text, or anything the member must read to complete a task. Footnote is for supplementary context only.

#### Caption 1
| Property | All Breakpoints |
|----------|----------------|
| **Size** | 12px / 0.75rem |
| **Line Height** | 16px / 1.333 |
| **Letter Spacing** | 0.015em |
| **Weight** | 500 (Medium) |
| **Color** | Neutral 500 (`#7A8691`) |
| **Token** | `type-caption-1` |

**Use for:** Axis labels on charts, step indicator labels, stat component labels (uppercase with 0.08em tracking in stat context), badge text, table footer totals labels, image captions.
**Don't use for:** Form field labels (too small — use Subheadline), primary content, or anything that needs to be read at arm's length on mobile.

#### Caption 2
| Property | All Breakpoints |
|----------|----------------|
| **Size** | 12px / 0.75rem |
| **Line Height** | 16px / 1.333 |
| **Letter Spacing** | 0.015em |
| **Weight** | 500 (Medium) |
| **Token** | `type-caption-2` |

**Use for:** Stat time period labels ("Last 30 days"), secondary metadata in dense layouts, chart legend text, tooltip detail lines. Identical specs to Caption 1 but used as a semantic distinction — Caption 2 is always subordinate to a Caption 1 on the same component.
**Don't use for:** Anything that stands alone without a larger context element nearby. If Caption 2 text is the only thing a member sees, promote it to Caption 1 or Footnote.

#### Overline
| Property | All Breakpoints |
|----------|----------------|
| **Size** | 11px / 0.6875rem |
| **Line Height** | 16px / 1.455 |
| **Letter Spacing** | 0.08em |
| **Weight** | 700 (Bold) |
| **Text Transform** | Uppercase |
| **Token** | `type-overline` |

**Use for:** Section labels above content groups ("VEHICLE DETAILS", "BID HISTORY"), card category labels, tab group labels, stat component category labels. Always uppercase — the wide tracking + caps + bold weight makes 11px legible at this size.
**Don't use for:** Body text, form labels, or any sentence-case text. Overline is purely a structural/decorative label — never for content the member reads as prose. Do not use for interactive labels (buttons, links).

---

## 4.3 Numeric Typography

Numbers are first-class citizens in the Vallejo type system. On an auction platform, numbers carry the most consequential information — bid amounts, lot counts, sale dates, VINs. They deserve the same design rigor as any other element. See [Vault > typography-voice.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/craft/typography-voice.md).

### The Governing Principle: Read vs. Compare

The decision of whether to use JetBrains Mono or Inter for any number is determined by a single question: **is this number being read or compared?**

- **Numbers being compared** — stacked in lists, cards, rows, ladders, or any context where a member is scanning multiple values against each other → **JetBrains Mono**
- **Numbers being read** — singular, dominant, display scale, where the number stands alone and lands as impact → **Inter**

This principle applies consistently across all surfaces — public browsing, search results, lot detail, bid box, live auction, and transaction flows. Surface type does not determine the rule; the nature of how the number is used does.

**Compare contexts (mono):**
- Price values in search result cards
- Bidding increment row in the bid box
- Bid ladder in live auction
- VINs and lot numbers
- Any numerical column where values stack vertically

**Read contexts (Inter):**
- Hero current bid amount in the bid box
- Win amount confirmation
- Buy-it-now price displayed at prominence
- Any singular dominant number not competing with siblings

### Timer Exception

The auction countdown timer remains JetBrains Mono even at large display sizes. Unlike a hero bid amount, the timer is tabular by nature — digits must hold their horizontal position as values change to prevent layout shift. This is the explicit exception to the read = Inter rule.

### Mono Never Bleeds into Labels or Prose

Regardless of surface or context, JetBrains Mono is strictly limited to numerical values. Labels, descriptions, helper text, navigation, and any copy surrounding a mono number always uses Inter. This constraint is what prevents the font switch from reading as developer tooling on public-facing surfaces.

### Browsing Surfaces — Tabular Figures Without Font Switch

On surfaces where numerical values appear in prose-adjacent contexts — vehicle highlights, condition data, descriptive copy — and a font switch would feel incongruous, use Inter with tabular figures instead:

```css
font-feature-settings: "tnum";
```

This provides column alignment without switching typefaces. This is a fallback, not a replacement — if the number is clearly in a compare context, JetBrains Mono still applies.

### Additional Rules

| Rule | Implementation |
|------|---------------|
| **Tabular alignment always** | Numbers in compare contexts use JetBrains Mono. Prose-adjacent contexts where a font switch would jar use Inter with `font-feature-settings: "tnum"`. Either way, columns must align. |
| **Precision matches context** | No cents on amounts over $100 ("$47,250" not "$47,250.00"). Cents only for sub-dollar amounts ("$0.50"). |
| **Size communicates importance** | Current bid amount is larger than metadata numbers. The winning bid is the biggest number on the lot detail page. |
| **Color communicates state** | Winning/leading bid, outbid/losing position, and final sold price should each have distinct color treatment. Numbers don't just display data — they signal urgency and status. |
| **Weight communicates hierarchy** | Primary numbers (bids, totals) use Bold (700) or Extra Bold (800). Secondary numbers (timestamps, lot numbers) use Regular (400) or Medium (500). |

**Monospace sizing:** When using JetBrains Mono inline with Inter body text, reduce size by 1px to account for mono's wider set width. Match the semantic role (body, caption, etc.) for vertical rhythm.

---

## 4.4 Font Pairing Strategy

**Primary (95% of UI):** Inter — used for all interface text, from hero headings to caption labels. Also used for singular "read" numbers (hero bid amounts, win confirmations, buy-it-now prices).

**Monospace (Compare Data):** `"JetBrains Mono", "SF Mono", "Fira Code", "Cascadia Code", monospace`
- Used for: numbers being *compared* — prices in search cards, bid ladders, VINs, lot numbers, timers, any stacked numerical column
- Never used for: labels, descriptions, helper text, or any copy surrounding a number
- Size: Match the semantic role (body, caption, etc.) but reduce by 1px to account for mono's wider set width

**Suppress the dotted zero.** JetBrains Mono ships with a dotted zero (a code-editor convention). In a financial UI, the dot creates visual friction and serves no disambiguation need. Suppress it everywhere JetBrains Mono is specified:

```css
font-feature-settings: "zero" 0;
```

**When to use monospace vs. Inter:** The read/compare principle (§4.3) governs. If a number is being *compared* against siblings, it's mono. If it's being *read* as a standalone impact moment, it's Inter. Timers are the one exception — always mono regardless of size, because digits must hold position as values change.

---

## 4.5 Accessibility — Minimum Sizes

| Context | Minimum Size | Rationale |
|---------|-------------|-----------|
| **Body text** | 16px | WCAG recommendation for comfortable reading |
| **Interactive labels** (buttons, links) | 14px | Minimum for touch-target legibility |
| **Form labels** | 14px | Must be clearly associated with input |
| **Caption / metadata** | 12px | Absolute floor for body-cased text. Overline stays 11px — uppercase + 0.08em tracking = legible at smaller size. |
| **Touch target text** | 14px | Paired with minimum 44×44px touch area |

### Line Length
- **Optimal:** 60–75 characters per line (desktop body text)
- **Maximum:** 85 characters — beyond this, set `max-width` on the text container
- **Mobile:** Full-width is acceptable at 16px body size within standard margins

---

# 5. Foundations — Layout Grid

## 5.1 Responsive Grid System

A 12-column grid adapts across three canonical breakpoints. All measurements use the 8px base unit.

### Desktop (1440px canvas)
| Property | Value |
|----------|-------|
| **Columns** | 12 |
| **Column Width** | 72px (fluid) |
| **Gutter** | 24px |
| **Margin (outer)** | 80px each side |
| **Content Width** | 1280px max |
| **Behavior** | Columns scale proportionally within max-width; margins grow beyond 1440px |

### Tablet (768px canvas)
| Property | Value |
|----------|-------|
| **Columns** | 8 (collapse to 12 for complex layouts) |
| **Column Width** | Fluid |
| **Gutter** | 16px |
| **Margin (outer)** | 32px each side |
| **Content Width** | 704px max |
| **Behavior** | Sidebar collapses; navigation moves to hamburger or bottom tab bar |

### Mobile (375px canvas)
| Property | Value |
|----------|-------|
| **Columns** | 4 |
| **Column Width** | Fluid |
| **Gutter** | 16px |
| **Margin (outer)** | 16px each side |
| **Content Width** | 343px max |
| **Behavior** | Single-column layouts; stacked cards; full-width inputs |

---

## 5.2 Breakpoint Definitions

| Name | Range | Columns | Behavior |
|------|-------|---------|----------|
| `mobile-sm` | 320px – 374px | 4 | Compact single-column, reduced padding |
| `mobile` | 375px – 767px | 4 | Standard mobile layout |
| `tablet` | 768px – 1023px | 8 | Two-column capable, collapsible sidebar |
| `desktop-sm` | 1024px – 1279px | 12 | Full sidebar, condensed spacing |
| `desktop` | 1280px – 1439px | 12 | Standard desktop experience |
| `desktop-lg` | 1440px – 1919px | 12 | Canonical design width |
| `desktop-xl` | 1920px+ | 12 | Content max-widths enforced, expanded margins |

**CSS implementation:**
```css
/* Mobile first */
@media (min-width: 375px)  { /* mobile */ }
@media (min-width: 768px)  { /* tablet */ }
@media (min-width: 1024px) { /* desktop-sm */ }
@media (min-width: 1280px) { /* desktop */ }
@media (min-width: 1440px) { /* desktop-lg */ }
@media (min-width: 1920px) { /* desktop-xl */ }
```

---

## 5.3 Safe Areas

### Notched / Dynamic Island Devices
- Use `env(safe-area-inset-top)`, `env(safe-area-inset-bottom)`, `env(safe-area-inset-left)`, `env(safe-area-inset-right)`
- Bottom navigation must clear `env(safe-area-inset-bottom)` + 8px
- Fullscreen modals must respect all four safe area insets
- Auction timer overlays on mobile must avoid the Dynamic Island region

### Viewport Meta
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

---

# 6. Foundations — Spacing

## 6.1 Spacing Scale

Based on an 8px unit with a 4px half-step for fine adjustments.

| Token | Value | Rem | Usage |
|-------|-------|-----|-------|
| `space-0` | 0px | 0 | Reset / collapse |
| `space-1` | 4px | 0.25rem | Inline icon-to-text gap, tight pill padding, badge internal |
| `space-2` | 8px | 0.5rem | Default icon-to-label gap, compact list item padding, input internal padding-y |
| `space-3` | 12px | 0.75rem | Form field padding-x, small card internal padding, button padding-y (small) |
| `space-4` | 16px | 1rem | Default component padding, gap between related elements, button padding-y (medium) |
| `space-5` | 20px | 1.25rem | List item padding-y, card padding (compact) |
| `space-6` | 24px | 1.5rem | Default card padding, section gap between sibling components, gutter width (desktop) |
| `space-8` | 32px | 2rem | Gap between content sections, sidebar padding, margin between card groups |
| `space-10` | 40px | 2.5rem | Major section separators, dashboard widget gaps |
| `space-12` | 48px | 3rem | Page section vertical margins, hero-to-content transition |
| `space-16` | 64px | 4rem | Large page section breaks, footer top margin |
| `space-20` | 80px | 5rem | Desktop outer margins, major layout areas (e.g. sidebar width offset) |
| `space-24` | 96px | 6rem | Hero section padding-top, above-fold breathing room |
| `space-32` | 128px | 8rem | Full-page section spacing (marketing pages only) |

---

## 6.2 Spacing Usage Rules

### Component Internal Spacing
- **Tight (4–8px):** Icon gaps, badge internals, inline element spacing
- **Default (12–16px):** Button padding, input padding, card internal spacing
- **Comfortable (20–24px):** Card body padding, sidebar content padding

### Component External Spacing (Between Elements)
- **Related items** (label to input, title to description): `space-3` (12px) default. Use `space-2` (8px) only for tight card layouts or inline label-value pairs.
- **Sibling components** (card to card, field to field): `space-4` (16px) or `space-6` (24px)
- **Content sections** (form group to form group): `space-8` (32px) or `space-10` (40px)
- **Page sections** (hero to content, content to footer): `space-12` (48px) to `space-16` (64px)

### Responsive Spacing Adjustments
| Scale Step | Desktop | Tablet | Mobile |
|-----------|---------|--------|--------|
| Section gaps | 48–64px | 32–48px | 24–32px |
| Card padding | 24px | 20px | 16px |
| Page margins | 80px | 32px | 16px |
| Component gap | 24px | 16px | 16px |

---

## 6.3 Iconography

### Icon Library: Iconic (iconic.app)

All icons in the Vallejo Design System come exclusively from the **Iconic** icon set (https://iconic.app/). No emojis, Unicode symbols, or alternative icon libraries are permitted anywhere in the product. If an icon is not available in the Vallejo icon library, you must ask before implementing — never substitute with another source, approximate with a similar shape, or use a placeholder.

### Icon Specifications

| Property | Value |
|----------|-------|
| **Source** | Iconic (iconic.app) — free, permissive license |
| **Format** | Inline SVG (not font icons, not `<img>` tags) |
| **Stroke width** | 1.5px (default), 2px (emphasis), 2.5px (small icons ≤14px) |
| **Stroke style** | `stroke-linecap: round; stroke-linejoin: round` |
| **Default size** | 20px (navigation), 18px (buttons/inline), 24px (standalone) |
| **ViewBox** | `0 0 24 24` (base), `3 3 18 18` (inline/button — crops whitespace for tighter optical fit). Exception: icons with large circles (r ≥ 8) or off-center geometry (search, info circle) keep `0 0 24 24` — stroke bleeds outside the 3–21 crop zone |
| **Color** | `currentColor` (inherits from parent text color) |

### Size Scale

| Token | Size | Usage |
|-------|------|-------|
| `icon-xs` | 12px | Chevrons, breadcrumb separators, trend arrows |
| `icon-sm` | 16px | Small button icons, status token icons, compact inline icons |
| `icon-md` | 18px | Default button icons, step indicator checkmarks, inline icons |
| `icon-toast` | 20px | Toast icons, alert icons |
| `icon-nav` | 20px | Tab bar icons, navigation icons |
| `icon-lg` | 24px | Standalone icons, card placeholders, video controls |
| `icon-xl` | 28px | Gesture pattern icons, mobile card media |
| `icon-2xl` | 32px | Card media placeholders, camera icons |
| `icon-empty` | 48px | Empty state illustrations |

### Rules

1. **Vallejo icons only** — You must only use icons from the icons provided in the Vallejo Design System (sourced from Iconic). No alternatives, no other icon sets, no emoji, no Unicode symbols, no custom SVGs. If you need an icon that is not available in the provided set, **ask before you implement** — do not substitute, approximate, or invent one.
2. **No emojis, ever** — Never use emoji characters (Unicode or HTML entities) anywhere in the UI. This is a hard rule with zero exceptions.
3. **Inline SVG only** — Embed SVGs directly in HTML for color inheritance and animation support. No font icons, no `<img>` tags, no icon fonts.
4. **currentColor** — All icons inherit their parent's text color via `stroke="currentColor"` or `fill="currentColor"`
5. **Filled vs. Outline** — Use outline (stroke) as default. Use filled only for active/selected states (e.g., filled heart = watching, outlined heart = not watching)
6. **Directional arrows are always stroke carets** — All chevrons, dropdown arrows, expand/collapse indicators, breadcrumb separators, and sort indicators use stroke-style caret icons from the VDS set. Never use filled triangles, CSS borders-as-arrows, or Unicode arrows (▼, ▶, etc.)
7. **Alignment** — Use `.btn-icon` class with `vertical-align: -0.15em` for inline text alignment
8. **Accessibility** — Decorative icons get `aria-hidden="true"`. Functional icons need `aria-label` or visible text

---

# 7. Components

> Every component executes the Vault's triad — Precision in spacing and alignment, Institutional Confidence in restrained interaction, Vitality in purposeful motion. Components are documented with anatomy, states, usage rules, accessibility, and code-ready specs. For the design philosophy behind these components, see the [Copart Design Vault](https://github.com/getboyce/Copart-Design-Vault).

---

## 7.1 Navigation Components

### Component: Header

**Purpose:** Primary navigation and brand identity. Anchors the member's sense of place across all pages. Always include the Copart header at the top of every page — use the existing component files (`components/header/index.html` for logged-out, `components/header/loggedin.html` for logged-in), never recreate from scratch. Shared design tokens live in `components/tokens.css`.

**Anatomy — Three-Tier Structure:**

| Tier | Element | Height | Background | Visibility |
|------|---------|--------|------------|------------|
| 1 — Utility bar | `header-utility-bar` | 36px | Neutral 950 (#23262F) | Desktop only (hidden on mobile) |
| 2 — Primary bar | `header-container` | 80px (64px scrolled) | Neutral 900 (#2F333C) | Always visible |
| 3 — Member nav | `member-nav` | 44px | Neutral 700 (#46525D) | Logged-in only (hidden on mobile) |

**Tier 1 — Utility Bar:**
- Left: "243 Live Auctions" with pulsing green dot (8px, #34C759)
- Right: Get help link, language dropdown (6 languages), region dropdown (grouped by continent)
- Text: 12px, weight 500, rgba(255,255,255,0.7)
- Dividers: 1px rgba(255,255,255,0.15)

**Tier 2 — Primary Bar Anatomy:**
1. `header-brand` — Copart logo (44px height, 36px scrolled)
2. `header-search` — Pill search bar (max-width 420px), magnifying glass icon left, SVG clear button right
3. `header-nav` — Dropdown menus: Vehicles, Auctions, Sell, About Copart
4. `header-actions` — Sign In + Register (logged-out) or Bell + Avatar (logged-in)
5. `header-mobile-toggle` — Hamburger menu (mobile/tablet only)

**Tier 3 — Member Nav Bar (Logged-In Only):**
- Direct links: Dashboard, Feedback
- Dropdown links: My Tools (Watchlist, Saved Searches, Alerts, VIN Check), Bid Status (Active Bids, Won, Lost, Pending), Payments (Payment Methods, Transaction History, Invoices)
- Sticky at top: 80px (adjusts to 64px when primary bar scrolls)
- Text: 13px, weight 600, rgba(255,255,255,0.7), hover white
- z-index: 999

**Variants:**

| Variant | Context |
|---------|---------|
| Logged-out | Sign In link + Register CTA in actions. No member nav bar (two tiers). |
| Logged-in | Bell icon (with orange badge) + Avatar button in actions. Full member nav bar (three tiers). |
| Scrolled | Primary bar collapses 80px to 64px, logo scales, shadow appears. Desktop only. |

**States:**

| State | Behavior |
|-------|----------|
| Default | Full height (80px primary), no shadow |
| Scrolled | 64px primary, shadow `0 2px 12px rgba(0,0,0,0.25)`, member nav `top` adjusts. Desktop only (>768px). |
| Mobile | Utility bar hidden. Search moves below logo (full width, 36px). Nav hidden, replaced by hamburger drawer. |

**Search Bar Specs:**
```
Height: 40px (desktop) / 36px (mobile)
Max-width: 420px (desktop) / 100% (mobile)
Background: rgba(255,255,255,0.1) → 0.14 hover → 0.18 focus
Border: 1.5px rgba(255,255,255,0.15) → blue-600 on focus
Border-radius: pill (9999px)
Font: 14px, white text, rgba(255,255,255,0.5) placeholder
Search icon: 18px, left 12px
Clear button: 20px circle, right 12px, visible only when input has text
Focus ring: 0 0 0 3px rgba(38,98,217,0.25)
```

**Navigation Dropdown Specs:**
```
Trigger: 14px, weight 600, rgba(255,255,255,0.85), hover white
Trigger padding: 8px 12px, border-radius 6px
Panel: white bg, 1px border (neutral-200), border-radius 12px, shadow-lg
Panel min-width: 220px
Item: 14px, weight 500, padding 12px 16px
Item hover: blue-50 bg, blue-600 text
Item icons: 18px, stroke-width 1.5
Chevron: 14px, rotates 180deg on open
```

**Avatar Dropdown (Logged-In):**
```
Min-width: 260px, anchored right
Header: 44px avatar (editable with pencil badge) + name (14px/600) + email (12px) + member # (11px)
Section labels: 11px, weight 700, uppercase, 0.05em letter-spacing
Sections: Account settings, Preference center, Notifications, Member fees
Sign Out: orange-600 text, hover orange-800
Dividers: 1px neutral-200, margin 8px 0
```

**Button Specs:**
```
Sign In: 36px height, border 1.5px rgba(255,255,255,0.3), radius 8px, 14px/600 white
Register: 36px height, bg orange-600, hover orange-800, radius 8px, 14px/600 white
Icon button (bell): 36px square, radius 6px, rgba(255,255,255,0.75) → white on hover
Badge: 8px circle, orange-600, 2px header-bg border, top-right offset
```

**Mobile Drawer:**
```
Overlay: fixed inset, rgba(0,0,0,0.5), z-index 1200
Panel: 320px (max 85vw), right-aligned, white bg, z-index 1300
Transition: translateX(100%) → translateX(0), 300ms ease-out
Close button: 36px, top-right
Sections: 16px padding, 1px bottom border
Link text: 16px, weight 600
Footer: neutral-100 bg, language + region selects
```

**Mobile Drawer — Logged-In Additions:**
- User info section at top: 48px avatar (editable) + name (16px/700) + email (13px) + member # (12px)
- Member nav sections (blue-50 bg): Account settings, Preference center, Notifications, Member fees
- Sign Out link at bottom (orange-600)

**Responsive Breakpoints:**

| Breakpoint | Horizontal padding | Key changes |
|------------|--------------------|-------------|
| > 1280px | 80px | Full layout |
| 1024–1280px | 32px | Search 320px max, nav 13px, tighter gaps |
| < 768px | 16px | Utility bar hidden, search full-width below logo, nav → hamburger drawer, member nav hidden |

**z-index Hierarchy:**
```
--z-header: 1000 (primary bar)
Member nav: 999
--z-dropdown: 1100
--z-overlay: 1200
--z-drawer: 1300
```

**JavaScript Behavior:**
- Scroll: > 20px adds `.scrolled` class (desktop only, >768px). Shrinks primary bar and logo, adjusts member nav top.
- Dropdowns: Click to toggle, click outside or Escape to close. `aria-expanded` toggled.
- Mobile drawer: Toggle opens/closes with overlay. Focus trap, body scroll lock, Escape to close.
- Search clear: Shows when input has text (CSS `:not(:placeholder-shown)`), clears value and refocuses.

**Accessibility:**
- Skip-to-content link as first focusable element
- `<header role="banner">` with `<nav role="navigation" aria-label="Main navigation">`
- Utility bar: `role="complementary"`, `aria-label="Site utilities"`
- All nav items keyboard-focusable with visible focus ring (2px solid blue, 2px offset)
- Dropdown triggers: `aria-haspopup="true"`, `aria-expanded="true|false"`
- Dropdown panels: `role="menu"`, items `role="menuitem"`
- Mobile drawer: `role="dialog"`, `aria-modal="true"`, focus trap, `aria-controls` on toggle
- Bell icon: `aria-label="Notifications"`
- Avatar edit: `aria-label="Edit avatar"`

---

### Component: Tab Bar (Bottom Navigation — Mobile)

**Purpose:** Primary navigation on mobile devices, providing thumb-friendly access to core sections.

**Anatomy:**
1. `tabbar-container` — Fixed bottom bar
2. `tabbar-item` — Individual tab (icon + label)
3. `tabbar-indicator` — Active state highlight
4. `tabbar-badge` — Notification count overlay

**Items (5 max):**
| Tab | Icon | Label |
|-----|------|-------|
| Home | House | Home |
| Search | Magnifying Glass | Search |
| Auctions | Gavel | Auctions |
| Watchlist | Heart | Watchlist |
| Account | Person | Account |

**States:**
| State | Icon Color | Label Color | Background |
|-------|-----------|------------|------------|
| Default | Neutral 500 | Neutral 500 | Transparent |
| Active | Blue 600 | Blue 600 | Transparent |
| Pressed | Blue 800 | Blue 800 | Blue 100 |
| Badge | — | — | `error-icon` (#C22248) dot or count |

**Specs:**
```
Height: 56px + env(safe-area-inset-bottom)
Background: #FFFFFF (light) / #1A1D23 (dark)
Border-top: 1px solid Neutral 200
Icon size: 24px
Label: type-caption-2 (12px)
Gap (icon to label): space-1 (4px)
Item min-width: 64px
Touch target: 48×48px minimum per item
z-index: 1000
```

**Accessibility:**
- `<nav role="navigation" aria-label="Tab navigation">`
- Each tab: `role="tab"`, `aria-selected="true|false"`
- Container: `role="tablist"`
- Badge: `aria-label="3 notifications"` (dynamic count)

---

### Component: Sidebar

**Purpose:** Secondary navigation and filtering panel for search results and dashboard views.

**Anatomy:**
1. `sidebar-container` — Vertical panel, left-aligned
2. `sidebar-header` — Title + collapse toggle
3. `sidebar-section` — Collapsible group
4. `sidebar-section-title` — Group label with expand/collapse chevron
5. `sidebar-item` — Individual nav link or filter option
6. `sidebar-divider` — Horizontal separator between sections

**Variants:**
| Variant | Usage |
|---------|-------|
| Navigation | Dashboard side nav with icon + label items |
| Filter | Search results filter panel with checkboxes, ranges, and counts |
| Collapsible | Hidden by default on tablet, revealed via toggle button |

**States:**
| State | Behavior |
|-------|----------|
| Expanded | Full width visible, content area shifts right |
| Collapsed (desktop) | Collapses to icon-only (56px width) |
| Hidden (tablet/mobile) | Overlay panel slides from left with backdrop scrim |
| Section open | Content visible, chevron rotated 90° |
| Section closed | Content hidden, chevron at 0° |

**Specs:**
```
Width: 280px (expanded) / 56px (collapsed) / 320px (overlay on mobile)
Background: #FFFFFF (light) / surface-secondary (dark)
Border-right: 1px solid Neutral 200
Padding: space-4 (16px)
Section title: type-subheadline, color Blue 600
Item: type-body, color Neutral 700
Item hover: background Blue 100
Item active: background Blue 200, color Blue 800, font-weight 600
Transition: width 200ms ease-out
```

**Accessibility:**
- `<aside role="complementary" aria-label="Filters">` or `<nav>` for navigation variant
- Collapsible sections: `aria-expanded`, `aria-controls` pointing to content panel ID
- Filter counts: `aria-describedby` linking to the count span
- Focus management: when overlay opens, focus moves to sidebar; on close, returns to trigger

---

### Component: Breadcrumbs

**Purpose:** Shows the member's location within the site hierarchy and enables upward navigation.

**Anatomy:**
1. `breadcrumb-container` — Horizontal list wrapper
2. `breadcrumb-item` — Individual link (all but last are interactive)
3. `breadcrumb-separator` — Chevron or slash between items
4. `breadcrumb-current` — Last item, non-interactive, represents current page

**States:**
| Element | Default | Hover | Active |
|---------|---------|-------|--------|
| Link items | Neutral 500, type-caption-1 | Blue 600, underline | Blue 800 |
| Current item | Neutral 900, font-weight 600 | N/A (non-interactive) | N/A |
| Separator | Neutral 500 | N/A | N/A |

**Specs:**
```
Height: 32px (container)
Item font: type-caption-1 (12px, medium)
Separator: 16px chevron-right stroke icon (from VDS icon set), Neutral 500, margin 0 space-2
Current item: type-caption-1, font-weight 600, Neutral 900
Gap between items: space-1 (4px)
Overflow (mobile): horizontal scroll, no wrapping, fade-out mask on edges
```

**Usage:**
- Use on all pages 2+ levels deep in the hierarchy
- Maximum 5 levels displayed. If deeper, show: Home > ... > Parent > Current
- Do NOT use on landing pages or the homepage

**Accessibility:**
- `<nav aria-label="Breadcrumb">` with `<ol>` list
- Current page: `aria-current="page"`
- Separators: `aria-hidden="true"` (decorative)

---

### Component: Link

**Purpose:** Navigates to another page, section, or resource. Links are the primary text-based navigation element — distinct from buttons (which trigger actions).

**When to use Link vs Button:** Links navigate. Buttons act. If clicking takes the member to a new URL or scrolls to an anchor, it's a link. If clicking triggers an in-page action (submit, toggle, open modal), it's a button.

**Variants:**

#### Inline Link (within body text)
| State | Color | Weight | Decoration |
|-------|-------|--------|------------|
| Default | Blue 600 (`#2662D9`) | 500 (Medium) | None |
| Hover | Blue 800 (`#063598`) | 500 (Medium) | Underline |
| Active | Blue 800 (`#063598`) | 500 (Medium) | Underline |
| Visited | Blue 900 (`#0F2757`) | 500 (Medium) | None |
| Disabled | Neutral 500 (`#7A8691`) | 500 (Medium) | None |

#### Standalone Link (on its own line, e.g., "View all results")
| State | Color | Weight | Decoration |
|-------|-------|--------|------------|
| Default | Blue 600 | 500 (Medium) | None |
| Hover | Blue 800 | 500 (Medium) | Underline |
| Active | Blue 800 | 500 (Medium) | Underline |

**Specs:**
```
Font: inherits parent size, weight 500 (Medium)
Color: var(--text-link) / Blue 600
Hover color: var(--text-link-hover) / Blue 800
Transition: color 150ms ease, text-decoration-color 150ms ease
Cursor: pointer
Focus: 3px Blue 600 @ 40% opacity ring, 2px offset
```

**Usage:**
- **Use for:** "View details," "See all results," "Learn more," inline references within body text, breadcrumb links, footer navigation.
- **Don't use for:** Primary actions (use Button), destructive actions (use Destructive Button), or actions that don't navigate (use Tertiary Button styled as text).
- Links inside alerts or toasts should match the alert's text color but add underline to distinguish them.
- Never rely on color alone to distinguish links from body text — the medium weight (500 vs body's 400) provides a secondary signal.

**Accessibility:**
- Always use `<a href>` for navigation, never `<span>` or `<div>` with click handlers
- `aria-label` when link text is generic ("View details" → `aria-label="View details for Lot #12345678"`)
- External links: append `aria-label` with "(opens in new tab)" and use trailing external-link icon
- Skip-navigation link: first focusable element on every page

---

## 7.2 Input Components

### Component: Button

**Purpose:** Triggers actions. The most critical interactive element in the system.

**Anatomy:**
1. `button-container` — Outer interactive element
2. `button-icon-leading` — Optional icon before label
3. `button-label` — Text content
4. `button-icon-trailing` — Optional icon after label (e.g., arrow, dropdown chevron)
5. `button-loader` — Spinner replacing label during loading state

**6 Variants:**

#### Primary (Filled)
| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | Blue 600 | White | None |
| Hover | Blue 800 | White | None |
| Active/Pressed | `#042D7A` | White | None |
| Disabled | Neutral 200 | Neutral 500 | None |
| Loading | Blue 600 @ 70% opacity | Hidden | None |
| Focus | Blue 600 | White | `0 0 0 3px rgba(38,98,217,0.4)` ring |

#### Secondary (Outlined)
| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | White | Blue 600 | 1.5px solid Blue 600 |
| Hover | Blue 100 | Blue 800 | 1.5px solid Blue 800 |
| Active | Blue 200 | Blue 800 | 1.5px solid Blue 800 |
| Disabled | White | Neutral 300 | 1.5px solid Neutral 200 |

#### Tertiary (Ghost/Text)
| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | Transparent | Blue 600 | None |
| Hover | Blue 100 | Blue 800 | None |
| Active | Blue 200 | Blue 800 | None |
| Disabled | Transparent | Neutral 300 | None |

#### Destructive
| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | `#C22248` | White | None |
| Hover | `#8C1D35` | White | None |
| Active | `#6B1528` | White | None |
| Disabled | Neutral 200 | Neutral 500 | None |

#### Success / Confirm
| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | `#238202` | White | None |
| Hover | `#1B6600` | White | None |
| Active | `#145200` | White | None |
| Disabled | Neutral 200 | Neutral 500 | None |

#### CTA / Register (Orange Accent)
| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | `#D86518` (Orange 600) | White | None |
| Hover | `#933C06` (Orange 800) | White | None |
| Active | `#7A3205` | White | None |
| Disabled | Neutral 200 | Neutral 500 | None |

**Sizes:**

| Size | Height | Padding-X | Font | Border Radius | Icon Size |
|------|--------|-----------|------|---------------|-----------|
| XS | 28px | 10px | 12px / 500 | 6px | 14px |
| SM | 32px | 12px | 14px / 500 | 6px | 16px |
| MD | 40px | 16px | 14px / 500 | 8px | 18px |
| LG | 48px | 24px | 16px / 500 | 8px | 20px |
| XL | 56px | 32px | 18px / 600 | 10px | 22px |

**Icon-Only Variant:**
Square button — same height and width (e.g., MD = 40×40px). Used for Tertiary actions with universally understood icons: close (X), more (…), expand, collapse, watchlist heart. Always requires `aria-label`.

**Specs (all sizes):**
```
Font family: Inter
Cursor: pointer (default), not-allowed (disabled)
Transition: background 150ms ease, transform 100ms ease
Active transform: scale(0.98)
Min-width: 64px (label buttons), height×height (icon-only)
Icon-to-label gap: space-2 (8px)
Optical icon padding: .btn-icon-text class reduces left padding by 2px
  (e.g., MD with leading icon: 14px left, 16px right)
  This compensates for the icon's visual weight sitting closer to the edge.
No shadow on any button variant — color change alone signals state.
```

**Usage:**
- **One Primary per view.** The primary button represents the single most important action. *(Institutional Confidence — restraint creates authority.)*
- Use Secondary for competing actions (e.g., "Save Draft" next to "Publish").
- Use Tertiary for low-emphasis actions (e.g., "Cancel", "Learn more").
- Destructive is reserved for irreversible actions (e.g., "Delete Account").
- CTA Orange is reserved for registration, onboarding flows, and urgency/promotional emphasis. It should never compete with the Blue primary on the same surface.
- **Do NOT** stack multiple Primary buttons in a row. Demote lesser actions.

**Accessibility:**
- Minimum touch target: 44×44px (even if visually smaller, expand hit area with padding)
- `aria-disabled="true"` instead of `disabled` attribute when maintaining focus order
- Loading state: `aria-busy="true"`, `aria-label="Loading, please wait"`
- Icon-only buttons: require `aria-label` describing the action
- Focus ring: 3px Blue 600 @ 40% opacity, 2px offset

---

### Component: Text Field

**Purpose:** Single-line text input for forms — search queries, names, emails, VIN numbers, bid amounts.

**Anatomy:**
1. `field-container` — Wrapper for the full input group
2. `field-label` — Text label above input
3. `field-input` — The actual input element
4. `field-leading-icon` — Optional icon inside input (left)
5. `field-trailing-action` — Optional clear button or visibility toggle (right)
6. `field-helper` — Helper text or character count below input
7. `field-error` — Error message below input (replaces helper when active)

**States:**
| State | Border | Background | Label Color | Helper |
|-------|--------|-----------|-------------|--------|
| Default | 1.5px Neutral 300 | White | Neutral 700 | Neutral 500 |
| Hover | 1.5px Neutral 500 | White | Neutral 700 | Neutral 500 |
| Focus | 2px Blue 600 | White | Blue 600 | Neutral 500 |
| Filled | 1.5px Neutral 300 | White | Neutral 700 | Neutral 500 |
| Disabled | 1.5px Neutral 200 | Neutral 100 | Neutral 300 | Neutral 300 |
| Error | 2px `error-border` | `#FFF8F9` | `error-text` | `error-text` |
| Success | 2px `success-border` | White | Neutral 700 | `success-text` |
| Read-only | 1.5px Neutral 200 | Neutral 100 | Neutral 700 | Neutral 500 |

**Specs:**
```
Height: 44px (input only)
Border-radius: 8px
Padding: space-3 (12px) horizontal, centered vertical
Font: type-body (16px / 400)
Label: type-subheadline (14px / 600), margin-bottom space-3 (12px)
Helper/Error text: type-caption-1 (12px / 500), margin-top space-1 (4px)
Leading icon: 20px, Neutral 500, 12px from left edge
Trailing action: 20px touch target within input
Transition: border-color 150ms ease, box-shadow 150ms ease
Focus shadow: 0 0 0 3px rgba(38,98,217,0.15)
```

**Accessibility:**
- Every input requires a visible `<label>` linked via `for`/`id`
- Error messages linked with `aria-describedby`
- `aria-invalid="true"` when in error state
- `aria-required="true"` for mandatory fields
- Placeholder text is NOT a substitute for labels

---

### Component: Textarea

**Purpose:** Multi-line text input for longer-form content — notes, descriptions, dispute explanations, seller comments. Shares the same visual language as the Text Field so the two feel like siblings in any form.

**Anatomy:**
1. `textarea-container` — Wrapper for the full input group
2. `textarea-label` — Text label above input
3. `textarea-input` — The `<textarea>` element
4. `textarea-counter` — Character count below the field (right-aligned)
5. `textarea-error` — Error message below input (replaces counter position when active)

**States:**
| State | Border | Background | Shadow |
|-------|--------|-----------|--------|
| Default | 1.5px border-default | White | None |
| Hover | 1.5px Neutral 500 | White | None |
| Focus | 2px interactive-primary | White | shadow-focus |
| Error | 2px error-text | `#FFF8F9` | shadow-focus-error |
| Disabled | 1.5px Neutral 200 | bg-secondary | None, cursor not-allowed |

Disabled textareas use text-disabled for both the value text and the label. The field cannot be focused or resized.

**Specs:**
```
Border: 1.5px, border-default
Border-radius: radius-lg (12px)
Font: 16px / font-primary (Inter)
Padding: space-3 (12px) all sides
Min-height: 100px
Line-height: 1.5
Resize: vertical — user can grab the bottom-right corner to change height, horizontal resize disabled
Label: type-subheadline (14px / 600), margin-bottom space-3 (12px)
Focus shadow: 0 0 0 3px rgba(38,98,217,0.15)
Error shadow: 0 0 0 3px rgba(220,38,38,0.15)
Transition: border-color 150ms ease, box-shadow 150ms ease
```

**Character Count:** Displayed below the field, right-aligned. Format: "123 / 500" (current count, space, slash, space, max). Styled at 13px in text-tertiary color. When the count reaches 90% or more of the limit, the text switches to error-text to warn the member they are approaching the cap. If the field has no max length, omit the counter entirely.

**Accessibility:**
- Every textarea requires a visible `<label>` linked via `for`/`id`
- `aria-describedby` pointing to the character counter and/or error message
- `aria-invalid="true"` when in error state
- `aria-required="true"` for mandatory fields
- Placeholder text is NOT a substitute for labels

---

### Component: Dropdown / Select

**Purpose:** Single or multi-option selection from a predefined list. Used for Make, Model, Year, Location filters.

**Anatomy:**
1. `dropdown-trigger` — Button that opens the menu (styled like text field)
2. `dropdown-label` — Text label above trigger
3. `dropdown-menu` — Floating panel containing options
4. `dropdown-search` — Optional search/filter input within menu
5. `dropdown-option` — Individual selectable item
6. `dropdown-option-icon` — Checkmark for selected items
7. `dropdown-group-label` — Section divider within menu
8. `dropdown-empty` — "No results" message when search yields nothing

**States (Trigger):**
Same as Text Field states, with these overrides:
| State | Additional Visual |
|-------|------------------|
| Hover | Border changes to 1.5px Neutral 500 (no shadow — border only) |
| Open | Blue 600 border, chevron rotated 180°, menu visible |
| Has value | Display selected value in Neutral 900 (not placeholder color) |

**States (Option):**
| State | Background | Text |
|-------|-----------|------|
| Default | White | Neutral 700 |
| Hover | Blue 100 | Neutral 900 |
| Selected | Blue 200 | Blue 800, checkmark visible |
| Disabled | White | Neutral 300 |

**Specs:**
```
Trigger: same as Text Field (44px height, 8px radius)
Chevron icon: `chevron-down` from VDS icon set, 24px, Neutral 700, stroke style (not filled)
  Rotates 180° when open, transition 150ms ease
Menu: background White, border 1px Neutral 200, border-radius 12px
Menu shadow: 0 4px 16px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.06)
Menu max-height: 320px (scrollable)
Option height: 40px
Option padding: space-3 (12px) horizontal
Search input inside menu: 36px height, full-width, border-bottom divider
Animation: opacity 0→1, translateY(-4px→0), 150ms ease-out
z-index: 1100
```

**Variant: Multi-Select**

For cases where the user can pick more than one option (e.g., damage types, auction locations). Each option row includes a checkbox to the left of the label. The menu stays open on selection so members can pick several items without re-opening. The trigger displays the selected values as a comma-separated list; when the list overflows, it truncates with an ellipsis and shows a count badge to the LEFT of the label text. The trigger uses a `.trigger-label` flex wrapper with `align-items: center` for vertical centering. The count badge uses a gray background (Neutral 200) with text-primary text, 12px/600, `margin-right: space-2`, `flex-shrink: 0`.

Checkbox styling inside the menu: 18x18px box, radius-sm, 1.5px border. In the unselected state the box uses Neutral 300 border on a white background. In the selected state the box fills with interactive-primary and displays a white checkmark icon. These checkboxes follow the same hover behavior as standalone checkboxes (border darkens to Neutral 500 on hover when unchecked, background darkens to interactive-hover when checked).

**Variant: Searchable**

For long option lists (makes, models, locations) where scrolling alone is impractical. A search input is pinned to the top of the menu, separated from the option list by a border-bottom (1px Neutral 200). The input is 36px tall, uses 14px type at font-primary weight, has a #F8F8F9 background (hardcoded, not a token), and radius-md corners. A 14x14px search icon sits inside the input on the left. Below the search input, options render in a scrollable container with a max-height of 220px. The search input has an `oninput` handler that filters options by case-insensitive text match; options that don't match are hidden with `display: none`. When the search query yields no matches, the `dropdown-empty` slot displays "No results" in Neutral 500, centered.

**Accessibility:**
- Trigger: `role="combobox"`, `aria-expanded`, `aria-haspopup="listbox"`
- Menu: `role="listbox"`
- Options: `role="option"`, `aria-selected`
- Keyboard: Arrow keys navigate, Enter selects, Escape closes, type-ahead supported
- Multi-select: `aria-multiselectable="true"` on listbox

---

### Component: Toggle Switch

**Purpose:** Binary on/off control for settings and preferences (e.g., email notifications, dark mode).

**Anatomy:**
1. `toggle-container` — Wrapper with label
2. `toggle-track` — The elongated background pill
3. `toggle-thumb` — The circular sliding indicator
4. `toggle-label` — Descriptive text (always required)

**States:**
| State | Track BG | Thumb | Label |
|-------|---------|-------|-------|
| Off | Neutral 300 | White, left-positioned | Neutral 700 |
| Off + Hover | Neutral 500 | White, left-positioned | Neutral 700 |
| On | Blue 600 | White, right-positioned | Neutral 700 |
| On + Hover | Blue 800 | White, right-positioned | Neutral 700 |
| Disabled Off | Neutral 200 | Neutral 100, left | Neutral 300 |
| Disabled On | Blue 600 @ 40% | Neutral 100, right | Neutral 300 |
| Focus | — | — | Focus ring on track: `0 0 0 3px rgba(38,98,217,0.4)` |

**Specs:**
```
Track: 48px × 28px, border-radius 14px (pill)
Thumb: 22px × 22px circle, 3px inset from track edge
Thumb shadow: 0 1px 3px rgba(0,0,0,0.15)
Transition: background 200ms ease, transform 200ms var(--ease-spring)
Gap (toggle to label): space-3 (12px)
```

**Usage:**
- Use for settings that take effect immediately (no "Save" button needed).
- Do NOT use for form fields that require submission — use checkboxes instead.
- Always pair with a visible label. Never use a toggle without explanatory text.

**Accessibility:**
- `role="switch"`, `aria-checked="true|false"`
- `aria-label` or associated `<label>` required
- Keyboard: Space/Enter toggles state
- Minimum touch target: 44×44px (expand hit area beyond visual track)

---

### Component: Watchlist Toggle

**Purpose:** Lets users save or remove a lot from their watchlist. Appears on lot cards, lot detail pages, and search results.

**Anatomy:**
1. `watchlist-toggle` — Clickable wrapper (button semantics)
2. `watchlist-icon` — Heart outline (default) or filled heart (saved)
3. `watchlist-label` — Optional visible text ("Save" / "Saved")

**Variants:**
| Variant | Shows | Use for |
|---------|-------|---------|
| Icon + Label | Heart icon + text label | Lot detail page, anywhere space permits |
| Icon-Only | Heart icon only, no label | Lot cards in grid, compact table rows, toolbar actions |

**States:**
| State | Icon | Label | Behavior |
|-------|------|-------|----------|
| Default (unsaved) | Heart outline, Neutral 500 | "Save" | — |
| Hover (unsaved) | Heart outline, Blue 600 | "Save" | Cursor pointer |
| Saving | Spinner replacing icon | "Saving…" | Disable interaction |
| Saved | Filled heart, error-icon (#C22248) | "Saved" | Scale bounce (celebration) |
| Hover (saved) | Filled heart, Neutral 500 | "Remove" | Label changes to remove action |
| Removing | Spinner replacing icon | "Removing…" | Disable interaction |
| Disabled | Heart outline, Neutral 300 | "Save" (Neutral 300) | Opacity 0.5 |

**Specs:**
```
Icon size: 24px (default), 20px (compact/card)
Icon-only button: 40px × 40px (MD), 32px × 32px (SM)
Icon + Label gap: space-2 (8px)
Label: type-subheadline (14px / 600)
Touch target: 44×44px minimum
Saved heart color: error-icon (#C22248) — red/rose heart convention
Save animation: scale(1.2) → scale(1), 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)
Spinner: 16px, currentColor
```

**Usage:**
- Use Icon + Label on lot detail pages and anywhere the action needs to be explicit.
- Use Icon-Only on lot cards, search result grids, and compact table rows.
- Hover on a saved item changes label to "Remove" to clearly communicate the toggle action.
- Save animation uses the celebration register (scale bounce) — keep it subtle but rewarding.

**Accessibility:**
- `<button>` element with `aria-pressed="true|false"`.
- `aria-label="Save lot [number] to watchlist"` / `"Remove lot [number] from watchlist"`.
- Loading state: `aria-busy="true"`, `aria-label="Saving to watchlist"`.
- Icon is `aria-hidden="true"` — the button label conveys meaning.

---

### Component: Checkbox

**Purpose:** Multi-select control for forms and filter panels. Allows zero or more selections.

**Anatomy:**
1. `checkbox-container` — Wrapper for input + label
2. `checkbox-input` — The visual box indicator
3. `checkbox-icon` — Checkmark or minus (indeterminate) icon
4. `checkbox-label` — Descriptive text

**States:**
| State | Box Border | Box BG | Icon |
|-------|-----------|--------|------|
| Unchecked | 1.5px Neutral 300 | White | None |
| Unchecked Hover | 1.5px Neutral 500 | Neutral 50 | None |
| Checked | None | Blue 600 | White checkmark |
| Checked Hover | None | interactive-hover | White checkmark |
| Indeterminate | None | Blue 600 | White minus line |
| Disabled Unchecked | 1.5px Neutral 200 | Neutral 100 | None |
| Disabled Checked | None | Neutral 300 | White checkmark |
| Error | 1.5px error-border | White or Blue 600 | — |
| Focus | — | — | `0 0 0 3px rgba(38,98,217,0.4)` ring |

**Hover Behavior:** When the user hovers an unchecked checkbox, the border darkens from Neutral 300 to Neutral 500 and the box picks up a subtle Neutral 50 background fill, giving a soft "I'm interactive" cue without jumping to the brand color. When the user hovers a checked checkbox, both the background fill and border darken to interactive-hover, reinforcing that the control is active and clickable.

**Specs:**
```
Box size: 20px × 20px
Border-radius: 4px
Checkmark icon: 14px, stroke-width 2px
Gap (box to label): space-2 (8px)
Label: type-body (16px / 400)
Group spacing (between checkboxes): space-3 (12px) vertical
Touch target: 44px minimum height per row
Transition: background 100ms ease, border-color 100ms ease
```

**Accessibility:**
- Native `<input type="checkbox">` with custom visuals via CSS
- `aria-checked="mixed"` for indeterminate state
- Groups wrapped in `<fieldset>` with `<legend>`
- Keyboard: Space toggles, Tab moves between checkboxes

---

### Component: Radio Button

**Purpose:** Single-select control within a mutually exclusive group.

**Anatomy:**
1. `radio-container` — Wrapper for input + label
2. `radio-input` — The circular indicator
3. `radio-dot` — Inner filled circle (when selected)
4. `radio-label` — Descriptive text

**States:**
| State | Border | Fill | Dot |
|-------|--------|------|-----|
| Unselected | 1.5px Neutral 300 | White | None |
| Unselected Hover | 1.5px Neutral 500 | Neutral 50 | None |
| Selected | 1.5px Blue 600 | White | Blue 600 (10px) |
| Selected Hover | 1.5px interactive-hover | White | interactive-hover |
| Disabled Unselected | 1.5px Neutral 200 | Neutral 100 | None |
| Disabled Selected | 1.5px Neutral 300 | Neutral 100 | Neutral 300 |
| Focus | — | — | Focus ring on outer circle |

**Hover Behavior:** When the user hovers an unselected radio, the border darkens from Neutral 300 to Neutral 500 and the circle gets a subtle Neutral 50 background fill — a gentle affordance without committing to the brand color. When the user hovers a selected radio, the border darkens to interactive-hover, signaling the control is re-clickable (useful in group contexts where changing selection is common).

**Specs:**
```
Outer circle: 20px × 20px
Inner dot: 10px × 10px (centered)
Border-radius: 50% (both)
Gap (circle to label): space-2 (8px)
Label (unselected): type-body (16px / 400)
Label (selected): type-body-emphasis (16px / 600) — bold signals active choice
Group spacing: space-3 (12px) vertical between options
Touch target: 44px minimum height
```

**Accessibility:**
- Native `<input type="radio">` within `<fieldset>` + `<legend>`
- Same `name` attribute for all radios in a group
- Arrow keys navigate within group, Tab moves between groups

---

### Component: Slider / Range

**Purpose:** Numeric range selection — used for price range, mileage range, year range in vehicle filters.

**Anatomy:**
1. `slider-container` — Full component wrapper
2. `slider-label` — Description above slider
3. `slider-track` — Background rail
4. `slider-fill` — Colored portion showing selected range
5. `slider-thumb` — Draggable handle(s) — one for single, two for range
6. `slider-value` — Current value display (tooltip or inline)
7. `slider-min-label` / `slider-max-label` — Range endpoints

**States:**
| State | Track | Fill | Thumb |
|-------|-------|------|-------|
| Default | Neutral 200 | Blue 600 | White, 1.5px Blue 600 border |
| Hover | Neutral 200 | Blue 600 | White, 2px Blue 800 border, scale(1.1) |
| Active/Dragging | Neutral 200 | Blue 600 | Blue 600 fill, scale(1.15) |
| Disabled | Neutral 100 | Neutral 300 | Neutral 200 |
| Focus | Neutral 200 | Blue 600 | Focus ring on thumb |

**Specs:**
```
Track height: 4px, border-radius 2px
Thumb: 24px × 24px circle
Thumb shadow: 0 1px 4px rgba(0,0,0,0.15)
Value tooltip: type-caption-1, Blue 900 on Blue 200 bg, 4px radius, appears on hover/drag
Min/Max labels: type-caption-1, Neutral 500
Touch target: 44×44px on thumb (expanded beyond visual circle)
Transition: transform 100ms ease
```

**Accessibility:**
- `role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-valuetext`
- For range: two thumbs, each with own aria attributes
- Keyboard: Arrow keys adjust by step, Page Up/Down by larger step, Home/End for min/max
- `aria-label` describing what the slider controls

**Variants:**

| Variant | Thumbs | Use case |
|---------|--------|----------|
| Single (default) | 1 | Set a single value — e.g., "max price" |
| Range | 2 | Set a low–high range — e.g., "mileage between X and Y" |

**Range variant anatomy:**
1. `range-slider` — Positioning wrapper (replaces native `<input>`)
2. `range-slider-fill` — Colored bar between the two thumbs
3. Two `<input type="range">` — Overlaid transparently; pointer-events only on thumbs
4. `range-slider-labels` — Displays current low and high values
5. `range-slider-minmax` — Endpoint labels (min/max of the full scale)

**Range variant specs:**
```
Same track, thumb, and state styles as single slider.
Two range inputs stacked with `position: absolute`, transparent backgrounds.
Fill bar positioned via JS: left = % of low thumb, width = % span between thumbs.
Thumbs cannot cross — JS enforces lo ≤ hi.
Min/Max endpoint labels: type-caption-1 (12px/500), Neutral 500, below the slider.
Value labels: same as single slider-value, displayed at left (low) and right (high).
```

**Range variant accessibility:**
- Each thumb gets its own `aria-label` (e.g., "Minimum mileage", "Maximum mileage")
- Each thumb gets `aria-valuetext` updated on change (e.g., "25,000 mi")
- Tab moves between the two thumbs; Arrow keys adjust the focused thumb
- Screen readers announce each thumb's label and current value independently

---

## 7.3 Feedback Components

### Component: Alert / Banner

**Purpose:** System-level messages that inform, warn, or require attention. Persist until dismissed or resolved.

**Anatomy:**
1. `alert-container` — Outer wrapper with semantic background
2. `alert-icon` — Leading icon matching severity
3. `alert-content` — Title + description wrapper
4. `alert-title` — Bold headline (optional)
5. `alert-description` — Detail text
6. `alert-action` — Optional CTA link or button
7. `alert-dismiss` — Close/X button (if dismissible)

**Variants (by severity):**
| Variant | Background | Icon | Icon Color |
|---------|-----------|------|-----------|
| Info | `info-bg` | Info circle | `info-icon` |
| Success | `success-bg` | Checkmark circle | `success-icon` |
| Warning | `warning-bg` | Triangle exclamation | `warning-icon` |
| Error | `error-bg` | Octagon exclamation | `error-icon` |

**Behavior Variants:**
| Variant | Description |
|---------|-------------|
| Static | No dismiss button. Persists until the condition resolves (e.g., system-wide maintenance banner). |
| Dismissible | Includes close/X button (`alert-dismiss`). User can remove. Use for non-critical info and success alerts. |
| With Link | Includes an inline text link in the description for "Learn more", "View details", or navigating to a related page. Link uses `text-link` color, underline on hover. |
| Dismissible + Link | Both dismiss button and inline link. Most common pattern for info alerts with optional follow-up. |

**States:**
| State | Behavior |
|-------|----------|
| Visible | Full opacity, normal layout flow |
| Entering | Slide down + fade in, 200ms ease-out |
| Dismissing | Fade out + collapse height, 200ms ease-in |
| Dismissed | `display: none`, removed from flow |

**Layout:** The alert uses `display: flex` with `align-items: flex-start` (not center). This keeps the icon pinned to the top of the first text line rather than floating to the vertical middle when the description wraps to multiple lines. The icon gets `margin-top: 1px` to visually align its optical center with the title baseline.

**Dismissible Variant Details:** The close button is the last flex child, pushed to the top-right of the container. It has a 20x20px hit target containing a 16x16px SVG X icon. The icon uses `currentColor` at 50% opacity by default, rising to 80% opacity on hover. The button has no background, no border, and no visible chrome — just the icon.

**Dismiss Animation:** When a member clicks dismiss, the alert runs an `alertOut` keyframe over 300ms with ease timing. The keyframe fades opacity from 1 to 0 while simultaneously collapsing the element's height, padding, and margin to zero, smoothly removing the alert from document flow without a jarring layout shift.

**Specs:**
```
Border-radius: 8px
Padding: space-4 (16px)
Layout: display flex, align-items flex-start, gap space-3 (12px)
Icon: 20px, flex-shrink 0, margin-top 1px
Gap (icon to content): space-3 (12px)
Title: type-subheadline (14px / 600), matching text color per variant
Description: type-body (16px / 400), matching text color per variant
Dismiss button: last flex child, 20×20 hit target, 16×16 SVG X icon, currentColor at 50% opacity (80% on hover), no background, no border
Inline link: type-body (16px / 500), text-link color, underline on hover
Min-height: 48px
Dismiss animation: alertOut keyframe, 300ms ease — opacity 1→0, height/padding/margin collapse to 0
```

**Usage:**
- Info: Non-critical announcements (e.g., "Auction schedule updated for your timezone").
- Success: Completed actions (e.g., "Your bid of $4,500 was placed successfully").
- Warning: Important caution (e.g., "Your deposit covers bids up to $2,000").
- Error: Failed actions (e.g., "Bid could not be submitted. Please try again").
- **Do NOT** use alerts for validation errors on individual form fields — use inline field errors instead.

**Accessibility:**
- `role="alert"` for error and warning variants (announces to screen readers immediately)
- `role="status"` for info and success variants
- Dismiss button: `aria-label="Dismiss alert"`
- Focus should not automatically move to alerts

---

### Component: Toast / Snackbar

**Purpose:** Transient, non-blocking feedback that auto-dismisses. For lightweight confirmations that don't require user action.

**Anatomy:**
1. `toast-container` — Floating wrapper
2. `toast-icon` — Status icon (optional)
3. `toast-message` — Short descriptive text
4. `toast-action` — Optional action link (e.g., "Undo")
5. `toast-dismiss` — Close button (optional)

**Variants:**
| Variant | Background | Text | Icon |
|---------|-----------|------|------|
| Neutral | Neutral 900 | White | None |
| Success | `#1B6600` | White | Checkmark |
| Error | `#8C1D35` | White | Exclamation |

**Specs:**
```
Position: fixed, bottom 24px, center horizontal (desktop) / full-width minus margins (mobile)
Min-width: 320px (desktop), calc(100% - 32px) (mobile)
Max-width: 560px
Padding: space-3 (12px) vertical, space-4 (16px) horizontal
Border-radius: 10px
Shadow: 0 8px 24px rgba(0,0,0,0.16)
Font: type-body (16px / 400), White
Auto-dismiss: 5s default, 8s with action link, indefinite for errors
Enter animation: translateY(16px) → 0, opacity 0 → 1, 250ms ease-out
Exit animation: opacity 1 → 0, 200ms ease-in
z-index: 2000
Max stack: 3 toasts visible simultaneously, newest on bottom
```

**Usage:**
- Use for confirmations of completed actions: "Vehicle added to Watchlist."
- Use when the action is easily reversible and provides an "Undo" link.
- **Do NOT** use for errors that require user action — use Alerts or Modals.
- **Do NOT** use for critical information that users must read — toasts auto-dismiss.

**Accessibility:**
- `role="status"`, `aria-live="polite"` (does not interrupt screen reader)
- Error toasts: `role="alert"`, `aria-live="assertive"`
- Action link must be keyboard-focusable before auto-dismiss
- Hover pauses the auto-dismiss timer

---

### Component: Modal / Dialog

**Purpose:** Focused overlays for critical decisions, confirmations, and secondary workflows that require attention before proceeding.

**Anatomy:**
1. `modal-backdrop` — Full-screen overlay scrim
2. `modal-container` — Centered content panel
3. `modal-header` — Title + close button
4. `modal-body` — Scrollable content area
5. `modal-footer` — Action buttons (primary right, secondary left)

**Variants:**
| Variant | Width | Use Case |
|---------|-------|----------|
| Small | 400px | Confirmations, simple prompts |
| Medium | 560px | Forms, detail views |
| Large | 720px | Complex workflows, data tables |
| Full (mobile) | 100% - 32px | All modals on mobile become near-full-screen |

**States:**
| State | Backdrop | Panel |
|-------|---------|-------|
| Opening | opacity 0 → 0.5 (200ms) | scale(0.95) → 1, opacity 0 → 1 (200ms ease-out) |
| Open | `rgba(0,0,0,0.5)` | Full opacity, normal |
| Closing | opacity 0.5 → 0 | scale(1) → 0.95, opacity 1 → 0 (150ms ease-in) |

**Specs:**
```
Backdrop: rgba(0,0,0,0.5), z-index 1500
Panel: background White, border-radius 16px (desktop) / 16px top only (mobile bottom sheet)
Panel shadow: 0 24px 48px rgba(0,0,0,0.2)
Header padding: space-6 (24px) horizontal, space-5 (20px) vertical
Header title: type-title-2 (22px / 700)
Close button: 24px icon, top-right, Neutral 500 → Neutral 900 on hover
Body padding: space-6 (24px)
Body max-height: calc(80vh - header - footer), overflow-y auto
Footer padding: space-4 (16px) space-6 (24px)
Footer: border-top 1px Neutral 200, flex with justify-end, gap space-3 (12px)
```

**Usage:**
- Use for irreversible actions requiring confirmation (e.g., "Confirm your bid of $12,000?").
- Use for focused forms that shouldn't lose context (e.g., "Update payment method").
- **Do NOT** use for content that could be inline — modals interrupt flow.
- **Do NOT** nest modals within modals.

**Accessibility:**
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing to title
- Focus trap: Tab cycles only within modal contents
- On open: focus moves to first interactive element (or close button)
- On close: focus returns to the element that triggered the modal
- Escape key closes the modal
- Backdrop click closes (unless `persistent` variant)

---

### Component: Shelf / Drawer

**Purpose:** Edge-anchored slide-in panels for secondary workflows, detail views, filters, and immersive experiences that maintain context with the underlying page.

**When to use Shelf vs Modal:** *(Progressive Mastery — information at the right depth.)*
- **Shelf** — Member needs to reference the page behind it, content is browseable or scrollable (vehicle detail, filters, search), or the task involves multiple steps.
- **Modal** — Focused, blocking confirmation (bid, delete, payment) that requires a single decision.

**Anatomy:**
1. `shelf-backdrop` — Full-screen overlay scrim
2. `shelf-panel` — Edge-anchored sliding container
3. `shelf-header` — Title + close button (sticky top)
4. `shelf-body` — Scrollable content area
5. `shelf-footer` — Optional action buttons (sticky bottom)

**Desktop Variants (Side):**
| Side | Class | Default | Use Case |
|------|-------|---------|----------|
| Right | `shelf-right` | Yes | Most workflows: detail, forms, lists |
| Left | `shelf-left` | No | Rare: navigation, filter panels |

**Desktop Variants (Width):**
| Variant | Width | Class | Use Case |
|---------|-------|-------|----------|
| Narrow | 360px | `shelf-narrow` | Filters, quick actions, settings |
| Medium | 480px | `shelf-medium` | Vehicle detail, forms, lists |
| Wide | 640px | `shelf-wide` | Complex workflows, data tables |
| Full | 100vw | `shelf-full` | Search, immersive flows (X to close) |

**Mobile Variants (Height):**
On mobile (< 768px), all shelves become bottom sheets regardless of side class.

| Variant | Height | Use Case |
|---------|--------|----------|
| Peek | 40vh | Quick actions, confirmations |
| Half | 60vh | Filters, short forms |
| Tall | 85vh | Detail views, long forms |
| Full | 100vh | Search, immersive (no handle, X to close) |

Mobile shelves include a drag handle (36 x 4px, Neutral 300, centered) except Full variant.

**States:**
| State | Backdrop | Panel (Desktop) | Panel (Mobile) |
|-------|----------|-----------------|----------------|
| Opening | opacity 0 → 0.5 (200ms) | translateX(100%) → 0 (300ms ease-enter) | translateY(100%) → 0 (400ms ease-enter) |
| Open | `rgba(0,0,0,0.5)` | Full position, normal | Full position, normal |
| Closing | opacity 0.5 → 0 | translateX(0 → 100%) (200ms ease-exit) | translateY(0 → 100%) (200ms ease-exit) |

Left shelf mirrors X direction: translateX(-100%) → 0 on open.

**Specs:**
```
Backdrop: rgba(0,0,0,0.5), z-index 1400
Panel: background White, height 100vh (desktop) / variant-based (mobile)
Panel border-radius: 16px on open side only (desktop), 20px 20px 0 0 (mobile)
Panel shadow: 0 24px 48px rgba(0,0,0,0.2)
Header: sticky top, border-bottom 1px Neutral 200
Header padding: space-5 (20px) vertical, space-6 (24px) horizontal
Header title: type-title-2 (20px / 700)
Close button: 32px, Neutral 500 → Neutral 900 on hover
Body padding: space-5 (20px) vertical, space-6 (24px) horizontal
Body: flex 1, overflow-y auto
Footer: sticky bottom, border-top 1px Neutral 200
Footer padding: space-4 (16px) space-6 (24px)
Footer layout: display flex, justify-content flex-end, gap space-3 (12px). All action buttons group together on the right — tertiary and primary sit side by side, right-aligned. Never use space-between to float the secondary or tertiary action to the left. When a single primary button is present, it spans full width.
Open animation: 300ms ease-enter (desktop), 400ms ease-enter (mobile)
Close animation: 200ms ease-exit
Mobile handle: 36 x 4px, Neutral 300, border-radius 2px, centered, 8px top margin
Full shelf: no border-radius, no handle, close button only
```

**Usage:**
- Default to `shelf-right` for most use cases. Use `shelf-left` only for navigation or filter panels.
- Use `shelf-full` for search screens or immersive experiences that need the full viewport.
- Always include a visible close button in the header. Do not rely solely on backdrop click.
- On mobile, choose the smallest height variant that fits the content to preserve page context.
- **Do NOT** use shelves for simple confirmations — use a modal instead.
- **Do NOT** open a shelf from within another shelf.

**Accessibility:**
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing to shelf title
- Focus trap: Tab cycles only within shelf contents
- On open: focus moves to first interactive element (or close button)
- On close: focus returns to the element that triggered the shelf
- Escape key closes the shelf
- Backdrop click closes the shelf

---

### Component: Progress Indicator

**Purpose:** Communicates that work is happening and optionally how much remains.

**Variants:**

#### Spinner (Indeterminate)
```
Size: 20px (inline), 32px (component), 48px (page)
Stroke: 3px, Blue 600
Animation: rotate 360° in 800ms linear infinite + dash offset
Background track: Neutral 200 (10% opacity)
```

#### Progress Bar (Determinate)
```
Track: full-width, 6px height, Neutral 200, border-radius 3px
Fill: Blue 600, border-radius 3px, width = percentage
Label: type-caption-1, Neutral 700, right-aligned above bar
Transition: width 300ms ease-out
```

#### Step Indicator (Multi-step flows)
```
Steps: numbered circles (28px) connected by lines
Completed: Blue 600 fill, white checkmark
Current: Blue 600 border, Blue 600 number
Upcoming: Neutral 300 border, Neutral 500 number
Connector: 2px line, Blue 600 (completed) or Neutral 200 (upcoming)
Label below each step: type-caption-1
```

**Accessibility:**
- Spinner: `role="status"`, `aria-label="Loading"`
- Progress bar: `role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`
- Step indicator: `aria-current="step"` on current step

---

### Component: Skeleton Screen

**Purpose:** Placeholder content shown while data loads. Reduces perceived wait time by showing the shape of incoming content.

**Specs:**
```
Shape: Matches the component it replaces (rectangle for text, circle for avatar, rounded rect for card)
Background: Neutral 100
Animation: shimmer — linear-gradient(90deg, Neutral 100 25%, Neutral 200 50%, Neutral 100 75%)
  background-size: 200% 100%
  animation: shimmer 1.5s infinite ease-in-out
Border-radius: matches the target component (4px for text lines, 50% for avatars, 8px for cards)
Text skeleton line height: 16px, with 8px gap between lines
Text skeleton width: varies (100%, 80%, 60%) to feel natural
```

**Usage:**
- Use for any content area that takes >300ms to load.
- Match the layout of the real content as closely as possible.
- **Do NOT** combine skeletons with spinners — use one loading pattern per area.

**Accessibility:**
- Container: `aria-busy="true"`, `aria-label="Loading content"`
- Remove `aria-busy` and add real content when loaded

---

## 7.4 Data Display Components

### Component: Card

**Purpose:** Contained unit of related content — the primary way vehicles, lots, and items are presented in search results and dashboards.

**Anatomy:**
1. `card-container` — Outer wrapper
2. `card-media` — Image/thumbnail area (top or left)
3. `card-badge` — Overlay badge on media (e.g., "Live", "Buy Now", lot type)
4. `card-body` — Content area
5. `card-title` — Primary heading
6. `card-subtitle` — Secondary info (year, make, model)
7. `card-meta` — Metadata grid (mileage, damage type, location)
8. `card-footer` — Action area (bid button, watchlist icon, price)

**Variants:**
| Variant | Layout | Usage |
|---------|--------|-------|
| Vertical | Image top, content below | Grid view search results |
| Horizontal | Image left, content right | List view search results |
| Compact | Small image + single line info | Watchlist, dashboard widgets |
| Featured | Large image, overlay gradient text | Homepage hero vehicles |
| Stat | No image, number + label + trend | Dashboard KPI cards |

**States:**
| State | Visual Change |
|-------|--------------|
| Default | White background, subtle border or shadow |
| Hover | `box-shadow: 0 4px 12px rgba(0,0,0,0.08)`, translateY(-2px) |
| Active/Pressed | `box-shadow: 0 2px 4px rgba(0,0,0,0.08)`, translateY(0) |
| Selected | Blue 200 background, 2px Blue 600 border |
| Loading | Skeleton screen replacement |

**Specs:**
```
Border-radius: 12px
Border: 1px solid Neutral 200 OR shadow: 0 1px 3px rgba(0,0,0,0.06)
Background: White (light) / surface-secondary (dark)
Padding (body): space-4 (16px)
Media aspect ratio: 4:3 (all lot images — vehicles and equipment)
Title: type-title-3 (18px / 600)
Gap (title to subtitle): space-1 (4px)
Subtitle: type-body (16px / 400), Neutral 700
Gap (subtitle to meta): space-2 (8px)
Meta: type-caption-1 (12px / 500), Neutral 500
Footer: border-top 1px Neutral 200, padding space-3 (12px) space-4 (16px)
Button group in footer: space-3 (12px) gap between buttons, max 2 buttons
Hover transition: transform 200ms ease, box-shadow 200ms ease
Gap between cards in grid: space-6 (24px)
```

**Usage:**
- Use vertical cards in grid layouts (2-4 columns depending on breakpoint).
- Use horizontal cards in list views for scanning efficiency.
- Always include alt text for vehicle images.
- **Do NOT** overload cards with actions — max 2 actions per card (primary + secondary).

**Accessibility:**
- Card as `<article>` or `role="group"` with `aria-label` summarizing content
- If entire card is clickable: `<a>` wrapping card with accessible name
- Images: `alt` text describing vehicle (e.g., "2019 Toyota Camry SE, front-left view, minor front damage")
- Badge: include text content, not just color (e.g., "Live Auction" not just a green dot)

---

### Component: Table

**Purpose:** Dense, structured data display for lot listings, bid history, transaction records, and dashboards.

> **Vault principle:** Tables are a last resort. Prefer cards, lists, or stat blocks when data permits. Use tables only when comparison across multiple simultaneous dimensions is the primary task — e.g., a dismantler scanning a sale list across yard, make, damage type, and bid amount. The Vault's density philosophy: spacing does the work, not borders. If you remove every border and background and the structure is still readable, the density is well-designed. See [Vault > density-philosophy.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/craft/density-philosophy.md).

**Anatomy:**
1. `table-container` — Scrollable wrapper
2. `table-header` — Fixed header row
3. `table-header-cell` — Individual column header (with optional sort indicator)
4. `table-body` — Scrollable data rows
5. `table-row` — Individual data row
6. `table-cell` — Individual data cell
7. `table-footer` — Summary row or pagination

**States:**
| Element | Default | Hover | Selected | Sorted |
|---------|---------|-------|----------|--------|
| Header cell | Neutral 100 bg, Neutral 900 text, 600 weight | — | — | Blue 600 text + sort arrow |
| Body row | White bg | Neutral 100 bg | Blue 200 bg | — |
| Alternating row | Neutral 50 bg | Neutral 100 bg | Blue 200 bg | — |
| Cell | Neutral 700 text | — | — | — |

**Specs:**
```
Header: height 44px, padding space-3 (12px) horizontal
Header font: type-subheadline (14px / 600), Neutral 900
Cell: min-height 48px, padding space-3 (12px) horizontal, vertical center
Cell font: type-body (16px / 400), Neutral 700
Monospace cells (VIN, Lot#, Price): JetBrains Mono, 15px
Border: 1px solid Neutral 200 between rows
Sort icon: 12px, Neutral 300 (unsorted) / Blue 600 (sorted)
Horizontal scroll: on mobile/tablet when columns exceed viewport
Sticky first column: optional, with subtle shadow on scroll
Zebra striping: tr:nth-child(even) td { background: #F8F8F9; } — intentional hardcoded value (not a token) for subtlety
Hover overrides zebra: var(--neutral-100)
```

**Responsive behavior:**
- Desktop: Full table with all columns
- Tablet: Hide lower-priority columns, horizontal scroll
- Mobile: Convert to stacked card layout, or horizontal scroll with sticky first column

**Accessibility:**
- Semantic `<table>`, `<thead>`, `<tbody>`, `<th scope="col">`, `<td>`
- Sortable headers: `aria-sort="ascending|descending|none"`
- `aria-label` on table describing its content
- Row selection: `aria-selected="true"` on selected rows
- Caption: `<caption>` with table description (can be visually hidden)

---

### Component: List

**Purpose:** Vertical sequence of related items — watchlist vehicles, auction schedule, notifications.

**Anatomy:**
1. `list-container` — Outer wrapper (`<ul>` or `<ol>`)
2. `list-item` — Individual row
3. `list-item-leading` — Icon, avatar, or thumbnail (left)
4. `list-item-content` — Title + subtitle text (center)
5. `list-item-trailing` — Metadata, badge, or action (right)
6. `list-divider` — Separator between items (optional)

**Variants:**
| Variant | Leading | Content | Trailing |
|---------|---------|---------|----------|
| Simple | None | Title only | Chevron |
| Two-line | Icon (24px) | Title + subtitle | Metadata text |
| Three-line | Thumbnail (48px) | Title + subtitle + description | Badge or action |
| Interactive | Checkbox or radio | Title + subtitle | — |

**Specs:**
```
Item min-height: 48px (simple), 64px (two-line), 80px (three-line)
Padding: space-4 (16px) horizontal
Leading icon: 24px, Neutral 500
Leading thumbnail: 48px × 48px, 6px radius
Title: type-body (16px / 500)
Subtitle: type-caption-1 (12px / 400), Neutral 500
Divider: 1px solid Neutral 200, inset from leading edge
Hover: Neutral 100 background
Active: Neutral 200 background
Zebra striping: .list-item:nth-child(even) { background: #F8F8F9; } — intentional hardcoded value (not a token) for subtlety
Hover overrides zebra: var(--neutral-100)
```

**Accessibility:**
- Semantic `<ul>` / `<ol>` with `<li>` items
- Interactive items: `role="button"` or wrapped in `<a>`
- Leading icons: `aria-hidden="true"` if decorative

---

### Component: Stat / KPI

**Purpose:** Single numeric metric with label and optional trend indicator — used on dashboards and auction summaries.

**Anatomy:**
1. `stat-container` — Wrapper (often within a Stat Card)
2. `stat-label` — What is being measured
3. `stat-value` — The numeric value
4. `stat-trend` — Up/down arrow with percentage change
5. `stat-period` — Time range context

**Specs:**
```
Value: type-display-sm or type-headline (responsive), Neutral 900, font-weight 800
  Monospace for financial values: JetBrains Mono
Label: type-caption-1 (12px / 500), Neutral 500, uppercase with 0.08em tracking
Trend up: success-icon color, up arrow
Trend down: error-icon color, down arrow
Trend font: type-subheadline (14px / 600)
Period: type-caption-2 (12px), Neutral 500
Gap (value to trend): space-2 (8px)
Gap (value to label): space-1 (4px)
```

**Usage Rules:**
- No decorative accent bars, lines, or "toenails." The stat component is value + label + optional trend — no visual ornamentation.
- Use in dashboard widget rows and auction summary cards.
- Financial values in compare contexts (dashboard rows, multi-stat cards) use JetBrains Mono. Singular hero numbers (win amount, buy-it-now) use Inter.
- Always provide a period/context label (e.g., "Last 30 days").

---

### Component: Chart (Specification Only)

**Purpose:** Visual data representation for dashboards — bid activity, sales trends, inventory levels.

**Chart Types Supported:** Line, Bar, Donut, Area

**Color Sequence (for multi-series):**
1. Blue 600 (`#2662D9`)
2. `#5B8EF0` (Light Blue)
3. `#0F2757` (Dark Navy)
4. `#EC9C0D` (Amber)
5. `#238202` (Green)
6. `#7A8691` (Gray)

**Specs:**
```
Axis labels: type-caption-1, Neutral 500
Grid lines: 1px, Neutral 200, dashed
Tooltip: White bg, 8px radius, shadow 0 4px 12px rgba(0,0,0,0.12)
  Title: type-subheadline (14px / 600)
  Value: type-body (16px / 500)
Legend: type-caption-1, 12px color swatch, space-4 gap between items
Minimum chart height: 200px (mobile), 300px (desktop)
Responsive: reduce data point density on mobile, maintain touch target on interactive points
```

**Accessibility:**
- Provide `<table>` fallback for screen readers with the same data
- All colors must be distinguishable by pattern/shape, not just hue
- Interactive tooltips keyboard-accessible via arrow keys

---

### Component: Tooltip

**Purpose:** Brief contextual hint that appears on hover or keyboard focus. Dark background, no interaction inside. Use for supplementary info that doesn't warrant permanent screen space.

**Anatomy:**
1. `tooltip-trigger` — The element being hovered/focused (icon, text, truncated label)
2. `tooltip-bubble` — The dark floating container
3. `tooltip-arrow` — Directional pointer toward the trigger
4. `tooltip-text` — 1–2 lines of plain text (no links, no buttons)

**Placement:** Top (default), Bottom, Left, Right — auto-flip when near viewport edge.

**Specs:**
```
Background: Neutral 900 (#2F333C)
Text: White (#FFFFFF), type-caption-1 (12px / 500)
Padding: space-2 (8px) horizontal, space-1 (4px) vertical
Border-radius: radius-sm (4px)
Max-width: 240px
Arrow: 6px equilateral triangle, same color as background
Shadow: shadow-md
Show delay: 300ms hover, 0ms focus
Hide delay: 100ms
Animation: fade in, 100ms ease-out
Z-index: z-dropdown (1100)
```

**Usage:**
- **Use for:** Explaining an icon's meaning, showing full text for a truncated label, clarifying a form field, brief definition of a term.
- **Don't use for:** Content longer than 2 short sentences, interactive content (links, buttons), critical information the user must see. Use a Popover instead.
- Trigger on hover (mouse) and focus (keyboard). Never trigger on click — that's a Popover.
- Dismiss on mouse-out and blur.

**Accessibility:**
- `role="tooltip"` on the bubble, `aria-describedby` on the trigger.
- Must be keyboard-accessible (visible on focus, not just hover).
- Content must be plain text — no interactive elements.

---

### Component: Popover

**Purpose:** Light-background floating panel for richer contextual content — 1–3 paragraphs, links, or small forms. Click-triggered, with a close button. Use when content is too long or interactive for a Tooltip but doesn't warrant a Modal.

**Anatomy:**
1. `popover-trigger` — The element being clicked (button, icon, link)
2. `popover-panel` — White floating container
3. `popover-arrow` — Directional pointer toward the trigger
4. `popover-header` — Optional title (type-subheadline)
5. `popover-body` — Paragraph text, links, or small form elements
6. `popover-close` — Close/X button (always present)

**Placement:** Top, Bottom, Left, Right — auto-flip when near viewport edge.

**Specs:**
```
Background: White (#FFFFFF)
Border: 1px Neutral 200
Border-radius: radius-lg (8px)
Padding: space-4 (16px)
Shadow: shadow-lg
Max-width: 320px
Min-width: 200px
Header: type-subheadline (14px / 600), Neutral 900
Body: type-body (16px / 400), Neutral 700
Close button: 20×20 SVG X icon, Neutral 500, top-right, transparent background
Animation: scale(0.95) + fade → scale(1), 150ms ease-out
Z-index: z-dropdown (1100)
```

**Usage:**
- **Use for:** Help text longer than 2 sentences, "Learn more" expansions, small inline forms (e.g., quick filter), contextual actions.
- **Don't use for:** Single-line hints (use Tooltip), full-page blocking content (use Modal), navigation (use Dropdown).
- Click to open, click outside or X to close.
- Only one Popover open at a time — opening a new one closes the previous.

**When to use Tooltip vs. Popover:**
| | Tooltip | Popover |
|---|---------|---------|
| **Trigger** | Hover / focus | Click |
| **Background** | Dark (Neutral 900) | Light (White) |
| **Content** | Plain text, 1–2 lines | Rich text, links, small forms |
| **Interactive** | No | Yes |
| **Close** | Auto on mouse-out/blur | Manual (X button or click outside) |
| **Max lines** | 2 | No hard limit (keep concise) |

**Accessibility:**
- `aria-haspopup="dialog"` on trigger, `role="dialog"` on panel.
- Focus trap inside open popover.
- Escape to close, returns focus to trigger.
- Close button: `aria-label="Close popover"`.

---

## 7.5 Media Components

### Component: Image Container

**Purpose:** Consistent presentation of vehicle photos, equipment images, and document scans.

**Anatomy:**
1. `image-container` — Aspect-ratio wrapper
2. `image-element` — The `<img>` or `<picture>` element
3. `image-overlay` — Optional gradient or badge overlay
4. `image-placeholder` — Skeleton or icon shown before load
5. `image-gallery-indicator` — Dot pagination or count badge for multi-image

**Variants:**
| Variant | Aspect Ratio | Use |
|---------|-------------|-----|
| Vehicle Hero | 4:3 | Detail page main image |
| Vehicle Thumbnail | 4:3 | Search result cards |
| Document | Auto (natural) | Title scans, damage reports |
| Avatar | 1:1 (circle) | User profiles |
| Gallery | 4:3 + thumbnails | Vehicle detail image carousel |

**Specs:**
```
Border-radius: 8px (standard), 50% (avatar)
Object-fit: cover (vehicles), contain (documents)
Placeholder: Neutral 100 bg + centered car icon (24px, Neutral 300)
Loading: skeleton shimmer animation
Error state: Neutral 100 bg + "Image unavailable" text (type-caption-1, Neutral 500)
Overlay gradient: linear-gradient(transparent 60%, rgba(0,0,0,0.6) 100%)
Gallery indicator: 8px dots, White fill (active), White 50% (inactive), 8px gap
Gallery arrows: 36px circle, White 90% bg, shadow-sm, centered chevron-left/right (16px, stroke-width 2), positioned 12px from edges, vertically centered. Dark mode: Neutral 900 90% bg.
Lazy loading: loading="lazy" on all images below the fold
```

**Accessibility:**
- Descriptive `alt` text required for all vehicle images
- Decorative images: `alt=""`
- Gallery: `aria-label="Vehicle photo gallery, image 1 of 12"`, arrow key navigation
- `role="img"` on container when using CSS background-image

---

### Component: Video Player

**Purpose:** Embedded video for vehicle walkarounds, auction how-to guides, and marketing content.

**Anatomy:**
1. `video-container` — 16:9 aspect-ratio wrapper
2. `video-element` — `<video>` or embedded iframe
3. `video-poster` — Thumbnail before play
4. `video-play-button` — Large centered play overlay
5. `video-controls` — Custom control bar (play/pause, scrubber, volume, fullscreen)
6. `video-caption-toggle` — Closed caption on/off

**Specs:**
```
Aspect ratio: 16:9
Border-radius: 12px
Play button overlay: 64px circle, White bg @ 90%, Blue 600 triangle
  Hover: scale(1.1), 200ms ease
Controls bar: 48px height, gradient from transparent to rgba(0,0,0,0.6)
Scrubber track: 4px, White @ 30%
Scrubber fill: Blue 600
Scrubber thumb: 14px White circle (appears on hover)
Volume/fullscreen icons: 24px, White
```

**Accessibility:**
- Closed captions required for all informational video content
- `<track kind="captions">` element
- Keyboard: Space/Enter toggles play, arrows seek, M mutes, F fullscreen
- `aria-label="Video player: 2019 Toyota Camry walkaround"`
- No autoplay with audio

---

### Component: Avatar

**Purpose:** User profile image representation in headers, comments, account settings, and team member lists.

**Anatomy:**
1. `avatar-container` — Circular wrapper
2. `avatar-image` — Profile photo
3. `avatar-fallback` — Initials on colored background (when no image)
4. `avatar-badge` — Status dot overlay (online, verified)

**Sizes:**
| Size | Diameter | Font (Fallback) | Badge Size |
|------|----------|-----------------|-----------|
| XS | 24px | 10px / 700 | 8px |
| SM | 32px | 12px / 700 | 8px |
| MD | 40px | 14px / 700 | 10px |
| LG | 56px | 18px / 700 | 12px |
| XL | 80px | 24px / 700 | 14px |

**Specs:**
```
Shape: circle (border-radius: 50%)
Border: 2px solid White (when on colored background)
Fallback background: Blue 600 (first letter A-M), Blue 800 (N-Z)
Fallback text: White, centered
Badge position: bottom-right, overlapping edge
Badge: success-icon green (online), Blue 600 (verified), Neutral 300 (offline)
Badge border: 2px solid White (to separate from avatar)
```

**Accessibility:**
- `alt="[User Name]'s profile photo"` or `alt=""` if name displayed adjacent
- Fallback initials: `aria-label="[User Name]"` on container
- Badge: `aria-label` describing status (e.g., "Online")

---

# 8. Patterns

Every pattern in this section serves the Vault's Progressive Mastery approach: **one interface, many depths.** Copart serves seven buyer personas — Dismantlers, Dealers, Consumers, Exporters, Brokers, Hobbyists, Rebuilders — from the same surfaces. We never build separate "consumer mode" vs. "pro mode." Instead, patterns use hierarchy to create three information layers:

1. **Primary** — What everyone sees. Scannable at a glance. Vehicle photo, year/make/model, current bid, sale date.
2. **Secondary** — What engaged members read. Damage details, VIN, odometer, title type, location.
3. **Tertiary** — What experts use. Full condition reports, seller notes, historical bid data, comparable sales.

See [Vault > progressive-mastery.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/language/progressive-mastery.md) and [Vault > personas.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/context/personas.md).

**Surface intentions** — different surfaces carry different emotional registers:

| Surface | Register | Character |
|---------|----------|-----------|
| **copart.com** | Methodical Trust | Abundance and control in search, transparency on lot details, solid/clear/reassuring transactions |
| **VB.AI** (live auction) | Competitive Vitality | Serious but vibrant during bidding, celebratory at win moments, broadcast-quality for social |
| **Native mobile app** | Efficient Discovery | Speed, clear photography, first-impression institutional confidence |

See [Vault > surface-intentions.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/language/surface-intentions.md).

---

## 7.6 Navigation & Selection Components

### Component: Navigation Chips

**Purpose:** Horizontal scrollable pill buttons for filtering or category selection. Used in search, browse, and dashboard contexts to let users quickly narrow results by a single dimension.

**Anatomy:**
1. `chip-container` — Horizontal scrollable wrapper
2. `chip-item` — Individual chip button
3. `chip-icon` — Optional leading icon (16px)
4. `chip-label` — Text label
5. `chip-count` — Optional trailing count badge

**Variants:**
| Variant | Use |
|---------|-----|
| Single-select | One chip active at a time (radio behavior) |
| Multi-select | Multiple chips can be active simultaneously (checkbox behavior) |

**States:**
| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | White | Neutral 700 | 1px Neutral 300 |
| Hover | Neutral 100 | Neutral 900 | 1px Neutral 500 |
| Selected | Blue 600 | White | None |
| Selected + Hover | Blue 800 | White | None |
| Disabled | Neutral 100 | Neutral 300 | 1px Neutral 200 |

**Specs:**
```
Height: 36px
Padding: space-2 (8px) vertical, space-5 (20px) horizontal
Border-radius: radius-pill (9999px)
Font: type-subheadline (14px / 600)
Gap between chips: space-2 (8px)
Icon size: 16px, space-2 gap to label
Count badge: type-caption-1 (12px / 500), space-2 gap, Neutral 500 text (default), White text (selected)
Container: horizontal scroll, no visible scrollbar, fade gradient on overflow edges
Touch target: 44px minimum height via padding expansion
Transition: background 150ms ease, color 150ms ease
```

**Copart Context:**
- Vehicle type filters: "All", "Cars", "Trucks", "SUVs", "Motorcycles", "Equipment"
- Auction type: "All Auctions", "Live", "Buy Now", "Upcoming"
- Damage type: "All Damage", "Front End", "Rear End", "Side", "Flood", "Hail"

**Usage:**
- Use for a single dimension of filtering with ≤12 options.
- For more than 12 options, use a Dropdown or filter panel.
- Always include an "All" chip as the first option (default selected).
- Scroll indicators (fade gradient) required when chips overflow viewport.

**Accessibility:**
- `role="radiogroup"` (single-select) or `role="group"` (multi-select) on container.
- Each chip: `role="radio"` or `role="checkbox"` with `aria-checked`.
- Keyboard: Arrow keys navigate between chips, Space/Enter selects.
- Overflow: ensure all chips reachable via keyboard even if scrolled.

---

### Component: Content Tabs (Underline Style)

**Purpose:** Switch between content panels within the same view. Text labels with an underline indicator for the active tab. Used for lot detail sections, dashboard views, and settings pages.

**Anatomy:**
1. `tabbar-container` — Horizontal bar wrapper
2. `tabbar-item` — Individual tab button
3. `tabbar-label` — Tab text
4. `tabbar-badge` — Optional count or status indicator
5. `tabbar-indicator` — Active underline bar (absolutely positioned div, JS-repositioned on tab switch via offsetLeft/offsetWidth)

**States:**
| State | Text Color | Weight | Underline |
|-------|-----------|--------|-----------|
| Default | Neutral 500 | 600 | None |
| Hover | Neutral 900 | 600 | None (cursor pointer) |
| Active | Blue 600 | 600 | 2px Blue 600, bottom-aligned |
| Disabled | Neutral 300 | 600 | None |
| Focus | Current color | 600 | Focus ring on tab item |

**Implementation note:** All tabs use font-weight 600 in every state. This prevents layout shift when switching between tabs (bold text is wider than regular text, which would cause the indicator width to jump).

**Specs:**
```
Tab height: 48px (includes padding + underline space)
Tab padding: space-4 (16px) horizontal
Label: type-subheadline (14px / 600 all states — consistent weight prevents layout shift)
Gap between tabs: 0 (tabs butt against each other, separated by padding)
Active underline: 2px height, Blue 600, bottom of tab, matches label width (not tab width)
Underline animation: slide horizontally to new tab, 200ms ease-out
Badge: type-caption-1 (12px / 500), Neutral 500, space-2 gap after label
Container: border-bottom 1px Neutral 200 (full width baseline)
```

**Copart Context:**
- Lot details: "Overview", "Bid History", "Photos", "Documents", "Similar Lots"
- Dashboard: "Active Bids", "Won", "Lost", "Watchlist"
- Account: "Profile", "Payment Methods", "Notifications", "Preferences"

**Usage:**
- Use for 2–7 tabs. For more, consider a Dropdown or side navigation.
- Tab content should load without a full page reload — swap the panel content.
- First tab is selected by default unless deep-linked.
- **Don't use for:** navigation to different pages (use Navigation Chips or a nav bar). Tabs switch content within the same page.

**Accessibility:**
- `role="tablist"` on container, `role="tab"` on each tab, `role="tabpanel"` on content.
- `aria-selected="true"` on active tab, `aria-controls` pointing to panel ID.
- Keyboard: Arrow keys navigate tabs, Enter/Space activates, Home/End jump to first/last.
- Tab panels: `tabindex="0"` for keyboard users to Tab into the content.

---

### Component: Date Picker

**Purpose:** Input control for selecting a single date or date range. Used for auction date filters, sale schedules, report date ranges, and bid deadline awareness.

**Anatomy:**
1. `datepicker-trigger` — Text input that opens the calendar (same visual as Text Field)
2. `datepicker-dropdown` — Floating calendar panel
3. `datepicker-header` — Month/year display + prev/next navigation arrows
4. `datepicker-grid` — 7-column day grid (Sun–Sat headers + day cells)
5. `datepicker-day` — Individual day button
6. `datepicker-range-highlight` — Background highlight for range selection between start and end
7. `datepicker-footer` — Optional action buttons (Clear, Apply for ranges)

**Variants:**
| Variant | Use |
|---------|-----|
| Single Date | Select one date (auction filter, start date) |
| Date Range | Select start + end date with range highlight (report filters, sale period) |

**States (Day Cell):**
| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | None | Neutral 900 | None |
| Hover | Blue 50 | Blue 600 | None |
| Today | None | Blue 600 | 1px Blue 600 (ring) |
| Selected | Blue 600 | White | None |
| Range: In-Between | Blue 100 | Blue 900 | None |
| Range: Start/End | Blue 600 | White | None (pill ends) |
| Disabled (past/unavailable) | None | Neutral 300 | None |
| Focus | — | — | Focus ring (shadow-focus) |

**States (Trigger Input):**
Same as Text Field states (default, hover, focus, filled, error, disabled).

**Specs:**
```
Trigger input: matches Text Field spec exactly (height, radius, padding, font)
Trailing icon: calendar icon, 20px, Neutral 500

Calendar dropdown:
  Background: White
  Border: 1px Neutral 200
  Border-radius: radius-lg (8px)
  Shadow: shadow-lg
  Padding: space-4 (16px)
  Width: 320px (single), 640px (dual-month range)
  Z-index: z-dropdown (1100)

Header:
  Month/year: type-subheadline (14px / 600)
  Nav arrows: 32×32px buttons, bg-secondary, radius-sm, stroke caret icon, Neutral 700
  Month-year clickable for year picker

Day grid:
  Day headers: type-caption-1 (12px / 500), Neutral 500, uppercase
  Day cell: 36px × 36px
  Day text: 13px / 400 (selected: 600)
  Grid gap: 2px

Footer (range only):
  Clear button: Tertiary, left-aligned
  Apply button: Primary, right-aligned
  Gap: space-3 (12px)
```

**Copart Context:**
- Auction date filters: "Sale Date From / To"
- Report generation: "Select date range for export"
- Bid deadline awareness: showing auction close dates in calendar view
- Sale schedule browsing: highlight dates with scheduled sales

**Usage:**
- Single date: calendar closes on selection, value populates input.
- Date range: first click = start, second click = end, "Apply" confirms. Clear button resets.
- Always show current month by default, allow navigation to past/future months.
- Disable dates that are not selectable (past dates for future-only pickers).
- Mobile: full-screen calendar takeover or native date input fallback.

**Accessibility:**
- `role="dialog"` on calendar dropdown, `aria-label="Choose date"`.
- Day cells: `role="gridcell"`, `aria-selected`, `aria-disabled`.
- Keyboard: Arrow keys navigate day grid, Enter selects, Escape closes.
- Screen reader: announce "Selected [date]" on selection, "Range: [start] to [end]" for ranges.
- Input: `aria-haspopup="dialog"`, `aria-expanded` on open.

---

## 8.1 Feedback Patterns

### Success Pattern
- **Immediate:** Toast appears ("Bid placed successfully") with green checkmark
- **Contextual:** Component updates in-place (e.g., bid amount refreshes, watchlist icon fills)
- **Page-level:** Success alert banner at top of page for major completions
- **Transition:** Button briefly shows checkmark before returning to default

### Error Pattern
- **Field-level:** Inline error text below input, border turns error-border, icon appears
- **Form-level:** Error alert banner above form listing all issues
- **Network:** Toast with retry action ("Connection lost. Retry")
- **Fatal:** Full-page error with illustration, message, and "Go home" button

### Loading Pattern
- **< 300ms:** No indicator (feels instant)
- **300ms – 2s:** Skeleton screen replacing content areas
- **2s – 10s:** Spinner with "Loading..." text
- **> 10s:** Progress bar with estimated time or step description
- **Background tasks:** Toast notification when complete ("Your report is ready")

### Empty Pattern
- Always include: icon + headline + description + action
- Tone: Helpful and encouraging, never blaming the member
- Action: Always provide a clear next step

---

## 8.2 Interaction Signatures

The Vault defines five critical design moments — the micro-interactions where design quality matters most, because they're the moments members are making decisions. Each signature references the Vault's full treatment and maps to VDS components and patterns. See [Vault > interaction-signatures.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/craft/interaction-signatures.md).

### The Bid Moment
The single most important interaction on the platform. Bid confirmation should provide contextual friction based on member experience — not one-size-fits-all. First-time bidders get a full confirmation modal with fee breakdown. Experienced members get a lightweight confirmation. VDS components: Button (Primary), Modal, Toast (success), Bid Price Pulse animation (Section 9.4).

### Search & Filtering
Each persona searches differently — dismantlers scan by yard and damage type, consumers browse by make/model, dealers filter by margin potential. VDS patterns must support filter hierarchy and context-aware surfacing. Result cards are decision aids, not just links. VDS components: Text Field (search), Sidebar (filters), Card (results), Chip/Badge (active filters).

### Lot Details Page
The trust surface. This is where Copart earns or loses credibility. Image gallery as evidence. Condition data as honesty made beautiful. Bid CTA unmistakable but not aggressive — Institutional Confidence, not hard-sell. VDS components: Image Container (gallery), Stat/KPI (condition data), Button (bid CTA), Table (bid history).

### Eligibility & Onboarding
The biggest consumer friction point. Eligibility requirements should be visible early, specific, actionable, and respectful. Never make a member complete a long form only to discover they're ineligible. VDS components: Progress Indicator (steps), Alert (eligibility status), Text Field (forms), Card (membership tiers).

### Win/Loss Resolution
Celebration proportional to significance. A $500 win gets a success toast. A $50,000 win should be broadcast-quality — worth sharing on social. Loss should be acknowledged without blame, with a clear next step. VDS components: Toast (confirmation), Success Checkmark animation (Section 9.4), Card (won vehicle details).

---

# 9. Animation & Motion

> Motion expresses Vitality — the energy of live auctions — while Precision demands every animation earn its frame count. We confirm actions, direct attention, and provide spatial context. We never animate for decoration. Speed communicates confidence; motion never blocks interaction. All animations respect `prefers-reduced-motion`. See [Vault > motion-philosophy.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/craft/motion-philosophy.md).

---

## 9.1 Motion Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `duration.instant` | `100ms` | Hover states, color changes, micro-feedback |
| `duration.fast` | `150ms` | Dropdowns, tooltips, small reveals |
| `duration.normal` | `200ms` | Modals, page transitions, standard state changes |
| `duration.slow` | `300ms` | Complex transitions, card grid stagger, tab switches |
| `duration.deliberate` | `400ms` | Bottom sheets, full-screen transitions |
| `easing.standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Default for most transitions |
| `easing.spring` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Delight animations — overshoot for playful feel |
| `easing.enter` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering the screen |
| `easing.exit` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving the screen |

---

## 9.2 Motion Registers

The Vault defines four motion registers — each matched to a surface and emotional context. Every animation in this system belongs to one register. See [Vault > motion-philosophy.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/craft/motion-philosophy.md).

| Register | Surface | Duration Range | Character | Examples |
|----------|---------|---------------|-----------|----------|
| **Transactional** | copart.com | 150–250ms | Stripe-like. Crisp, confident, immediate. | Button presses, dropdowns, tooltips, card hovers, form validation |
| **Live Auction** | VB.AI | 100–350ms (variable) | Fluid, energetic. Responds to real-time data. | Bid price pulses, counter ticks, status updates, timer urgency shifts |
| **Celebration** | Win/loss moments | 500ms–1s | Expressive, proportional to significance. | Success checkmark draws, watchlist heart fills, auction win confetti |
| **Ambient** | Background states | 2–4s cycles | Subtle liveness. Proves the system is alive. | Loading dots, live auction pulsing indicators, "X people watching" |

**Register rules:**
- Transactional animations must never exceed 250ms — speed communicates confidence.
- Live Auction register adapts to data velocity: faster animations when bids arrive rapidly, slower when the pace is steady.
- Celebration animations are proportional to significance: a $500 win gets a checkmark, a $50,000 win could be broadcast-quality.
- Ambient animations must be invisible to someone not looking for them. If they distract, they're too strong.

---

## 9.3 Micro-Interactions

Small, functional animations that provide immediate feedback on member actions. *Register: Transactional.*

### Card Hover Lift
- **Trigger:** Mouse hover on vehicle card
- **Effect:** `translateY(-2px)` + `shadow-md → shadow-lg`
- **Duration:** `200ms ease`
- **Purpose:** Affordance — confirms the card is interactive

### Button Press
- **Trigger:** `mousedown` / `touchstart`
- **Effect:** `scale(0.97)` + optional ripple from press point
- **Duration:** `100ms ease`
- **Purpose:** Tactile feedback simulating physical press

### Toggle Slide
- **Trigger:** Click/tap on toggle switch
- **Effect:** Thumb slides with spring overshoot, background color cross-fades
- **Duration:** `300ms spring`
- **Haptic:** Light impact on mobile (iOS `UIImpactFeedbackGenerator.light`)
- **Purpose:** Confirms binary state change

---

## 9.4 Delight Animations

Celebratory moments that reinforce positive actions. *Register: Celebration* (proportional to significance). Bid Price Pulse and Counter Tick belong to the *Live Auction* register; Loading Dots belongs to *Ambient*.

### Watchlist Heart Fill
- **Trigger:** Adding a vehicle to watchlist
- **Effect:** Heart icon pops with spring overshoot: `scale(1 → 1.3 → 0.9 → 1.15 → 1)`, icon switches from outline `♡` to filled `♥`
- **Duration:** `500ms spring`
- **Reverse:** Subtle shrink `scale(1 → 0.8 → 1)` on removal
- **Haptic:** Medium impact on add, light on remove

### Success Checkmark Draw
- **Trigger:** Bid placed, payment confirmed, action completed
- **Effect:** SVG circle draws itself (`stroke-dashoffset` animation), then checkmark path draws inside with staggered delay
- **Duration:** Circle `400ms ease`, check `300ms ease` with `250ms` delay
- **Purpose:** Provides visual confirmation that a critical action succeeded

### Bid Price Pulse
- **Trigger:** Competing bid placed on a watched vehicle
- **Effect:** Price text pulses: `scale(1 → 1.08 → 1 → 1.04 → 1)` with color flash to brand blue
- **Duration:** `600ms spring`
- **Purpose:** Draws attention to price change without disrupting flow

### Counter Tick
- **Trigger:** Stat number updates (active bids, watchlist count, notifications)
- **Effect:** Old number slides out upward, new number slides in from below
- **Duration:** `400ms ease`
- **Purpose:** Shows data is live and updating

### Toast Notification
- **Trigger:** Action confirmation, system message
- **Enter:** `translateY(16px → 0)` + fade in
- **Exit:** `translateY(0 → 8px)` + fade out
- **Duration:** Enter `250ms ease-out`, exit `200ms ease-in`
- **Auto-dismiss:** 5 seconds, or swipe to dismiss on mobile

### Loading Dots
- **Trigger:** Inline loading states — auction connecting, bid processing
- **Effect:** Three dots pulse in sequence: `scale(0.6 → 1)` + `opacity(0.4 → 1)`
- **Duration:** `1.4s infinite`, `0.16s` stagger between dots
- **Purpose:** Indicates ongoing process without blocking UI

---

## 9.5 State Transitions

Full component enter/exit animations for complex UI elements.

| Component | Enter / Open | Exit / Close | Duration |
|-----------|-------------|-------------|----------|
| **Modal** | Backdrop fade `0 → 0.5`, panel `scale(0.95 → 1)` + fade | Reverse — panel first, then backdrop | `200ms ease-out` / `150ms ease-in` |
| **Bottom Sheet** | Slide up from bottom + backdrop fade | Swipe down or fade out | `400ms cubic-bezier(0.32, 0.72, 0, 1)` |
| **Dropdown Menu** | Fade + `translateY(-4px → 0)` | Fade out | `150ms ease-out` / `100ms ease-in` |
| **Alert Banner** | Slide down + fade + height expand | Fade + height collapse | `200ms ease-out` / `200ms ease-in` |
| **Toast** | `translateY(16px → 0)` + fade | `translateY(0 → 8px)` + fade | `250ms ease-out` / `200ms ease-in` |
| **Card Grid Load** | Staggered fade + `translateY(12px → 0)` | N/A (instant) | `300ms ease-out`, `50ms` stagger |
| **Skeleton → Content** | Cross-fade shimmer → real content | N/A | `200ms ease-out` |
| **Page Navigation** | New page slides in from right | Current page slides out left | `300ms ease` (mobile nav stack) |
| **Tab Switch** | Content cross-fades, underline slides | Cross-fade out | `200ms ease` |

---

## 9.6 When to Animate

### Do Animate
- **Action confirmation** — Heart fill, checkmark draw, success toast
- **State changes** — Toggle slide, dropdown open, modal enter
- **Attention direction** — Bid price pulse, badge count update, new item appear
- **Loading feedback** — Skeleton shimmer, spinner, progress bar fill
- **Spatial context** — Page transitions, tab switches, card grid stagger

### Don't Animate
- **Decoration** — Bouncing logos, floating elements, ambient motion
- **Delays** — Never make users wait for animation to complete before acting
- **Scrolljacking** — Don't override native scroll or parallax on content pages
- **Repetitive loops** — No infinite animations except spinners and skeleton shimmer
- **Form interactions** — Typing, selecting, tabbing between fields must be instant

---

## 9.7 Reduced Motion

All animations must be wrapped in a `prefers-reduced-motion` check:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

When reduced motion is active:
- State changes happen instantly (no transitions)
- Delight animations are removed entirely
- Loading indicators switch to static progress bars
- Toast notifications appear/disappear without sliding

---

# 10. Mobile Platform

> Mobile is a sibling platform, not a responsive breakpoint. Same principles — Precision, Institutional Confidence, Vitality — different input model. Same tokens, different sizing. The Vault's surface intention for native mobile is **"Efficient Discovery"** — speed, clear photography, first-impression institutional confidence. See [Vault > surface-intentions.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/language/surface-intentions.md).

---

## 10.1 Two Systems, One Brand

| Principle | Desktop | Mobile |
|-----------|---------|--------|
| **Primary input** | Mouse + keyboard | Touch (thumb) |
| **Touch targets** | 40px default | 44px minimum, 48px preferred |
| **Information density** | High — dense tables, multi-column | Low — single column, progressive mastery |
| **Navigation** | Header + sidebar | Bottom tab bar + navigation stack |
| **Content interaction** | Hover + click | Tap + swipe + pull-to-refresh |
| **Modals** | Centered floating panels | Bottom sheets with drag handles |
| **Type base** | 16px body | 17px body (iOS HIG standard) |

---

## 10.2 Mobile Type Scale

Based on the iOS Human Interface Guidelines type system, adapted with Inter.

| Style | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| **Large Title** | 34px | 700 | 41px | 0.01em | Top of scrollable views, section headers |
| **Title 1** | 28px | 700 | 34px | 0.01em | Page headings |
| **Title 2** | 22px | 700 | 28px | 0em | Section headers within pages |
| **Title 3** | 20px | 600 | 25px | 0em | Card headers, subsections |
| **Headline** | 17px | 600 | 22px | -0.005em | Bold labels in list cells |
| **Body** | 17px | 400 | 22px | -0.005em | Default mobile body text |
| **Callout** | 16px | 400 | 21px | 0em | Supporting text, card descriptions |
| **Subheadline** | 15px | 400 | 20px | 0em | Secondary labels |
| **Footnote** | 13px | 400 | 18px | 0em | Timestamps, metadata |
| **Caption 1** | 12px | 400 | 16px | 0em | Tertiary info, badges |
| **Caption 2** | 12px | 500 | 16px | 0.015em | Tab bar labels, tiny metadata |

**Key differences from desktop:**
- Body text is 17px (not 16px) — Apple's research shows this is the optimal reading size at arm's length
- No Display styles — mobile doesn't use 48-64px type; Large Title (34px) is the maximum
- Tighter line heights — less vertical rhythm needed on small screens

---

## 10.3 Mobile Component Specs

### Button

| Size | Height | Padding-X | Font Size | Radius |
|------|--------|-----------|-----------|--------|
| SM | 36px | 14px | 14px / 500 | 8px |
| MD | 44px | 20px | 16px / 500 | 10px |
| LG | 50px | 28px | 17px / 500 | 12px |
| XL | 56px | 32px | 18px / 600 | 14px |

- Default button is **MD (44px)** — meets WCAG 2.5.5 touch target
- Full-width buttons for primary CTAs on form screens (left/right margin: 16px)
- **No XS size on mobile** — too small for reliable touch targeting

### Text Input

| Property | Desktop | Mobile |
|----------|---------|--------|
| Height | 44px | 48px |
| Font size | 16px | 16px (prevents iOS auto-zoom) |
| Padding-X | 12px | 16px |
| Border radius | 8px | 10px |
| Label | 14px / 600 | 15px / 600 |

### Toggle Switch

| Property | Desktop | Mobile |
|----------|---------|--------|
| Track size | 48 × 28px | 51 × 31px (iOS standard) |
| Thumb | 22px | 27px |
| Gap to label | 12px | 12px |

### Card

| Property | Desktop | Mobile |
|----------|---------|--------|
| Border radius | 12px | 16px |
| Body padding | 16px | 16px |
| Gap (in grid) | 24px | 12px |
| Media height | 180px | 200px (full card width) |

### Modal → Bottom Sheet

Modals become bottom sheets on mobile:

| Property | Value |
|----------|-------|
| Border radius | 20px top, 0 bottom |
| Drag handle | 36px × 4px pill, Neutral 300, centered, 8px from top |
| Max height | 90vh |
| Animation | Slide up 400ms `cubic-bezier(0.32, 0.72, 0, 1)` |
| Dismiss | Swipe down 150px or tap backdrop |
| Safe area | Content clears `env(safe-area-inset-bottom)` |

### List Item

| Property | Value |
|----------|-------|
| Min height | 44px |
| Padding-X | 16px |
| Separator | 1px, inset 16px from left |
| Chevron | 12px, Neutral 300, right-aligned |
| Swipe actions | 80px reveal width, destructive left, archive right |

---

## 10.4 Mobile Spacing

| Token | Desktop | Mobile | Usage |
|-------|---------|--------|-------|
| Page margin | 80px | 16px | Left/right page margins |
| Section gap | 48–64px | 24px | Between major sections |
| Card gap | 24px | 12px | Between cards in grid/list |
| Component gap | 16–24px | 12px | Between sibling form fields |
| Card padding | 24px | 16px | Inside cards |

### Safe Areas

All mobile layouts must respect device safe areas:

```css
/* Bottom nav and floating CTAs */
padding-bottom: calc(16px + env(safe-area-inset-bottom));

/* Full-screen modals */
padding-top: env(safe-area-inset-top);
padding-left: env(safe-area-inset-left);
padding-right: env(safe-area-inset-right);

/* Viewport meta */
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

---

## 10.5 Mobile-Specific Patterns

### Pull-to-Refresh
- Threshold: 64px pull distance
- Indicator: Spinner (24px) appears below nav bar
- Feedback: Haptic (on supported devices)

### Swipe Actions on Lists
- Swipe left: Destructive action (Remove from Watchlist, Delete)
- Swipe right: Positive action (Mark as Read, Archive)
- Reveal width: 80px
- Background: Error rose (destructive) or Success green (positive)
- Confirm: Full swipe to execute, partial swipe reveals button

### Bottom Sheet Stack
- Sheets can stack (max 2 deep)
- Background sheet scales to 95% and moves up 8px
- Close: Drag down past 150px threshold, or tap X, or tap backdrop

### Gesture Navigation
- Swipe from left edge: Navigate back (iOS style)
- Long press on cards: Quick actions context menu
- Pinch on vehicle images: Zoom in gallery

---

## 10.6 Mobile Accessibility Additions

| Requirement | Desktop | Mobile |
|-------------|---------|--------|
| Touch target | 40px (mouse) | 44px minimum, 48px preferred |
| Target spacing | N/A | 8px between adjacent targets |
| Haptic feedback | N/A | On toggles, destructive actions, bid confirmation |
| Dynamic Type | N/A | Support iOS Dynamic Type / Android sp scaling |
| VoiceOver hints | aria-label | accessibilityHint for swipe actions |
| Reduce Motion | CSS prefers-reduced-motion | Also disable parallax, haptics |

### Font Scaling

The mobile system must support system-level font scaling:

| System Setting | Scale | Body Text |
|----------------|-------|-----------|
| Extra Small | 0.82x | 14px |
| Small | 0.88x | 15px |
| Default | 1.0x | 17px |
| Large | 1.12x | 19px |
| Extra Large | 1.24x | 21px |
| XXL (Accessibility) | 1.41x | 24px |
| XXXL (Accessibility) | 1.65x | 28px |

Components must not clip or overlap at 1.65x scaling. Use flexible heights and `min-height` instead of fixed `height`.

---

## 10.7 Platform Decision Map

Use this to determine which system to apply:

| Context | System |
|---------|--------|
| Desktop web (1024px+) | Desktop |
| Tablet web landscape (1024px+) | Desktop |
| Tablet web portrait (768–1023px) | Desktop with responsive adjustments |
| Mobile web (< 768px) | **Mobile** |
| iOS native app | **Mobile** |
| Android native app | **Mobile** |
| iPad native app | Desktop (iPad has mouse/trackpad support) |
| Email templates | Desktop (reduced) |
| PWA on phone | **Mobile** |

---

# 11. Design Tokens

A complete token file is provided at `copart-design-tokens.json` in DTCG (Design Tokens Community Group) format. The file now includes a `platform.mobile` section with all mobile-specific overrides for component sizing, typography, spacing, motion, navigation, and gestures. The file contains all primitive and semantic tokens for:

- **Color** — Primitives (blue scale, neutrals, semantic colors), semantic mappings (background, text, border, interactive, feedback), and full dark mode equivalents
- **Typography** — Font families, weights, and the complete type scale with responsive variants
- **Spacing** — 14-step scale from 0 to 128px
- **Border Radius** — 8 tokens from `none` to `full`
- **Shadows** — 7 elevations including focus and error rings
- **Motion** — Duration and easing tokens
- **Breakpoints** — 7 responsive breakpoints
- **Grid** — Column, gutter, and margin specs per breakpoint
- **Components** — Pre-defined dimensions for buttons, inputs, cards, modals, header, sidebar, avatars, and touch targets
- **Z-Index** — Layering scale for stacking context management

### Integration
```bash
# Install style-dictionary to transform tokens into platform outputs
npm install style-dictionary

# Generate CSS custom properties, SCSS variables, iOS/Android values
npx style-dictionary build --config sd.config.js
```

Tokens use reference syntax (`{copart.color.primitive.blue.600}`) for aliasing. Semantic tokens reference primitives so that a theme switch (light → dark) only requires swapping the semantic layer.

---

# 12. Documentation & Guidelines

## 12.1 Design Principles

The three principles — **Precision, Institutional Confidence, Vitality** — are defined in [Section 1](#1-design-principles) with execution rules. For the full philosophical rationale, see the [Copart Design Vault > aesthetic-principles.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/language/aesthetic-principles.md).

---

## 12.2 Do's and Don'ts

### 1. Color Usage
**Do:** Use Blue 600 for the single primary action on a screen. Use Neutral 700 for body text. Use semantic colors only for their intended purpose (success = green, error = rose).

**Don't:** Use Blue 600 for decorative elements, large background fills, or body text. Don't use pure red anywhere. Don't use color alone to convey meaning.

---

### 2. Button Hierarchy
**Do:** Place one Primary button per view. Pair it with a Secondary or Tertiary button for alternative actions. Maintain consistent sizing within a button group.

**Button Group Rules:**
- Gap between buttons: `space-3` (12px).
- Max 2 buttons per group. If you need a third action, move it to a text link or overflow menu.
- In horizontal groups, Primary goes right (action position), Secondary/Tertiary goes left.
- In vertical groups (e.g., shelf footer), Primary goes top, Secondary below.

**Don't:** Place two Primary buttons side by side. Don't use Destructive style for non-destructive actions. Don't use CTA Orange outside of registration, onboarding, or urgency contexts. Don't place an Orange CTA adjacent to a Blue Primary — demote one.

---

### 3. Typography
**Do:** Use the type scale as defined — each style has a specific role. Use monospace for VIN numbers, lot numbers, and financial figures in tables. Maintain minimum 16px for body text.

**Don't:** Create custom font sizes outside the scale. Don't use Display styles for body content. Don't go below 11px for any text, even metadata.

---

### 4. Spacing Consistency
**Do:** Use the 8px-based spacing scale for all measurements. Use `space-2` (8px) for related elements, `space-6` (24px) for sibling components, `space-12` (48px) for page sections.

**Don't:** Use arbitrary pixel values (e.g., 13px, 27px, 50px). Don't mix spacing scales within the same context. Don't remove all whitespace to "fit more content."

---

### 5. Form Design
**Do:** Place labels above inputs. Show validation errors inline below the field. Use helper text to clarify expected format (e.g., "Enter 17-character VIN"). Group related fields with clear section headings.

**Don't:** Use placeholder text as the only label. Don't show all errors only at the top of the form. Don't use generic messages ("Invalid input") — be specific ("VIN must be exactly 17 characters").

---

### 6. Loading States
**Do:** Show skeleton screens for content areas loading 300ms–2s. Match the skeleton shape to the real content layout. Use spinners only for indeterminate waits after 2s.

**Don't:** Show a blank white page while loading. Don't combine skeletons and spinners in the same area. Don't show loading indicators for actions that complete in < 300ms.

---

### 7. Empty States
**Do:** Include an icon, headline, description, and a clear action button. Use encouraging, helpful language. Guide the member toward their next step.

**Don't:** Show "No data" with nothing else. Don't blame the member ("You haven't done anything"). Don't leave the page completely empty.

---

### 8. Responsive Behavior
**Do:** Design mobile-first and enhance for larger screens. Collapse sidebars into drawers on mobile. Convert data tables to stacked card layouts on mobile. Maintain 16px minimum margins.

**Don't:** Simply shrink desktop layouts for mobile. Don't hide critical information on mobile — restructure instead. Don't use horizontal scroll for primary content (exceptions: data tables with many columns).

---

### 9. Accessibility
**Do:** Provide visible focus indicators on all interactive elements. Use semantic HTML (`<button>`, `<nav>`, `<header>`, `<main>`). Ensure 4.5:1 contrast for text, 3:1 for large text and UI components. Test with keyboard-only navigation.

**Don't:** Rely on color alone to indicate state. Don't use `div` with `onClick` instead of `<button>`. Don't remove focus outlines without providing a visible alternative. Don't use `title` attributes as the only accessible label.

---

### 10. Motion and Animation
**Do:** Use motion to provide feedback (button press, toggle flip), guide attention (new content entering), and communicate state changes (dropdown opening). Keep durations under 300ms for transactional micro-interactions. Match your motion register to the surface (Section 9.2).

**Don't:** Animate for decoration without functional purpose. Don't use animation durations longer than 500ms for UI interactions (except Celebration register). Don't block member input during animation. Always respect `prefers-reduced-motion` by reducing or removing non-essential animation.

---

### 11. AI-Generated Design Defaults

When using AI to generate UI, watch for these anti-patterns — they are the defaults that generic models produce and they contradict the Vault's convictions. See [Vault > anti-patterns.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/language/anti-patterns.md).

**Do:** Use the Vallejo type scale, color tokens, and spacing system exactly as defined. Produce components that are visually indistinguishable from hand-crafted Vallejo components. Reference the Vault for design intent before generating.

**Don't:**
- **Purple accent** — AI models default to purple. Vallejo's accent is Orange 600 (`#D86518`).
- **Border-box compositions** — AI loves wrapping everything in bordered boxes. Vallejo uses spacing and typography for structure, not borders.
- **Emoji / icon overuse** — No emoji, ever. Icons are Iconic SVGs only, and only where they serve function.
- **Generic typography** — AI ignores type scales and uses arbitrary sizes. Every text element must map to a Vallejo type token.
- **The "helpful default"** — AI-generated UI feels like a machine trying not to offend: bland colors, excessive padding, generic copy ("Welcome! We're here to help!"). Vallejo is opinionated and specific.
- **Bootstrap aesthetics** — Rounded badge pills, muted grays, card-with-thin-border. These signal "no one thought about this." Vallejo components are designed, not templated.

---

## 12.3 Implementation Guide for Developers

### Getting Started

1. **Install the token file.** Add `copart-design-tokens.json` to your project and configure Style Dictionary (or Tokens Studio) to generate platform-specific outputs.

2. **Set up the font.** Load Inter from Google Fonts or self-host:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

3. **Configure CSS custom properties.** Transform tokens into CSS variables:
```css
:root {
  /* Colors */
  --color-blue-600: #2662D9;
  --color-blue-800: #063598;
  --color-neutral-900: #2F333C;
  --color-neutral-700: #46525D;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;

  /* Typography */
  --font-primary: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --shadow-focus: 0 0 0 3px rgba(38,98,217,0.4);

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
}
```

4. **Dark mode.** Use a `[data-theme="dark"]` attribute on `<html>` and override semantic tokens:
```css
[data-theme="dark"] {
  --color-bg-primary: #1A1D23;
  --color-bg-secondary: #22262E;
  --color-text-primary: #F0F1F3;
  --color-text-secondary: #A8B2BC;
  --color-interactive-primary: #5B8EF0;
}
```

### Component Architecture

**Recommended stack:** React + TypeScript + Tailwind CSS (with token-based config) or CSS Modules.

**Component structure:**
```
components/
  Button/
    Button.tsx          # Component logic + render
    Button.module.css   # Styles (if CSS Modules)
    Button.stories.tsx  # Storybook documentation
    Button.test.tsx     # Unit + interaction tests
    index.ts            # Export barrel
```

**Props pattern example (Button):**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'success' | 'cta';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
```

### Accessibility Checklist (Per Component)

Before shipping any component, verify:

- [ ] Keyboard navigation works (Tab, Enter, Space, Escape, Arrow keys as appropriate)
- [ ] Focus indicator is visible and meets 3:1 contrast
- [ ] Screen reader announces component role, name, and state
- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 UI)
- [ ] Touch targets are at least 44×44px
- [ ] Component works at 200% zoom without overflow or overlap
- [ ] `prefers-reduced-motion` is respected
- [ ] `prefers-color-scheme` triggers dark mode appropriately

### Critical Brand Rule for Developers

**No red.** The color red (`#FF0000`, `#E00000`, `#CC0000`, or any hue between 345°–15°) is prohibited in the Copart brand. Use the rose/magenta error palette (`#C22248`, `#D42A54`, `#8C1D35`) for all error, destructive, and negative states. If a third-party library injects red (e.g., form validation, chart libraries), override it with the error tokens.

---

## 12.4 Component Inventory Summary

| Category | Component | Variants | States |
|----------|-----------|----------|--------|
| **Navigation** | Header | 4 (Default, Auth, Auction Live, Compact) | Default, Scrolled, Mobile Open |
| | Tab Bar | 1 | Default, Active, Pressed, Badge |
| | Sidebar | 3 (Nav, Filter, Collapsible) | Expanded, Collapsed, Hidden, Section Open/Closed |
| | Breadcrumbs | 1 | Default, Hover, Active, Current |
| **Input** | Button | 6 (Primary, Secondary, Tertiary, Destructive, Success, CTA) × 5 sizes | Default, Hover, Active, Disabled, Loading, Focus |
| | Text Field | 1 | Default, Hover, Focus, Filled, Disabled, Error, Success, Read-only |
| | Dropdown | 1 (with search variant) | Default, Hover, Focus, Open, Has Value, Disabled, Error |
| | Toggle Switch | 1 | Off, On, Hover (both), Disabled (both), Focus |
| | Checkbox | 1 | Unchecked, Checked, Indeterminate, Hover, Disabled, Error, Focus |
| | Radio Button | 1 | Unselected, Selected, Hover, Disabled, Focus |
| | Slider | 1 (single + range) | Default, Hover, Active, Disabled, Focus |
| **Feedback** | Alert | 4 (Info, Success, Warning, Error) | Visible, Entering, Dismissing |
| | Toast | 3 (Neutral, Success, Error) | Visible, Entering, Exiting |
| | Modal | 3 sizes (SM, MD, LG) | Opening, Open, Closing |
| | Progress Indicator | 3 (Spinner, Bar, Steps) | Active, Complete |
| | Skeleton Screen | 1 (configurable shape) | Loading |
| **Data Display** | Card | 5 (Vertical, Horizontal, Compact, Featured, Stat) | Default, Hover, Active, Selected, Loading |
| | Table | 1 | Header, Row Hover, Selected, Sorted, Alternating |
| | List | 4 (Simple, Two-line, Three-line, Interactive) | Default, Hover, Active |
| | Stat/KPI | 1 | Trend Up, Trend Down, Neutral |
| | Chart | 4 types (Line, Bar, Donut, Area) | Default, Tooltip, Loading |
| **Media** | Image Container | 5 (Hero, Thumbnail, Document, Avatar, Gallery) | Loaded, Loading, Error |
| | Video Player | 1 | Poster, Playing, Paused, Controls Visible |
| | Avatar | 5 sizes (XS–XL) | Image, Fallback, Badge |
| **Overlay** | Tooltip | 1 | Hidden, Visible |
| | Popover | 1 | Hidden, Visible |
| **Navigation & Selection** | Navigation Chips | 2 (Single, Multi) | Default, Hover, Selected, Disabled |
| | Content Tabs | 1 | Default, Hover, Active, Disabled |
| | Date Picker | 2 (Single, Range) | Default, Open, Selected, Range, Disabled |
| **Input** | Watchlist Toggle | 2 (Icon+Label, Icon-Only) | Default, Hover, Saving, Saved, Removing, Disabled |
| | Link | 2 (Inline, Standalone) | Default, Hover, Active, Visited, Disabled |

**Total: 37 components, 60+ variants, 120+ documented states.**
**Mobile platform: All components adapted with touch-optimized sizing, plus 4 mobile-specific components (Bottom Tab Bar, Navigation Bar, Search Bar, Bottom Sheet).**

---

*Vallejo Design System 1.1.2 — Precision, Institutional Confidence, Vitality. Executing the [Copart Design Vault](https://github.com/getboyce/Copart-Design-Vault) at the component level.*
