/**
 * Accordion Component
 * 
 * A collapsible accordion component.
 * 
 * Usage:
 *   <div class="vds-accordion" data-vds-component="accordion">
 *     <div class="vds-accordion__item">
 *       <button class="vds-accordion__trigger">Header</button>
 *       <div class="vds-accordion__panel">Content</div>
 *     </div>
 *   </div>
 */

export class Accordion {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      allowMultiple: element.dataset.allowMultiple === 'true',
      ...options,
    };
    
    this.items = [];
    
    this.init();
  }
  
  init() {
    this.items = Array.from(this.element.querySelectorAll('.vds-accordion__item'));
    
    this.setupClasses();
    this.setupAttributes();
    this.setupEventListeners();
  }
  
  setupClasses() {
    this.element.classList.add('vds-accordion');
  }
  
  setupAttributes() {
    this.items.forEach((item, index) => {
      const trigger = item.querySelector('.vds-accordion__trigger');
      const panel = item.querySelector('.vds-accordion__panel');
      
      if (trigger && panel) {
        const panelId = `accordion-panel-${index}`;
        const triggerId = `accordion-trigger-${index}`;
        
        trigger.setAttribute('id', triggerId);
        trigger.setAttribute('aria-expanded', 'false');
        trigger.setAttribute('aria-controls', panelId);
        trigger.setAttribute('type', 'button');
        
        panel.setAttribute('id', panelId);
        panel.setAttribute('aria-labelledby', triggerId);
        panel.setAttribute('hidden', '');
      }
    });
  }
  
  setupEventListeners() {
    this.items.forEach((item) => {
      const trigger = item.querySelector('.vds-accordion__trigger');
      if (trigger) {
        trigger.addEventListener('click', () => this.toggleItem(item));
      }
    });
  }
  
  toggleItem(item) {
    const trigger = item.querySelector('.vds-accordion__trigger');
    const panel = item.querySelector('.vds-accordion__panel');
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    
    if (!this.options.allowMultiple) {
      // Close other items
      this.items.forEach((otherItem) => {
        if (otherItem !== item) {
          this.closeItem(otherItem);
        }
      });
    }
    
    if (isExpanded) {
      this.closeItem(item);
    } else {
      this.openItem(item);
    }
  }
  
  openItem(item) {
    const trigger = item.querySelector('.vds-accordion__trigger');
    const panel = item.querySelector('.vds-accordion__panel');
    
    trigger.setAttribute('aria-expanded', 'true');
    panel.removeAttribute('hidden');
    item.classList.add('vds-accordion__item--open');
  }
  
  closeItem(item) {
    const trigger = item.querySelector('.vds-accordion__trigger');
    const panel = item.querySelector('.vds-accordion__panel');
    
    trigger.setAttribute('aria-expanded', 'false');
    panel.setAttribute('hidden', '');
    item.classList.remove('vds-accordion__item--open');
  }
  
  static init(selector = '[data-vds-component="accordion"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Accordion(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Accordion.init());
  } else {
    Accordion.init();
  }
}

export default Accordion;
