import { lazy, Suspense } from 'react';

/**
 * LazyImage Component with loading placeholder
 * Supports lazy loading, srcSet for responsive images, and WebP format fallback
 */
export const LazyImage = ({ 
  src, 
  alt, 
  srcSet, 
  sizes,
  className = '', 
  placeholder = 'bg-gray-200',
  width,
  height,
  loading = 'lazy'
}) => {
  return (
    <img
      src={src}
      alt={alt}
      srcSet={srcSet}
      sizes={sizes}
      className={className}
      loading={loading}
      width={width}
      height={height}
      style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
    />
  );
};

/**
 * Picture component with WebP support and fallback
 * Automatically serves optimized WebP images with jpg fallback
 */
export const PictureImage = ({ 
  webp, 
  jpg, 
  alt, 
  className = '', 
  width,
  height,
  sizes,
  priority = false
}) => {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" sizes={sizes} />
      <LazyImage 
        src={jpg} 
        alt={alt} 
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        width={width}
        height={height}
      />
    </picture>
  );
};

/**
 * Image optimization utilities
 */
export const imageUtils = {
  /**
   * Generate responsive image URLs for different breakpoints
   * Useful with external image services like Cloudinary or imgix
   */
  generateSrcSet: (baseUrl, widths = [320, 640, 960, 1280]) => {
    return widths.map(width => `${baseUrl}?w=${width} ${width}w`).join(', ');
  },

  /**
   * Convert image URL to WebP format (requires image service support)
   */
  convertToWebP: (url) => {
    if (!url) return url;
    if (url.includes('?')) {
      return `${url}&fm=webp`;
    }
    return `${url}?fm=webp`;
  },

  /**
   * Get optimized image URL with size constraints
   */
  getOptimizedUrl: (url, width, height) => {
    if (!url) return url;
    const params = [];
    if (width) params.push(`w=${width}`);
    if (height) params.push(`h=${height}`);
    if (params.length === 0) return url;
    
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}${params.join('&')}`;
  }
};

/**
 * Hook to preload images for better performance
 */
export const usePreloadImage = (src) => {
  React.useEffect(() => {
    if (src) {
      const img = new Image();
      img.src = src;
    }
  }, [src]);
};

/**
 * Native Lazy Loading with intersection observer fallback
 */
export const NativeLazyImage = ({ 
  src, 
  srcSet, 
  sizes,
  alt, 
  className = '',
  width,
  height,
  onLoad,
  onError
}) => {
  const imgRef = React.useRef(null);

  React.useEffect(() => {
    if (imgRef.current && 'loading' in HTMLImageElement.prototype) {
      // Native lazy loading supported
      return;
    }

    // Fallback: Use intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && imgRef.current) {
          imgRef.current.src = src;
          if (srcSet) imgRef.current.srcSet = srcSet;
          observer.unobserve(entry.target);
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, srcSet]);

  return (
    <img
      ref={imgRef}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      onLoad={onLoad}
      onError={onError}
    />
  );
};
