import { create } from "zustand";

import { ProductProps } from "@/utils/data/products";

import * as cartInMemory from "./helpers/cartInMemory";

export interface ProductCartProps extends ProductProps {
  quantity: number;
}

interface StateProps {
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
  removeOneItem: (productId: string) => void;
}

const useCartStore = create<StateProps>((set) => ({
  products: [],
  add: (product: ProductProps) =>
    set((state) => ({ products: cartInMemory.add(state.products, product) })),
  removeOneItem: (productId: string) =>
    set((state) => ({
      products: cartInMemory.removeOneItem(state.products, productId),
    })),
}));

export default useCartStore;
