
import React from 'react';
import { useParams } from 'react-router-dom';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { theme } from '@/config/theme';

const ServiceDetail = () => {
  const { category, service } = useParams();

  return (
    <ServiceLayout>
      <section 
        className="py-16"
        style={{ background: theme.colors.gradients.heroAlt }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ 
                background: theme.colors.gradients.text,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Детали услуги
            </h1>
            <p 
              className="text-xl max-w-2xl mx-auto"
              style={{ color: theme.colors.text.secondary }}
            >
              Категория: {category} | Услуга: {service}
            </p>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default ServiceDetail;
