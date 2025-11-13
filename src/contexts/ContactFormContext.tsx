import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContactFormContextType {
  formComment: string;
  setFormComment: (comment: string) => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
};

interface ContactFormProviderProps {
  children: ReactNode;
}

export const ContactFormProvider: React.FC<ContactFormProviderProps> = ({ children }) => {
  const [formComment, setFormComment] = useState('');

  return (
    <ContactFormContext.Provider value={{ formComment, setFormComment }}>
      {children}
    </ContactFormContext.Provider>
  );
};