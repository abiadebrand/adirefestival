import type { MouseEvent } from "react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  title: string;
}

export interface LookbookItem {
  id: string;
  className: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

export interface ProfessionalImageItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HeroSlideItem {
  id: string;
  src: string;
}

export interface PatternItem {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface CraftItem {
  term: string;
  description: string;
  Icon: LucideIcon;
}

export type TicketTier = "vip" | "silver" | "campus";

export interface OrderItem {
  step: string;
  tier: TicketTier;
  title: string;
  price: string;
  intro: string;
  benefits: readonly string[];
  closing: string;
  href: string;
  linkTitle: string;
}

export type PatternType = "agbole" | "waala" | "ododo" | "waya" | "orogbo" | "gangan";
export type PatternTone = "cream" | "indigo" | "wine";
export type PreviewHandler = (item: LookbookItem, event: MouseEvent<HTMLButtonElement>) => void;
