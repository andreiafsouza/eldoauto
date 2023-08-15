type ServiceCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ScollLink = {
  to: string;
  text: string;
  variant?: "btn" | "link";
};

type Button = {
  to?: string;
};
