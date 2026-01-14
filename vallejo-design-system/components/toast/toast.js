/**
 * Toast Component
 * 
 * A toast notification component for displaying temporary messages.
 * 
 * Usage:
 *   Toast.show('Message', { variant: 'success', duration: 3000 });
 * 
 * Variants: success, warning, error, info
 * Positions: top-right, top-left, bottom-right, bottom-left, top-center, bottom-center
 */

import { Icon } from '../icon/icon.js';

export class Toast {
  constructor(message, options = {}) {
    this.message = message;
    this.options = {
      variant: options.variant || 'info',
      duration: options.duration || 5000,
      position: options.position || 'top-right',
      dismissible: options.dismissible !== false,
      title: options.title || null,
      ...options,
    };
    
    this.element = null;
    this.timer = null;
    
    this.create();
  }
  
  create() {
    // Create toast container if it doesn't exist
    this.ensureContainer();
    
    // Create toast element
    this.element = document.createElement('div');
    this.element.className = `vds-toast vds-toast--${this.options.variant}`;
    this.element.setAttribute('role', 'alert');
    this.element.setAttribute('aria-live', 'polite');
    
    // Create icon
    const icon = document.createElement('div');
    icon.className = 'vds-toast__icon';
    icon.setAttribute('aria-hidden', 'true');
    
    // Load real icon
    const iconMap = {
      success: 'icon-check-in-circle-2',
      warning: 'icon-warning',
      error: 'icon-warning',
      info: 'icon-info',
    };
    
    const iconName = iconMap[this.options.variant] || iconMap.info;
    this.loadIcon(icon, iconName);
    
    this.element.appendChild(icon);
    
    // Create content
    const content = document.createElement('div');
    content.className = 'vds-toast__content';
    
    if (this.options.title) {
      const title = document.createElement('div');
      title.className = 'vds-toast__title';
      title.textContent = this.options.title;
      content.appendChild(title);
    }
    
    const messageEl = document.createElement('div');
    messageEl.className = 'vds-toast__message';
    messageEl.textContent = this.message;
    content.appendChild(messageEl);
    
    this.element.appendChild(content);
    
    // Create dismiss button
    if (this.options.dismissible) {
      const dismissBtn = document.createElement('button');
      dismissBtn.className = 'vds-toast__dismiss';
      dismissBtn.setAttribute('aria-label', 'Dismiss');
      this.loadCloseIcon(dismissBtn);
      dismissBtn.addEventListener('click', () => this.dismiss());
      this.element.appendChild(dismissBtn);
    }
    
    // Add to container
    const container = this.getContainer();
    container.appendChild(this.element);
    
    // Trigger animation
    requestAnimationFrame(() => {
      this.element.classList.add('vds-toast--show');
    });
    
    // Auto-dismiss
    if (this.options.duration > 0) {
      this.timer = setTimeout(() => this.dismiss(), this.options.duration);
    }
  }
  
  ensureContainer() {
    const containerId = `vds-toast-container--${this.options.position}`;
    let container = document.getElementById(containerId);
    
    if (!container) {
      container = document.createElement('div');
      container.id = containerId;
      container.className = `vds-toast-container vds-toast-container--${this.options.position}`;
      document.body.appendChild(container);
    }
  }
  
  getContainer() {
    const containerId = `vds-toast-container--${this.options.position}`;
    return document.getElementById(containerId);
  }
  
  async loadIcon(iconElement, iconName) {
    try {
      const iconSvg = await Icon.getIcon(iconName, '20', 'currentColor');
      if (iconSvg) {
        iconElement.innerHTML = iconSvg;
      }
    } catch (error) {
      console.warn(`Could not load icon "${iconName}":`, error);
      // Fallback
      const fallbackMap = {
        success: '✓',
        warning: '⚠',
        error: '⚠',
        info: 'i',
      };
      iconElement.textContent = fallbackMap[this.options.variant] || 'i';
    }
  }
  
  async loadCloseIcon(button) {
    try {
      const iconSvg = await Icon.getIcon('icon-close', '16', 'currentColor');
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
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    
    this.element.classList.remove('vds-toast--show');
    this.element.classList.add('vds-toast--hide');
    
    setTimeout(() => {
      if (this.element && this.element.parentNode) {
        this.element.remove();
      }
    }, 300);
  }
  
  static show(message, options = {}) {
    return new Toast(message, options);
  }
  
  static success(message, options = {}) {
    return new Toast(message, { ...options, variant: 'success' });
  }
  
  static warning(message, options = {}) {
    return new Toast(message, { ...options, variant: 'warning' });
  }
  
  static error(message, options = {}) {
    return new Toast(message, { ...options, variant: 'error' });
  }
  
  static info(message, options = {}) {
    return new Toast(message, { ...options, variant: 'info' });
  }
  
  static init() {
    // Initialize toast containers
    const positions = ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'];
    positions.forEach(position => {
      const containerId = `vds-toast-container--${position}`;
      if (!document.getElementById(containerId)) {
        const container = document.createElement('div');
        container.id = containerId;
        container.className = `vds-toast-container vds-toast-container--${position}`;
        document.body.appendChild(container);
      }
    });
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Toast.init());
  } else {
    Toast.init();
  }
}

export default Toast;
