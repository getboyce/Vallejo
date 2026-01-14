/**
 * Status Token Component
 * 
 * A status indicator component for displaying status information.
 * 
 * Usage:
 *   <span class="vds-status-token vds-status-token--success" data-vds-component="status-token">
 *     Active
 *   </span>
 * 
 * Variants: success, warning, error, info, neutral
 */

export class StatusToken {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      variant: element.dataset.variant || element.classList.contains('vds-status-token--success') ? 'success' :
               element.classList.contains('vds-status-token--warning') ? 'warning' :
               element.classList.contains('vds-status-token--error') ? 'error' :
               element.classList.contains('vds-status-token--info') ? 'info' : 'neutral',
      ...options,
    };
    
    this.init();
  }
  
  init() {
    this.setupClasses();
    this.setupAttributes();
  }
  
  setupClasses() {
    this.element.classList.add('vds-status-token');
    this.element.classList.add(`vds-status-token--${this.options.variant}`);
  }
  
  setupAttributes() {
    if (!this.element.hasAttribute('role')) {
      this.element.setAttribute('role', 'status');
    }
    
    this.element.setAttribute('aria-live', 'polite');
  }
  
  setVariant(variant) {
    // Remove old variant class
    const oldVariant = this.options.variant;
    this.element.classList.remove(`vds-status-token--${oldVariant}`);
    
    // Add new variant class
    this.options.variant = variant;
    this.element.classList.add(`vds-status-token--${variant}`);
  }
  
  static init(selector = '[data-vds-component="status-token"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new StatusToken(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => StatusToken.init());
  } else {
    StatusToken.init();
  }
}

export default StatusToken;
