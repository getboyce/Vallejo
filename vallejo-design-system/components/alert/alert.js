/**
 * Alert Component
 * 
 * An alert component for displaying important messages.
 * 
 * Usage:
 *   <div class="vds-alert vds-alert--info" data-vds-component="alert">
 *     <div class="vds-alert__content">Alert message</div>
 *   </div>
 * 
 * Variants: success, warning, error, info
 * Dismissible: yes
 */

import { Icon } from '../icon/icon.js';

export class Alert {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      variant: element.dataset.variant || 'info',
      dismissible: element.dataset.dismissible !== 'false',
      filled: element.dataset.filled === 'true',
      ...options,
    };
    
    this.icon = null;
    this.title = null;
    this.description = null;
    
    this.init();
  }
  
  init() {
    this.setupClasses();
    this.setupAttributes();
    this.createIcon();
    this.structureContent();
    this.createDismissButton();
  }
  
  createIcon() {
    // Check if icon already exists
    if (this.element.querySelector('.vds-alert__icon')) {
      this.icon = this.element.querySelector('.vds-alert__icon');
      return;
    }
    
    this.icon = document.createElement('div');
    this.icon.className = 'vds-alert__icon';
    this.icon.setAttribute('aria-hidden', 'true');
    
    // Set icon based on variant - using real icons from assets
    const iconMap = {
      success: 'icon-check-in-circle-2',
      warning: 'icon-warning',
      error: 'icon-warning', // Use warning icon for error
      info: 'icon-info',
    };
    
    const iconName = iconMap[this.options.variant] || iconMap.info;
    
    // Load icon asynchronously
    this.loadIcon(iconName);
    this.element.insertBefore(this.icon, this.element.firstChild);
  }
  
  async loadIcon(iconName) {
    try {
      const iconSvg = await Icon.getIcon(iconName, '20', 'currentColor');
      if (iconSvg) {
        this.icon.innerHTML = iconSvg;
      }
    } catch (error) {
      console.warn(`Could not load icon "${iconName}":`, error);
      // Fallback to simple text
      const fallbackMap = {
        success: '✓',
        warning: '⚠',
        error: '⚠',
        info: 'i',
      };
      this.icon.textContent = fallbackMap[this.options.variant] || 'i';
    }
  }
  
  structureContent() {
    const content = this.element.querySelector('.vds-alert__content');
    if (!content) {
      // Create content wrapper
      const contentWrapper = document.createElement('div');
      contentWrapper.className = 'vds-alert__content';
      
      // Move existing text content into description
      const existingText = Array.from(this.element.childNodes)
        .filter(node => node.nodeType === Node.TEXT_NODE || 
                (node.nodeType === Node.ELEMENT_NODE && 
                 !node.classList.contains('vds-alert__icon') &&
                 !node.classList.contains('vds-alert__dismiss')))
        .map(node => node.cloneNode(true));
      
      if (existingText.length > 0) {
        // Check if there's already structured content
        const existingTitle = this.element.querySelector('.vds-alert__title');
        const existingDesc = this.element.querySelector('.vds-alert__description');
        
        if (existingTitle || existingDesc) {
          // Already structured
          if (existingTitle) {
            contentWrapper.appendChild(existingTitle);
            this.title = existingTitle;
          }
          if (existingDesc) {
            contentWrapper.appendChild(existingDesc);
            this.description = existingDesc;
          }
        } else {
          // Create description from existing content
          this.description = document.createElement('p');
          this.description.className = 'vds-alert__description';
          existingText.forEach(node => this.description.appendChild(node));
          contentWrapper.appendChild(this.description);
        }
      }
      
      // Insert content after icon
      const icon = this.element.querySelector('.vds-alert__icon');
      if (icon) {
        this.element.insertBefore(contentWrapper, icon.nextSibling);
      } else {
        this.element.insertBefore(contentWrapper, this.element.firstChild);
      }
    } else {
      // Content exists, check for title/description
      this.title = content.querySelector('.vds-alert__title');
      this.description = content.querySelector('.vds-alert__description');
      
      // If no structured content, wrap existing text in description
      if (!this.title && !this.description) {
        const textContent = content.textContent.trim();
        if (textContent) {
          this.description = document.createElement('p');
          this.description.className = 'vds-alert__description';
          this.description.textContent = textContent;
          content.innerHTML = '';
          content.appendChild(this.description);
        }
      }
    }
  }
  
  setTitle(title) {
    if (!this.title) {
      this.title = document.createElement('h4');
      this.title.className = 'vds-alert__title';
      const content = this.element.querySelector('.vds-alert__content');
      if (content) {
        content.insertBefore(this.title, content.firstChild);
      }
    }
    this.title.textContent = title;
  }
  
  setDescription(description) {
    if (!this.description) {
      this.description = document.createElement('p');
      this.description.className = 'vds-alert__description';
      const content = this.element.querySelector('.vds-alert__content');
      if (content) {
        content.appendChild(this.description);
      }
    }
    this.description.textContent = description;
  }
  
  setupClasses() {
    this.element.classList.add('vds-alert');
    this.element.classList.add(`vds-alert--${this.options.variant}`);
    
    if (this.options.filled) {
      this.element.classList.add('vds-alert--filled');
    }
  }
  
  setupAttributes() {
    this.element.setAttribute('role', 'alert');
    this.element.setAttribute('aria-live', 'polite');
  }
  
  createDismissButton() {
    if (this.options.dismissible && !this.element.querySelector('.vds-alert__dismiss')) {
      const dismissBtn = document.createElement('button');
      dismissBtn.className = 'vds-alert__dismiss';
      dismissBtn.setAttribute('aria-label', 'Dismiss alert');
      this.loadCloseIcon(dismissBtn);
      dismissBtn.addEventListener('click', () => this.dismiss());
      this.element.appendChild(dismissBtn);
    }
  }
  
  async loadCloseIcon(button) {
    try {
      const iconSvg = await Icon.getIcon('icon-close', '20', 'currentColor');
      if (iconSvg) {
        button.innerHTML = iconSvg;
      } else {
        button.innerHTML = '×';
      }
    } catch (error) {
      button.innerHTML = '×';
    }
  }
  
  dismiss() {
    this.element.style.transition = 'opacity 0.2s ease-in-out';
    this.element.style.opacity = '0';
    setTimeout(() => {
      this.element.remove();
    }, 200);
  }
  
  static init(selector = '[data-vds-component="alert"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Alert(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Alert.init());
  } else {
    Alert.init();
  }
}

export default Alert;
