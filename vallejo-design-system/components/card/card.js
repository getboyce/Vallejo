/**
 * Card Component
 * 
 * A card component for displaying content in a contained format.
 * 
 * Usage:
 *   <div class="vds-card" data-vds-component="card">
 *     <div class="vds-card__header">Header</div>
 *     <div class="vds-card__body">Body content</div>
 *     <div class="vds-card__footer">Footer</div>
 *   </div>
 */

export class Card {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      hoverable: element.dataset.hoverable === 'true',
      ...options,
    };
    
    this.init();
  }
  
  init() {
    this.setupClasses();
  }
  
  setupClasses() {
    this.element.classList.add('vds-card');
    
    if (this.options.hoverable) {
      this.element.classList.add('vds-card--hoverable');
    }
  }
  
  static init(selector = '[data-vds-component="card"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Card(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Card.init());
  } else {
    Card.init();
  }
}

export default Card;
