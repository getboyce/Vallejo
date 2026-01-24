import React, { useState, useRef, useEffect } from 'react';
import './Header.css';

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
   */
  helpHref?: string;
  
  /**
   * Help link text
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

export const Header: React.FC<HeaderProps> = ({
  logo,
  logoHref = '/',
  primaryNavigation = [],
  secondaryNavigation = [],
  searchPlaceholder = 'Try our new AI search',
  searchScopes = [{ value: 'all', label: 'All' }],
  currentSearchScope = 'all',
  searchValue = '',
  onSearchChange,
  onSearchSubmit,
  onSearchScopeChange,
  isAuthenticated = false,
  userAccountName,
  userAvatarUrl,
  onSignIn,
  onSignUp,
  onAccountClick,
  helpHref = '#',
  helpText = 'Need help?',
  languages = [{ code: 'en', label: 'English' }],
  currentLanguage = 'en',
  regions = [{ code: 'us', label: 'USA' }],
  currentRegion = 'us',
  onLanguageChange,
  onRegionChange,
  className = '',
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchScopeOpen, setSearchScopeOpen] = useState(false);
  const [localSearchValue, setLocalSearchValue] = useState(searchValue);
  const [localSearchScope, setLocalSearchScope] = useState(currentSearchScope);
  
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const languageModalRef = useRef<HTMLDivElement>(null);
  const searchScopeRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close navigation dropdowns
      Object.keys(dropdownRefs.current).forEach((key) => {
        if (
          dropdownRefs.current[key] &&
          !dropdownRefs.current[key]?.contains(event.target as Node)
        ) {
          if (activeDropdown === key) {
            setActiveDropdown(null);
          }
        }
      });

      // Close language modal
      if (
        languageModalRef.current &&
        !languageModalRef.current.contains(event.target as Node)
      ) {
        setLanguageModalOpen(false);
      }

      // Close search scope dropdown
      if (
        searchScopeRef.current &&
        !searchScopeRef.current.contains(event.target as Node)
      ) {
        setSearchScopeOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Update local search value when prop changes
  useEffect(() => {
    setLocalSearchValue(searchValue);
  }, [searchValue]);

  // Update local search scope when prop changes
  useEffect(() => {
    setLocalSearchScope(currentSearchScope);
  }, [currentSearchScope]);

  const handleNavigationClick = (item: NavigationItem, event: React.MouseEvent) => {
    if (item.children && item.children.length > 0) {
      event.preventDefault();
      setActiveDropdown(activeDropdown === item.id ? null : item.id);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchValue(value);
    onSearchChange?.(value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit?.(localSearchValue, localSearchScope);
  };

  const handleSearchScopeSelect = (scope: string) => {
    setLocalSearchScope(scope);
    setSearchScopeOpen(false);
    onSearchScopeChange?.(scope);
  };

  const handleLanguageSelect = (language: string) => {
    onLanguageChange?.(language);
    setLanguageModalOpen(false);
  };

  const handleRegionSelect = (region: string) => {
    onRegionChange?.(region);
  };

  const currentLanguageObj = languages.find((l) => l.code === currentLanguage) || languages[0];
  const currentRegionObj = regions.find((r) => r.code === currentRegion) || regions[0];
  const currentSearchScopeObj = searchScopes.find((s) => s.value === localSearchScope) || searchScopes[0];

  return (
    <header className={`vallejo-header ${className}`}>
      {/* Main Header Bar */}
      <div className="vallejo-header__main">
        <div className="vallejo-header__container">
          {/* Logo */}
          <div className="vallejo-header__logo">
            <a href={logoHref} className="vallejo-header__logo-link">
              {logo || (
                <div className="vallejo-header__logo-default">
                  <div className="vallejo-header__logo-oval">
                    <span className="vallejo-header__logo-text">Copart</span>
                  </div>
                </div>
              )}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="vallejo-header__mobile-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span data-icon="menu" data-icon-size="24"></span>
          </button>

          {/* Primary Navigation */}
          <nav className="vallejo-header__primary-nav" aria-label="Primary navigation">
            <ul className="vallejo-header__nav-list">
              {primaryNavigation.map((item) => (
                <li key={item.id} className="vallejo-header__nav-item">
                  <a
                    href={item.href || '#'}
                    className={`vallejo-header__nav-link ${item.disabled ? 'vallejo-header__nav-link--disabled' : ''} ${activeDropdown === item.id ? 'vallejo-header__nav-link--active' : ''}`}
                    onClick={(e) => handleNavigationClick(item, e)}
                    aria-haspopup={item.children && item.children.length > 0 ? 'true' : undefined}
                    aria-expanded={activeDropdown === item.id}
                  >
                    {item.label}
                    {item.children && item.children.length > 0 && (
                      <span data-icon="chevron-down" data-icon-size="16" className="vallejo-header__nav-chevron"></span>
                    )}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.children && item.children.length > 0 && activeDropdown === item.id && (
                    <div
                      ref={(el) => (dropdownRefs.current[item.id] = el)}
                      className="vallejo-header__dropdown"
                      role="menu"
                    >
                      <div className="vallejo-header__dropdown-content">
                        {item.children.map((child) => (
                          <a
                            key={child.id}
                            href={child.href || '#'}
                            className="vallejo-header__dropdown-item"
                            role="menuitem"
                          >
                            {child.label}
                            {child.children && child.children.length > 0 && (
                              <span data-icon="chevron-right" data-icon-size="16"></span>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Search Bar */}
          <div className="vallejo-header__search">
            <form className="vallejo-header__search-form" onSubmit={handleSearchSubmit}>
              <div className="vallejo-header__search-scope" ref={searchScopeRef}>
                <button
                  type="button"
                  className="vallejo-header__search-scope-button"
                  onClick={() => setSearchScopeOpen(!searchScopeOpen)}
                  aria-label="Select search scope"
                  aria-expanded={searchScopeOpen}
                >
                  {currentSearchScopeObj.label}
                  <span data-icon="chevron-down" data-icon-size="16"></span>
                </button>
                {searchScopeOpen && (
                  <div className="vallejo-header__search-scope-dropdown">
                    {searchScopes.map((scope) => (
                      <button
                        key={scope.value}
                        type="button"
                        className={`vallejo-header__search-scope-option ${localSearchScope === scope.value ? 'vallejo-header__search-scope-option--active' : ''}`}
                        onClick={() => handleSearchScopeSelect(scope.value)}
                      >
                        {scope.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="text"
                className="vallejo-header__search-input"
                placeholder={searchPlaceholder}
                value={localSearchValue}
                onChange={handleSearchChange}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                aria-label="Search"
              />
              <button
                type="submit"
                className="vallejo-header__search-button"
                aria-label="Search"
              >
                <span data-icon="search" data-icon-size="20"></span>
              </button>
            </form>
          </div>

          {/* Utility Actions */}
          <div className="vallejo-header__utilities">
            {!isAuthenticated ? (
              <>
                <a href={helpHref} className="vallejo-header__help-link">
                  {helpText}
                </a>
                <button
                  className="vallejo-header__language-button"
                  onClick={() => setLanguageModalOpen(!languageModalOpen)}
                  aria-label="Change language"
                  aria-expanded={languageModalOpen}
                >
                  {currentRegionObj.flag && (
                    <span className="vallejo-header__flag">
                      <span data-icon="flag-us" data-icon-size="25"></span>
                    </span>
                  )}
                  <span data-icon="chevron-down" data-icon-size="16"></span>
                </button>
                <a
                  href="#"
                  className="vallejo-header__sign-in-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onSignIn?.();
                  }}
                >
                  Sign in
                </a>
                <button
                  className="btn btn-default btn-default-type vallejo-header__sign-up"
                  onClick={onSignUp}
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                <button
                  className="vallejo-header__language-button"
                  onClick={() => setLanguageModalOpen(!languageModalOpen)}
                  aria-label="Change language"
                  aria-expanded={languageModalOpen}
                >
                  {currentRegionObj.flag && (
                    <span className="vallejo-header__flag">
                      <span data-icon="flag-us" data-icon-size="25"></span>
                    </span>
                  )}
                  <span data-icon="chevron-down" data-icon-size="16"></span>
                </button>
                <button
                  className="vallejo-header__account-button"
                  onClick={onAccountClick}
                  aria-label="Account"
                >
                  {userAvatarUrl ? (
                    <img
                      src={userAvatarUrl}
                      alt={userAccountName || 'Account'}
                      className="vallejo-header__avatar"
                    />
                  ) : (
                    <span data-icon="user" data-icon-size="20"></span>
                  )}
                  <span className="vallejo-header__account-text">Account</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar (when authenticated) */}
      {isAuthenticated && secondaryNavigation.length > 0 && (
        <div className="vallejo-header__secondary">
          <div className="vallejo-header__container">
            <nav className="vallejo-header__secondary-nav" aria-label="Secondary navigation">
              <ul className="vallejo-header__nav-list">
                {secondaryNavigation.map((item) => (
                  <li key={item.id} className="vallejo-header__nav-item">
                    <a
                      href={item.href || '#'}
                      className={`vallejo-header__nav-link ${item.disabled ? 'vallejo-header__nav-link--disabled' : ''} ${activeDropdown === item.id ? 'vallejo-header__nav-link--active' : ''}`}
                      onClick={(e) => handleNavigationClick(item, e)}
                      aria-haspopup={item.children && item.children.length > 0 ? 'true' : undefined}
                      aria-expanded={activeDropdown === item.id}
                    >
                      {item.label}
                      {item.children && item.children.length > 0 && (
                        <span data-icon="chevron-down" data-icon-size="16" className="vallejo-header__nav-chevron"></span>
                      )}
                    </a>
                    
                    {/* Dropdown Menu */}
                    {item.children && item.children.length > 0 && activeDropdown === item.id && (
                      <div
                        ref={(el) => (dropdownRefs.current[item.id] = el)}
                        className="vallejo-header__dropdown"
                        role="menu"
                      >
                        <div className="vallejo-header__dropdown-content">
                          {item.children.map((child) => (
                            <a
                              key={child.id}
                              href={child.href || '#'}
                              className="vallejo-header__dropdown-item"
                              role="menuitem"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Language/Region Modal */}
      {languageModalOpen && (
        <div className="vallejo-header__language-modal-overlay" onClick={() => setLanguageModalOpen(false)}>
          <div
            ref={languageModalRef}
            className="vallejo-header__language-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="vallejo-header__language-modal-header">
              <h3 className="vallejo-header__language-modal-title">Update website language</h3>
              <button
                className="vallejo-header__language-modal-close"
                onClick={() => setLanguageModalOpen(false)}
                aria-label="Close"
              >
                <span data-icon="close" data-icon-size="20"></span>
              </button>
            </div>
            <div className="vallejo-header__language-modal-content">
              <p className="vallejo-header__language-modal-description">
                Copart operates globally, and you can access our website in multiple languages and regions.
              </p>
              
              <div className="vallejo-header__language-modal-field">
                <label className="input-label">Language</label>
                <div className="input-container">
                  <select
                    className="input input-field"
                    value={currentLanguage}
                    onChange={(e) => handleLanguageSelect(e.target.value)}
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.label}
                      </option>
                    ))}
                  </select>
                  <span data-icon="chevron-down" data-icon-size="16" className="input-icon"></span>
                </div>
              </div>

              <div className="vallejo-header__language-modal-field">
                <label className="input-label">Choose website region</label>
                <p className="vallejo-header__language-modal-hint">
                  Select your preferred region to see localized content and pricing.
                </p>
                <div className="input-container">
                  <select
                    className="input input-field"
                    value={currentRegion}
                    onChange={(e) => handleRegionSelect(e.target.value)}
                  >
                    {regions.map((region) => (
                      <option key={region.code} value={region.code}>
                        {region.label}
                      </option>
                    ))}
                  </select>
                  <span data-icon="chevron-down" data-icon-size="16" className="input-icon"></span>
                </div>
              </div>

              <div className="vallejo-header__language-modal-actions">
                <button
                  className="btn btn-default btn-default-type"
                  onClick={() => setLanguageModalOpen(false)}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="vallejo-header__mobile-menu">
          <div className="vallejo-header__mobile-menu-content">
            {/* Mobile Navigation */}
            <nav className="vallejo-header__mobile-nav">
              {primaryNavigation.map((item) => (
                <div key={item.id} className="vallejo-header__mobile-nav-item">
                  <a
                    href={item.href || '#'}
                    className="vallejo-header__mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="vallejo-header__mobile-nav-children">
                      {item.children.map((child) => (
                        <a
                          key={child.id}
                          href={child.href || '#'}
                          className="vallejo-header__mobile-nav-link vallejo-header__mobile-nav-link--child"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="vallejo-header__mobile-actions">
              {!isAuthenticated ? (
                <>
                  <button
                    className="btn btn-default btn-secondary vallejo-header__mobile-sign-in"
                    onClick={() => {
                      onSignIn?.();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign in
                  </button>
                  <button
                    className="btn btn-default btn-default-type vallejo-header__mobile-sign-up"
                    onClick={() => {
                      onSignUp?.();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <button
                  className="vallejo-header__mobile-account"
                  onClick={() => {
                    onAccountClick?.();
                    setMobileMenuOpen(false);
                  }}
                >
                  {userAvatarUrl ? (
                    <img
                      src={userAvatarUrl}
                      alt={userAccountName || 'Account'}
                      className="vallejo-header__avatar"
                    />
                  ) : (
                    <span data-icon="user" data-icon-size="20"></span>
                  )}
                  <span>{userAccountName || 'Account'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
