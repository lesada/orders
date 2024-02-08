import { forwardRef } from "react";

import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { formatCurrency } from "@/utils/functions/formatCurrency";

interface ProductDataProps {
  title: string;
  description: string;
  thumbnail: ImageProps;
  price: number;
  quantity?: number;
}

interface ProductProps extends TouchableOpacityProps {
  data: ProductDataProps;
}

const Product = forwardRef<TouchableOpacity, ProductProps>(
  ({ data, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        className="w-full flex-row items-center pb-4"
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

            {data.quantity && (
              <Text className="text-slate-400 text-xs font-subtitle mr-4">
                x {data.quantity}
              </Text>
            )}
          </View>
          <Text className="text-slate-400 text-xs leading-5 mt-0.5 ">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },
);

export default Product;
