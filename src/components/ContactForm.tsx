
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { theme } from '@/config/theme';
import { useContactForm } from '@/contexts/ContactFormContext';
import { sendTelegramMessage, formatContactFormMessage } from '@/utils/telegramApi';

export const ContactForm = () => {
  const { formComment, setFormComment } = useContactForm();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
    consent: false
  });
  
  // Update form comment when context changes
  useEffect(() => {
    if (formComment) {
      setFormData(prev => ({ ...prev, comment: formComment }));
    }
  }, [formComment]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }

    try {
      const message = formatContactFormMessage(
        formData.name, 
        formData.phone, 
        formData.comment
      );

      const success = await sendTelegramMessage(message);

      if (success) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          comment: '',
          consent: false
        });
        
        // Reset the context too
        setFormComment('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Ошибка отправки",
        description: "Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card 
      className="border-0 rounded-2xl backdrop-blur-sm"
      style={{ 
        backgroundColor: theme.colors.surfaceBlur,
        boxShadow: theme.colors.shadows.card
      }}
    >
      <CardHeader>
        <CardTitle 
          className="text-2xl"
          style={{ color: theme.colors.text.primary }}
        >
          Записаться на сервис
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="rounded-xl py-6 text-lg"
              style={{ 
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.backgroundLight
              }}
              required
            />
          </div>
          
          <div>
            <Input
              placeholder="Телефон"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="rounded-xl py-6 text-lg"
              style={{ 
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.backgroundLight
              }}
              required
            />
          </div>
          
          <div>
            <Textarea
              placeholder="Комментарий к заявке"
              value={formData.comment}
              onChange={(e) => setFormData({...formData, comment: e.target.value})}
              className="rounded-xl resize-none h-32"
              style={{ 
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.backgroundLight
              }}
            />
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({...formData, consent: !!checked})}
              className="mt-1 data-[state=checked]:bg-primary"
              style={{ 
                backgroundColor: formData.consent ? theme.colors.button.primary : theme.colors.surface
              }}
            />
            <label 
              htmlFor="consent" 
              className="text-sm leading-relaxed"
              style={{ color: theme.colors.text.secondary }}
            >
              Согласен на обработку персональных данных в соответствии с политикой конфиденциальности
            </label>
          </div>
          
          <Button 
            type="submit" 
            size="lg"
            className="w-full text-white py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:opacity-90 hover:-translate-y-1"
            style={{ 
              backgroundColor: theme.colors.button.primary,
              '&:hover': { backgroundColor: theme.colors.button.primaryHover }
            }}
          >
            Записаться
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
