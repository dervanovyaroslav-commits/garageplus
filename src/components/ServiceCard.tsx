
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { theme } from '@/config/theme';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export const ServiceCard = ({ title, description, price, image }: ServiceCardProps) => {
  return (
    <Card 
      className="border-0 transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden backdrop-blur-sm group"
      style={{ 
        backgroundColor: theme.colors.surfaceBlur, 
        boxShadow: theme.colors.shadows.card,
        '&:hover': { boxShadow: theme.colors.shadows.cardHover }
      }}>
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <CardTitle 
            className="text-xl transition-colors duration-300"
            style={{ color: theme.colors.text.primary }}
          >
            {title}
          </CardTitle>
          <div 
            className="text-lg font-bold"
            style={{ color: theme.colors.text.secondary }}
          >
            {price}
          </div>
        </div>
        <CardDescription 
          className="leading-relaxed transition-colors duration-300"
          style={{ color: theme.colors.text.muted }}
        >
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <Button 
          className="w-full text-white rounded-xl py-3 transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: theme.colors.button.primary }}
        >
          Подробнее
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

