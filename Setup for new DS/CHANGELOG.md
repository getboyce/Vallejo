# Changelog

All notable changes to the Vallejo Design System (AI-ready setup for Copart.com) are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html) for the design system version.

---

## [1.0.1] - 2025-01-23

### Removed

- **Redundant files**: `PLAN.md`, `NEXT_STEPS.md`, `QUICK_START.md`, `CONTINUE_PROMPT.md`, `SESSION_PROMPT.md`, `TEST_PROMPT.md`, `TEST_RESULT.md`, `docs/VALLEJO_VS_BEST_IN_CLASS.md`, `docs/ai-prompt-templates.md`, `.DS_Store`, `test-examples/login-form-demo.html`. These duplicated or extended content that lives in `NEW-AGENT-PROMPT`, `CURSOR-PROMPT`, `README`, and the design-system guide, or were one-off planning/test artifacts.

### Changed

- **`.cursorrules`**: Trimmed to essentials (Vallejo = Copart only, key file refs, Figma key, rules). Removed long typography/color lists and duplicate “best practices” that live in the prompts.
- **`docs/design-system-guide.md`**: Component categories condensed to one paragraph + catalog link; “Best Practices” section removed (covered by “Using Components” and CURSOR-PROMPT); Documentation and Getting Help updated to drop references to removed files.
- **`README.md`**: Removed link to `ai-prompt-templates.md`.
- **`NEW-AGENT-PROMPT.md`**: Repository layout updated (test-examples, docs) to match remaining files.
- **Component docs** (`components/*.md`): “Usage Guidelines” links updated from `usage-guidelines.md` to `design-system-guide.md#usage-guidelines`.
- **`.gitignore`**: Added; ignores `.DS_Store`.

### Notes

- No breaking changes. `test-examples/all-components-demo.html` and `LoginForm.tsx` remain the reference implementation and React example.

---

## [1.0.0] - 2025-01-23

### Added

- **Token hierarchy**
  - `tokens/README.md`: formal three-tier architecture (primitive → semantic → component).
  - Mapping of Vallejo tokens to each tier; quick reference table.
  - `tokens/index.json`: `tokenHierarchy` field pointing to the README.
  - `docs/design-system-guide.md`: new “Token architecture” section linking to `tokens/README.md`.

- **Usage guidelines in AI prompts**
  - `NEW-AGENT-PROMPT.md`: added `docs/design-system-guide.md` to Essential Files; new Quick Implementation Rule #7 (check “When to use” and “Anti-patterns” when choosing components); token hierarchy note in rule #3; repository layout updated to include `CHANGELOG.md`, `tokens/README.md`, and design-system-guide.
  - `CURSOR-PROMPT.md`: added `tokens/README.md` and `docs/design-system-guide.md` to Essential Files; new Implementation Guideline #6 (Usage guidelines when choosing components).

- **Changelog and versioning**
  - `CHANGELOG.md`: this file.
  - `README.md`: new “Versioning” section (semver policy, where to look for changes, how to interpret versions).

### Notes

- No breaking changes. Token hierarchy and usage-guideline updates are additive.
- Design system version remains **1.0**; package/repo version aligned at **1.0.0** for changelog and versioning.

---

For **versioning rules** (MAJOR / MINOR / PATCH) and how to track versions, see [README → Versioning](./README.md#versioning).
