
import React, { useState, useEffect } from 'react';
import { theme } from '@/config/theme';

export interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration?: string;
  image: string;
}

export const ServiceHero = ({ title, subtitle, description, price, duration, image }: ServiceHeroProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 800, height: 600 });

  // Extract width and height from image URL if available (e.g., image-800x600.jpg)
  useEffect(() => {
    const match = image.match(/(\d+)x(\d+)\.\w+$/);
    if (match) {
      setImageDimensions({
        width: parseInt(match[1], 10),
        height: parseInt(match[2], 10)
      });
    }
  }, [image]);

  return (
    <section 
      className="py-16"
      style={{ background: theme.colors.gradients.heroAlt }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ 
                background: theme.colors.gradients.text,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {title}
            </h1>
            <h2 className="text-xl mb-6" style={{ color: theme.colors.text.secondary }}>
              {subtitle}
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: theme.colors.text.primary }}>
              {description}
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <div 
                className="px-6 py-3 rounded-xl shadow-lg border border-gray-200"
                style={{ backgroundColor: theme.colors.surfaceBlur }}
              >
                <span className="text-sm" style={{ color: theme.colors.text.muted }}>
                  Стоимость
                </span>
                <div className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
                  {price}
                </div>
              </div>
              {duration && (
                <div 
                  className="px-6 py-3 rounded-xl shadow-lg border border-gray-200"
                  style={{ backgroundColor: theme.colors.surfaceBlur }}
                >
                  <span className="text-sm" style={{ color: theme.colors.text.muted }}>
                    Время
                  </span>
                  <div className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
                    {duration}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className={`absolute inset-0 transition-opacity duration-500 ${
                isImageLoaded ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                background: 'linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 50%, #f1f5f9 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s infinite',
              }}
            />
            <img 
              src={image} 
              alt={title}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="eager"
              width={imageDimensions.width}
              height={imageDimensions.height}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
