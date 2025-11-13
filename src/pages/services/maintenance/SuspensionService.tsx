import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceDescription } from '@/components/sections/ServiceDescription';
import { ContactSection } from '@/components/sections/ContactSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Wrench, Clock } from 'lucide-react';

const SuspensionService = () => {
  const serviceData = {
    title: "Ремонт подвески",
    subtitle: "Пневматическая подвеска Mercedes-Benz W222",
    description: "Диагностика и ремонт пневматической подвески Mercedes-Benz W222",
    price: "от 25 000 ₽",
    duration: "6-8 часов",
    image: "/services/maintenance/suspension-service.jpg" // Placeholder for suspension service image
  };

  const detailedDescription = "Пневматическая подвеска Mercedes-Benz W222 представляет собой инновационную систему, обеспечивающую непревзойденный комфорт и управляемость автомобиля. Эта технология автоматически адаптируется к дорожным условиям и стилю вождения, поддерживая оптимальный клиренс и жесткость подвески. Однако сложность системы требует профессионального подхода к диагностике и ремонту. Наш сервисный центр располагает специализированным оборудованием для работы с пневматическими системами Mercedes-Benz. Мы проводим комплексную диагностику всех компонентов: пневматических стоек, компрессора, датчиков уровня кузова и управляющих клапанов. Своевременное выявление утечек в пневматических элементах предотвращает дорогостоящий ремонт компрессора и других компонентов системы. Калибровка системы пневмоподвески после ремонта обеспечивает корректную работу всех режимов. Проверка геометрии колес гарантирует равномерный износ шин и стабильность управления. Использование оригинальных запчастей Mercedes-Benz критически важно для надежности и долговечности ремонта. Наши специалисты регулярно проходят обучение по новейшим технологиям подвески Mercedes-Benz, что гарантирует качество выполняемых работ.";

  const problems = [
    "Утечки в пневматических стойках",
    "Неисправность компрессора пневмоподвески",
    "Износ амортизаторов и пружин",
    "Проблемы с датчиками уровня кузова"
  ];

  const stages = [
    "Компьютерная диагностика подвески",
    "Проверка пневматических элементов",
    "Замена неисправных компонентов",
    "Калибровка системы пневмоподвески",
    "Проверка геометрии колес",
    "Тест-драйв и финальная настройка"
  ];

  const pricing = {
    work: "15 000 ₽",
    parts: "от 10 000 ₽",
    total: "от 25 000 ₽"
  };

  return (
    <ServiceLayout>
      <ServiceHero {...serviceData} />
      <ServiceDescription description={detailedDescription} />
      
      {/* Main Problems Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Основные проблемы подвески</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Stages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Этапы работы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{stage}</CardTitle>
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
          <h2 className="text-3xl font-bold text-center mb-12">Фото и видео работ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Видео ремонта пневмоподвески</p>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Фото замены стоек</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Стоимость услуг</h2>
          <Card className="max-w-md mx-auto border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-center">Ремонт подвески</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Работа:</span>
                <span className="font-semibold">{pricing.work}</span>
              </div>
              <div className="flex justify-between">
                <span>Запчасти:</span>
                <span className="font-semibold">{pricing.parts}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Итого:</span>
                  <span>{pricing.total}</span>
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

export default SuspensionService;
