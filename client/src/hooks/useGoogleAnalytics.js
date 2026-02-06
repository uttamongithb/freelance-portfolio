import { useEffect } from 'react';

export const useGoogleAnalytics = () => {
  useEffect(() => {
    // Load Google Analytics script
    if (import.meta.env.VITE_GA_ID) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', import.meta.env.VITE_GA_ID, {
        page_path: window.location.pathname,
      });

      // Make gtag globally accessible
      window.gtag = gtag;
    }
  }, []);
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', {
    form_name: formName,
    timestamp: new Date().toISOString(),
  });
};

// Track page views (for SPA)
export const trackPageView = (pagePath) => {
  if (window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_ID, {
      page_path: pagePath,
    });
  }
};
