import { FlatList, Text, View } from "react-native";

import Header from "@/components/header";
import Product from "@/components/product";
import useCartStore from "@/stores/cartStore";
import { formatCurrency } from "@/utils/functions/formatCurrency";

function Cart() {
  const cartStore = useCartStore();

  const total = formatCurrency(
    cartStore.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    ),
  );

  return (
    <View className="flex-1 pt-8 ">
      <Header title="Seu carrinho" />
      {cartStore.products.length > 0 ? (
        <FlatList
          data={cartStore.products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Product data={item} />}
          className="flex-1 p-5"
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text className="text-center text-slate-400  font-body my-8">
          Seu carrinho está vazio
        </Text>
      )}

      <View className="flex-row gap-2 items-center mt-5 mb-4 mx-5">
        <Text className="text-slate-100 font-subtitle text-xl">Total:</Text>
        <Text className="text-lime-400 font-heading text-2xl">R$ {total}</Text>
      </View>
    </View>
  );
}

export default Cart;
