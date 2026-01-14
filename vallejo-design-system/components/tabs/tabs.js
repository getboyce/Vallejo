/**
 * Tabs Component
 * 
 * A tabbed navigation component.
 * 
 * Usage:
 *   <div class="vds-tabs" data-vds-component="tabs">
 *     <div class="vds-tabs__list" role="tablist">
 *       <button class="vds-tabs__tab" role="tab" aria-selected="true">Tab 1</button>
 *       <button class="vds-tabs__tab" role="tab">Tab 2</button>
 *     </div>
 *     <div class="vds-tabs__panel" role="tabpanel">Panel 1</div>
 *     <div class="vds-tabs__panel" role="tabpanel" hidden>Panel 2</div>
 *   </div>
 */

export class Tabs {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      defaultTab: parseInt(element.dataset.defaultTab) || 0,
      ...options,
    };
    
    this.tabList = null;
    this.tabs = [];
    this.panels = [];
    
    this.init();
  }
  
  init() {
    this.tabList = this.element.querySelector('.vds-tabs__list');
    this.tabs = Array.from(this.element.querySelectorAll('.vds-tabs__tab'));
    this.panels = Array.from(this.element.querySelectorAll('.vds-tabs__panel'));
    
    this.setupClasses();
    this.setupAttributes();
    this.setupEventListeners();
    this.setActiveTab(this.options.defaultTab);
  }
  
  setupClasses() {
    this.element.classList.add('vds-tabs');
  }
  
  setupAttributes() {
    this.tabList.setAttribute('role', 'tablist');
    
    this.tabs.forEach((tab, index) => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', `tabpanel-${index}`);
      tab.setAttribute('id', `tab-${index}`);
      tab.setAttribute('tabindex', '-1');
    });
    
    this.panels.forEach((panel, index) => {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `tab-${index}`);
      panel.setAttribute('id', `tabpanel-${index}`);
      if (index !== this.options.defaultTab) {
        panel.setAttribute('hidden', '');
      }
    });
  }
  
  setupEventListeners() {
    this.tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => this.setActiveTab(index));
      tab.addEventListener('keydown', (e) => this.handleKeyDown(e, index));
    });
  }
  
  handleKeyDown(e, currentIndex) {
    let newIndex = currentIndex;
    
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : this.tabs.length - 1;
        break;
      case 'ArrowRight':
        e.preventDefault();
        newIndex = currentIndex < this.tabs.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = this.tabs.length - 1;
        break;
      default:
        return;
    }
    
    this.setActiveTab(newIndex);
    this.tabs[newIndex].focus();
  }
  
  setActiveTab(index) {
    // Update tabs
    this.tabs.forEach((tab, i) => {
      const isActive = i === index;
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      tab.setAttribute('tabindex', isActive ? '0' : '-1');
      tab.classList.toggle('vds-tabs__tab--active', isActive);
    });
    
    // Update panels
    this.panels.forEach((panel, i) => {
      if (i === index) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    });
    
    this.element.dispatchEvent(new CustomEvent('tabs:change', {
      detail: { activeIndex: index },
      bubbles: true,
    }));
  }
  
  static init(selector = '[data-vds-component="tabs"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Tabs(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Tabs.init());
  } else {
    Tabs.init();
  }
}

export default Tabs;
