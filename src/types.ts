export interface Service {
  title: string;
  description: string;
  icon: string;
  subServices: {
    name: string;
    description: string;
  }[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Statistic {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}