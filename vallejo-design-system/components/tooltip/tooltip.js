/**
 * Tooltip Component
 * 
 * A tooltip component for displaying additional information on hover/focus.
 * 
 * Usage:
 *   <button data-vds-tooltip="Tooltip text" data-vds-component="tooltip">
 *     Hover me
 *   </button>
 * 
 * Positions: top, bottom, left, right
 */

export class Tooltip {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      text: element.dataset.tooltip || options.text || '',
      position: element.dataset.tooltipPosition || options.position || 'top',
      delay: parseInt(element.dataset.tooltipDelay) || options.delay || 200,
      ...options,
    };
    
    this.tooltipEl = null;
    this.showTimer = null;
    this.hideTimer = null;
    
    this.init();
  }
  
  init() {
    if (!this.options.text) {
      // Try to get text from title attribute
      const title = this.element.getAttribute('title');
      if (title) {
        this.options.text = title;
        this.element.removeAttribute('title'); // Remove to prevent native tooltip
      }
    }
    
    if (!this.options.text) return;
    
    this.createTooltip();
    this.setupEventListeners();
  }
  
  createTooltip() {
    this.tooltipEl = document.createElement('div');
    this.tooltipEl.className = `vds-tooltip vds-tooltip--${this.options.position}`;
    this.tooltipEl.setAttribute('role', 'tooltip');
    this.tooltipEl.textContent = this.options.text;
    document.body.appendChild(this.tooltipEl);
    
    // Hide initially
    this.tooltipEl.style.visibility = 'hidden';
    this.tooltipEl.style.opacity = '0';
  }
  
  setupEventListeners() {
    this.element.addEventListener('mouseenter', () => this.show());
    this.element.addEventListener('mouseleave', () => this.hide());
    this.element.addEventListener('focus', () => this.show());
    this.element.addEventListener('blur', () => this.hide());
  }
  
  show() {
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
    
    this.showTimer = setTimeout(() => {
      this.updatePosition();
      this.tooltipEl.style.visibility = 'visible';
      this.tooltipEl.style.opacity = '1';
      this.element.setAttribute('aria-describedby', this.tooltipEl.id || 'vds-tooltip');
    }, this.options.delay);
  }
  
  hide() {
    if (this.showTimer) {
      clearTimeout(this.showTimer);
      this.showTimer = null;
    }
    
    this.hideTimer = setTimeout(() => {
      this.tooltipEl.style.opacity = '0';
      setTimeout(() => {
        this.tooltipEl.style.visibility = 'hidden';
        this.element.removeAttribute('aria-describedby');
      }, 200);
    }, 100);
  }
  
  updatePosition() {
    const rect = this.element.getBoundingClientRect();
    const tooltipRect = this.tooltipEl.getBoundingClientRect();
    const spacing = 8;
    
    let top = 0;
    let left = 0;
    
    switch (this.options.position) {
      case 'top':
        top = rect.top - tooltipRect.height - spacing;
        left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'bottom':
        top = rect.bottom + spacing;
        left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'left':
        top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
        left = rect.left - tooltipRect.width - spacing;
        break;
      case 'right':
        top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
        left = rect.right + spacing;
        break;
    }
    
    // Keep tooltip within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    if (left < 0) left = spacing;
    if (left + tooltipRect.width > viewportWidth) {
      left = viewportWidth - tooltipRect.width - spacing;
    }
    if (top < 0) top = spacing;
    if (top + tooltipRect.height > viewportHeight) {
      top = viewportHeight - tooltipRect.height - spacing;
    }
    
    this.tooltipEl.style.top = `${top + window.scrollY}px`;
    this.tooltipEl.style.left = `${left + window.scrollX}px`;
  }
  
  setText(text) {
    this.options.text = text;
    if (this.tooltipEl) {
      this.tooltipEl.textContent = text;
    }
  }
  
  setPosition(position) {
    this.options.position = position;
    if (this.tooltipEl) {
      this.tooltipEl.className = `vds-tooltip vds-tooltip--${position}`;
    }
  }
  
  destroy() {
    if (this.showTimer) clearTimeout(this.showTimer);
    if (this.hideTimer) clearTimeout(this.hideTimer);
    if (this.tooltipEl) {
      this.tooltipEl.remove();
    }
    this.element.removeAttribute('aria-describedby');
  }
  
  static init(selector = '[data-vds-component="tooltip"], [data-tooltip]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Tooltip(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Tooltip.init());
  } else {
    Tooltip.init();
  }
}

export default Tooltip;
