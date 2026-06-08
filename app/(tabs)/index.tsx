import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="font-sans-extrabold text-primary text-7xl">Home</Text>
      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary px-4 py-2 text-white font-sans-bold"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary px-4 py-2 text-white font-sans-bold"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary px-4 py-2 text-white font-sans-bold"
      >
        Go to Sign Up
      </Link>
    </SafeAreaView>
  );
}
