import React from 'react';
import { theme } from '@/config/theme';

export const LoadingScreen = () => {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="relative w-64 h-64">
        {/* Larger animated circle */}
        <div 
          className="w-full h-full border-4 rounded-full animate-spin"
          style={{ 
            borderColor: theme.colors.backgroundLight,
            borderTopColor: theme.colors.button.primary
          }}
        ></div>
        
        {/* Logo with proper proportions */}
        <div className="absolute inset-0 flex items-center justify-center p-0">
          <div className="w-4/5 h-auto aspect-square flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="GARAGE PLUS" 
              className="w-full h-auto max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
