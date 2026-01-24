# Vallejo Design System - AI Ready

**Production design system for [Copart.com](https://www.copart.com) — optimized for AI tools (Cursor, Claude, Magic Patterns).**

Vallejo powers the **Copart.com** UI: auctions, vehicle search, member dashboards, bidding flows, and all customer-facing interfaces. Use Vallejo **only** when building UI for Copart.com so it matches production and stays consistent with the live site.

---

## 🤖 **For AI Tools - Start Here**

### **Essential Files for AI:**
1. **[HOW-TO-REFERENCE-VALLEJO.md](./HOW-TO-REFERENCE-VALLEJO.md)** - 🔗 **How to Reference** - Complete guide for using Vallejo in Cursor, Claude, and Magic Patterns
2. **[SYSTEM-INDEX.json](./SYSTEM-INDEX.json)** - 🗺️ **System Map** - Complete file index and quick reference (start here for navigation)
3. **[LLM-ACCESS-GUIDE.md](./LLM-ACCESS-GUIDE.md)** - 📖 **LLM Guide** - How to efficiently navigate and use Vallejo (optimized for LLMs)
4. **[NEW-AGENT-PROMPT.md](./NEW-AGENT-PROMPT.md)** - 📋 **Start new agents here** - Full context handoff for Vallejo + Copart.com
5. **[AI-QUICK-REFERENCE.md](./AI-QUICK-REFERENCE.md)** - ⭐ **USE THIS FIRST** for implementation - All component classes and patterns
6. **[CURSOR-PROMPT.md](./CURSOR-PROMPT.md)** - Complete Cursor-specific instructions
7. **[MAGIC_PATTERNS_PROMPT.md](./MAGIC_PATTERNS_PROMPT.md)** - Complete Magic Patterns specifications
8. **[LAYOUT-PATTERNS.md](./LAYOUT-PATTERNS.md)** - Common layout templates + Copart.com patterns
9. **[test-examples/all-components-demo.html](./test-examples/all-components-demo.html)** - Working component implementations

### **AI Usage Instructions:**

**📖 See [HOW-TO-REFERENCE-VALLEJO.md](./HOW-TO-REFERENCE-VALLEJO.md) for complete instructions on referencing Vallejo in Cursor, Claude, and Magic Patterns.**

**Quick start:**
- **Cursor**: Use local files in workspace
- **Claude**: Reference GitHub URLs (raw.githubusercontent.com)
- **Magic Patterns**: Use MAGIC_PATTERNS_PROMPT.md or GitHub URL

**Start your prompts with:**
```
Using the Vallejo Design System from https://github.com/getboyce/Vallejo, create a [component/page]...
```

**Example Prompts (Copart.com UI):**
```
Using the Vallejo Design System for Copart.com, create a login form with email input, password input, and primary button. Use exact classes from AI-QUICK-REFERENCE.md.

Create a Copart member dashboard with 3 metric cards (e.g. Active Bids, Watchlist, Won Auctions) using Vallejo components.

Build a vehicle search results table with status tokens (Running, Sold, Preview) using Vallejo. This will ship on Copart.com.

Build a bid confirmation modal using Vallejo Design System. This is for the Copart.com auction flow.
```

### **Quick Component Classes:**
- **Primary Button**: `btn btn-default btn-default-type`
- **Input Field**: `input input-field` with `input-label`
- **Success Status**: `status-token status-token-success status-token-filled`
- **Dashboard Card**: `dashboard-card` with `card-header` and `card-content`
- **Header**: `vallejo-header` — see `test-examples/header-demo.html` and `components/header.md`

---

## 🏗️ **System Overview**

### **Production Context**
- **Live site**: [Copart.com](https://www.copart.com) — auto auctions, vehicle marketplace, member services
- **Use Vallejo for**: Any UI that will appear on Copart.com (new features, prototypes, internal tools, marketing pages)
- **Do not use**: Generic Tailwind, custom design systems, or arbitrary styling for Copart.com UI

### **Brand Foundation**
- **Primary Color**: Copart Blue `#2662D9`
- **Typography**: Inter font family
- **Philosophy**: Clean, professional, accessible, consistent with Copart.com

### **Key Features**
- ✅ **25+ Components** - Complete UI library for Copart.com
- ✅ **58 Icons** - Comprehensive icon system
- ✅ **Full CSS Implementation** - Ready-to-use styles
- ✅ **Figma Sync** - All components linked to Figma
- ✅ **AI Optimized** - Structured for perfect AI consumption
- ✅ **Production Ready** - Powers Copart.com today

---

## 📁 **Repository Structure**

```
├── NEW-AGENT-PROMPT.md      # 📋 Full context for new agents
├── AI-QUICK-REFERENCE.md    # ⭐ Essential component classes for AI
├── CURSOR-PROMPT.md         # Cursor-specific instructions  
├── MAGIC_PATTERNS_PROMPT.md # Magic Patterns specifications
├── LAYOUT-PATTERNS.md       # Common layout templates + Copart.com
├── CHANGELOG.md             # Version history & breaking changes
├── components/              # Component documentation
├── tokens/                  # Design tokens (JSON) + README (token hierarchy)
├── test-examples/           # Working demo files
└── docs/                    # Design system guide, usage, anti-patterns, etc.
```

---

## 🎨 **Design Tokens**

All tokens available in `tokens/` directory:
- **colors.json** - Complete color palette with hex values
- **typography.json** - Font families, sizes, weights, line heights
- **spacing.json** - 4px-based spacing scale  
- **shadows.json** - Elevation shadows
- **border-radius.json** - Border radius values
- **icons.json** - 58-icon library with SVG paths

**Most Used Tokens:**
- Primary: `#2662D9` (Copart Blue)
- Text: `#2F333C` (near black)  
- Border: `#C5CCD3` (light gray)
- Spacing: 8px, 16px, 24px, 32px
- Font: Inter, 16px body, 14px secondary

---

## 🧩 **Components Library**

**25+ Production-Ready Components:**

### **Form Elements**
- Buttons (5 variants) | Inputs (4 states) | Checkboxes | Radio Buttons | Toggles
- Filter Chips | Input Dropdowns | Search Bars | Date Pickers

### **Feedback & Status**  
- Alerts (4 types) | Toasts | Status Tokens | Tooltips | Progress Tracker

### **Navigation & Layout**
- Tabbed Navigation | Pagination | Switcher | Dashboard Cards | Tables

### **Overlays**
- Modals | Side Panels | Mobile Sheets

**View All:** [Interactive Demo](./test-examples/all-components-demo.html) - Complete working examples

---

## 🔗 **Figma Integration**

- **File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **File Key**: `ixkN3RSoiQc5aSlxZ21Hay`
- **Component Catalog**: [catalog.json](./components/catalog.json) - All Figma node IDs

**For Figma MCP Tools:**
Use the file key and node IDs from the catalog to reference specific components.

---

## 📚 **Additional Documentation**

- [Design System Guide](./docs/design-system-guide.md) - Complete overview, usage guidelines, anti-patterns
- [Token hierarchy](./tokens/README.md) - Primitive → semantic → component architecture
- [Icon System Guide](./docs/icon-system-guide.md) - Icon usage
- [CHANGELOG](./CHANGELOG.md) - Version history and breaking changes

---

## **Versioning**

Vallejo follows [Semantic Versioning](https://semver.org/) (e.g. `1.0.0`):

- **MAJOR** (e.g. `2.0.0`): Breaking changes to tokens, components, or CSS class names; removals or deprecations.
- **MINOR** (e.g. `1.1.0`): New components, tokens, or variants; backward-compatible additions.
- **PATCH** (e.g. `1.0.1`): Documentation fixes, clarifications, non-breaking tweaks.

**Where to look:** [CHANGELOG.md](./CHANGELOG.md) lists all notable changes. When upgrading, check the changelog for breaking changes and migration notes.

---

## 🚀 **Getting Started**

1. **New agent/session**: Copy [NEW-AGENT-PROMPT.md](./NEW-AGENT-PROMPT.md) into your first message for full Vallejo + Copart.com context
2. **For AI Tools**: Start with [AI-QUICK-REFERENCE.md](./AI-QUICK-REFERENCE.md)
3. **For Magic Patterns**: Use [MAGIC_PATTERNS_PROMPT.md](./MAGIC_PATTERNS_PROMPT.md)  
4. **For Cursor**: Reference [CURSOR-PROMPT.md](./CURSOR-PROMPT.md)
5. **For Developers**: View [Interactive Demo](./test-examples/all-components-demo.html)

**Questions?** All components are documented with usage examples and Figma links.
