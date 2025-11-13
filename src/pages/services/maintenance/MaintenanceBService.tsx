
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceDescription } from '@/components/sections/ServiceDescription';
import { ContactSection } from '@/components/sections/ContactSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Wrench, Clock } from 'lucide-react';

const MaintenanceBService = () => {
  const serviceData = {
    title: "Техническое обслуживание Б (ТО-Б)",
    subtitle: "Расширенное ТО Mercedes-Benz W222",
    description: "Расширенное техническое обслуживание Mercedes-Benz W222 с заменой фильтров и углубленной диагностикой",
    price: "от 15 000 ₽",
    duration: "4-5 часов",
    image: "/services/maintenance/general-maintenance.jpg" // Placeholder for general maintenance service image
  };

  const detailedDescription = "Техническое обслуживание Б (ТО-Б) для Mercedes-Benz W222 – это комплексная процедура, которая обеспечивает надежную и безопасную эксплуатацию вашего автомобиля. Расширенное техническое обслуживание включает в себя не только замену масла двигателя, но и полную диагностику всех систем автомобиля. Мы проводим замену воздушного, салонного и топливного фильтров, что обеспечивает чистоту воздуха в салоне и оптимальную работу двигателя. Особое внимание уделяется проверке свечей зажигания и катушек зажигания, которые напрямую влияют на мощность и экономичность двигателя. Диагностика тормозной системы позволяет выявить потенциальные проблемы на ранней стадии, что критически важно для безопасности. Проверка подвески и рулевого управления гарантирует комфортную езду и предотвращает преждевременный износ шин. Адаптация электронных систем и сброс сервисных интервалов обеспечивают корректную работу всех систем автомобиля. Регулярное проведение ТО-Б значительно продлевает срок службы автомобиля и предотвращает дорогостоящие поломки. Наши специалисты используют только оригинальные запчасти и расходные материалы Mercedes-Benz. Это инвестиция в долговечность и надежность вашего автомобиля.";

  const problems = [
    "Засорение воздушного и салонного фильтров",
    "Загрязнение топливной системы",
    "Износ свечей зажигания и катушек",
    "Потеря мощности двигателя"
  ];

  const stages = [
    "Полная компьютерная диагностика",
    "Замена масла и всех фильтров",
    "Проверка и замена свечей зажигания",
    "Диагностика тормозной системы",
    "Проверка подвески и рулевого управления",
    "Адаптация и сброс сервисных интервалов"
  ];

  const pricing = {
    work: "8 500 ₽",
    parts: "от 6 500 ₽",
    total: "от 15 000 ₽"
  };

  return (
    <ServiceLayout>
      <ServiceHero {...serviceData} />
      <ServiceDescription description={detailedDescription} />
      
      {/* Main Problems Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Основные проблемы без регулярного ТО-Б</h2>
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
      <section className="py-16 bg-[#f0ebe5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Этапы работы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
            <div className="aspect-video bg-[#f0ebe5] rounded-lg flex items-center justify-center">
              <p className="text-black">Видео процесса ТО-Б</p>
            </div>
            <div className="aspect-video bg-[#f0ebe5] rounded-lg flex items-center justify-center">
              <p className="text-black">Фото замены фильтров</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-[#f0ebe5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Стоимость услуг</h2>
          <Card className="max-w-md mx-auto border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-center text-black">ТО-Б Mercedes W222</CardTitle>
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

export default MaintenanceBService;
