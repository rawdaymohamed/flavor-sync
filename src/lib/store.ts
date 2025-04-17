  import { create } from "zustand";
  import { CartState } from "@/types/types";

  const INITIAL_STATE = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
  };
  export const useCartStore = create<CartState>((set, get) => ({
    ...INITIAL_STATE,
    addToCart: (item) => {
      const state = get();
      const existingItem = state.products.find((p) => p.id === item.id);

      if (existingItem) {
        const updatedProducts = state.products.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
        set({
          products: updatedProducts,
          totalItems: state.totalItems + item.quantity,
          totalPrice: state.totalPrice + item.price * item.quantity,
        });
      } else {
        set({
          products: [...state.products, item],
          totalItems: state.totalItems + item.quantity,
          totalPrice: state.totalPrice + item.price * item.quantity,
        });
      }
    },
    removeFromCart: (item) => {
      const state = get();
      const productToRemove = state.products.find((p) => p.id === item.id);
      if (!productToRemove) return;

      set({
        products: state.products.filter((p) => p.id !== item.id),
        totalItems: state.totalItems - productToRemove.quantity,
        totalPrice:
          state.totalPrice - productToRemove.price * productToRemove.quantity,
      });
    },
  }));
