import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}
