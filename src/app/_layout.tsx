import { Slot, SplashScreen } from "expo-router";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

function Layout() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider
      className="flex-1 bg-slate-900"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <Slot />
    </SafeAreaProvider>
  );
}

export default Layout;
