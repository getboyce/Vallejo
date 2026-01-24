# Header Component

## Overview

The Header component is the primary navigation element for the Vallejo Design System. It provides site-wide navigation, search functionality, user authentication controls, and language/region selection. The header is fully responsive and adapts to desktop, tablet, and mobile viewports.

**Figma Reference:**
- **Desktop Node ID**: `138-2381`
- **Mobile/Tablet Node ID**: `138-1621`
- **Figma Link**: [Header Component - Desktop](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=138-2381&m=dev)
- **Figma Link**: [Header Component - Mobile/Tablet](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=138-1621&m=dev)

**Demos:**
- **Standalone**: [header-demo.html](../test-examples/header-demo.html) — Full interactive demo with auth toggle, mobile menu, search, and language modal.
- **All Components**: [all-components-demo.html#header](../test-examples/all-components-demo.html#header) — Header section in the Vallejo all-components demo.

**Implementation:** CSS classes are documented in [catalog.json](catalog.json) under `componentClasses.header`. The live implementation lives in `test-examples/header-demo.html` (HTML, CSS, vanilla JS).

## Description

The Header component serves as the main navigation hub for Copart.com. It includes:

- **Logo/Branding**: Copart logo with link to homepage
- **Primary Navigation**: Main navigation items (Buy, Sell, Auctions, Locations) with dropdown menus
- **Search Bar**: Global search with scope selector and search button
- **Utility Actions**: Sign in/Sign up buttons (unauthenticated) or Account button (authenticated)
- **Language/Region Selector**: Modal for changing website language and region
- **Secondary Navigation**: Additional navigation bar for authenticated users (Dashboard, My tools, etc.)
- **Mobile Menu**: Hamburger menu for mobile devices

### Use Cases

- **Site-wide Navigation**: Primary navigation for all pages
- **Global Search**: Site-wide search functionality
- **User Authentication**: Sign in/sign up and account management
- **Internationalization**: Language and region selection
- **Responsive Design**: Adapts to all screen sizes

## Variants

### Desktop Header

- **Full Navigation**: All primary navigation items visible
- **Search Bar**: Full-width search with scope selector
- **Utility Actions**: All utility buttons visible
- **Secondary Nav**: Shown when user is authenticated

### Tablet Header

- **Condensed Navigation**: Some navigation items may be hidden
- **Search Bar**: Reduced width search bar
- **Utility Actions**: Condensed button sizes
- **Mobile Menu**: Hamburger menu available

### Mobile Header

- **Minimal Navigation**: Only logo and mobile menu toggle visible
- **Hidden Search**: Search bar hidden (accessible via mobile menu)
- **Condensed Actions**: Minimal utility buttons
- **Mobile Menu**: Full-screen mobile menu overlay

## Props / TypeScript Interface

```typescript
export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  children?: NavigationItem[];
  disabled?: boolean;
}

export interface SearchScope {
  value: string;
  label: string;
}

export interface Language {
  code: string;
  label: string;
  flag?: string;
}

export interface Region {
  code: string;
  label: string;
  flag?: string;
}

export interface HeaderProps {
  /**
   * Logo component or image
   */
  logo?: React.ReactNode;
  
  /**
   * Logo href/link
   * @default '/'
   */
  logoHref?: string;
  
  /**
   * Primary navigation items
   */
  primaryNavigation?: NavigationItem[];
  
  /**
   * Secondary navigation items (shown when logged in)
   */
  secondaryNavigation?: NavigationItem[];
  
  /**
   * Search placeholder text
   * @default 'Try our new AI search'
   */
  searchPlaceholder?: string;
  
  /**
   * Search scope options
   */
  searchScopes?: SearchScope[];
  
  /**
   * Current search scope
   */
  currentSearchScope?: string;
  
  /**
   * Search value (controlled)
   */
  searchValue?: string;
  
  /**
   * Search change handler
   */
  onSearchChange?: (value: string) => void;
  
  /**
   * Search submit handler
   */
  onSearchSubmit?: (value: string, scope: string) => void;
  
  /**
   * Search scope change handler
   */
  onSearchScopeChange?: (scope: string) => void;
  
  /**
   * Whether user is authenticated
   * @default false
   */
  isAuthenticated?: boolean;
  
  /**
   * User account name/email
   */
  userAccountName?: string;
  
  /**
   * User avatar URL
   */
  userAvatarUrl?: string;
  
  /**
   * Sign in click handler
   */
  onSignIn?: () => void;
  
  /**
   * Sign up click handler
   */
  onSignUp?: () => void;
  
  /**
   * Account click handler
   */
  onAccountClick?: () => void;
  
  /**
   * Help link href
   * @default '#'
   */
  helpHref?: string;
  
  /**
   * Help link text
   * @default 'Need help?'
   */
  helpText?: string;
  
  /**
   * Available languages
   */
  languages?: Language[];
  
  /**
   * Current language
   */
  currentLanguage?: string;
  
  /**
   * Available regions
   */
  regions?: Region[];
  
  /**
   * Current region
   */
  currentRegion?: string;
  
  /**
   * Language change handler
   */
  onLanguageChange?: (language: string) => void;
  
  /**
   * Region change handler
   */
  onRegionChange?: (region: string) => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}
```

## Code Examples

### Basic Header (Unauthenticated)

```typescript
import { Header } from './components/header/Header';

function App() {
  const primaryNavigation = [
    {
      id: 'buy',
      label: 'Buy',
      href: '/buy',
      children: [
        { id: 'browse-type', label: 'Browse by type', href: '/buy/type' },
        { id: 'browse-category', label: 'Browse by category', href: '/buy/category' },
        { id: 'buy-now', label: 'Buy it now', href: '/buy/now' },
      ],
    },
    {
      id: 'sell',
      label: 'Sell',
      href: '/sell',
    },
    {
      id: 'auctions',
      label: 'Auctions',
      href: '/auctions',
      children: [
        { id: 'my-bids', label: 'My bids', href: '/auctions/bids' },
        { id: 'lots-won', label: 'Lots won', href: '/auctions/won' },
      ],
    },
    {
      id: 'locations',
      label: 'Locations',
      href: '/locations',
    },
  ];

  return (
    <Header
      primaryNavigation={primaryNavigation}
      onSignIn={() => console.log('Sign in clicked')}
      onSignUp={() => console.log('Sign up clicked')}
    />
  );
}
```

### Header with Search

```typescript
import { Header } from './components/header/Header';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [searchScope, setSearchScope] = useState('all');

  const searchScopes = [
    { value: 'all', label: 'All' },
    { value: 'vehicles', label: 'Vehicles' },
    { value: 'parts', label: 'Parts' },
  ];

  const handleSearchSubmit = (value: string, scope: string) => {
    console.log('Search:', value, 'Scope:', scope);
    // Navigate to search results
  };

  return (
    <Header
      primaryNavigation={primaryNavigation}
      searchValue={searchValue}
      searchScopes={searchScopes}
      currentSearchScope={searchScope}
      onSearchChange={setSearchValue}
      onSearchScopeChange={setSearchScope}
      onSearchSubmit={handleSearchSubmit}
    />
  );
}
```

### Authenticated Header with Secondary Navigation

```typescript
import { Header } from './components/header/Header';

function App() {
  const secondaryNavigation = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      id: 'my-tools',
      label: 'My tools',
      href: '/tools',
      children: [
        { id: 'my-bids', label: 'My bids', href: '/tools/bids' },
        { id: 'lots-won', label: 'Lots won', href: '/tools/won' },
        { id: 'lots-lost', label: 'Lots lost', href: '/tools/lost' },
        { id: 'my-offers', label: 'My offers', href: '/tools/offers' },
      ],
    },
    {
      id: 'bid-status',
      label: 'Bid status',
      href: '/bid-status',
    },
    {
      id: 'payments',
      label: 'Payments',
      href: '/payments',
    },
    {
      id: 'helpdesk',
      label: 'Helpdesk',
      href: '/helpdesk',
    },
  ];

  return (
    <Header
      primaryNavigation={primaryNavigation}
      secondaryNavigation={secondaryNavigation}
      isAuthenticated={true}
      userAccountName="John Doe"
      userAvatarUrl="/avatars/john-doe.jpg"
      onAccountClick={() => console.log('Account clicked')}
    />
  );
}
```

### Header with Language/Region Selection

```typescript
import { Header } from './components/header/Header';

function App() {
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
  ];

  const regions = [
    { code: 'us', label: 'USA', flag: '🇺🇸' },
    { code: 'ca', label: 'Canada', flag: '🇨🇦' },
    { code: 'uk', label: 'United Kingdom', flag: '🇬🇧' },
  ];

  const handleLanguageChange = (language: string) => {
    console.log('Language changed to:', language);
    // Update app language
  };

  const handleRegionChange = (region: string) => {
    console.log('Region changed to:', region);
    // Update app region
  };

  return (
    <Header
      primaryNavigation={primaryNavigation}
      isAuthenticated={true}
      languages={languages}
      currentLanguage="en"
      regions={regions}
      currentRegion="us"
      onLanguageChange={handleLanguageChange}
      onRegionChange={handleRegionChange}
    />
  );
}
```

## Styling

The Header component uses design tokens from the Vallejo Design System:

### Colors
- **Background**: `--color-light-mode-neutral-500` (#2F333C) - Dark header background
- **Text**: `--color-brand-copart-white` (#FFFFFF) - White text on dark background
- **Links**: `--color-brand-copart-white` - White navigation links
- **Hover**: `rgba(255, 255, 255, 0.1)` - Subtle hover background

### Typography
- **Navigation Links**: `--typography-font-size-300` (14px), `--typography-weight-medium` (500)
- **Secondary Nav**: `--typography-font-size-200` (12px)
- **Logo**: `--typography-font-size-400` (16px), `--typography-weight-bold` (700)

### Spacing
- **Header Height**: 64px (desktop), 56px (mobile)
- **Container Padding**: `--spacing-20` (20px) desktop, `--spacing-16` (16px) mobile
- **Item Gaps**: `--spacing-8` to `--spacing-24`

### Border Radius
- **Buttons/Links**: `--border-radius-200` (8px)
- **Dropdowns**: `--border-radius-200` (8px)

### Shadows
- **Dropdowns**: `--shadow-medium` - Dropdown menu shadows

## Responsive Behavior

### Desktop (> 1024px)
- Full navigation visible
- Full-width search bar
- All utility actions visible
- Secondary navigation bar visible when authenticated

### Tablet (768px - 1024px)
- Primary navigation hidden (accessible via mobile menu)
- Reduced-width search bar
- Condensed utility buttons
- Mobile menu toggle visible

### Mobile (< 768px)
- Only logo and mobile menu toggle visible
- Search bar hidden (accessible via mobile menu)
- Minimal utility buttons
- Full-screen mobile menu overlay
- Secondary navigation hidden

### Small Mobile (< 480px)
- Logo text hidden (icon only)
- Further condensed buttons
- Language selector simplified

## Accessibility

- **ARIA Labels**: All interactive elements have proper ARIA labels
- **Keyboard Navigation**: Full keyboard support for navigation and dropdowns
- **Focus States**: Clear focus indicators for all interactive elements
- **Screen Readers**: Proper semantic HTML and ARIA attributes
- **Skip Links**: Consider adding skip-to-content link for keyboard users

## Best Practices

1. **Navigation Structure**: Keep primary navigation items to 4-6 items maximum
2. **Search Functionality**: Provide clear search scope options
3. **Authentication States**: Clearly distinguish between authenticated and unauthenticated states
4. **Mobile Experience**: Ensure mobile menu is easily accessible and intuitive
5. **Language Selection**: Make language/region selection easily accessible for international users
6. **Performance**: Lazy load dropdown content if navigation items are extensive
7. **Analytics**: Track search queries and navigation clicks for insights

## Integration Notes

- The Header component should be placed at the top of the page layout
- It uses fixed positioning for mobile menu overlay
- Dropdown menus use absolute positioning relative to their parent items
- Language modal uses fixed positioning with overlay
- Ensure proper z-index stacking for overlays and dropdowns

## Related Components

- **Search Bar Component**: Used within header for search functionality
- **Button Component**: Used for Sign in/Sign up buttons
- **Input Dropdown Component**: Used for search scope selector
- **Modal Component**: Similar pattern for language/region modal
