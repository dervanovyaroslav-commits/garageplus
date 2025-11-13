
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { theme } from '@/config/theme';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Maintenance = () => {
  const services = [
    {
      id: 'maintenance-a-service',
      title: 'ТО A (базовое)',
      description: 'Замена масла двигателя, проверка основных систем',
      price: 'от 8 500 ₽',
      image: '/services/maintenance-a-service.png'
    },
    {
      id: 'maintenance-b-service',
      title: 'ТО B (расширенное)',
      description: 'Полное техническое обслуживание с заменой фильтров',
      price: 'от 15 000 ₽',
      image: '/services/maintenance-b-service.png'
    },
    {
      id: 'brake-service',
      title: 'Обслуживание тормознойй системы',
      description: 'Замена колодок, дисков, проверка системы',
      price: 'от 12 000 ₽',
      image: '/services/brake-service.png'
    },
    {
      id: 'suspension-service',
      title: 'Ремонт подвески',
      description: 'Замена амортизаторов, пружин, втулок',
      price: 'от 20 000 ₽',
      image: '/services/suspension-service.png'
    }
  ];

  return (
    <ServiceLayout>
      {/* Hero Section */}
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
              Техническое обслуживание и ремонт
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
              Профессиональное обслуживание Mercedes-Benz W222 по стандартам завода-изготовителя. 
              Используем только оригинальные запчасти и расходные материалы.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section 
        className="py-20"
        style={{ backgroundColor: theme.colors.background }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link 
                key={service.id}
                to={`/services/maintenance/${service.id}`}
                className="group"
                onClick={scrollToTop}
              >
                <Card 
                  className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl group cursor-pointer"
                  style={{ 
                    backgroundColor: theme.colors.surface,
                    boxShadow: theme.colors.shadows.card
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle 
                        className="text-xl group-hover:opacity-90 transition-all duration-300"
                        style={{ color: theme.colors.text.primary }}
                      >
                        {service.title}
                      </CardTitle>
                      <div className="text-lg font-bold" style={{ color: theme.colors.text.primary }}>{service.price}</div>
                    </div>
                    <p 
                      className="group-hover:opacity-90 transition-all duration-300"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {service.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button 
                      className="w-full text-white rounded-xl py-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90"
                      style={{ backgroundColor: theme.colors.button.primary }}
                    >
                      Подробнее
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default Maintenance;
