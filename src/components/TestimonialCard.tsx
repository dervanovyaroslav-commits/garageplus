
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';
import { theme } from '@/config/theme';

interface TestimonialCardProps {
  name: string;
  car: string;
  text: string;
  rating: number;
}

export const TestimonialCard = ({ name, car, text, rating }: TestimonialCardProps) => {
  return (
    <Card 
      className="border-0 transition-all duration-300 hover:-translate-y-1 rounded-2xl"
      style={{ 
        backgroundColor: theme.colors.surface, 
        boxShadow: theme.colors.shadows.card,
        '&:hover': { boxShadow: theme.colors.shadows.cardHover }
      }}
    >
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>
        
        <p 
          className="mb-6 leading-relaxed"
          style={{ color: theme.colors.text.secondary }}
        >
          "{text}"
        </p>
        
        <div>
          <div 
            className="font-semibold"
            style={{ color: theme.colors.text.primary }}
          >
            {name}
          </div>
          <div 
            className="text-sm"
            style={{ color: theme.colors.text.muted }}
          >
            {car}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
