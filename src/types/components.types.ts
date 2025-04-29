export interface FAQItemProps {
  question: string;
  answer: string;
  id: number;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface FAQWidgetProps {
  faqs: FAQ[];
  categories: string[];
  defaultCategory?: string;
  theme: "light" | "dark";
  title?: string;
}

export interface CalendarProps {
  year: number;
  country: string;
  apiKey: string;
}

export type Holiday = {
  name: string;
  description: string;
  date: {
    iso: string;
    datetime: {
      year: number;
      month: number;
      day: number;
    };
  };
  type: string[];
};