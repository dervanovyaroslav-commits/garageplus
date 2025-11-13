
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ContactSection } from '@/components/sections/ContactSection';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { theme } from '@/config/theme';

const SoundIsolationService = () => {
  const serviceData = {
    title: "Шумоизоляция",
    subtitle: "Профессиональная шумоизоляция салона",
    description: "Комплексная шумоизоляция Mercedes-Benz W222 с использованием современных материалов для максимального комфорта",
    price: "от 85 000 ₽",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  };

  const problems = [
    "Шум от дороги и ветра",
    "Слышимость работы двигателя",
    "Вибрации кузова",
    "Недостаточный комфорт в салоне",
    "Плохая акустика аудиосистемы"
  ];

  const stages = [
    "Диагностика уровня шума",
    "Демонтаж салонных панелей",
    "Очистка поверхностей",
    "Нанесение шумоизоляции",
    "Установка виброизоляции",
    "Сборка салона и проверка"
  ];

  const pricing = {
    work: "45 000 ₽",
    parts: "от 40 000 ₽",
    total: "от 85 000 ₽"
  };

  return (
    <ServiceLayout>
      <ServiceHero {...serviceData} />
      
      {/* Problems Section */}
      <section className="py-16" style={{ backgroundColor: theme.colors.surface }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>Проблемы с шумом</h2>
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
              <CardTitle className="text-xl text-center" style={{ color: theme.colors.text.primary }}>Шумоизоляция салона</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span style={{ color: theme.colors.text.secondary }}>Работа:</span>
                <span className="font-semibold" style={{ color: theme.colors.text.primary }}>{pricing.work}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: theme.colors.text.secondary }}>Материалы:</span>
                <span className="font-semibold" style={{ color: theme.colors.text.primary }}>{pricing.parts}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span style={{ color: theme.colors.text.secondary }}>Итого:</span>
                  <span style={{ color: theme.colors.text.primary }}>{pricing.total}</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex items-center space-x-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Гарантия: 1 год</span>
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

export default SoundIsolationService;
