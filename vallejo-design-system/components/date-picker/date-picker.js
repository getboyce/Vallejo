/**
 * Date Picker Component
 * 
 * A date picker component for selecting dates.
 * 
 * Usage:
 *   <div class="vds-date-picker" data-vds-component="date-picker">
 *     <input type="text" class="vds-date-picker__input" placeholder="Select date">
 *   </div>
 */

import { Icon } from '../icon/icon.js';

export class DatePicker {
  constructor(element, options = {}) {
    this.element = element;
    this.inputElement = element.querySelector('input') || element.querySelector('.vds-date-picker__input');
    
    if (!this.inputElement && element.tagName === 'INPUT') {
      this.inputElement = element;
      this.element = this.wrapInput();
    }
    
    this.options = {
      format: options.format || 'MM/DD/YYYY',
      minDate: options.minDate || null,
      maxDate: options.maxDate || null,
      ...options,
    };
    
    this.calendar = null;
    this.isOpen = false;
    this.selectedDate = null;
    
    this.init();
  }
  
  wrapInput() {
    if (this.inputElement.parentElement.classList.contains('vds-date-picker')) {
      return this.inputElement.parentElement;
    }
    
    const wrapper = document.createElement('div');
    wrapper.className = 'vds-date-picker';
    this.inputElement.parentNode.insertBefore(wrapper, this.inputElement);
    wrapper.appendChild(this.inputElement);
    this.inputElement.classList.add('vds-date-picker__input');
    
    return wrapper;
  }
  
  init() {
    this.setupClasses();
    this.setupEventListeners();
  }
  
  setupClasses() {
    this.element.classList.add('vds-date-picker');
    if (this.inputElement) {
      this.inputElement.classList.add('vds-date-picker__input');
      this.inputElement.setAttribute('readonly', 'readonly');
    }
  }
  
  setupEventListeners() {
    if (this.inputElement) {
      this.inputElement.addEventListener('focus', () => this.open());
      this.inputElement.addEventListener('click', () => this.open());
    }
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (this.isOpen && !this.element.contains(e.target) && !this.calendar?.contains(e.target)) {
        this.close();
      }
    });
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }
  
  open() {
    if (this.isOpen) return;
    
    this.isOpen = true;
    this.createCalendar();
    this.positionCalendar();
    this.element.classList.add('vds-date-picker--open');
  }
  
  close() {
    if (!this.isOpen) return;
    
    this.isOpen = false;
    if (this.calendar) {
      this.calendar.remove();
      this.calendar = null;
    }
    this.element.classList.remove('vds-date-picker--open');
  }
  
  createCalendar() {
    this.calendar = document.createElement('div');
    this.calendar.className = 'vds-date-picker__calendar';
    
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Calendar header
    const header = document.createElement('div');
    header.className = 'vds-date-picker__header';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'vds-date-picker__nav vds-date-picker__nav--prev';
    prevBtn.setAttribute('aria-label', 'Previous month');
    this.loadNavIcon(prevBtn, 'icon-small-left-chevron');
    prevBtn.addEventListener('click', () => this.navigateMonth(-1));
    
    const monthYear = document.createElement('div');
    monthYear.className = 'vds-date-picker__month-year';
    monthYear.textContent = this.formatMonthYear(currentMonth, currentYear);
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'vds-date-picker__nav vds-date-picker__nav--next';
    nextBtn.setAttribute('aria-label', 'Next month');
    this.loadNavIcon(nextBtn, 'icon-small-right-chevron');
    nextBtn.addEventListener('click', () => this.navigateMonth(1));
    
    header.appendChild(prevBtn);
    header.appendChild(monthYear);
    header.appendChild(nextBtn);
    
    // Calendar grid
    const grid = document.createElement('div');
    grid.className = 'vds-date-picker__grid';
    
    // Day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.className = 'vds-date-picker__day-header';
      dayHeader.textContent = day;
      grid.appendChild(dayHeader);
    });
    
    // Calendar days
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement('div');
      empty.className = 'vds-date-picker__day vds-date-picker__day--empty';
      grid.appendChild(empty);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEl = document.createElement('button');
      dayEl.className = 'vds-date-picker__day';
      dayEl.textContent = day;
      dayEl.addEventListener('click', () => this.selectDate(new Date(currentYear, currentMonth, day)));
      grid.appendChild(dayEl);
    }
    
    this.calendar.appendChild(header);
    this.calendar.appendChild(grid);
    document.body.appendChild(this.calendar);
  }
  
  positionCalendar() {
    if (!this.calendar || !this.inputElement) return;
    
    const rect = this.inputElement.getBoundingClientRect();
    this.calendar.style.top = `${rect.bottom + 8 + window.scrollY}px`;
    this.calendar.style.left = `${rect.left + window.scrollX}px`;
  }
  
  navigateMonth(direction) {
    // Simplified - would need to track current month/year
    this.close();
    setTimeout(() => this.open(), 50);
  }
  
  selectDate(date) {
    this.selectedDate = date;
    if (this.inputElement) {
      this.inputElement.value = this.formatDate(date);
    }
    this.close();
    
    this.element.dispatchEvent(new CustomEvent('date-picker:change', {
      detail: { date },
      bubbles: true,
    }));
  }
  
  formatDate(date) {
    if (!date) return '';
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }
  
  async loadNavIcon(button, iconName) {
    try {
      const iconSvg = await Icon.getIcon(iconName, '16', 'currentColor');
      if (iconSvg) {
        button.innerHTML = iconSvg;
      } else {
        button.innerHTML = button.classList.contains('vds-date-picker__nav--prev') ? '‹' : '›';
      }
    } catch (error) {
      button.innerHTML = button.classList.contains('vds-date-picker__nav--prev') ? '‹' : '›';
    }
  }
  
  formatMonthYear(month, year) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[month]} ${year}`;
  }
  
  getValue() {
    return this.selectedDate;
  }
  
  setValue(date) {
    this.selectedDate = date;
    if (this.inputElement) {
      this.inputElement.value = this.formatDate(date);
    }
  }
  
  static init(selector = '[data-vds-component="date-picker"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new DatePicker(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => DatePicker.init());
  } else {
    DatePicker.init();
  }
}

export default DatePicker;
