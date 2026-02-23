# Vallejo Design System

**1.1** | Last updated: February 2026

---

> **Design Philosophy:** Every pixel in the Copart experience should earn trust, reduce friction, and move the user closer to the vehicle they need. We design for clarity first, beauty second — because when millions of dollars flow through an auction platform, confidence is the most valuable feature we ship.

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

Three principles guide every decision in the Copart design system.

## Principle 1: Clarity Builds Trust

Every element must communicate its purpose immediately. Users are making significant financial decisions — bidding on vehicles worth thousands of dollars. Ambiguity erodes confidence. Labels are explicit. States are visible. Actions are predictable.

**Example — Do:** A bid button reads "Place Bid — $4,500" with a confirmation step.
**Example — Don't:** A button reads "Submit" with no indication of the financial commitment.

## Principle 2: Progressive Disclosure

Show only what's needed at each step. Copart's inventory is vast and its auction mechanics are complex. We layer information so newcomers aren't overwhelmed and power users aren't slowed down.

**Example — Do:** Vehicle search shows key specs (year, make, model, damage type, current bid) in the card. Full VIN history, seller notes, and condition details are revealed on the detail page.
**Example — Don't:** A search results card showing 20+ data fields in 10pt type.

## Principle 3: Accessible by Default

Every user — regardless of ability, device, or connectivity — deserves the same auction experience. We meet WCAG 2.1 AA as a floor, not a ceiling. Color is never the sole indicator of state. Interactive targets are generous. Content reflows gracefully.

**Example — Do:** An auction status badge uses both color AND an icon plus label: [circle-icon] "Live Now."
**Example — Don't:** A green dot with no label to indicate a live auction.

# 2. UX Writing

Words are interface. Every label, message, and instruction shapes how members understand and trust Copart. This section establishes the rules for writing all UI copy — from button labels to error messages to empty states. The same rigor we apply to color and spacing applies to language.

## 2.1 Voice & Tone Charter

### Brand Voice

Copart's voice is consistent across every touchpoint. Four attributes define it:

| Attribute | Definition | Example |
|-----------|-----------|---------|
| **Professional** | We respect the member's time and money. No fluff, no filler. | "Your bid of $4,500 has been placed." — not "Awesome! You just bid!" |
| **Straightforward** | Say exactly what's happening. No jargon unless the audience expects it. | "This lot has a clean title." — not "This vehicle's documentation status is clear." |
| **Confident** | We know our platform. Statements, not hedging. | "Bidding closes at 2:30 PM ET." — not "Bidding should close around 2:30 PM ET." |
| **Helpful** | Every message moves the member toward their goal. | "Enter your VIN to check eligibility." — not "VIN required." |

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
- Proper nouns: Copart, CrashedToys, Copart Dealer Services (CDS)
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
| **Preliminary bid** | Pre-bid, early bid, advance bid | Full term in UI; "pre-bid" acceptable in dense tables only |
| **Live auction** | Real-time auction, active auction | "Live" is the canonical modifier |
| **Buy it now** | Instant purchase, direct buy | Phrase used as-is; capitalize only first word: "Buy it now" |
| **Buyer fee** | Service fee, transaction fee, premium | "Buyer fee" is the Copart-specific term |
| **Sale date** | Auction date, event date | "Sale date" is canonical |
| **Yard** | Location, facility, branch | "Yard" is the Copart term for physical locations |
| **Run number** | Lane number, sequence | "Run number" for auction ordering |
| **Tow** | Transport, haul, ship | "Tow" for vehicle movement services |
| **Title type** | Title status, title category | "Title type" as the field label |
| **Damage type** | Damage category, loss type | "Damage type" as the field label |
| **Odometer** | Mileage, miles | "Odometer" as the field label; use "miles" in conversational copy |
| **Highlights** | Features, specs, details | "Highlights" for the vehicle summary section |
| **Condition** | Quality, grade | "Condition" as the vehicle state descriptor |
| **Seller** | Consigner, provider, vendor | "Seller" for the entity listing the vehicle |
| **Gate release** | Vehicle pickup, release | "Gate release" is the Copart process term |
| **Storage fees** | Yard fees, holding fees | "Storage fees" is canonical |

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
- **Be specific.** "Place $2,400 bid" beats "Submit". "Remove from watchlist" beats "Delete"
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
- **Primary button** = the specific action: "Place $2,400 bid" — never "OK" or "Yes"
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

### Numbers & Formats
- **Spell out 1–9** in body copy ("three vehicles") — numerals for 10+ ("42 results")
- **Always use numerals** for prices, bids, lot numbers, counts in UI elements, data tables
- **Currency:** "$1,200" format — no cents unless partial dollars ("$0.50")
- **Thousands separator:** Always use commas — "$12,500" not "$12500"

## 2.8 Dynamic & Adaptive Copy

### Date & Time Formatting

| Format | Example | Usage |
|--------|---------|-------|
| Abbreviated date | Feb 22, 2026 | Default for all dates in UI |
| Relative date | Today, Yesterday, 3 days ago | Use within 7 days; absolute date after that |
| Time | 2:30 PM ET | 12-hour clock, timezone when auctions cross time zones |
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

**Do:** Primary: "Place $2,400 bid" / Secondary: "Cancel"
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

**Do:** "Bidding closes Feb 22 at 2:30 PM ET" / "Lot sold — final bid: $12,400"
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

### Blue 200 — Brand Light
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#E1E9FA`                      |
| **RGB**     | 225, 233, 250                  |
| **HSL**     | 221°, 69%, 93%                 |
| **WCAG on Black** | 17.42:1 — **AAA**        |
| **Usage**   | Selected row backgrounds, info alert fills, active tab backgrounds |

### Blue 100 — Brand Lightest
| Property     | Value                          |
|-------------|--------------------------------|
| **Hex**     | `#EEF2FC`                      |
| **RGB**     | 238, 242, 252                  |
| **HSL**     | 223°, 64%, 96%                 |
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

**Why orange:** Copart is an auction platform — urgency is a core UX pattern ("Ending Soon", "Last Chance", "X people watching"). Orange communicates urgency without the danger tone of error/rose. It's complementary to blue on the color wheel, providing maximum contrast and breaking the "too blue" problem on complex pages.

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
| `blue-100` | `#EEF2FC` | `#141E33` | Info backgrounds, hover fills |
| `blue-200` | `#E1E9FA` | `#1E2A45` | Selected/active backgrounds on dark |
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
- Never use pure red (`#FF0000`, `#E00000`, etc.) anywhere in the system. Use the rose/magenta error palette instead.
- Never combine Warning amber and Error Rose in adjacent elements — it creates visual noise that damages trust.
- Never use Orange 600 for body text or as a primary action — it is a secondary accent only.
- Never place Orange and Warning elements adjacent to each other — despite different hues (24° vs 37°), they can blur at a glance in dense UIs.
- Never use color as the sole indicator of state. Always pair with icons, labels, or patterns.

---

# 4. Foundations — Typography

## 4.1 Primary Font Family: Inter

**Why Inter:** Inter was designed specifically for computer screens. Its tall x-height, open apertures, and tabular number support make it ideal for data-heavy auction interfaces. Copart's existing web design system has already adopted Inter, and it aligns with Apple's SF Pro philosophy — neutral, highly legible, optimized for UI.

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

#### Display Small
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 48px / 3rem | 36px / 2.25rem | 28px / 1.75rem |
| **Line Height** | 56px / 1.167 | 44px / 1.222 | 36px / 1.286 |
| **Letter Spacing** | -0.02em | -0.015em | -0.01em |
| **Weight** | 800 (Extra Bold) | 800 (Extra Bold) | 700 (Bold) |
| **Token** | `type-display-sm` | | |

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

#### Title 1 (H2)
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 28px / 1.75rem | 24px / 1.5rem | 22px / 1.375rem |
| **Line Height** | 36px / 1.286 | 32px / 1.333 | 30px / 1.364 |
| **Letter Spacing** | -0.01em | -0.005em | 0em |
| **Weight** | 700 (Bold) | 700 (Bold) | 700 (Bold) |
| **Token** | `type-title-1` | | |

#### Title 2 (H3)
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 22px / 1.375rem | 20px / 1.25rem | 18px / 1.125rem |
| **Line Height** | 30px / 1.364 | 28px / 1.4 | 26px / 1.444 |
| **Letter Spacing** | 0em | 0em | 0em |
| **Weight** | 700 (Bold) | 600 (Semi Bold) | 600 (Semi Bold) |
| **Token** | `type-title-2` | | |

#### Title 3 (H4)
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 18px / 1.125rem | 16px / 1rem | 16px / 1rem |
| **Line Height** | 26px / 1.444 | 24px / 1.5 | 24px / 1.5 |
| **Letter Spacing** | 0em | 0em | 0em |
| **Weight** | 600 (Semi Bold) | 600 (Semi Bold) | 600 (Semi Bold) |
| **Token** | `type-title-3` | | |

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

#### Body (Default)
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 16px / 1rem | 16px / 1rem | 16px / 1rem |
| **Line Height** | 24px / 1.5 | 24px / 1.5 | 24px / 1.5 |
| **Letter Spacing** | 0em | 0em | 0em |
| **Weight** | 400 (Regular) | 400 (Regular) | 400 (Regular) |
| **Color** | Neutral 700 (`#46525D`) | | |
| **Token** | `type-body` | | |

#### Body Emphasis
| Property | All Breakpoints |
|----------|----------------|
| **Size** | Same as Body |
| **Weight** | 500 (Medium) |
| **Token** | `type-body-emphasis` |

#### Callout
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 16px / 1rem | 14px / 0.875rem | 14px / 0.875rem |
| **Line Height** | 24px / 1.5 | 22px / 1.571 | 22px / 1.571 |
| **Letter Spacing** | 0em | 0em | 0em |
| **Weight** | 500 (Medium) | 500 (Medium) | 500 (Medium) |
| **Token** | `type-callout` | | |

#### Subheadline
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| **Size** | 14px / 0.875rem | 14px / 0.875rem | 14px / 0.875rem |
| **Line Height** | 20px / 1.429 | 20px / 1.429 | 20px / 1.429 |
| **Letter Spacing** | 0.005em | 0.005em | 0.005em |
| **Weight** | 600 (Semi Bold) | 600 (Semi Bold) | 600 (Semi Bold) |
| **Token** | `type-subheadline` | | |

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

#### Caption 1
| Property | All Breakpoints |
|----------|----------------|
| **Size** | 12px / 0.75rem |
| **Line Height** | 16px / 1.333 |
| **Letter Spacing** | 0.015em |
| **Weight** | 500 (Medium) |
| **Color** | Neutral 500 (`#7A8691`) |
| **Token** | `type-caption-1` |

#### Caption 2
| Property | All Breakpoints |
|----------|----------------|
| **Size** | 11px / 0.6875rem |
| **Line Height** | 14px / 1.273 |
| **Letter Spacing** | 0.02em |
| **Weight** | 500 (Medium) |
| **Token** | `type-caption-2` |

#### Overline
| Property | All Breakpoints |
|----------|----------------|
| **Size** | 11px / 0.6875rem |
| **Line Height** | 16px / 1.455 |
| **Letter Spacing** | 0.08em |
| **Weight** | 700 (Bold) |
| **Text Transform** | Uppercase |
| **Token** | `type-overline` |

---

## 4.3 Font Pairing Strategy

**Primary (95% of UI):** Inter — used for all interface text, from hero headings to caption labels.

**Monospace (Data & Code):** `"JetBrains Mono", "SF Mono", "Fira Code", "Cascadia Code", monospace`
- Used for: VIN numbers, lot numbers, bid amounts in tables, timestamps in auction logs
- Size: Match the semantic role (body, caption, etc.) but reduce by 1px to account for mono's wider set width

**When to use monospace:** Any string where character alignment aids scanning — VIN (`1HGBH41JXMN109186`), lot numbers (`#48291076`), currency in data tables.

---

## 4.4 Accessibility — Minimum Sizes

| Context | Minimum Size | Rationale |
|---------|-------------|-----------|
| **Body text** | 16px | WCAG recommendation for comfortable reading |
| **Interactive labels** (buttons, links) | 14px | Minimum for touch-target legibility |
| **Form labels** | 14px | Must be clearly associated with input |
| **Caption / metadata** | 11px | Absolute floor — only for non-essential info |
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
- **Related items** (label to input, title to description): `space-2` (8px) or `space-3` (12px)
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
| **Default size** | 20px (navigation), 16px (buttons/inline), 24px (standalone) |
| **ViewBox** | `0 0 24 24` (all icons) |
| **Color** | `currentColor` (inherits from parent text color) |

### Size Scale

| Token | Size | Usage |
|-------|------|-------|
| `icon-xs` | 12px | Chevrons, breadcrumb separators, trend arrows |
| `icon-sm` | 14px | Small button icons, step indicators |
| `icon-md` | 16px | Default button icons, toast icons, inline icons |
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
6. **Alignment** — Use `.btn-icon` class with `vertical-align: -0.15em` for inline text alignment
7. **Accessibility** — Decorative icons get `aria-hidden="true"`. Functional icons need `aria-label` or visible text

---

# 7. Components

> Every component follows Apple HIG principles: purposeful animation, clear affordances, consistent behavior across contexts. Components are documented with anatomy, states, usage, accessibility, and code-ready specs.

---

## 7.1 Navigation Components

### Component: Header

**Purpose:** Primary navigation and brand identity. Anchors the user's sense of place across all pages. Always include the Copart header at the top of every page — use the existing component files (`components/header/index.html` for logged-out, `components/header/loggedin.html` for logged-in), never recreate from scratch. Shared design tokens live in `components/tokens.css`.

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
Label: type-caption-2 (11px)
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

**Purpose:** Shows the user's location within the site hierarchy and enables upward navigation.

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
| Separator | Neutral 300 | N/A | N/A |

**Specs:**
```
Height: 32px (container)
Item font: type-caption-1 (12px, medium)
Separator: 12px chevron-right icon, Neutral 300, margin 0 space-2
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
| State | Background | Text | Border | Shadow |
|-------|-----------|------|--------|--------|
| Default | Blue 600 | White | None | `0 1px 2px rgba(38,98,217,0.24)` |
| Hover | Blue 800 | White | None | `0 2px 4px rgba(6,53,152,0.32)` |
| Active/Pressed | `#042D7A` | White | None | `0 0 0 transparent` (inset feel) |
| Disabled | Neutral 200 | Neutral 500 | None | None |
| Loading | Blue 600 @ 70% opacity | Hidden | None | None (spinner visible) |
| Focus | Blue 600 | White | None | `0 0 0 3px rgba(38,98,217,0.4)` ring |

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

**Specs (all sizes):**
```
Font family: Inter
Cursor: pointer (default), not-allowed (disabled)
Transition: background 150ms ease, box-shadow 150ms ease, transform 100ms ease
Active transform: scale(0.98)
Min-width: 64px (prevent tiny buttons)
Icon-to-label gap: space-2 (8px)
```

**Usage:**
- **One Primary per view.** The primary button represents the single most important action.
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
Label: type-subheadline (14px / 600), margin-bottom space-2 (8px)
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
Same as Text Field states, plus:
| State | Additional Visual |
|-------|------------------|
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
Menu: background White, border 1px Neutral 200, border-radius 12px
Menu shadow: 0 4px 16px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.06)
Menu max-height: 320px (scrollable)
Option height: 40px
Option padding: space-3 (12px) horizontal
Search input inside menu: 36px height, full-width, border-bottom divider
Animation: opacity 0→1, translateY(-4px→0), 150ms ease-out
z-index: 1100
```

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
Transition: background 200ms ease, transform 200ms cubic-bezier(0.4, 0, 0.2, 1)
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
| Unchecked Hover | 1.5px Blue 600 | White | None |
| Checked | None | Blue 600 | White checkmark |
| Checked Hover | None | Blue 800 | White checkmark |
| Indeterminate | None | Blue 600 | White minus line |
| Disabled Unchecked | 1.5px Neutral 200 | Neutral 100 | None |
| Disabled Checked | None | Neutral 300 | White checkmark |
| Error | 1.5px error-border | White or Blue 600 | — |
| Focus | — | — | `0 0 0 3px rgba(38,98,217,0.4)` ring |

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
| Unselected Hover | 1.5px Blue 600 | White | None |
| Selected | 1.5px Blue 600 | White | Blue 600 (10px) |
| Selected Hover | 1.5px Blue 800 | White | Blue 800 |
| Disabled Unselected | 1.5px Neutral 200 | Neutral 100 | None |
| Disabled Selected | 1.5px Neutral 300 | Neutral 100 | Neutral 300 |
| Focus | — | — | Focus ring on outer circle |

**Specs:**
```
Outer circle: 20px × 20px
Inner dot: 10px × 10px (centered)
Border-radius: 50% (both)
Gap (circle to label): space-2 (8px)
Label: type-body (16px / 400)
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
| Variant | Background | Border-Left | Icon | Icon Color |
|---------|-----------|-------------|------|-----------|
| Info | `info-bg` | 3px `info-border` | Info circle | `info-icon` |
| Success | `success-bg` | 3px `success-border` | Checkmark circle | `success-icon` |
| Warning | `warning-bg` | 3px `warning-border` | Triangle exclamation | `warning-icon` |
| Error | `error-bg` | 3px `error-border` | Octagon exclamation | `error-icon` |

**States:**
| State | Behavior |
|-------|----------|
| Visible | Full opacity, normal layout flow |
| Entering | Slide down + fade in, 200ms ease-out |
| Dismissing | Fade out + collapse height, 200ms ease-in |
| Dismissed | `display: none`, removed from flow |

**Specs:**
```
Border-radius: 8px
Padding: space-4 (16px)
Icon: 20px, flex-shrink 0
Gap (icon to content): space-3 (12px)
Title: type-subheadline (14px / 600), matching text color per variant
Description: type-body (16px / 400), matching text color per variant
Dismiss button: 20px icon, Neutral 500, 8px from top-right
Min-height: 48px
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

**When to use Shelf vs Modal:**
- **Shelf** — User needs to reference the page behind it, content is browseable or scrollable (vehicle detail, filters, search), or the task involves multiple steps.
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
Footer padding: space-4 (16px) space-6 (24px), flex with justify-end, gap space-3
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
Subtitle: type-body (16px / 400), Neutral 700
Meta: type-caption-1 (12px / 500), Neutral 500
Footer: border-top 1px Neutral 200, padding space-3 (12px) space-4 (16px)
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
| Alternating row | Neutral 100 bg (optional) | Neutral 200 bg | Blue 200 bg | — |
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
Period: type-caption-2 (11px), Neutral 500
Gap (value to trend): space-2 (8px)
Gap (value to label): space-1 (4px)
```

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

## 8.1 Page Templates

### Landing Page
**Structure:** Full-width hero → value props (3-col grid) → featured vehicles carousel → how-it-works steps → CTA section → footer

| Section | Grid Span | Key Components |
|---------|-----------|---------------|
| Hero | 12 cols | Display Large heading, search bar, background image/gradient |
| Value Props | 4+4+4 cols | Stat cards with icons |
| Featured Vehicles | 12 cols | Horizontal card carousel (4 visible on desktop) |
| How It Works | 3+3+3+3 cols | Step indicators + icon cards |
| CTA Banner | 12 cols | Title 1 + Primary button, Blue 900 gradient background |
| Footer | 12 cols, 4-col sub-grid | Nav links, legal, social icons |

**Spacing:** space-16 (64px) between major sections (desktop), space-10 (40px) on mobile.

---

### Dashboard (Authenticated)
**Structure:** Header → sidebar (left, 280px) → main content area with widget grid

| Area | Components |
|------|-----------|
| Sidebar | Navigation list: My Bids, Watchlist, Won Items, Payments, Settings |
| Top bar | Breadcrumbs + page title + date range selector |
| Widget row 1 | 4 Stat/KPI cards (active bids, watching, won, total spent) |
| Widget row 2 | Auction calendar table (8 cols) + Upcoming auctions list (4 cols) |
| Widget row 3 | Recent activity list (full-width) |

**Spacing:** space-6 (24px) between widgets, space-8 (32px) between widget rows.

---

### Settings Page
**Structure:** Sidebar navigation (left) → settings form (center, max-width 640px)

| Section | Components |
|---------|-----------|
| Profile | Avatar (XL) + text fields (name, email, phone) |
| Notifications | Toggle switches grouped by category |
| Payment Methods | Cards in a list with add/edit/delete actions |
| Security | Password change form, 2FA toggle |
| Preferences | Dropdowns (timezone, language, currency), radio groups (default view) |

**Pattern:** Each section is a card with Title 2 header. Save button fixed at bottom on mobile or per-section on desktop. Unsaved changes trigger a warning banner.

---

### Profile Page
**Structure:** Profile header (avatar + name + membership tier) → tab bar → tab content

| Tab | Content |
|-----|---------|
| Overview | Stat cards (member since, total purchases, rating) + recent activity list |
| Bid History | Searchable/filterable table with lot#, vehicle, bid amount, result, date |
| Won Vehicles | Card grid of won vehicles with status badges (Payment Due, In Transit, Picked Up) |
| Documents | List of uploaded/required documents with status indicators |

---

### Checkout / Payment Flow
**Structure:** Step indicator (3 steps) → form content → order summary sidebar (right, 4 cols)

| Step | Content |
|------|---------|
| 1. Review | Vehicle card (horizontal) + lot details + fees breakdown table |
| 2. Payment | Payment method selection (radio cards) + billing address form |
| 3. Confirm | Order summary + terms checkbox + "Confirm Payment" Primary button |

**Order summary sidebar** (sticky on desktop, collapsed accordion on mobile):
- Vehicle name + thumbnail
- Winning bid amount
- Buyer premium
- Fees itemized
- Total (highlighted in Title 1, Blue 900)

---

## 8.2 User Flows

### Onboarding Flow
1. **Welcome screen** — Brand hero + "Get Started" CTA button
2. **Account type** — Radio card selection: "I'm buying for myself" / "I'm buying for a business"
3. **Basic info** — Form: name, email, phone, password (with inline validation)
4. **Verification** — Document upload: ID + proof of address (with accepted format hints)
5. **Membership selection** — Pricing cards comparing Basic vs. Premier tiers
6. **Deposit** — Payment form with deposit amount selector
7. **Confirmation** — Success alert + "Start browsing" CTA + checklist of next steps

**Pattern notes:**
- Step indicator visible throughout
- "Back" (tertiary button) + "Continue" (primary button) in footer
- Progress auto-saves — users can resume later
- Each step validates before allowing advance

### Authentication Flow
**Sign In:** Email + password fields → "Sign In" primary button → optional "Forgot password?" tertiary link → optional SSO buttons

**Sign Up:** Redirects to onboarding flow

**Password Reset:** Email field → "Send Reset Link" → confirmation screen → email opens reset form → new password + confirm → success redirect to sign in

**Pattern notes:**
- Single-column layout, max-width 400px, vertically centered
- Logo above form
- Error messages inline per field + summary alert at top
- Social/SSO buttons separated by "or" divider

### Search & Filter Flow
1. **Entry:** Search bar in header or Vehicle Finder page
2. **Quick search:** Type-ahead dropdown with recent searches + popular makes
3. **Results page:** Sidebar filters (left) + results grid (right) + sort/view toggle bar
4. **Filter interaction:** Checkboxes for multi-select (make, damage type), sliders for ranges (year, price), dropdowns for single-select (location)
5. **Active filters:** Horizontal chip row above results showing applied filters with individual clear (X) + "Clear all" link
6. **Detail navigation:** Click card → vehicle detail page → "Back to results" breadcrumb preserves filter state

### Empty States

| Context | Illustration | Headline | Body | Action |
|---------|-------------|----------|------|--------|
| No search results | Magnifying glass icon | "No vehicles match your filters" | "Try adjusting your search criteria or clearing some filters." | "Clear all filters" (secondary button) |
| Empty watchlist | Heart icon | "Your watchlist is empty" | "Save vehicles you're interested in to keep track of upcoming auctions." | "Browse vehicles" (primary button) |
| No bid history | Gavel icon | "No bids yet" | "Once you place your first bid, it'll appear here." | "Find vehicles" (primary button) |
| Error loading | Warning icon | "Something went wrong" | "We couldn't load this content. Please try again." | "Retry" (primary button) |

**Empty state specs:**
```
Container: centered, max-width 400px
Icon: 64px, Neutral 300
Headline: type-title-2 (22px / 700), Neutral 900
Body: type-body (16px / 400), Neutral 500, text-align center
Action button: margin-top space-6 (24px)
Overall padding: space-12 (48px) vertical
```

---

## 8.3 Feedback Patterns

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
- Tone: Helpful and encouraging, never blaming the user
- Action: Always provide a clear next step

---

# 9. Animation & Motion

> Motion is functional, not decorative. Every animation in Vallejo serves a purpose — confirming an action, directing attention, or providing spatial context. We never animate for entertainment. All animations respect `prefers-reduced-motion` by reducing to instant state changes.

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

## 9.2 Micro-Interactions

Small, functional animations that provide immediate feedback on user actions.

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

## 9.3 Delight Animations

Celebratory moments that reinforce positive actions and create emotional connection with the product.

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

## 9.4 State Transitions

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

## 9.5 When to Animate

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

## 9.6 Reduced Motion

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

> **Vallejo Mobile** is a complete adaptation of the desktop design system for iOS, Android, and mobile web. It shares the same color palette, brand rules, and design principles — but with platform-optimized sizing, spacing, navigation, and interaction patterns. Think of it as a sibling system, not a responsive breakpoint.

---

## 10.1 Philosophy: Two Systems, One Brand

| Principle | Desktop | Mobile |
|-----------|---------|--------|
| **Primary input** | Mouse + keyboard | Touch (thumb) |
| **Touch targets** | 40px default | 44px minimum, 48px preferred |
| **Information density** | High — dense tables, multi-column | Low — single column, progressive disclosure |
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
| **Caption 2** | 11px | 400 | 13px | 0.01em | Tab bar labels, tiny metadata |

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

## 10.4 Mobile Navigation

### Bottom Tab Bar

The primary navigation on mobile. Fixed at the bottom edge.

```
Height: 56px + env(safe-area-inset-bottom)
Background: #FFFFFF (light) / #1A1D23 (dark)
Border-top: 0.5px solid Neutral 200
Icon: 24px, centered
Label: 10px / 500, 2px below icon
Active: Blue 600 icon + label
Inactive: Neutral 500 icon + label
Max items: 5
Touch target: 48×48px per item
```

### Navigation Bar (Top)

iOS-style navigation bar for stack-based navigation.

```
Height: 44px (excludes status bar / safe area)
Title: 17px / 600, centered
Back button: chevron-left icon (24px) + "Back" label, left-aligned
Right actions: up to 2 items, 44px touch targets
Background: system blur or solid White/Dark
Large title mode: 34px / 700, left-aligned, collapses on scroll
```

### Search Bar

```
Height: 36px (compact)
Border radius: 10px
Background: Neutral 100 (light) / Neutral 200 (dark)
Icon: 16px magnifying glass, Neutral 500
Placeholder: 16px, Neutral 500
Focus: expands to full width, cancel button appears right
```

---

## 10.5 Mobile Spacing

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

## 10.6 Mobile-Specific Patterns

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

## 10.7 Mobile Accessibility Additions

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

## 10.8 Platform Decision Map

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

## 12.1 Design Principles (Expanded)

These three principles — introduced in Section 1 — are the foundation of every design decision at Copart.

### Clarity Builds Trust
**Why it matters:** Copart users are making financial commitments — sometimes $50,000+ on a vehicle they may not have seen in person. Every ambiguous label, hidden fee, or unclear state erodes confidence. Clarity isn't just aesthetic; it's fiduciary.

**How to apply:**
- Label buttons with specific actions, not generic verbs. "Place Bid — $4,500" not "Submit."
- Show all fees before the confirmation step. No surprises at checkout.
- Use consistent terminology. If it's called a "lot" on the search page, call it a "lot" everywhere.
- Make system status visible. If an auction is live, show a pulsing indicator with "Live Now" text.

### Progressive Disclosure
**Why it matters:** Copart serves both first-time car buyers and professional dealers who process hundreds of vehicles daily. The interface must serve both without compromise.

**How to apply:**
- Default views show the 5 most important data points. Additional details are one click away.
- Filters start collapsed on mobile, expanded on desktop.
- Onboarding introduces concepts one at a time, with the option to skip for returning users.
- Tooltips and info icons supplement, never replace, clear primary labels.

### Accessible by Default
**Why it matters:** Accessibility isn't an add-on — it's a quality signal. An auction platform that works for a user with low vision, motor impairment, or slow connectivity works better for everyone.

**How to apply:**
- Test all components at 200% zoom. Nothing should break or overlap.
- All interactive elements have visible focus indicators.
- All images have meaningful alt text (not "image" or "photo").
- All video content has captions.
- All forms announce errors to screen readers via `aria-live` regions.

---

## 12.2 Do's and Don'ts

### 1. Color Usage
**Do:** Use Blue 600 for the single primary action on a screen. Use Neutral 700 for body text. Use semantic colors only for their intended purpose (success = green, error = rose).

**Don't:** Use Blue 600 for decorative elements, large background fills, or body text. Don't use pure red anywhere. Don't use color alone to convey meaning.

---

### 2. Button Hierarchy
**Do:** Place one Primary button per view. Pair it with a Secondary or Tertiary button for alternative actions. Maintain consistent sizing within a button group.

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
**Do:** Include an icon, headline, description, and a clear action button. Use encouraging, helpful language. Guide the user toward their next step.

**Don't:** Show "No data" with nothing else. Don't blame the user ("You haven't done anything"). Don't leave the page completely empty.

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
**Do:** Use motion to provide feedback (button press, toggle flip), guide attention (new content entering), and communicate state changes (dropdown opening). Keep durations under 300ms for micro-interactions.

**Don't:** Animate for decoration without functional purpose. Don't use animation durations longer than 500ms for UI interactions. Don't block user input during animation. Always respect `prefers-reduced-motion` by reducing or removing non-essential animation.

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

**Total: 31 components, 50+ variants, 100+ documented states.**
**Mobile platform: All components adapted with touch-optimized sizing, plus 4 mobile-specific components (Bottom Tab Bar, Navigation Bar, Search Bar, Bottom Sheet).**

---

*Vallejo Design System 1.1 — Desktop + Mobile platforms. Designed for trust, engineered for accessibility, scaled for a global auction platform.*
