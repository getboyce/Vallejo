/**
 * Components Index
 * Central export for all components
 */

// Import components first so they're available in initAll
import Icon from './icon/icon.js';
import Logo from './logo/logo.js';
import Button from './button/button.js';
import Input from './input/input.js';
import Checkbox from './checkbox/checkbox.js';
import Radio from './radio/radio.js';
import Toggle from './toggle/toggle.js';
import Dropdown from './dropdown/dropdown.js';
import DatePicker from './date-picker/date-picker.js';
import MobileDatePicker from './mobile-date-picker/mobile-date-picker.js';
import FilterChip from './filter-chip/filter-chip.js';
import Alert from './alert/alert.js';
import Toast from './toast/toast.js';
import Tooltip from './tooltip/tooltip.js';
import StatusToken from './status-token/status-token.js';
import Tabs from './tabs/tabs.js';
import Switcher from './switcher/switcher.js';
import Pagination from './pagination/pagination.js';
import Card from './card/card.js';
import Modal from './modal/modal.js';
import Shelf from './shelf/shelf.js';
import MobileShelf from './mobile-shelf/mobile-shelf.js';
import Accordion from './accordion/accordion.js';
import Table from './table/table.js';
import SearchBar from './search-bar/search-bar.js';
import ProgressTracker from './progress-tracker/progress-tracker.js';

// Re-export all components
export { default as Icon } from './icon/icon.js';
export { default as Logo } from './logo/logo.js';
export { default as Button } from './button/button.js';
export { default as Input } from './input/input.js';
export { default as Checkbox } from './checkbox/checkbox.js';
export { default as Radio } from './radio/radio.js';
export { default as Toggle } from './toggle/toggle.js';
export { default as Dropdown } from './dropdown/dropdown.js';
export { default as DatePicker } from './date-picker/date-picker.js';
export { default as MobileDatePicker } from './mobile-date-picker/mobile-date-picker.js';
export { default as FilterChip } from './filter-chip/filter-chip.js';
export { default as Alert } from './alert/alert.js';
export { default as Toast } from './toast/toast.js';
export { default as Tooltip } from './tooltip/tooltip.js';
export { default as StatusToken } from './status-token/status-token.js';
export { default as Tabs } from './tabs/tabs.js';
export { default as Switcher } from './switcher/switcher.js';
export { default as Pagination } from './pagination/pagination.js';
export { default as Card } from './card/card.js';
export { default as Modal } from './modal/modal.js';
export { default as Shelf } from './shelf/shelf.js';
export { default as MobileShelf } from './mobile-shelf/mobile-shelf.js';
export { default as Accordion } from './accordion/accordion.js';
export { default as Table } from './table/table.js';
export { default as SearchBar } from './search-bar/search-bar.js';
export { default as ProgressTracker } from './progress-tracker/progress-tracker.js';

/**
 * Initialize all components
 * Call this function to auto-initialize all components on the page
 */
export function initAll() {
  // Initialize components that support auto-initialization
  if (typeof window !== 'undefined') {
    Button.init();
    Input.init();
    Checkbox.init();
    Radio.init();
    Toggle.init();
    Dropdown.init();
    DatePicker.init();
    MobileDatePicker.init();
    FilterChip.init();
    Alert.init();
    Toast.init();
    Tooltip.init();
    StatusToken.init();
    Tabs.init();
    Switcher.init();
    Pagination.init();
    Card.init();
    Modal.init();
    Shelf.init();
    MobileShelf.init();
    Accordion.init();
    Table.init();
    SearchBar.init();
    ProgressTracker.init();
    Icon.init();
    Logo.init();
  }
}

// Auto-initialize on DOM ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
}
