"use client"
import { create } from "zustand";
import { Product } from "@/types";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const useCartStore = create<CartState>((set) => ({
  items: [{
    productId: 1,
    name: "Product 1",
    brand: 'HELLO KIITY',
    price: 10.99,
    quantity: 2,
  }]
}));

export default useCartStore;