/**
 * Switcher Component
 * 
 * A view switcher component for toggling between different views.
 * 
 * Usage:
 *   <div class="vds-switcher" data-vds-component="switcher">
 *     <button class="vds-switcher__option vds-switcher__option--active">View 1</button>
 *     <button class="vds-switcher__option">View 2</button>
 *   </div>
 */

export class Switcher {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      ...options,
    };
    
    this.options = Array.from(element.querySelectorAll('.vds-switcher__option'));
    this.activeOption = null;
    
    this.init();
  }
  
  init() {
    this.setupClasses();
    this.setupEventListeners();
    this.setActiveOption(this.options.find(opt => opt.classList.contains('vds-switcher__option--active')) || this.options[0]);
  }
  
  setupClasses() {
    this.element.classList.add('vds-switcher');
  }
  
  setupEventListeners() {
    this.options.forEach((option, index) => {
      option.addEventListener('click', () => {
        this.setActiveOption(option);
      });
    });
  }
  
  setActiveOption(option) {
    if (!option || !this.options.includes(option)) return;
    
    // Remove active class from all options
    this.options.forEach(opt => {
      opt.classList.remove('vds-switcher__option--active');
      opt.setAttribute('aria-selected', 'false');
    });
    
    // Add active class to selected option
    option.classList.add('vds-switcher__option--active');
    option.setAttribute('aria-selected', 'true');
    this.activeOption = option;
    
    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('switcher:change', {
      detail: { 
        activeOption: option,
        index: this.options.indexOf(option),
        text: option.textContent.trim()
      },
      bubbles: true,
    }));
  }
  
  getActiveOption() {
    return this.activeOption;
  }
  
  getActiveIndex() {
    return this.activeOption ? this.options.indexOf(this.activeOption) : -1;
  }
  
  static init(selector = '[data-vds-component="switcher"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Switcher(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Switcher.init());
  } else {
    Switcher.init();
  }
}

export default Switcher;
