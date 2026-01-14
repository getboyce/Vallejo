/**
 * Table Component
 * 
 * A table component for displaying tabular data.
 * 
 * Usage:
 *   <table class="vds-table" data-vds-component="table">
 *     <thead>...</thead>
 *     <tbody>...</tbody>
 *   </table>
 */

export class Table {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      sortable: element.dataset.sortable === 'true' || options.sortable || false,
      striped: element.dataset.striped === 'true' || options.striped || false,
      hoverable: element.dataset.hoverable !== 'false' && options.hoverable !== false,
      ...options,
    };
    
    this.init();
  }
  
  init() {
    this.setupClasses();
    this.setupAttributes();
    this.setupSorting();
  }
  
  setupClasses() {
    this.element.classList.add('vds-table');
    
    if (this.options.striped) {
      this.element.classList.add('vds-table--striped');
    }
    
    if (this.options.hoverable) {
      this.element.classList.add('vds-table--hoverable');
    }
  }
  
  setupAttributes() {
    this.element.setAttribute('role', 'table');
  }
  
  setupSorting() {
    if (!this.options.sortable) return;
    
    const headers = this.element.querySelectorAll('thead th[data-sortable]');
    headers.forEach(header => {
      header.classList.add('vds-table__header--sortable');
      header.setAttribute('role', 'columnheader');
      header.setAttribute('tabindex', '0');
      
      header.addEventListener('click', () => {
        this.sortColumn(header);
      });
      
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.sortColumn(header);
        }
      });
    });
  }
  
  sortColumn(header) {
    const columnIndex = Array.from(header.parentElement.children).indexOf(header);
    const tbody = this.element.querySelector('tbody');
    if (!tbody) return;
    
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const currentSort = header.dataset.sort || 'none';
    let newSort = 'asc';
    
    if (currentSort === 'asc') {
      newSort = 'desc';
    } else if (currentSort === 'desc') {
      newSort = 'none';
    }
    
    // Reset all headers
    this.element.querySelectorAll('thead th').forEach(th => {
      th.dataset.sort = 'none';
      th.classList.remove('vds-table__header--sort-asc', 'vds-table__header--sort-desc');
    });
    
    if (newSort !== 'none') {
      // Sort rows
      rows.sort((a, b) => {
        const aValue = a.children[columnIndex]?.textContent.trim() || '';
        const bValue = b.children[columnIndex]?.textContent.trim() || '';
        
        if (newSort === 'asc') {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      });
      
      // Reorder rows in DOM
      rows.forEach(row => tbody.appendChild(row));
      
      // Update header
      header.dataset.sort = newSort;
      header.classList.add(`vds-table__header--sort-${newSort}`);
    }
    
    this.element.dispatchEvent(new CustomEvent('table:sort', {
      detail: { column: columnIndex, sort: newSort },
      bubbles: true,
    }));
  }
  
  static init(selector = '[data-vds-component="table"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Table(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Table.init());
  } else {
    Table.init();
  }
}

export default Table;
