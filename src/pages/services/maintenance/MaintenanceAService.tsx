import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ContactSection } from '@/components/sections/ContactSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Wrench, Clock } from 'lucide-react';
import { theme } from '@/config/theme';

const MaintenanceAService = () => {
  const serviceData = {
    title: "Техническое обслуживание А (ТО-А)",
    subtitle: "Регулярное ТО Mercedes-Benz W222",
    description: "Базовое техническое обслуживание Mercedes-Benz W222 с проверкой основных систем автомобиля",
    price: "от 8 500 ₽",
    duration: "2-3 часа",
    image: "/services/maintenance/oil-change.jpg" // Placeholder for engine oil change service image
  };

  const problems = [
    "Снижение надежности без регулярного ТО",
    "Преждевременный износ деталей",
    "Потеря гарантии при несоблюдении регламента",
    "Повышенный расход топлива и масла"
  ];

  const stages = [
    "Компьютерная диагностика всех систем",
    "Проверка уровней технических жидкостей",
    "Визуальный осмотр подвески и тормозов",
    "Проверка работы освещения и электрики",
    "Замена масла и масляного фильтра",
    "Сброс межсервисного интервала"
  ];

  const pricing = {
    work: "5 500 ₽",
    parts: "от 3 000 ₽",
    total: "от 8 500 ₽"
  };

  return (
    <ServiceLayout>
      <ServiceHero {...serviceData} />
      
      {/* Main Problems Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Основные проблемы без регулярного ТО</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-black">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Stages Section */}
      <section 
        className="py-16"
        style={{ backgroundColor: theme.colors.backgroundLight }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Этапы работы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: theme.colors.button.primary }}
                    >
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg text-black">{stage}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Фото и видео работ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="aspect-video rounded-lg flex items-center justify-center"
              style={{ backgroundColor: theme.colors.backgroundLight }}
            >
              <p className="text-black">Видео процесса ТО-А</p>
            </div>
            <div 
              className="aspect-video rounded-lg flex items-center justify-center"
              style={{ backgroundColor: theme.colors.backgroundLight }}
            >
              <p className="text-black">Фото результатов работы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        className="py-16"
        style={{ backgroundColor: theme.colors.backgroundLight }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Стоимость услуг</h2>
          <Card className="max-w-md mx-auto border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-center text-black">ТО-А Mercedes W222</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-black">Работа:</span>
                <span className="font-semibold text-black">{pricing.work}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">Запчасти:</span>
                <span className="font-semibold text-black">{pricing.parts}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-black">Итого:</span>
                  <span className="text-black">{pricing.total}</span>
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

export default MaintenanceAService;
