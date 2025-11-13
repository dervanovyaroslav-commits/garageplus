
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { theme } from '@/config/theme';

export const ContactSection = () => {
  return (
    <section 
      id="contact" 
      className="py-16"
      style={{ background: theme.colors.gradients.heroAlt }}
    >
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl font-bold text-center mb-12"
          style={{ color: theme.colors.text.primary }}
        >
          Свяжитесь с нами
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Combined Contact Information */}
          <div>
            <Card 
              className="border-0 rounded-2xl backdrop-blur-sm"
              style={{ 
                backgroundColor: theme.colors.surfaceBlur,
                boxShadow: theme.colors.shadows.card
              }}
            >
              <CardHeader className="text-center">
                <CardTitle style={{ color: theme.colors.text.primary }}>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Phone */}
                <div 
                  className="flex items-center space-x-4 p-4 rounded-xl"
                  style={{ backgroundColor: theme.colors.backgroundLight }}
                >
                  <Phone className="h-8 w-8" style={{ color: theme.colors.text.secondary }} />
                  <div className="flex-1">
                    <h3 
                      className="font-semibold"
                      style={{ color: theme.colors.text.primary }}
                    >
                      Телефон
                    </h3>
                    <p style={{ color: theme.colors.text.secondary }}>+7 (495) 221-8480</p>
                    <Button 
                      size="sm"
                      className="mt-2 text-white"
                      style={{ backgroundColor: theme.colors.button.primary }}
                      onClick={() => window.open('tel:+74952218480')}
                    >
                      Позвонить
                    </Button>
                  </div>
                </div>

                {/* Address */}
                <div 
                  className="flex items-center space-x-4 p-4 rounded-xl"
                  style={{ backgroundColor: theme.colors.backgroundLight }}
                >
                  <MapPin className="h-8 w-8" style={{ color: theme.colors.text.secondary }} />
                  <div className="flex-1">
                    <h3 
                      className="font-semibold"
                      style={{ color: theme.colors.text.primary }}
                    >
                      Адрес
                    </h3>
                    <p style={{ color: theme.colors.text.secondary }}>г. Москва, ул. Поклонная, 11 стр. 1А</p>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="mt-2"
                      style={{ 
                        borderColor: theme.colors.button.primary,
                        color: theme.colors.button.primary
                      }}
                      onClick={() => window.open('https://yandex.ru/maps/?text=' + encodeURIComponent('г. Москва, ул. Поклонная, 11 стр. 1А'), '_blank')}
                    >
                      Проложить маршрут
                    </Button>
                  </div>
                </div>

                {/* Working Hours */}
                <div 
                  className="flex items-center space-x-4 p-4 rounded-xl"
                  style={{ backgroundColor: theme.colors.backgroundLight }}
                >
                  <Clock className="h-8 w-8" style={{ color: theme.colors.text.secondary }} />
                  <div className="flex-1">
                    <h3 
                      className="font-semibold"
                      style={{ color: theme.colors.text.primary }}
                    >
                      Режим работы
                    </h3>
                    <div style={{ color: theme.colors.text.secondary }} className="space-y-1">
                      <p>ПН-ПТ: 11:30-20:30</p>
                      <p>СБ: 12:00-17:00 (по предварительной записи)</p>
                      <p>ВС: выходной</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
