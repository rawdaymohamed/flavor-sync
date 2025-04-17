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
export type Product = {
  id: string;
  createdAt: Date;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  slug: string;
  isFeatured: boolean;
  options?: [{ title: string; additionalPrice: number }];
};

export type Order = {
  id: string;
  userEmail: string;
  createdAt: Date;
  price: number;
  status: string;
  products: CartItem[];
  intendId?: string;
};
export type CartItem = {
  id: string;
  title: string;
  imageURL: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};
