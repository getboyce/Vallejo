# Toggles Component

## Overview

The Toggle component is a form control element in the Vallejo Design System, used for binary on/off states. It provides a clear visual indication of whether a setting or feature is enabled or disabled.

**Figma Reference:**
- **Node ID**: `138-4789`
- **Figma Link**: [Toggles Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=138-4789&m=dev)

## Description

Toggles are used when users need to enable or disable a single setting or feature. They provide immediate visual feedback and are ideal for binary states, settings, preferences, and feature toggles.

### Use Cases

- **Settings**: Enable/disable features or preferences (e.g., notifications, dark mode)
- **Feature Toggles**: Turn features on or off
- **Filters**: Toggle filters on or off
- **Preferences**: User preference toggles
- **Forms**: Form fields requiring binary yes/no selection
- **Controls**: Control panel toggles for system settings

## Variants

### State Variants

#### Off (Inactive)
- **Appearance**: Oval track with dark grey knob positioned on the left
- **Interaction**: Ready to be turned on
- **Track Color**: `--color-light-mode-neutral-200` (#E2E5E9) or light grey
- **Knob Color**: `--color-light-mode-neutral-500` (#2F333C) or dark grey
- **Track Outline**: Subtle grey outline

#### On (Active)
- **Appearance**: Oval track with blue knob positioned on the right
- **Interaction**: Setting is enabled
- **Track Color**: `--color-light-mode-blue-300` (#E1E9FA) or light blue
- **Knob Color**: `--color-brand-copart-blue` (#2662D9) or primary blue
- **Track Outline**: Subtle blue outline

#### Hover
- **Appearance**: Slightly darker track or knob color
- **Interaction**: Visual feedback on mouse hover
- **Transition**: Smooth color transition (recommended: 0.2s ease)

#### Focus
- **Appearance**: Focus ring or outline around toggle
- **Interaction**: Keyboard navigation indicator
- **Visual**: Visible focus indicator (browser default or custom focus ring)

#### Disabled (Off)
- **Appearance**: Muted colors, reduced opacity/contrast
- **Interaction**: Not interactive, cursor: not-allowed
- **Track Color**: `--color-light-mode-neutral-200` (#E2E5E9) with reduced opacity
- **Knob Color**: `--color-light-mode-neutral-400` (#46525D) with reduced opacity
- **Accessibility**: Must include `disabled` attribute and `aria-disabled="true"`

#### Disabled (On)
- **Appearance**: Muted blue colors, reduced opacity
- **Interaction**: Not interactive, but shows enabled state
- **Track Color**: `--color-light-mode-blue-300` (#E1E9FA) with reduced opacity
- **Knob Color**: `--color-light-mode-blue-400` (#2662D9) with reduced opacity

## Props / TypeScript Interface

```typescript
interface ToggleProps {
  /**
   * Whether the toggle is on (checked)
   * @default false
   */
  checked?: boolean;
  
  /**
   * Default checked state (uncontrolled component)
   * @default false
   */
  defaultChecked?: boolean;
  
  /**
   * Toggle label text
   */
  label?: string;
  
  /**
   * Whether the toggle is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the toggle is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Toggle name attribute (for form submission)
   */
  name?: string;
  
  /**
   * Toggle value attribute (for form submission)
   */
  value?: string;
  
  /**
   * Toggle id attribute
   */
  id?: string;
  
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string;
  
  /**
   * ARIA describedby for additional description
   */
  'aria-describedby'?: string;
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}
```

## Code Examples

### Basic Toggle (React/TypeScript)

```typescript
import React, { useState } from 'react';

interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  [key: string]: any;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  defaultChecked = false,
  label,
  disabled = false,
  required = false,
  name,
  value,
  id,
  onChange,
  onFocus,
  onBlur,
  className = '',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) {
      setInternalChecked(e.target.checked);
    }
    onChange?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const toggleId = id || `toggle-${name || 'default'}`;

  // Determine track and knob colors based on state
  const getTrackColor = () => {
    if (disabled) {
      return isChecked
        ? 'var(--color-light-mode-blue-300, #E1E9FA)'
        : 'var(--color-light-mode-neutral-200, #E2E5E9)';
    }
    return isChecked
      ? 'var(--color-light-mode-blue-300, #E1E9FA)'
      : 'var(--color-light-mode-neutral-200, #E2E5E9)';
  };

  const getKnobColor = () => {
    if (disabled) {
      return isChecked
        ? 'var(--color-light-mode-blue-400, #2662D9)'
        : 'var(--color-light-mode-neutral-400, #46525D)';
    }
    return isChecked
      ? 'var(--color-brand-copart-blue, #2662D9)'
      : 'var(--color-light-mode-neutral-500, #2F333C)';
  };

  const getTrackOutline = () => {
    if (disabled) {
      return 'var(--color-light-mode-neutral-300, #C5CCD3)';
    }
    return isChecked
      ? 'var(--color-brand-copart-blue, #2662D9)'
      : 'var(--color-light-mode-neutral-300, #C5CCD3)';
  };

  const labelColor = disabled
    ? 'var(--color-light-mode-neutral-400, #46525D)'
    : 'var(--color-light-mode-neutral-500, #2F333C)';

  return (
    <label
      htmlFor={toggleId}
      className={`toggle-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--spacing-12, 12px)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
      }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hidden Native Checkbox Input */}
      <input
        type="checkbox"
        role="switch"
        id={toggleId}
        name={name}
        value={value}
        checked={isChecked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label={ariaLabel || label}
        aria-describedby={ariaDescribedBy}
        aria-required={required}
        aria-disabled={disabled}
        style={{
          position: 'absolute',
          opacity: 0,
          width: 0,
          height: 0,
        }}
        {...props}
      />

      {/* Custom Toggle Visual */}
      <div
        style={{
          position: 'relative',
          width: '44px',
          height: '24px',
          minWidth: '44px',
          minHeight: '24px',
          borderRadius: 'var(--border-radius-round, 50%)',
          backgroundColor: getTrackColor(),
          border: `1px solid ${getTrackOutline()}`,
          display: 'flex',
          alignItems: 'center',
          padding: '2px',
          boxSizing: 'border-box',
          transition: 'background-color 0.2s ease, border-color 0.2s ease',
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {/* Knob */}
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: 'var(--border-radius-round, 50%)',
            backgroundColor: getKnobColor(),
            transform: isChecked ? 'translateX(20px)' : 'translateX(0)',
            transition: 'transform 0.2s ease, background-color 0.2s ease',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      {/* Label */}
      {label && (
        <span
          style={{
            fontSize: 'var(--typography-font-size-400, 16px)',
            fontWeight: 'var(--typography-weight-medium, 500)',
            lineHeight: 'var(--typography-line-height-400, 22px)',
            fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
            color: labelColor,
            transition: 'color 0.2s ease',
          }}
        >
          {label}
          {required && (
            <span
              aria-label="required"
              style={{
                color: 'var(--color-light-mode-alerts-text-error, #C20022)',
                marginLeft: '4px',
              }}
            >
              *
            </span>
          )}
        </span>
      )}
    </label>
  );
};

export default Toggle;
```

### Usage Examples

#### Basic Toggle
```typescript
<Toggle
  label="Enable notifications"
  name="notifications"
  value="enabled"
/>
```

#### Controlled Toggle
```typescript
const [notificationsEnabled, setNotificationsEnabled] = useState(false);

<Toggle
  label="Enable notifications"
  checked={notificationsEnabled}
  onChange={(e) => setNotificationsEnabled(e.target.checked)}
/>
```

#### Disabled Toggle
```typescript
<Toggle
  label="This setting is unavailable"
  disabled={true}
  aria-label="This setting is unavailable (disabled)"
/>
```

#### Disabled On Toggle
```typescript
<Toggle
  label="Already enabled (disabled)"
  checked={true}
  disabled={true}
/>
```

#### Required Toggle
```typescript
<Toggle
  label="Accept terms and conditions"
  required={true}
  name="terms"
/>
```

#### Toggle Group (Settings)
```typescript
const [settings, setSettings] = useState({
  notifications: false,
  darkMode: true,
  autoSave: false,
});

const handleSettingChange = (key: string, value: boolean) => {
  setSettings({ ...settings, [key]: value });
};

<div>
  <Toggle
    label="Push Notifications"
    checked={settings.notifications}
    onChange={(e) => handleSettingChange('notifications', e.target.checked)}
  />
  <Toggle
    label="Dark Mode"
    checked={settings.darkMode}
    onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
  />
  <Toggle
    label="Auto-save"
    checked={settings.autoSave}
    onChange={(e) => handleSettingChange('autoSave', e.target.checked)}
  />
</div>
```

#### Toggle with Description
```typescript
<div>
  <Toggle
    label="Enable two-factor authentication"
    checked={twoFactorEnabled}
    onChange={(e) => setTwoFactorEnabled(e.target.checked)}
    aria-describedby="two-factor-desc"
  />
  <p id="two-factor-desc" style={{ fontSize: '12px', color: '#46525D', marginTop: '4px' }}>
    Add an extra layer of security to your account
  </p>
</div>
```

## Design Tokens Used

### Colors

#### Off State
- **Track Background**: `--color-light-mode-neutral-200` (#E2E5E9)
- **Track Outline**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Knob**: `--color-light-mode-neutral-500` (#2F333C)

#### On State
- **Track Background**: `--color-light-mode-blue-300` (#E1E9FA)
- **Track Outline**: `--color-brand-copart-blue` (#2662D9)
- **Knob**: `--color-brand-copart-blue` (#2662D9)

#### Disabled States
- **Off Track**: `--color-light-mode-neutral-200` (#E2E5E9) with reduced opacity
- **Off Knob**: `--color-light-mode-neutral-400` (#46525D) with reduced opacity
- **On Track**: `--color-light-mode-blue-300` (#E1E9FA) with reduced opacity
- **On Knob**: `--color-light-mode-blue-400` (#2662D9) with reduced opacity
- **Label**: `--color-light-mode-neutral-400` (#46525D)

#### Label Colors
- **Default**: `--color-light-mode-neutral-500` (#2F333C)
- **Disabled**: `--color-light-mode-neutral-400` (#46525D)

### Typography

#### Label
- **Font Size**: `--typography-font-size-400` (16px)
- **Font Weight**: `--typography-weight-medium` (500)
- **Line Height**: `--typography-line-height-400` (22px)
- **Type Scale**: Body 1
- **Font Family**: `--typography-font-family-base` (Inter)

### Spacing

#### Toggle to Label Gap
- **Gap**: `--spacing-12` (12px) between toggle and label

#### Toggle Size
- **Track Width**: 44px
- **Track Height**: 24px
- **Knob Size**: 20px × 20px
- **Track Padding**: 2px (gap between track edge and knob)
- **Knob Translation**: 20px (distance knob moves when toggled)

### Border Radius
- **Track**: `--border-radius-round` (50%) for oval shape
- **Knob**: `--border-radius-round` (50%) for perfect circle

### Shadows
- **Knob Shadow**: Subtle shadow for depth (e.g., `0 1px 3px rgba(0, 0, 0, 0.1)`)

## Accessibility

### ARIA Attributes

- **`role="switch"`**: Use `role="switch"` on the input element to indicate toggle behavior
- **`aria-label`**: Use when label text alone doesn't provide sufficient context
- **`aria-describedby`**: Reference additional descriptive text if needed
- **`aria-required`**: Set to `true` when toggle is required
- **`aria-disabled`**: Set to `true` when toggle is disabled (in addition to `disabled` attribute)

### Keyboard Navigation

- **Space**: Toggles the switch when focused
- **Tab**: Moves focus to next interactive element
- **Shift+Tab**: Moves focus to previous interactive element

### Focus States

- **Visible Focus Indicator**: Ensure toggle has a visible focus outline (browser default or custom)
- **Focus Ring**: Consider using a focus ring that matches the design system
- **Focus on Label**: Clicking label should focus the toggle

### Screen Reader Considerations

- Toggles are announced as "switch" by screen readers (when using `role="switch"`)
- Checked state is announced ("on" or "off")
- Label text is read aloud
- Disabled state is announced
- Required state is announced

### Best Practices

1. **Always Include Labels**: Every toggle should have a visible label
2. **Use Switch Role**: Use `role="switch"` for semantic toggle behavior
3. **Required Fields**: Clearly indicate required toggles with asterisk and `aria-required`
4. **Touch Targets**: Ensure minimum 44x44px touch target (toggle track meets this requirement)
5. **Visual Feedback**: Provide clear visual distinction between on and off states
6. **Immediate Action**: Toggles should provide immediate feedback when toggled

## Implementation Notes

### CSS Variables

All styling should use CSS variables from the design tokens. This ensures consistency and makes theme updates easier.

### State Management

- Use controlled components (`checked` prop) for form state management
- Use uncontrolled components (`defaultChecked`) for simple cases
- Handle focus and hover states internally or via props

### Knob Animation

- Knob should smoothly translate from left to right when toggled
- Use CSS `transform: translateX()` for smooth animation
- Transition duration should be approximately 0.2s for smooth feel

### Track and Knob Colors

- Track color changes based on checked state (grey for off, light blue for on)
- Knob color changes based on checked state (dark grey for off, blue for on)
- Colors should transition smoothly when state changes

### Disabled States

Disabled toggles should:
- Have reduced visual prominence (reduced opacity)
- Not respond to clicks
- Show `cursor: not-allowed`
- Include both `disabled` attribute and `aria-disabled="true"`
- Maintain checked state visually if already checked

### Switch Role

- Use `role="switch"` on the input element to indicate toggle/switch behavior
- This helps screen readers understand the component's purpose
- Alternative: Use standard checkbox with `role="switch"` for better semantic meaning

### Responsive Considerations

- Toggles should maintain minimum touch target sizes on mobile (44x44px recommended)
- Track size (44px × 24px) meets touch target requirements
- Ensure proper spacing for touch interactions
- Consider larger toggle size on mobile if needed

## Related Components

- **Checkboxes**: Use checkboxes for multi-select scenarios
- **Radio Buttons**: Use radio buttons for single-select scenarios
- **Forms**: Toggles are commonly used in forms and settings
- **Settings**: Toggles are ideal for settings panels

## Figma Reference

- **Component Node ID**: `138-4789`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Toggles Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=138-4789&m=dev)

## Additional Resources

- [Component Catalog](../catalog.json) - Complete component reference
- [Design System Guide](../docs/design-system-guide.md) - Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) - When and how to use components
- [Color Tokens](../tokens/colors.json) - Complete color palette
- [Typography Tokens](../tokens/typography.json) - Typography scale
- [Spacing Tokens](../tokens/spacing.json) - Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) - Border radius values
