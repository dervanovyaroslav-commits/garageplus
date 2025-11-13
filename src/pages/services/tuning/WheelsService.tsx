
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ContactSection } from '@/components/sections/ContactSection';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { theme } from '@/config/theme';

const WheelsService = () => {
  const serviceData = {
    title: "Колесные диски",
    subtitle: "Установка премиальных колесных дисков",
    description: "Оригинальные диски AMG различных размеров от 19 до 21 дюйма для Mercedes-Benz W222",
    price: "от 128 000 ₽",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  };

  const problems = [
    "Стандартные диски не подчеркивают статус автомобиля",
    "Желание улучшить внешний вид",
    "Необходимость в более широких шинах",
    "Повышение управляемости",
    "Износ старых дисков"
  ];

  const stages = [
    "Подбор дисков по размеру и дизайну",
    "Заказ оригинальных дисков AMG",
    "Демонтаж старых дисков",
    "Установка новых дисков и шин",
    "Балансировка колес",
    "Настройка давления в шинах"
  ];

  const pricing = {
    work: "8 000 ₽",
    parts: "от 120 000 ₽",
    total: "от 128 000 ₽"
  };

  return (
    <ServiceLayout>
      <ServiceHero {...serviceData} />
      
      {/* Problems Section */}
      <section className="py-16" style={{ backgroundColor: theme.colors.surface }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>Причины замены дисков</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-xl" style={{ backgroundColor: theme.colors.backgroundLight }}>
                <AlertTriangle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: theme.colors.button.primary }} />
                <p style={{ color: theme.colors.text.secondary }}>{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Stages */}
      <section className="py-16" style={{ backgroundColor: theme.colors.background }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>Этапы работы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <Card key={index} className="border-0 rounded-2xl" style={{ backgroundColor: theme.colors.surface, boxShadow: theme.colors.shadows.card }}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: theme.colors.text.primary }}>
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg" style={{ color: theme.colors.text.primary }}>{stage}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16" style={{ backgroundColor: theme.colors.surface }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>Стоимость услуг</h2>
          <Card className="max-w-md mx-auto border-0 rounded-2xl" style={{ backgroundColor: theme.colors.surface, boxShadow: theme.colors.shadows.card }}>
            <CardHeader>
              <CardTitle className="text-xl text-center" style={{ color: theme.colors.text.primary }}>Установка дисков AMG</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span style={{ color: theme.colors.text.secondary }}>Работа:</span>
                <span className="font-semibold" style={{ color: theme.colors.text.primary }}>{pricing.work}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: theme.colors.text.secondary }}>Диски и шины:</span>
                <span className="font-semibold" style={{ color: theme.colors.text.primary }}>{pricing.parts}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span style={{ color: theme.colors.text.secondary }}>Итого:</span>
                  <span style={{ color: theme.colors.text.primary }}>{pricing.total}</span>
                </div>
              </div>
              <div 
                className="mt-6 p-4 rounded-xl border"
                style={{ 
                  backgroundColor: theme.colors.backgroundLight,
                  borderColor: theme.colors.button.primary + '20'
                }}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle 
                    className="h-5 w-5"
                    style={{ color: theme.colors.button.primary }} 
                  />
                  <span 
                    className="font-medium"
                    style={{ color: theme.colors.text.primary }}
                  >
                    Гарантия: 1 год
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactSection />
    </ServiceLayout>
  );
};

export default WheelsService;
