/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageRoute = 'overview' | 'nutrition-and-meals' | 'sports-venues' | 'smart-dispensers' | 'for-partners';

export interface MealItem {
  id: string;
  name: string;
  category: 'all' | 'hiit' | 'endurance' | 'plant' | 'senior';
  categoryLabel: string;
  compound: string;
  price: number;
  priceNote?: string;
  protein: number;
  calories: number;
  carbs: number;
  lipids?: number;
  collagen?: number;
  gi?: number;
  rating?: number;
  imageUrl: string;
  altText: string;
  description: string;
  locationStock: string;
  inStock: boolean;
  kioskId: string;
  hpbCertified?: boolean;
  nutriGrade?: 'A' | 'B';
}

export interface VenueItem {
  id: string;
  name: string;
  district: string;
  address: string;
  mrt: string;
  sports: string[];
  slotsLeft: number;
  timeSlots: { time: string; available: boolean }[];
  dispenser: {
    id: string;
    name: string;
    status: '100% Stocked' | 'Restocking Soon' | 'Online';
    items: {
      name: string;
      type: 'chilled' | 'warm';
      specs: string;
      price: number;
    }[];
  };
  coordinates: { x: number; y: number };
}

export interface ActivityRecoveryPlan {
  id: string;
  name: string;
  emoji: string;
  tag: string;
  burn: string;
  title: string;
  desc: string;
  protein: string;
  carbs: string;
  sodium: string;
  temp: string;
  kiosk: string;
  dist: string;
  mapImage: string;
}

export interface McpHealthReport {
  status: 'healthy' | 'degraded' | 'error';
  service: string;
  timestamp: string;
  mcp: {
    endpoint: string;
    reachable: boolean;
    httpStatus: number | null;
    latencyMs: number;
    error: string | null;
    protocol: string;
    connectedServices: string[];
  };
  system: {
    uptimeSeconds: number;
    environment: string;
    version: string;
  };
}
