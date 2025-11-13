import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star, Award, Shield, Wrench, Users } from 'lucide-react';
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PromotionCarousel } from "@/components/PromotionCarousel";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { Link } from 'react-router-dom';
import { theme } from '@/config/theme';
import { useContactForm } from '@/contexts/ContactFormContext';

// Helper function to scroll to top on navigation
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setFormComment } = useContactForm();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const featuresArray = [
    {
      title: 'Профессиональный ремонт с 1999 года',
      description: 'Обслуживаем автомобили Mercedes-Benz уже более 25 лет. Опыт, проверенный временем. С 2010 года - официальный партнёр программы Mercedes-Benz Независмый Специалист.',
      icon: Award,
    },
    {
      title: 'Сертифицированные специалисты',
      description:
        'Наши мастера имеют многолетний опыт работы в дилерских центрах Mercedes-Benz и прошли обучение в "Мерседес-Бенц РУС" с подтверждёнными сертификатами. Стаж работы наших механиков с автомобилями Mercedes-Benz от 20 лет и больше.',
      icon: Users,
    },
    {
      title: 'Оригинальные запчасти или качественные аналоги',
      description:
        'Используем оригинальные детали Mercedes-Benz или качественные аналоги от официальных поставщиков. Никогда не применяем подделки или запчасти ненадлежащего качества.',
      icon: Shield,
    },
    {
      title: 'Технологии Mercedes-Benz',
      description:
        'Все работы выполняются по технологии завода Mercedes-Benz с применением официальных сервисных программ EPC, WIS и ASRA.',
      icon: Wrench,
    },
    {
      title: 'Удобное расположение',
      description:
        'Сервис находится в 1,5 км от Москва-Сити и рядом с Поклонной горой — удобно добираться из любого района Москвы.',
      icon: Star,
    },
    {
      title: 'Быстрая доставка запчастей',
      description:
        'Благодаря отлаженной логистике и прямым поставкам мы минимизируем сроки ремонта вашего автомобиля.',
      icon: ArrowRight,
    },
  ];
  

  const scrollToContact = (serviceTitle?: string) => {
    // If service title is provided, set it as the contact form comment
    if (serviceTitle) {
      setFormComment(`Интересует услуга: ${serviceTitle}`);
    }
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background, color: theme.colors.text.primary }}>
      <Header />

      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 px-4"
        style={{ background: theme.colors.gradients.hero }}
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: theme.colors.text.primary }}>
                  Обслуживаем по стандартам завода-изготовителя
                </h1>
                <p className="text-xl font-medium" style={{ color: theme.colors.text.primary }}>
                  Только оригинальные запчасти
                </p>
                <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
                  Профессиональный ремонт и обслуживание Mercedes-Benz с 1999 года
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToContact("Предварительная запись на сервис")}
                  className="text-white px-8 py-6 text-lg font-medium rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-lg hover:opacity-90"
                  style={{ backgroundColor: theme.colors.button.primary }}
                >
                  Записаться на сервис
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div 
                className="aspect-[5/3] rounded-3xl overflow-hidden shadow-2xl"
                style={{ backgroundColor: theme.colors.surfaceBlur }}
              >
                <img 
                  src="/mercedes_w222.jpg"
                  alt="Mercedes-Benz W222"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  width={800}
                  height={480}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section 
        className="py-8 md:py-12 border-t border-gray-400/30"
        style={{ backgroundColor: theme.colors.surfaceBlur }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap md:flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12 overflow-x-auto pb-4 -mx-4 px-4">
            <img 
              src="/mb.svg" 
              alt="Mercedes-Benz" 
              className="h-3 md:h-4 opacity-60 hover:opacity-80 transition-opacity flex-shrink-0"
            />
            <img 
              src="/amg.svg" 
              alt="AMG" 
              className="h-3 md:h-4 opacity-60 hover:opacity-80 transition-opacity flex-shrink-0"
            />
            <img 
              src="mbh.svg" 
              alt="MAYBACH" 
              className="h-3 md:h-4 opacity-60 hover:opacity-80 transition-opacity flex-shrink-0"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        className="py-20"
        style={{ backgroundColor: theme.colors.backgroundLight }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Почему выбирают нас</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
              Профессионализм, качество и надёжность в каждой детали
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresArray.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl group"
                style={{ 
                  backgroundColor: theme.colors.surfaceBlur,
                  boxShadow: theme.colors.shadows.card
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: theme.colors.backgroundLight }}
                    >
                      <feature.icon className="h-6 w-6" style={{ color: theme.colors.button.primary }} />
                    </div>
                    <CardTitle className="text-xl" style={{ color: theme.colors.text.primary }}>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section 
        id="promotions" 
        className="py-20"
        style={{ backgroundColor: theme.colors.background }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Актуальные акции</h2>
            <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
              Выгодные предложения на обслуживание вашего Mercedes-Benz
            </p>
          </div>
          
          <PromotionCarousel />
        </div>
      </section>

      {/* Services Preview */}
      <section 
        id="services" 
        className="py-20"
        style={{ backgroundColor: theme.colors.backgroundLight }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Наши услуги</h2>
            <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
              Полный спектр обслуживания и ремонта Mercedes-Benz W222
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card 
                className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl group cursor-pointer"
                style={{ 
                  backgroundColor: theme.colors.surface,
                  boxShadow: theme.colors.shadows.card
                }}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img 
                    src="engine2.jpg"
                    alt="Техническое обслуживание"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl" style={{ color: theme.colors.text.primary }}>ТО и Ремонт</CardTitle>
                  <CardDescription style={{ color: theme.colors.text.secondary }}>
                    Техническое обслуживание, ремонт ходовой части, диагностика
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className="w-full text-white rounded-xl py-3 transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: theme.colors.button.primary }}
                    onClick={(e) => {
                      // We want to navigate to the page, not scroll to contact
                      // No need to prevent default
                      window.location.href = "/services/maintenance";
                    }}
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            

            
              <Card 
                className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl group cursor-pointer"
                style={{ 
                  backgroundColor: theme.colors.surface,
                  boxShadow: theme.colors.shadows.card
                }}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img 
                    src="transmission.jpg"
                    alt="Обслуживание АКПП"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl" style={{ color: theme.colors.text.primary }}>Обслуживание АКПП</CardTitle>
                  <CardDescription style={{ color: theme.colors.text.secondary }}>
                    Замена масла, ремонт гидроблока, диагностика 7G-Tronic
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className="w-full text-white rounded-xl py-3 transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: theme.colors.button.primary }}
                    onClick={(e) => {
                      // We want to navigate to the page, not scroll to contact
                      window.location.href = "/services/transmission";
                    }}
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card 
                className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl group cursor-pointer"
                style={{ 
                  backgroundColor: theme.colors.surface,
                  boxShadow: theme.colors.shadows.card
                }}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img 
                    src="engine.jpg"
                    alt="Ремонт ДВС"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl" style={{ color: theme.colors.text.primary }}>Обслуживание ДВС</CardTitle>
                  <CardDescription style={{ color: theme.colors.text.secondary }}>
                    Капитальный ремонт, замена цепи ГРМ, диагностика
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className="w-full text-white rounded-xl py-3 transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: theme.colors.button.primary }}
                    onClick={(e) => {
                      // We want to navigate to the page, not scroll to contact
                      window.location.href = "/services/engine";
                    }}
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            

            
              <Card 
                className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl group cursor-pointer"
                style={{ 
                  backgroundColor: theme.colors.surface,
                  boxShadow: theme.colors.shadows.card
                }}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img 
                    src="services/tuning.jpg"
                    alt="Тюнинг"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl" style={{ color: theme.colors.text.primary }}>Тюнинг</CardTitle>
                  <CardDescription style={{ color: theme.colors.text.secondary }}>
                    AMG-пакет, перешив салона, колесные диски
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className="w-full text-white rounded-xl py-3 transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: theme.colors.button.primary }}
                    onClick={(e) => {
                      // We want to navigate to the page, not scroll to contact
                      window.location.href = "/services/tuning";
                    }}
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card 
                className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl group cursor-pointer"
                style={{ 
                  backgroundColor: theme.colors.surface,
                  boxShadow: theme.colors.shadows.card
                }}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img 
                    src="services/tire-service.jpg"
                    alt="Шиномонтаж"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl" style={{ color: theme.colors.text.primary }}>Шиномонтаж</CardTitle>
                  <CardDescription style={{ color: theme.colors.text.secondary }}>
                    
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className="w-full text-white rounded-xl py-3 transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: theme.colors.button.primary }}
                    onClick={(e) => {
                      // We want to navigate to the page, not scroll to contact
                      window.location.href = "/services/tire-service";
                    }}
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section 
        id="reviews" 
        className="py-20"
        style={{ backgroundColor: theme.colors.background }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Отзывы клиентов</h2>
            <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
              Что говорят владельцы Mercedes-Benz о нашей работе
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Геннадий Ротенберг"
              car="Знаток города 2 уровня"
              text="Отличный автосервис! Делал ТО, все прошло быстро и качественно, все по делу, ничего не навязывали подробно рассказали о проделанной работе, запчасти все оригинальные, опытные механики, на следующее ТО приеду в этот же автосервис. Рекомендую!"
              rating={5}
            />
            <TestimonialCard 
              name="Интересный дед"
              car="Знаток города 5 уровня"
              text="Обращался в автосервис с поломкой Mercedes была проблема с подвеской. Диагностику сделали быстро, нашли причину и предложили оптимальное решение. Все работы выполнили аккуратно и в срок, машину вернули в отличном состоянии. Очень рад, что нашел сервис, где действительно разбираются в таких авто. Спасибо! Рекомендую!"
              rating={5}
            />
            <TestimonialCard 
              name="Татьяна Грушецкая"
              car="Знаток города 4 уровня"
              text="Обратилась с неисправностью автомобиля. Провели качественную диагностику, сразу определи в чем проблема! Спасибо за быстрый и качественный ремонт."
              rating={5}
            />
            <TestimonialCard 
              name="Александр"
              car="Знаток города 18 уровня"
              text="Давно у них обслуживаемся. Качественный ремонт Мерседес, хорошая ценовая политика, работают более 15 лет профи в своём деле, запчасти для ТО и расходники всегда в наличии."
              rating={5}
            />
            <TestimonialCard 
              name="Юрий Д."
              car="Знаток города 2 уровня"
              text="Облуживаю свою машину уже 3й год в данном сервисе, сказать доволен, ничего не сказать! Мастера чётко понимают что нужно делать, а что нет, за это отдельный респект! Адекватней цен я не встречал. Рекомендую данный автосервис!"
              rating={5}
            />
            <TestimonialCard 
              name="Путник"
              car="Знаток города 10 уровня"
              text="Рекомендую! Все быстро, не ДОРОГО, четко и качественно! Соотношение цены и качества на 5 баллов! Ну и мастера - мастера, у которых руки растут из правильного места."
              rating={5}
            />
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
