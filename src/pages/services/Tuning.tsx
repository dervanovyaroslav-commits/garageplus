
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { theme } from '@/config/theme';

const Tuning = () => {
  const categories = [
    {
      id: 'aerodynamics',
      title: 'Обвесы и аэродинамика',
      description: 'AMG-пакет, сплиттеры, диффузоры',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['AMG-пакет: бампера, пороги', 'Сплиттеры, диффузоры']
    },
    {
      id: 'interior',
      title: 'Перешив салона / интерьер',
      description: 'Премиальная отделка салона натуральными материалами',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Натуральная кожа, алькантара', 'Цветовая настройка подсветки', 'Шильдики AMG, Maybach']
    },
    {
      id: 'wheels',
      title: 'Колесные диски',
      description: 'Установка премиальных колесных дисков',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Колесные диски']
    },
    {
      id: 'sound-isolation',
      title: 'Шумоизоляция',
      description: 'Профессиональная шумоизоляция салона',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      services: ['Шумоизоляция']
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
              Доп. оборудование и тюнинг
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
              Премиальный тюнинг и дополнительное оборудование для Mercedes-Benz
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20" style={{ backgroundColor: theme.colors.background }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link key={category.id} to={`/services/tuning/${category.id}`}>
                <Card 
                  className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl group cursor-pointer"
                  style={{ 
                    backgroundColor: theme.colors.surface,
                    boxShadow: theme.colors.shadows.card
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle 
                      className="text-xl group-hover:opacity-90 transition-all duration-300"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {category.title}
                    </CardTitle>
                    <p 
                      className="group-hover:opacity-90 transition-all duration-300"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {category.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm mb-4" style={{ color: theme.colors.text.secondary }}>
                      {category.services.map((service, index) => (
                        <li key={index} className="group-hover:opacity-90 transition-all duration-300">• {service}</li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full text-white rounded-xl py-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90"
                      style={{ backgroundColor: theme.colors.button.primary }}
                    >
                      Смотреть услуги
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

export default Tuning;
