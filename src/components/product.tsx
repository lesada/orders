import { forwardRef } from "react";

import { Image, ImageProps, Text, View, ViewProps } from "react-native";

import { formatCurrency } from "@/utils/functions/formatCurrency";

interface ProductDataProps {
  title: string;
  description: string;
  thumbnail: ImageProps;
  price: number;
}

interface ProductProps extends ViewProps {
  data: ProductDataProps;
}

const Product = forwardRef<View, ProductProps>(({ data, ...rest }, ref) => {
  return (
    <View
      className="w-full flex-row items-center text-ellipsis"
      ref={ref}
      {...rest}
    >
      <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />

      <View className="flex-1 ml-3">
        <View className="flex-row items-center">
          <Text className="text-slate-100 text-base font-subtitle flex-1">
            {data.title}
          </Text>

          <Text className="text-slate-400 text-xs font-subtitle mr-4">
            {formatCurrency(data.price)}
          </Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-slate-400 text-xs leading-5 mt-0.5 ">
            {data.description}
          </Text>
        </View>
      </View>
    </View>
  );
});

export default Product;
