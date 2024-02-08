import { useRef, useState } from "react";

import {
  FlatList,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Link } from "expo-router";

import CategoryButton from "@/components/categoryButtton";
import Product from "@/components/product";
import useCartStore from "@/stores/cartStore";
import { CATEGORIES, MENU, ProductProps } from "@/utils/data/products";

import Header from "../components/header";

function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const sectionListRef = useRef<SectionList<ProductProps>>(null);
  const cartStore = useCartStore();
  const cartQuantity = cartStore.products.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  function handleCategoryChange(selectedCategory: string) {
    setCategory(selectedCategory);

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === selectedCategory,
    );

    if (sectionListRef.current)
      sectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex: 0,
        viewPosition: 0,
        animated: true,
      });
  }

  return (
    <View className="flex-1">
      <Header title="Faça o seu pedido" cartQuantity={cartQuantity} />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            onPress={() => handleCategoryChange(item)}
            isSelected={category === item}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />

      <SectionList
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} className="w-full" asChild>
            <TouchableOpacity>
              <Product data={item} />
            </TouchableOpacity>
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-white text-xl font-heading py-2">{title}</Text>
        )}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, gap: 20 }}
      />
    </View>
  );
}

export default Home;
