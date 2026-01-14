/**
 * Progress Tracker Component
 * 
 * A progress tracker component for showing progress through steps.
 * 
 * Usage:
 *   <div class="vds-progress-tracker" data-vds-component="progress-tracker" data-current="2" data-total="5">
 *   </div>
 */

export class ProgressTracker {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      current: parseInt(element.dataset.current) || options.current || 1,
      total: parseInt(element.dataset.total) || options.total || 1,
      ...options,
    };
    
    this.init();
  }
  
  init() {
    this.setupClasses();
    this.setupAttributes();
    this.render();
  }
  
  setupClasses() {
    this.element.classList.add('vds-progress-tracker');
  }
  
  setupAttributes() {
    this.element.setAttribute('role', 'progressbar');
    this.element.setAttribute('aria-valuemin', '0');
    this.element.setAttribute('aria-valuemax', String(this.options.total));
    this.element.setAttribute('aria-valuenow', String(this.options.current));
    this.element.setAttribute('aria-label', `Progress: step ${this.options.current} of ${this.options.total}`);
  }
  
  render() {
    this.element.innerHTML = '';
    
    const list = document.createElement('ol');
    list.className = 'vds-progress-tracker__list';
    
    for (let i = 1; i <= this.options.total; i++) {
      const item = document.createElement('li');
      item.className = 'vds-progress-tracker__item';
      
      if (i < this.options.current) {
        item.classList.add('vds-progress-tracker__item--completed');
      } else if (i === this.options.current) {
        item.classList.add('vds-progress-tracker__item--active');
      } else {
        item.classList.add('vds-progress-tracker__item--pending');
      }
      
      const step = document.createElement('div');
      step.className = 'vds-progress-tracker__step';
      step.textContent = i;
      item.appendChild(step);
      
      const label = document.createElement('div');
      label.className = 'vds-progress-tracker__label';
      label.textContent = `Step ${i}`;
      item.appendChild(label);
      
      // Connector line (except for last item)
      if (i < this.options.total) {
        const connector = document.createElement('div');
        connector.className = 'vds-progress-tracker__connector';
        if (i < this.options.current) {
          connector.classList.add('vds-progress-tracker__connector--completed');
        }
        item.appendChild(connector);
      }
      
      list.appendChild(item);
    }
    
    this.element.appendChild(list);
    this.updateAttributes();
  }
  
  updateAttributes() {
    this.element.setAttribute('aria-valuenow', String(this.options.current));
    this.element.setAttribute('aria-label', `Progress: step ${this.options.current} of ${this.options.total}`);
  }
  
  setCurrent(step) {
    if (step >= 1 && step <= this.options.total) {
      this.options.current = step;
      this.render();
    }
  }
  
  setTotal(total) {
    if (total >= 1) {
      this.options.total = total;
      if (this.options.current > total) {
        this.options.current = total;
      }
      this.render();
    }
  }
  
  next() {
    if (this.options.current < this.options.total) {
      this.setCurrent(this.options.current + 1);
    }
  }
  
  previous() {
    if (this.options.current > 1) {
      this.setCurrent(this.options.current - 1);
    }
  }
  
  static init(selector = '[data-vds-component="progress-tracker"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new ProgressTracker(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ProgressTracker.init());
  } else {
    ProgressTracker.init();
  }
}

export default ProgressTracker;
