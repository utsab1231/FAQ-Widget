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
