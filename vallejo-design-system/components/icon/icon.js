/**
 * Icon Component
 * 
 * A utility component for displaying SVG icons from the design system.
 * 
 * Usage:
 *   <vds-icon name="calendar" size="24"></vds-icon>
 *   <div class="vds-icon" data-icon="calendar" data-size="24"></div>
 * 
 * Icons are loaded from assets/icons/
 */

import { icons } from '../../assets/icons/index.js';

export class Icon {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      name: element.dataset.icon || element.getAttribute('name') || options.name || '',
      size: element.dataset.size || element.getAttribute('size') || options.size || '16',
      color: element.dataset.color || element.getAttribute('color') || options.color || 'currentColor',
      ...options,
    };
    
    this.svgContent = null;
    
    this.init();
  }
  
  async init() {
    if (!this.options.name) {
      console.warn('Icon component: No icon name provided');
      return;
    }
    
    await this.loadIcon();
    this.render();
  }
  
  async loadIcon() {
    try {
      // Normalize icon name - files are named icon-icon-{name}.svg
      let iconName = this.options.name;
      if (!iconName.startsWith('icon-')) {
        iconName = `icon-${iconName}`;
      }
      
      // Files follow pattern: icon-icon-{name}.svg
      // So icon-calendar -> icon-icon-calendar.svg
      const fileName = `icon-${iconName}.svg`;
      
      const response = await fetch(`./assets/icons/${fileName}`);
      if (response.ok) {
        this.svgContent = await response.text();
        return;
      }
      
      // Fallback: try alternative patterns
      const patterns = [
        `icon-${iconName}.svg`,
        `${iconName}.svg`,
        `icon-icon-${iconName.replace(/^icon-/, '')}.svg`
      ];
      
      for (const pattern of patterns) {
        try {
          const response = await fetch(`./assets/icons/${pattern}`);
          if (response.ok) {
            this.svgContent = await response.text();
            return;
          }
        } catch (e) {
          // Try next pattern
        }
      }
      
      console.warn(`Icon "${this.options.name}" not found. Tried: ${fileName} and fallbacks`);
    } catch (error) {
      console.error(`Error loading icon "${this.options.name}":`, error);
    }
  }
  
  normalizeIconName(name) {
    // Icons in index have mixed naming:
    // - Some with 'icon-' prefix: 'icon-calendar', 'icon-add'
    // - Some without: 'account'
    // Try exact match first, then with prefix
    if (icons[name]) {
      return name;
    }
    if (name.startsWith('icon-')) {
      return name; // Already has prefix, use as-is
    }
    // Try with icon- prefix
    const withPrefix = `icon-${name}`;
    if (icons[withPrefix]) {
      return withPrefix;
    }
    // Return with prefix as default (most icons use this)
    return withPrefix;
  }
  
  render() {
    if (!this.svgContent) {
      this.element.innerHTML = '';
      return;
    }
    
    // Use inline SVG code directly
    let svgString = this.svgContent;
    
    // Apply size
    svgString = svgString.replace(/width="[^"]*"/, `width="${this.options.size}"`);
    svgString = svgString.replace(/height="[^"]*"/, `height="${this.options.size}"`);
    
    // Apply color if needed
    if (this.options.color && this.options.color !== 'currentColor') {
      svgString = svgString.replace(/fill="[^"]*"/g, `fill="${this.options.color}"`);
      svgString = svgString.replace(/stroke="[^"]*"/g, `stroke="${this.options.color}"`);
    } else {
      // Ensure currentColor is used for proper theming
      svgString = svgString.replace(/fill="[^"]*"/g, 'fill="currentColor"');
      svgString = svgString.replace(/stroke="[^"]*"/g, 'stroke="currentColor"');
    }
    
    // Insert inline SVG code
    this.element.innerHTML = svgString;
    
    // Add classes
    this.element.classList.add('vds-icon');
    this.element.setAttribute('aria-hidden', 'true');
  }
  
  setName(name) {
    this.options.name = name;
    this.loadIcon().then(() => this.render());
  }
  
  setSize(size) {
    this.options.size = size;
    this.render();
  }
  
  setColor(color) {
    this.options.color = color;
    this.render();
  }
  
  static async getIcon(name, size = '16', color = 'currentColor') {
    // Normalize icon name - files are named icon-icon-{name}.svg
    let iconName = name;
    if (!iconName.startsWith('icon-')) {
      iconName = `icon-${iconName}`;
    }
    
    try {
      // Files follow pattern: icon-icon-{name}.svg
      // So icon-calendar -> icon-icon-calendar.svg
      const fileName = `icon-${iconName}.svg`;
      
      const response = await fetch(`./assets/icons/${fileName}`);
      if (response.ok) {
        let svgContent = await response.text();
        
        // Apply size and color to inline SVG
        svgContent = svgContent.replace(/width="[^"]*"/, `width="${size}"`);
        svgContent = svgContent.replace(/height="[^"]*"/, `height="${size}"`);
        
        if (color !== 'currentColor') {
          // Replace fill and stroke attributes
          svgContent = svgContent.replace(/fill="[^"]*"/g, `fill="${color}"`);
          svgContent = svgContent.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
        } else {
          // Ensure currentColor is used for proper theming
          svgContent = svgContent.replace(/fill="[^"]*"/g, 'fill="currentColor"');
          svgContent = svgContent.replace(/stroke="[^"]*"/g, 'stroke="currentColor"');
        }
        
        return svgContent;
      }
      
      // Fallback: try alternative patterns
      const patterns = [
        `icon-${iconName}.svg`,
        `${iconName}.svg`,
        `icon-icon-${iconName.replace(/^icon-/, '')}.svg`
      ];
      
      for (const pattern of patterns) {
        try {
          const response = await fetch(`./assets/icons/${pattern}`);
          if (response.ok) {
            let svgContent = await response.text();
            svgContent = svgContent.replace(/width="[^"]*"/, `width="${size}"`);
            svgContent = svgContent.replace(/height="[^"]*"/, `height="${size}"`);
            
            if (color !== 'currentColor') {
              svgContent = svgContent.replace(/fill="[^"]*"/g, `fill="${color}"`);
              svgContent = svgContent.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
            } else {
              svgContent = svgContent.replace(/fill="[^"]*"/g, 'fill="currentColor"');
              svgContent = svgContent.replace(/stroke="[^"]*"/g, 'stroke="currentColor"');
            }
            
            return svgContent;
          }
        } catch (e) {
          // Continue to next pattern
        }
      }
    } catch (error) {
      console.error(`Error loading icon "${name}":`, error);
    }
    
    return null;
  }
  
  static init(selector = '[data-vds-component="icon"], vds-icon') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Icon(el));
  }
}

// Custom element
if (typeof window !== 'undefined' && !customElements.get('vds-icon')) {
  customElements.define('vds-icon', class extends HTMLElement {
    connectedCallback() {
      const icon = new Icon(this, {
        name: this.getAttribute('name'),
        size: this.getAttribute('size') || '16',
        color: this.getAttribute('color') || 'currentColor',
      });
    }
  });
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Icon.init());
  } else {
    Icon.init();
  }
}

export default Icon;
