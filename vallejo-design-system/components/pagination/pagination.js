/**
 * Pagination Component
 * 
 * A pagination component for navigating through pages.
 * 
 * Usage:
 *   <nav class="vds-pagination" data-vds-component="pagination" data-current="1" data-total="10">
 *   </nav>
 */

export class Pagination {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      current: parseInt(element.dataset.current) || options.current || 1,
      total: parseInt(element.dataset.total) || options.total || 1,
      showFirstLast: element.dataset.showFirstLast !== 'false' && options.showFirstLast !== false,
      showPrevNext: element.dataset.showPrevNext !== 'false' && options.showPrevNext !== false,
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
    this.element.classList.add('vds-pagination');
  }
  
  setupAttributes() {
    this.element.setAttribute('role', 'navigation');
    this.element.setAttribute('aria-label', 'Pagination');
  }
  
  render() {
    this.element.innerHTML = '';
    
    const list = document.createElement('ul');
    list.className = 'vds-pagination__list';
    
    // First button
    if (this.options.showFirstLast && this.options.current > 2) {
      const firstItem = this.createPageItem(1, 'First', 'first');
      list.appendChild(firstItem);
    }
    
    // Previous button
    if (this.options.showPrevNext && this.options.current > 1) {
      const prevItem = this.createPageItem(this.options.current - 1, 'Previous', 'prev');
      list.appendChild(prevItem);
    }
    
    // Page numbers
    const pages = this.getPageNumbers();
    pages.forEach(page => {
      const item = this.createPageItem(page, String(page), 'number');
      if (page === this.options.current) {
        item.classList.add('vds-pagination__item--active');
      }
      list.appendChild(item);
    });
    
    // Next button
    if (this.options.showPrevNext && this.options.current < this.options.total) {
      const nextItem = this.createPageItem(this.options.current + 1, 'Next', 'next');
      list.appendChild(nextItem);
    }
    
    // Last button
    if (this.options.showFirstLast && this.options.current < this.options.total - 1) {
      const lastItem = this.createPageItem(this.options.total, 'Last', 'last');
      list.appendChild(lastItem);
    }
    
    this.element.appendChild(list);
  }
  
  createPageItem(page, label, type) {
    const item = document.createElement('li');
    item.className = 'vds-pagination__item';
    item.classList.add(`vds-pagination__item--${type}`);
    
    const button = document.createElement('button');
    button.className = 'vds-pagination__button';
    button.textContent = label;
    button.setAttribute('aria-label', `${label} page`);
    if (page === this.options.current) {
      button.setAttribute('aria-current', 'page');
    }
    button.addEventListener('click', () => this.goToPage(page));
    
    item.appendChild(button);
    return item;
  }
  
  getPageNumbers() {
    const current = this.options.current;
    const total = this.options.total;
    const pages = [];
    
    if (total <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (current <= 3) {
        // Near the start
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(total);
      } else if (current >= total - 2) {
        // Near the end
        pages.push('ellipsis');
        for (let i = total - 3; i <= total; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push('ellipsis');
        for (let i = current - 1; i <= current + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(total);
      }
    }
    
    return pages;
  }
  
  goToPage(page) {
    if (page < 1 || page > this.options.total || page === this.options.current) {
      return;
    }
    
    this.options.current = page;
    this.render();
    
    this.element.dispatchEvent(new CustomEvent('pagination:change', {
      detail: { page, current: page },
      bubbles: true,
    }));
  }
  
  setCurrent(page) {
    if (page >= 1 && page <= this.options.total) {
      this.options.current = page;
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
  
  static init(selector = '[data-vds-component="pagination"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Pagination(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Pagination.init());
  } else {
    Pagination.init();
  }
}

export default Pagination;
