export type Feature = {
  [key: string]: string;
};

export type Attachment = {
  file_label: string;
  file_size: number;
  file_name: string;
  file_link: string;
};

export type Article = {
  id: number;
  title: string;
  description_short: string;
  description_long: string;
  supplier_name: string;
  supplier_link: string;
  stars: number;
  price: number;
  price_breaks: Record<string, number>;
  currency: string;
  transport_costs: number;
  vat_percent: number;
  images: string[];
  minimum_order_quantity: number;
  delivery_time: number;
  unit: string;
  features: Feature;
  attachments: Attachment[];
  keywords: string[];
};

export type Data = {
  article: Article;
  cart: {
    items: number;
    total_costs: number;
  };
  user: {
    favorite_articles: number[];
  };
};
