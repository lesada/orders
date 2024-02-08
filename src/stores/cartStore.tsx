import { create } from "zustand";

import { ProductProps } from "@/utils/data/products";

import * as cartInMemory from "./helpers/cartInMemory";

export interface ProductCartProps extends ProductProps {
  quantity: number;
}

interface StateProps {
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
  remove: (productId: string) => void;
}

const useCartStore = create<StateProps>((set) => ({
  products: [],
  add: (product: ProductProps) =>
    set((state) => ({ products: cartInMemory.add(state.products, product) })),
  remove: (productId: string) =>
    set((state) => ({
      products: cartInMemory.remove(state.products, productId),
    })),
}));

export default useCartStore;
