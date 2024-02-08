import { ProductProps } from "@/utils/data/products";

import { ProductCartProps } from "../cartStore";

export function add(products: ProductCartProps[], newProduct: ProductProps) {
  const existingProduct = products.find(
    (product) => product.id === newProduct.id,
  );

  if (existingProduct)
    return products.map((product) =>
      product.id === existingProduct.id
        ? { ...product, quantity: product.quantity + 1 }
        : product,
    );

  return [...products, { ...newProduct, quantity: 1 }];
}

export function remove(products: ProductCartProps[], productId: string) {
  const existingProduct = products.find((product) => product.id === productId);

  if (existingProduct?.quantity === 1)
    return products.filter((product) => product.id !== productId);

  return products.map((product) =>
    product.id === productId
      ? { ...product, quantity: product.quantity - 1 }
      : product,
  );
}

export function clear() {
  return [];
}
