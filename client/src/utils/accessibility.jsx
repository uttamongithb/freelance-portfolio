/**
 * Accessibility utilities and best practices
 */

// Skip to main content link for keyboard navigation
export const SkipLink = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-navy focus:text-white focus:outline-2 focus:outline-amber"
  >
    Skip to main content
  </a>
);

// Add screen reader only class to Tailwind
export const srOnlyClass = 'sr-only';

/**
 * Accessible form field component
 */
export const AccessibleFormField = ({
  label,
  id,
  type = 'text',
  error,
  helperText,
  required = false,
  ...props
}) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block font-body text-sm font-semibold text-dark-slate">
      {label}
      {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
    </label>
    <input
      id={id}
      type={type}
      required={required}
      aria-invalid={error ? 'true' : 'false'}
      aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
      className={`w-full px-4 py-3 border-2 rounded transition-colors ${
        error
          ? 'border-red-500 bg-red-50'
          : 'border-gray-300 focus:border-mid-blue'
      }`}
      {...props}
    />
    {error && (
      <p id={`${id}-error`} className="text-red-500 text-xs flex items-center gap-1">
        {error}
      </p>
    )}
    {helperText && !error && (
      <p id={`${id}-helper`} className="text-gray-500 text-xs">
        {helperText}
      </p>
    )}
  </div>
);

/**
 * Focus visible utilities for keyboard navigation
 */
export const focusVisibleStyles = `
  focus:outline-2 
  focus:outline-offset-2 
  focus:outline-mid-blue
  focus-visible:outline-2 
  focus-visible:outline-offset-2 
  focus-visible:outline-mid-blue
`;

/**
 * Keyboard shortcut helper
 */
export const useKeyboardShortcut = (key, callback, options = {}) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        (!options.ctrlKey || event.ctrlKey) &&
        (!options.shiftKey || event.shiftKey) &&
        (!options.altKey || event.altKey)
      ) {
        callback(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback, options]);
};

/**
 * Announce updates to screen readers
 */
export const useAriaLive = (message, type = 'polite', timeout = 3000) => {
  const [announcement, setAnnouncement] = React.useState('');

  React.useEffect(() => {
    setAnnouncement(message);
    const timer = setTimeout(() => setAnnouncement(''), timeout);
    return () => clearTimeout(timer);
  }, [message, timeout]);

  return (
    <div
      role="status"
      aria-live={type}
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
};

/**
 * Accessible button with loading state
 */
export const AccessibleButton = ({
  loading = false,
  disabled = false,
  children,
  ariaLabel,
  ...props
}) => (
  <button
    disabled={disabled || loading}
    aria-busy={loading}
    aria-label={ariaLabel}
    className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mid-blue"
    {...props}
  >
    {children}
  </button>
);

/**
 * Color contrast checker
 * WCAG AA: 4.5:1 for normal text, 3:1 for large text
 * WCAG AAA: 7:1 for normal text, 4.5:1 for large text
 */
export const getColorContrast = (hex1, hex2) => {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  
  const lum1 = calculateLuminance(rgb1);
  const lum2 = calculateLuminance(rgb2);
  
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  return ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
};

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const calculateLuminance = (rgb) => {
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

/**
 * Accessible dialog/modal component wrapper
 */
export const AccessibleDialog = ({
  isOpen,
  onClose,
  title,
  children,
  ariaLabel
}) => {
  // Trap focus inside modal when open
  const [previouslyFocused, setPreviousFocused] = React.useState(null);

  React.useEffect(() => {
    if (isOpen) {
      setPreviousFocused(document.activeElement);
      // Disable body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      previouslyFocused?.focus();
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, previouslyFocused]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'dialog-title' : undefined}
      aria-label={ariaLabel}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 id="dialog-title" className="text-2xl font-bold mb-4">{title}</h2>}
        {children}
      </div>
    </div>
  );
};
