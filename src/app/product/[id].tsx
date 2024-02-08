import { Feather } from "@expo/vector-icons";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { Image, Text, View } from "react-native";

import { Button } from "@/components/button";
import LinkButton from "@/components/linkButton";
import useCartStore from "@/stores/cartStore";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/formatCurrency";

function Product() {
  const { id } = useLocalSearchParams();
  const cartStore = useCartStore();
  const navigation = useNavigation();
  const product = PRODUCTS.find((product) => product.id === id);

  function handleAddToCart() {
    if (!product) return;
    cartStore.add(product);
    navigation.goBack();
  }

  if (!product) return <Redirect href="/" />;

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="p-5 mt-4 flex-1">
        <Text className="text-white text-xl font-heading mb-4">
          {product.title}
        </Text>

        <Text className="text-lime-400 text-2xl font-heading my-2">
          {formatCurrency(product.price)}
        </Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>

        {product.ingredients.map((ingredient) => (
          <Text
            key={ingredient}
            className="text-slate-400 font-body text-base leading-6"
          >
            {"\u2022"} {ingredient}
          </Text>
        ))}
      </View>
      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Feather name="plus-circle" size={20} />
          <Button.Text>Adicionar ao pedido</Button.Text>
        </Button>

        <LinkButton href="/">Voltar ao cardápio</LinkButton>
      </View>
    </View>
  );
}

export default Product;
