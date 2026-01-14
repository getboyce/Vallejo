/**
 * Toggle Component
 * 
 * A toggle switch component for on/off states.
 * 
 * Usage:
 *   <button type="button" class="vds-toggle" data-vds-component="toggle" aria-pressed="false">
 *     <span class="vds-toggle__track"></span>
 *     <span class="vds-toggle__thumb"></span>
 *   </button>
 * 
 * States: off, on, disabled
 */

export class Toggle {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      checked: element.getAttribute('aria-pressed') === 'true',
      disabled: element.hasAttribute('disabled'),
      ...options,
    };
    
    this.init();
  }
  
  init() {
    this.setupClasses();
    this.setupAttributes();
    this.setupEventListeners();
    this.updateVisualState();
  }
  
  setupClasses() {
    this.element.classList.add('vds-toggle');
    
    if (this.options.disabled) {
      this.element.classList.add('vds-toggle--disabled');
    }
  }
  
  setupAttributes() {
    this.element.setAttribute('role', 'switch');
    this.element.setAttribute('type', 'button');
    this.element.setAttribute('aria-pressed', this.options.checked ? 'true' : 'false');
    
    if (this.options.disabled) {
      this.element.setAttribute('disabled', '');
      this.element.setAttribute('aria-disabled', 'true');
    }
  }
  
  setupEventListeners() {
    this.element.addEventListener('click', (e) => {
      if (this.options.disabled) {
        e.preventDefault();
        return false;
      }
      this.toggle();
    });
    
    this.element.addEventListener('keydown', (e) => {
      if (this.options.disabled) return;
      
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        this.toggle();
      }
    });
  }
  
  toggle() {
    this.options.checked = !this.options.checked;
    this.element.setAttribute('aria-pressed', this.options.checked ? 'true' : 'false');
    this.updateVisualState();
    
    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('toggle', {
      detail: { checked: this.options.checked },
      bubbles: true,
    }));
  }
  
  setChecked(checked) {
    this.options.checked = checked;
    this.element.setAttribute('aria-pressed', checked ? 'true' : 'false');
    this.updateVisualState();
  }
  
  updateVisualState() {
    if (this.options.checked) {
      this.element.classList.add('vds-toggle--checked');
    } else {
      this.element.classList.remove('vds-toggle--checked');
    }
  }
  
  setDisabled(disabled) {
    this.options.disabled = disabled;
    
    if (disabled) {
      this.element.setAttribute('disabled', '');
      this.element.setAttribute('aria-disabled', 'true');
      this.element.classList.add('vds-toggle--disabled');
    } else {
      this.element.removeAttribute('disabled');
      this.element.removeAttribute('aria-disabled');
      this.element.classList.remove('vds-toggle--disabled');
    }
  }
  
  static init(selector = '[data-vds-component="toggle"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => {
      // Ensure toggle has required structure
      if (!el.querySelector('.vds-toggle__track')) {
        const track = document.createElement('span');
        track.className = 'vds-toggle__track';
        const thumb = document.createElement('span');
        thumb.className = 'vds-toggle__thumb';
        track.appendChild(thumb);
        el.appendChild(track);
      }
      return new Toggle(el);
    });
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Toggle.init());
  } else {
    Toggle.init();
  }
}

export default Toggle;
