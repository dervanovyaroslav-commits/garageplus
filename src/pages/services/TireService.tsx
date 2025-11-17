
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { theme } from '@/config/theme';

const Transmission = () => {
  const categories = [
    {
      id: 'tire-service_2',
      title: 'Шиномонтаж',
      description: 'Шиномонтаж легковой, ул. Поклонная',
      image: '/services/tire-service_1.png',
      services: ['Шиномонтаж']
    },
      {
      id: 'tire-service_2',
      title: 'Шиномонтаж',
      description: 'Шиномонтаж, ул. Поклонная',
      image: '/services/tire-service_2.png',
      services: ['Шиномонтаж']
    },
    {
      id: 'storage',
      title: 'Хранение шин',
      description: 'Хранение шин, ул. Поклонная',
      image: '/services/storage.png',
      services: ['Хранение шин']
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
              Шиномонтаж
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
              Технический центр «ГАРАЖ +» предлагает профессиональный и удобный сервис, избавляя вас от лишних затрат времени и усилий на самостоятельное решение вопросов, связанных с шиномонтажом. Качество наших услуг напрямую влияет на безопасность вас и ваших близких. Поэтому так важно выбирать сервис, оснащённый современным оборудованием и инструментами для выполнения полного спектра шиномонтажных работ. В техническом центре «ГАРАЖ +» используется немецкое оборудование от компании HOFMANN, которая давно зарекомендовала себя как символ качества и надёжности. Инновационные технологии и уникальные патенты делают эту компанию лидером в производстве шиномонтажного оборудования. Мы также не экономим на расходных материалах и используем только самое лучшее. При установке колеса на автомобиль все болты затягиваются с помощью динамометрического ключа строго моментом указанным заводом-изготовителем.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20" style={{ backgroundColor: theme.colors.background }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
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
                <CardContent className="pt-0">
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section 
        className="py-16"
        style={{ background: theme.colors.gradients.heroAlt }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
              ПРИЕЗЖАЯ К НАМ НА УСЛУГИ ШИНОМОНТАЖА И ОСТАВЛЯЯ КОЛЁСА У НАС НА ХРАНЕНИИ - АКЦИЯ !!!
                <br /><br />
              ШИНОМОНТАЖ + ХРАНЕНИЕ = ОБЩАЯ СКИДКА 10%
            </p>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default Transmission;
