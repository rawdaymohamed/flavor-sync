export type Menu = {
  id: string;
  createdAt: Date;
  title: string;
  description: string;
  color: string;
  imageURL: string;
  slug: string;
}[];
export type Products = {
  id: string;
  createdAt: Date;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  slug: string;
  isFeatured: boolean;
  options?: [{ title: string; additionalPrice: number }];
}[];
