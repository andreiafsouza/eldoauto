type Slide = {
  id: number;
  url: string;
  alt: string;
};

type ServiceCard = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  image?: string;
};

type InsuranceCard = {
  name: string;
  link: string;
};

type LinkScroll = {
  to: string;
  text: string;
  variant?: "btn" | "link";
};

type Button = {
  to?: string;
};
