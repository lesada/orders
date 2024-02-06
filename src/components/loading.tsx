import { ActivityIndicator, View } from "react-native";

function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <ActivityIndicator color="white" size="large" />
    </View>
  );
}

export default Loading;
