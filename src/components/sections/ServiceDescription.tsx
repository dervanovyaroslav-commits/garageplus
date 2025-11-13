
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { theme } from '@/config/theme';

export interface ServiceDescriptionProps {
  description: string;
}

export const ServiceDescription = ({ description }: ServiceDescriptionProps) => {
  return (
    <section className="py-16" style={{ backgroundColor: theme.colors.surface }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>Подробное описание</h2>
        <Card className="max-w-4xl mx-auto border-0 rounded-2xl" style={{ backgroundColor: theme.colors.surface, boxShadow: theme.colors.shadows.card }}>
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed" style={{ color: theme.colors.text.primary }}>
              {description}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
