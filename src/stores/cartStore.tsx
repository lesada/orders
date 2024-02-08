import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { ProductProps } from "@/utils/data/products";

import * as cartInMemory from "./helpers/cartInMemory";

export interface ProductCartProps extends ProductProps {
  quantity: number;
}

interface StateProps {
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
  remove: (productId: string) => void;
  clear: () => void;
}

const useCartStore = create(
  persist<StateProps>(
    (set) => ({
      products: [],
      add: (product) =>
        set((state) => ({
          products: cartInMemory.add(state.products, product),
        })),
      remove: (productId) =>
        set((state) => ({
          products: cartInMemory.remove(state.products, productId),
        })),
      clear: () => set({ products: cartInMemory.clear() }),
    }),
    {
      name: "orders:cart-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useCartStore;
