import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

import { Button } from "@/components/button";
import Header from "@/components/header";
import Input from "@/components/input";
import LinkButton from "@/components/linkButton";
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
      <View className="flex-1 p-5">
        {cartStore.products.length > 0 ? (
          <FlatList
            data={cartStore.products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <Product data={item} />
                <View className="flex-row items-center w-auto m-2 ml-auto">
                  <TouchableOpacity
                    className="w-8 h-4 items-center justify-center"
                    onPress={() => cartStore.removeOneItem(item.id)}
                  >
                    <Feather name="minus" size={16} color={colors.slate[300]} />
                  </TouchableOpacity>
                  <Text className="text-slate-400 text-xs font-subtitle mr-4 text-center mx-auto">
                    {item.quantity}
                  </Text>
                  <TouchableOpacity
                    className="w-8 h-4 items-center justify-center"
                    onPress={() => cartStore.add(item)}
                  >
                    <Feather name="plus" size={16} color={colors.slate[300]} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            className="border-b border-slate-700"
            contentContainerStyle={{ gap: 16 }}
          />
        ) : (
          <Text className="text-center text-slate-400  font-body my-8">
            Seu carrinho está vazio
          </Text>
        )}

        <View className="flex-row gap-2 items-center mt-5 mb-4 mx-5">
          <Text className="text-slate-100 font-subtitle text-xl">Total:</Text>
          <Text className="text-lime-400 font-heading text-2xl">{total}</Text>
        </View>
        <Input placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento" />

        <View className="p-5 gap-5">
          <Button>
            <Button.Text>Enviar Pedido</Button.Text>
            <Feather name="arrow-right-circle" size={20} />
          </Button>

          <LinkButton href="/">Voltar ao cardápio</LinkButton>
        </View>
      </View>
    </View>
  );
}

export default Cart;
