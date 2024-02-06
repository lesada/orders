import CategoryButton from "@/components/categoryButtton";
import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";
import { FlatList, View } from "react-native";
import Header from "../components/header";

function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleCategoryChange(newCategory: string) {
    setCategory(newCategory);
  }

  return (
    <View className="flex-1">
      <Header title="Faça o seu pedido" cartQuantity={2} />
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
    </View>
  );
}

export default Home;
