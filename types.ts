import React from 'react';

// Fix: Added React import to resolve 'Cannot find namespace React' error for React.ReactNode
export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Fix: Added React import to resolve 'Cannot find namespace React' error for React.ReactNode
export interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}