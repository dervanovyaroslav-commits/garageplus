
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceDescription } from '@/components/sections/ServiceDescription';
import { ContactSection } from '@/components/sections/ContactSection';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { theme } from '@/config/theme';

const CleaningService = () => {
  const serviceData = {
    title: "Очистка двигателя",
    subtitle: "Очистка от нагара Mercedes-Benz W222",
    description: "Профессиональная очистка двигателя от нагара и отложений Mercedes-Benz W222",
    price: "от 8 000 ₽",
    duration: "3-4 часа",
    image: "/mercedes_w222.jpg"
  };

  const detailedDescription = "Очистка двигателя от нагара и отложений является критически важной процедурой для поддержания оптимальной работы Mercedes-Benz W222. Современные двигатели с непосредственным впрыском топлива особенно подвержены образованию нагара на впускных клапанах и в камере сгорания. Накопление отложений приводит к снижению мощности, увеличению расхода топлива и неровной работе двигателя на холостом ходу. Наш сервисный центр использует профессиональное оборудование для безопасной и эффективной очистки всех компонентов двигателя. Процедура включает в себя очистку камеры сгорания, впускных клапанов, поршней и системы смазки от вредных отложений. Мы применяем специальные химические составы, которые безопасны для двигателя и эффективно растворяют даже стойкие отложения. Промывка системы смазки удаляет продукты износа и старое масло, обеспечивая чистоту внутренних каналов. Контрольная диагностика после очистки подтверждает эффективность процедуры и восстановление параметров двигателя. Регулярная очистка двигателя значительно продлевает его ресурс и предотвращает дорогостоящие поломки. Эта процедура особенно важна для автомобилей, эксплуатируемых в городских условиях с частыми остановками и стартами.";

  const problems = [
    "Нагар на клапанах и поршнях",
    "Снижение мощности двигателя",
    "Повышенный расход топлива",
    "Неровная работа на холостом ходу"
  ];

  const stages = [
    "Диагностика состояния двигателя",
    "Подготовка специального оборудования",
    "Очистка камеры сгорания",
    "Промывка системы смазки",
    "Проверка результатов очистки",
    "Тест-драйв и контрольная диагностика"
  ];

  const pricing = {
    work: "5 000 ₽",
    parts: "от 3 000 ₽",
    total: "от 8 000 ₽"
  };

  return (
    <ServiceLayout>
      <ServiceHero {...serviceData} />
      <ServiceDescription description={detailedDescription} />
      
      {/* Main Problems Section */}
      <section className="py-16" style={{ backgroundColor: theme.colors.surface }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>Основные проблемы загрязнения</h2>
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

      {/* Work Stages Section */}
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

      {/* Media Section */}
      <section className="py-16" style={{ backgroundColor: theme.colors.surface }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>Фото и видео работ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Видео процесса очистки</p>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Фото до и после очистки</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16" style={{ backgroundColor: theme.colors.background }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>Стоимость услуг</h2>
          <Card className="max-w-md mx-auto border-0 rounded-2xl" style={{ backgroundColor: theme.colors.surface, boxShadow: theme.colors.shadows.card }}>
            <CardHeader>
              <CardTitle className="text-xl text-center" style={{ color: theme.colors.text.primary }}>Очистка двигателя</CardTitle>
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
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactSection />
    </ServiceLayout>
  );
};

export default CleaningService;
