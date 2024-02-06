import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

interface ProductDataProps {
  title: string;
  description: string;
  thumbnail: ImageProps;
}

interface ProductProps extends TouchableOpacityProps {
  data: ProductDataProps;
}

function Product({ data, ...rest }: ProductProps) {
  return (
    <TouchableOpacity className="w-full flex-row items-center pb-4" {...rest}>
      <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />
      <View className="flex-1 ml-3">
        <Text className="text-slate-100 text-lg font-subtitle flex-1">
          {data.title}
        </Text>
        <Text className="text-slate-400 text-xs leading-5 mt-0.5 ">
          R$ {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Product;
