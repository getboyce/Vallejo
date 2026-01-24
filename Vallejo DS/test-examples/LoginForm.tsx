/**
 * LoginForm Component
 * 
 * Created using the Vallejo Design System
 * References:
 * - Inputs: https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=704-813
 * - Buttons: https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=709-3977
 * - Checkboxes: https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=714-367
 * 
 * Design Tokens Used:
 * - Typography: Form Field (12px, Semibold), Body 1 (16px, Medium)
 * - Colors: --color-grays-500 (text), --color-brand-copart-blue (primary)
 * - Spacing: Standard spacing tokens
 */

import React, { useState } from 'react';

interface LoginFormProps {
  onSubmit?: (email: string, password: string, rememberMe: boolean) => void;
  onCancel?: () => void;
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onCancel,
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email, password, rememberMe);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      aria-label="Login form"
      style={{
        fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '400px',
        padding: '32px',
      }}
    >
      {/* Email Input */}
      <div>
        <label
          htmlFor="email"
          style={{
            display: 'block',
            fontSize: 'var(--typography-font-size-200, 12px)',
            fontWeight: 'var(--typography-weight-semibold, 600)',
            lineHeight: 'var(--typography-line-height-200, 18px)',
            color: 'var(--color-grays-500, #2f333c)',
            marginBottom: '8px',
          }}
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          aria-required="true"
          aria-label="Email address"
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: 'var(--typography-font-size-400, 16px)',
            fontWeight: 'var(--typography-weight-medium, 500)',
            lineHeight: 'var(--typography-line-height-400, 22px)',
            fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
            color: 'var(--color-grays-500, #2f333c)',
            border: '1px solid var(--color-grays-100, #f4f5f6)',
            borderRadius: '8px',
            backgroundColor: 'var(--color-grays-000, #ffffff)',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Password Input */}
      <div>
        <label
          htmlFor="password"
          style={{
            display: 'block',
            fontSize: 'var(--typography-font-size-200, 12px)',
            fontWeight: 'var(--typography-weight-semibold, 600)',
            lineHeight: 'var(--typography-line-height-200, 18px)',
            color: 'var(--color-grays-500, #2f333c)',
            marginBottom: '8px',
          }}
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          aria-required="true"
          aria-label="Password"
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: 'var(--typography-font-size-400, 16px)',
            fontWeight: 'var(--typography-weight-medium, 500)',
            lineHeight: 'var(--typography-line-height-400, 22px)',
            fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
            color: 'var(--color-grays-500, #2f333c)',
            border: '1px solid var(--color-grays-100, #f4f5f6)',
            borderRadius: '8px',
            backgroundColor: 'var(--color-grays-000, #ffffff)',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Remember Me Checkbox */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <input
          id="rememberMe"
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          aria-label="Remember me"
          style={{
            width: '16px',
            height: '16px',
            cursor: 'pointer',
          }}
        />
        <label
          htmlFor="rememberMe"
          style={{
            fontSize: 'var(--typography-font-size-300, 14px)',
            fontWeight: 'var(--typography-weight-medium, 500)',
            lineHeight: 'var(--typography-line-height-300, 20px)',
            color: 'var(--color-grays-500, #2f333c)',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          Remember me
        </label>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          marginTop: '8px',
        }}
      >
        {/* Primary Submit Button */}
        <button
          type="submit"
          aria-label="Submit login form"
          style={{
            flex: 1,
            padding: '12px 24px',
            fontSize: 'var(--typography-font-size-400, 16px)',
            fontWeight: 'var(--typography-weight-medium, 500)',
            lineHeight: 'var(--typography-line-height-400, 22px)',
            fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
            color: 'var(--color-grays-000, #ffffff)',
            backgroundColor: 'var(--color-brand-copart-blue, #2662d9)',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-blues-400, #2662d9)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-brand-copart-blue, #2662d9)';
          }}
        >
          Sign In
        </button>

        {/* Secondary Cancel Button */}
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            aria-label="Cancel login"
            style={{
              flex: 1,
              padding: '12px 24px',
              fontSize: 'var(--typography-font-size-400, 16px)',
              fontWeight: 'var(--typography-weight-medium, 500)',
              lineHeight: 'var(--typography-line-height-400, 22px)',
              fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
              color: 'var(--color-brand-copart-blue, #2662d9)',
              backgroundColor: 'transparent',
              border: '1px solid var(--color-brand-copart-blue, #2662d9)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-blues-300, #e1e9fa)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
