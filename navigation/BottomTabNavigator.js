// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import ProfilePageScreen from "../screens/ProfilePageScreen";
import SymptomsFeedScreen from "../screens/SymptomsFeedScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HealthApp"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="HealthApp"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-home-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="FeedSymp"
        component={SymptomsFeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-medkit-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>

  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HealthApp"
        component={HomeScreen}
        options={{ headerTitle: "Health App", BottomTab: 'false' }}
      />
    </HomeStack.Navigator>
  );
}

const SymptomsFeedStack = createStackNavigator();

function SymptomsFeedNavigator() {
  return (
    <SymptomsFeedStack.Navigator>
      <SymptomsFeedStack.Screen
        name="SymptomsFeed"
        component={SymptomsFeedScreen}
        options={{ headerTitle: "Histórico de Sintomas", headerShown: false }}
      />
    </ SymptomsFeedStack.Navigator>
  );
}
