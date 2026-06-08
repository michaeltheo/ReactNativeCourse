import { tabs } from "@/constants/data";
import clsx from "clsx";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";

const TabIcon = ({ focused, icon }: TabIconProps) => {
  return (
    <View className="tabs-icon">
      <View className={clsx("tabs-pill", focused && "tabs-active")}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{ width: 24, height: 24 }}
          className="tabs-glyph"
        />
      </View>
    </View>
  );
};

const TabLayout = () => (
  <Tabs
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: "absolute",
        bottom: 16,
        left: 16,
        right: 16,
        borderRadius: 16,
        height: 64,
      },
    }}
  >
    {tabs.map((tab) => (
      <Tabs.Screen
        key={tab.name}
        name={tab.name}
        options={{
          title: tab.title,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={tab.icon} />
          ),
        }}
      />
    ))}
  </Tabs>
);
export default TabLayout;
