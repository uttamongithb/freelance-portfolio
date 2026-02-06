/**
 * Calendly Integration for booking meetings
 */

export const loadCalendlyScript = () => {
  if (document.querySelector('script[src*="calendly"]')) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.onload = () => {
      if (window.Calendly) {
        resolve();
      } else {
        reject(new Error('Calendly widget failed to load'));
      }
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

/**
 * Open Calendly popup booking
 */
export const openCalendlyPopup = async (calendarUrl) => {
  try {
    await loadCalendlyScript();
    if (window.Calendly) {
      window.Calendly.showPopupWidget(calendarUrl);
      return true;
    }
  } catch (error) {
    console.error('Failed to open Calendly popup:', error);
    return false;
  }
};

/**
 * Calendly Embed Component for inline calendar
 */
export const CalendlyEmbed = ({ calendarUrl, height = '630px' }) => {
  React.useEffect(() => {
    loadCalendlyScript();
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={calendarUrl}
      style={{ minWidth: '320px', height }}
    />
  );
};

/**
 * Calendly Button to trigger popup
 */
export const CalendlyButton = ({ 
  calendarUrl, 
  label = 'Schedule a Meeting',
  className = '',
  ...props 
}) => {
  const handleClick = () => {
    openCalendlyPopup(calendarUrl);
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      {...props}
    >
      {label}
    </button>
  );
};
