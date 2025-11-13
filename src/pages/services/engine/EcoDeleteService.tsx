
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceDescription } from '@/components/sections/ServiceDescription';
import { ContactSection } from '@/components/sections/ContactSection';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { theme } from '@/config/theme';

const EcoDeleteService = () => {
  const serviceData = {
    title: "Удаление экологических систем",
    subtitle: "EGR, DPF удаление Mercedes-Benz W222",
    description: "Профессиональное удаление EGR, DPF и других экологических систем Mercedes-Benz W222",
    price: "от 35 000 ₽",
    duration: "6-8 часов",
    image: "/mercedes_w222.jpg"
  };

  const detailedDescription = "Экологические системы Mercedes-Benz W222, включая EGR и DPF, разработаны для снижения вредных выбросов, но со временем могут стать источником серьезных проблем. Система рециркуляции отработавших газов (EGR) и сажевый фильтр (DPF) часто засоряются, особенно при эксплуатации в городских условиях. Это приводит к снижению мощности двигателя, увеличению расхода топлива и появлению ошибок в системе управления двигателем. Наш сервисный центр предлагает профессиональное удаление проблемных экологических систем с последующим программированием блока управления двигателем. Процедура включает в себя физическое удаление компонентов и программное отключение их контроля в ЭБУ. Мы используем специализированное оборудование для перепрограммирования, которое обеспечивает стабильную работу двигателя без экологических систем. Настройка параметров двигателя после удаления систем оптимизирует его работу и может даже улучшить динамические характеристики. Важно отметить, что данная процедура выполняется исключительно по запросу клиента и с учетом особенностей эксплуатации автомобиля. Наши специалисты имеют многолетний опыт работы с системами управления двигателем Mercedes-Benz и гарантируют безопасность всех выполняемых операций.";

  const problems = [
    "Забитый сажевый фильтр (DPF)",
    "Неисправность системы EGR",
    "Снижение мощности двигателя",
    "Повышенный расход топлива"
  ];

  const stages = [
    "Компьютерная диагностика систем",
    "Физическое удаление компонентов",
    "Программное отключение в ЭБУ",
    "Настройка параметров двигателя",
    "Контрольная диагностика",
    "Тест-драйв и финальная проверка"
  ];

  const pricing = {
    work: "25 000 ₽",
    parts: "от 10 000 ₽",
    total: "от 35 000 ₽"
  };

  return (
    <ServiceLayout>
      <ServiceHero {...serviceData} />
      <ServiceDescription description={detailedDescription} />
      
      {/* Main Problems Section */}
      <section className="py-16" style={{ backgroundColor: theme.colors.surface }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>Основные проблемы эко-систем</h2>
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
              <p className="text-gray-500">Видео удаления EGR</p>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Фото программирования ЭБУ</p>
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
              <CardTitle className="text-xl text-center" style={{ color: theme.colors.text.primary }}>Удаление эко-систем</CardTitle>
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

export default EcoDeleteService;
