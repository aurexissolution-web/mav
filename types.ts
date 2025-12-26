import React from 'react';
import type { Timestamp } from 'firebase/firestore';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  title: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  shopeeUrl: string;
  tags?: string[];
  inStock?: boolean;
  featured?: boolean;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
}

export interface Brand {
  name: string;
}