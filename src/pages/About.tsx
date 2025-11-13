
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { ContactSection } from '@/components/sections/ContactSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Shield, Wrench, Clock, MapPin } from 'lucide-react';
import { theme } from '@/config/theme';

const About = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section 
        className="py-16 px-4"
        style={{ background: theme.colors.gradients.heroAlt }}
      >
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent"
              style={{ 
                background: theme.colors.gradients.text,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              О компании Garage Plus
            </h1>
            <p className="text-xl mb-8" style={{ color: theme.colors.text.primary }}>
              Профессиональный ремонт и обслуживание Mercedes-Benz с 1999 года
            </p>
            <p className="text-lg leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              Более 25 лет мы специализируемся исключительно на автомобилях Mercedes-Benz. 
              Наш опыт, профессионализм и использование только оригинальных запчастей 
              гарантируют качество обслуживания на уровне официального дилера.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section 
        className="py-20"
        style={{ backgroundColor: theme.colors.background }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Наши преимущества</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card 
              className="border-0 rounded-2xl group"
              style={{ 
                backgroundColor: theme.colors.surface,
                boxShadow: theme.colors.shadows.card
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: theme.colors.backgroundLight }}
                  >
                    <Award className="h-6 w-6" style={{ color: theme.colors.text.muted }} />
                  </div>
                  <CardTitle className="text-xl" style={{ color: theme.colors.text.primary }}>25 лет опыта</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                  С 1999 года мы обслуживаем автомобили Mercedes-Benz. За это время мы накопили 
                  уникальный опыт и глубокие знания особенностей каждой модели.
                </CardDescription>
              </CardContent>
            </Card>

            <Card 
              className="border-0 rounded-2xl group"
              style={{ 
                backgroundColor: theme.colors.surface,
                boxShadow: theme.colors.shadows.card
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: theme.colors.backgroundLight }}
                  >
                    <Users className="h-6 w-6" style={{ color: theme.colors.text.muted }} />
                  </div>
                  <CardTitle className="text-xl" style={{ color: theme.colors.text.primary }}>Сертифицированные мастера</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                  Наши специалисты прошли обучение в «Мерседес-Бенц РУС» и имеют многолетний 
                  опыт работы в официальных дилерских центрах.
                </CardDescription>
              </CardContent>
            </Card>

            <Card 
              className="border-0 rounded-2xl group"
              style={{ 
                backgroundColor: theme.colors.surface,
                boxShadow: theme.colors.shadows.card
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: theme.colors.backgroundLight }}
                  >
                    <Shield className="h-6 w-6" style={{ color: theme.colors.text.muted }} />
                  </div>
                  <CardTitle className="text-xl" style={{ color: theme.colors.text.primary }}>Оригинальные запчасти</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                  Прямые поставки со складов в ОАЭ обеспечивают наличие оригинальных запчастей 
                  Mercedes-Benz по выгодным ценам.
                </CardDescription>
              </CardContent>
            </Card>

            <Card 
              className="border-0 rounded-2xl group"
              style={{ 
                backgroundColor: theme.colors.surface,
                boxShadow: theme.colors.shadows.card
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: theme.colors.backgroundLight }}
                  >
                    <Wrench className="h-6 w-6" style={{ color: theme.colors.text.muted }} />
                  </div>
                  <CardTitle className="text-xl" style={{ color: theme.colors.text.primary }}>Заводские технологии</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                  Все работы выполняются строго по технологиям и регламентам 
                  завода-изготовителя Mercedes-Benz.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section 
        className="py-20"
        style={{ backgroundColor: theme.colors.backgroundLight }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Наши услуги</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: theme.colors.text.secondary }}>
              Полный спектр обслуживания и ремонта Mercedes-Benz W222
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Техническое обслуживание</h3>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>ТО-А, ТО-Б, диагностика, ремонт ходовой</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Обслуживание АКПП</h3>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>7G-Tronic, замена масла, ремонт гидроблока</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Ремонт двигателя</h3>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>Капремонт, замена цепи ГРМ, очистка</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Тюнинг</h3>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>AMG-пакет, перешив салона, диски</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </ServiceLayout>
  );
};

export default About;
