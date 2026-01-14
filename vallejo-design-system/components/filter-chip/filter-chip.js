/**
 * Filter Chip Component
 * 
 * A filter chip component for selecting and filtering options.
 * 
 * Usage:
 *   <button class="vds-filter-chip" data-vds-component="filter-chip">
 *     Filter Option
 *   </button>
 * 
 * States: default, selected, disabled
 */

export class FilterChip {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      selected: element.dataset.selected === 'true' || element.classList.contains('vds-filter-chip--selected'),
      disabled: element.disabled || element.dataset.disabled === 'true',
      ...options,
    };
    
    this.init();
  }
  
  init() {
    this.setupClasses();
    this.setupAttributes();
    this.setupEventListeners();
  }
  
  setupClasses() {
    this.element.classList.add('vds-filter-chip');
    
    if (this.options.selected) {
      this.element.classList.add('vds-filter-chip--selected');
    }
    
    if (this.options.disabled) {
      this.element.classList.add('vds-filter-chip--disabled');
    }
  }
  
  setupAttributes() {
    if (!this.element.hasAttribute('role')) {
      this.element.setAttribute('role', 'button');
    }
    
    if (this.options.selected) {
      this.element.setAttribute('aria-pressed', 'true');
    } else {
      this.element.setAttribute('aria-pressed', 'false');
    }
    
    if (this.options.disabled) {
      this.element.setAttribute('aria-disabled', 'true');
    }
  }
  
  setupEventListeners() {
    this.element.addEventListener('click', (e) => {
      if (this.options.disabled) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      
      this.toggle();
    });
  }
  
  toggle() {
    if (this.options.disabled) return;
    
    this.setSelected(!this.options.selected);
  }
  
  setSelected(selected) {
    this.options.selected = selected;
    
    if (selected) {
      this.element.classList.add('vds-filter-chip--selected');
      this.element.setAttribute('aria-pressed', 'true');
      this.element.setAttribute('data-selected', 'true');
    } else {
      this.element.classList.remove('vds-filter-chip--selected');
      this.element.setAttribute('aria-pressed', 'false');
      this.element.removeAttribute('data-selected');
    }
    
    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('filter-chip:change', {
      detail: { selected },
      bubbles: true,
    }));
  }
  
  setDisabled(disabled) {
    this.options.disabled = disabled;
    
    if (disabled) {
      this.element.classList.add('vds-filter-chip--disabled');
      this.element.setAttribute('aria-disabled', 'true');
      this.element.setAttribute('data-disabled', 'true');
    } else {
      this.element.classList.remove('vds-filter-chip--disabled');
      this.element.removeAttribute('aria-disabled');
      this.element.removeAttribute('data-disabled');
    }
  }
  
  static init(selector = '[data-vds-component="filter-chip"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new FilterChip(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => FilterChip.init());
  } else {
    FilterChip.init();
  }
}

export default FilterChip;
