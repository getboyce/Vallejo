/**
 * Search Bar Component
 * 
 * A search bar component with icon and clear functionality.
 * 
 * Usage:
 *   <div class="vds-search-bar" data-vds-component="search-bar">
 *     <input type="search" class="vds-search-bar__input" placeholder="Search...">
 *   </div>
 */

import { Icon } from '../icon/icon.js';

export class SearchBar {
  constructor(element, options = {}) {
    this.element = element;
    this.inputElement = element.querySelector('input') || element.querySelector('.vds-search-bar__input');
    
    if (!this.inputElement && element.tagName === 'INPUT') {
      this.inputElement = element;
      this.element = this.wrapInput();
    }
    
    this.options = {
      placeholder: options.placeholder || this.inputElement?.placeholder || 'Search...',
      showClearButton: options.showClearButton !== false,
      ...options,
    };
    
    this.clearButton = null;
    this.searchIcon = null;
    
    this.init();
  }
  
  wrapInput() {
    if (this.inputElement.parentElement.classList.contains('vds-search-bar')) {
      return this.inputElement.parentElement;
    }
    
    const wrapper = document.createElement('div');
    wrapper.className = 'vds-search-bar';
    this.inputElement.parentNode.insertBefore(wrapper, this.inputElement);
    wrapper.appendChild(this.inputElement);
    this.inputElement.classList.add('vds-search-bar__input');
    
    return wrapper;
  }
  
  init() {
    this.setupClasses();
    this.createSearchIcon();
    this.createClearButton();
    this.setupEventListeners();
  }
  
  setupClasses() {
    this.element.classList.add('vds-search-bar');
    if (this.inputElement) {
      this.inputElement.classList.add('vds-search-bar__input');
      if (!this.inputElement.type) {
        this.inputElement.type = 'search';
      }
      if (!this.inputElement.placeholder) {
        this.inputElement.placeholder = this.options.placeholder;
      }
    }
  }
  
  createSearchIcon() {
    if (this.element.querySelector('.vds-search-bar__icon')) {
      this.searchIcon = this.element.querySelector('.vds-search-bar__icon');
      return;
    }
    
    this.searchIcon = document.createElement('div');
    this.searchIcon.className = 'vds-search-bar__icon';
    this.searchIcon.setAttribute('aria-hidden', 'true');
    this.loadSearchIcon();
    this.element.insertBefore(this.searchIcon, this.inputElement);
  }
  
  createClearButton() {
    if (!this.options.showClearButton) return;
    
    if (this.element.querySelector('.vds-search-bar__clear')) {
      this.clearButton = this.element.querySelector('.vds-search-bar__clear');
      return;
    }
    
    this.clearButton = document.createElement('button');
    this.clearButton.className = 'vds-search-bar__clear';
    this.clearButton.setAttribute('aria-label', 'Clear search');
    this.clearButton.setAttribute('type', 'button');
    this.loadClearIcon();
    this.clearButton.addEventListener('click', () => this.clear());
    this.element.appendChild(this.clearButton);
    
    this.updateClearButtonVisibility();
  }
  
  setupEventListeners() {
    if (this.inputElement) {
      this.inputElement.addEventListener('input', () => {
        this.updateClearButtonVisibility();
        this.triggerSearch();
      });
      
      this.inputElement.addEventListener('focus', () => {
        this.element.classList.add('vds-search-bar--focus');
      });
      
      this.inputElement.addEventListener('blur', () => {
        this.element.classList.remove('vds-search-bar--focus');
      });
    }
  }
  
  updateClearButtonVisibility() {
    if (this.clearButton) {
      const hasValue = this.inputElement?.value && this.inputElement.value.length > 0;
      if (hasValue) {
        this.clearButton.classList.add('vds-search-bar__clear--visible');
      } else {
        this.clearButton.classList.remove('vds-search-bar__clear--visible');
      }
    }
  }
  
  clear() {
    if (this.inputElement) {
      this.inputElement.value = '';
      this.inputElement.focus();
      this.updateClearButtonVisibility();
      this.triggerSearch();
    }
  }
  
  triggerSearch() {
    this.element.dispatchEvent(new CustomEvent('search-bar:search', {
      detail: { 
        value: this.inputElement?.value || '',
        query: this.inputElement?.value || ''
      },
      bubbles: true,
    }));
  }
  
  getValue() {
    return this.inputElement?.value || '';
  }
  
  setValue(value) {
    if (this.inputElement) {
      this.inputElement.value = value;
      this.updateClearButtonVisibility();
    }
  }
  
  async loadSearchIcon() {
    try {
      const iconSvg = await Icon.getIcon('icon-search', '16', 'currentColor');
      if (iconSvg && this.searchIcon) {
        this.searchIcon.innerHTML = iconSvg;
      }
    } catch (error) {
      console.warn('Could not load search icon:', error);
      if (this.searchIcon) {
        this.searchIcon.innerHTML = '🔍';
      }
    }
  }
  
  async loadClearIcon() {
    try {
      const iconSvg = await Icon.getIcon('icon-close', '16', 'currentColor');
      if (iconSvg && this.clearButton) {
        this.clearButton.innerHTML = iconSvg;
      }
    } catch (error) {
      console.warn('Could not load clear icon:', error);
      if (this.clearButton) {
        this.clearButton.innerHTML = '×';
      }
    }
  }
  
  static init(selector = '[data-vds-component="search-bar"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new SearchBar(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SearchBar.init());
  } else {
    SearchBar.init();
  }
}

export default SearchBar;
