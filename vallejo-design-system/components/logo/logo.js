/**
 * Logo Component
 * 
 * A utility component for displaying SVG logos from the design system.
 * 
 * Usage:
 *   <vds-logo name="copart" size="120"></vds-logo>
 *   <div class="vds-logo" data-logo="copart"></div>
 * 
 * Logos are loaded from assets/logos/
 */

import { logos } from '../../assets/logos/index.js';

export class Logo {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      name: element.dataset.logo || element.getAttribute('name') || options.name || '',
      size: element.dataset.size || element.getAttribute('size') || options.size || 'auto',
      variant: element.dataset.variant || element.getAttribute('variant') || options.variant || 'default',
      ...options,
    };
    
    this.svgContent = null;
    
    this.init();
  }
  
  async init() {
    if (!this.options.name) {
      console.warn('Logo component: No logo name provided');
      return;
    }
    
    await this.loadLogo();
    this.render();
  }
  
  async loadLogo() {
    try {
      // Determine logo name based on variant
      let logoName = this.normalizeLogoName(this.options.name);
      
      // If variant is specified and not default, use variant-specific logo
      if (this.options.variant && this.options.variant !== 'default') {
        // Variant files are: logo-mode-{variant}.svg
        const fileName = `logo-mode-${this.options.variant}.svg`;
        const response = await fetch(`./assets/logos/${fileName}`);
        if (response.ok) {
          this.svgContent = await response.text();
          return;
        }
      }
      
      // Regular logo files follow pattern: logo-logo-{name}.svg
      // So logo-copart -> logo-logo-copart.svg
      const fileName = `logo-logo-${logoName}.svg`;
      
      const response = await fetch(`./assets/logos/${fileName}`);
      if (response.ok) {
        this.svgContent = await response.text();
        return;
      }
      
      // Fallback: try alternative patterns
      const patterns = [
        `logo-${logoName}.svg`,
        `${logoName}.svg`
      ];
      
      for (const pattern of patterns) {
        try {
          const response = await fetch(`./assets/logos/${pattern}`);
          if (response.ok) {
            this.svgContent = await response.text();
            return;
          }
        } catch (e) {
          // Try next pattern
        }
      }
      
      console.warn(`Logo "${this.options.name}" not found. Tried: ${fileName} and fallbacks`);
    } catch (error) {
      console.error(`Error loading logo "${this.options.name}":`, error);
    }
  }
  
  normalizeLogoName(name) {
    // Remove 'logo-' prefix if present
    return name.replace(/^logo-?/, '');
  }
  
  render() {
    if (!this.svgContent) {
      this.element.innerHTML = '';
      return;
    }
    
    // Use inline SVG code directly
    let svgString = this.svgContent;
    
    // Apply size if specified
    if (this.options.size && this.options.size !== 'auto') {
      svgString = svgString.replace(/width="[^"]*"/, `width="${this.options.size}"`);
      svgString = svgString.replace(/height="[^"]*"/, `height="${this.options.size}"`);
    }
    
    // Insert inline SVG code
    this.element.innerHTML = svgString;
    
    // Add classes
    this.element.classList.add('vds-logo');
    this.element.setAttribute('role', 'img');
    this.element.setAttribute('aria-label', `${this.options.name} logo`);
  }
  
  setName(name) {
    this.options.name = name;
    this.loadLogo().then(() => this.render());
  }
  
  setSize(size) {
    this.options.size = size;
    this.render();
  }
  
  setVariant(variant) {
    this.options.variant = variant;
    this.loadLogo().then(() => this.render());
  }
  
  static async getLogo(name, size = 'auto', variant = 'default') {
    let logoName = name.replace(/^logo-?/, '');
    
    try {
      // If variant is specified, use variant-specific logo
      if (variant && variant !== 'default') {
        // Variant files are: logo-mode-{variant}.svg
        const fileName = `logo-mode-${variant}.svg`;
        const response = await fetch(`./assets/logos/${fileName}`);
        if (response.ok) {
          let svgContent = await response.text();
          if (size && size !== 'auto') {
            svgContent = svgContent.replace(/width="[^"]*"/, `width="${size}"`);
            svgContent = svgContent.replace(/height="[^"]*"/, `height="${size}"`);
          }
          return svgContent;
        }
      }
      
      // Regular logo files follow pattern: logo-logo-{name}.svg
      const fileName = `logo-logo-${logoName}.svg`;
      
      const response = await fetch(`./assets/logos/${fileName}`);
      if (response.ok) {
        let svgContent = await response.text();
        if (size && size !== 'auto') {
          svgContent = svgContent.replace(/width="[^"]*"/, `width="${size}"`);
          svgContent = svgContent.replace(/height="[^"]*"/, `height="${size}"`);
        }
        return svgContent;
      }
      
      // Fallback: try alternative patterns
      const patterns = [
        `logo-${logoName}.svg`,
        `${logoName}.svg`
      ];
      
      for (const pattern of patterns) {
        try {
          const response = await fetch(`./assets/logos/${pattern}`);
          if (response.ok) {
            let svgContent = await response.text();
            if (size && size !== 'auto') {
              svgContent = svgContent.replace(/width="[^"]*"/, `width="${size}"`);
              svgContent = svgContent.replace(/height="[^"]*"/, `height="${size}"`);
            }
            return svgContent;
          }
        } catch (e) {
          // Continue to next pattern
        }
      }
    } catch (error) {
      console.error(`Error loading logo "${name}":`, error);
    }
    
    return null;
  }
  
  static init(selector = '[data-vds-component="logo"], vds-logo') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Logo(el));
  }
}

// Custom element
if (typeof window !== 'undefined' && !customElements.get('vds-logo')) {
  customElements.define('vds-logo', class extends HTMLElement {
    connectedCallback() {
      const logo = new Logo(this, {
        name: this.getAttribute('name'),
        size: this.getAttribute('size') || 'auto',
        variant: this.getAttribute('variant') || 'default',
      });
    }
  });
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Logo.init());
  } else {
    Logo.init();
  }
}

export default Logo;
