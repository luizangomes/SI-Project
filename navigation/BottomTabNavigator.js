/* Tutorial que eu segui pra fazer este código:
https://www.youtube.com/watch?v=gPaBicMaib4
Ele também ensina a colocar sombras, mas não usei isso.

Ver também o comentário de "Stanisław Jarocki"

Falta colocar cor de foco (linha 45 em diante).
*/

import * as React from 'react';
import { View, Text, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Telas
import HomeScreen from "../screens/HomeScreen";
import ProfilePageScreen from "../screens/ProfilePageScreen";
import PlaceholderScreen from "../screens/PlaceholderScreen";
import SymptomsFeedScreen from "../screens/SymptomsFeedScreen";
import MedicineFeedScreen from "../screens/MedicineFeedScreen";
import AddMedicineScreen from '../screens/AddMedicineScreen';
import StartScreen from '../screens/StartScreen';

const Tab = createBottomTabNavigator();


export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#0D1F1BBF',
          borderRadius: 15,
          height: 90,
        }
      }}

      initialRouteName='Home'
    >

      <Tab.Screen name="Perfil" component={ProfilePageScreen}
        options={{
          tabBarIcon: () => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
              <Text
                style={{ color: '#fff', fontSize: 15, }}>Perfil
              </Text>
              <Image
                source={require('../assets/icons/perfil.png')}
                resizeMode='contain'
                style={{
                  width: 45,
                  height: 45,
                }}
              />
            </View>
          ),

          headerShown: false,
        }}
      />

      <Tab.Screen name="Vacinas" component={PlaceholderScreen}
        options={{
          tabBarIcon: () => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
              <Text
                style={{ color: '#fff', fontSize: 15, }}>Vacinas
              </Text>
              <Image
                source={require('../assets/icons/vacina.png')}
                resizeMode='contain'
                style={{
                  width: 45,
                  height: 45,
                }}
              />
            </View>
          ),

          headerShown: false,
        }}
      />

      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
              <Image
                source={require('../assets/icons/home.png')}
                resizeMode='contain'
                style={{
                  width: 55,
                  height: 55,
                }}
              />
            </View>
          ),

          headerShown: false,
        }}
      />

      <Tab.Screen name="Remédios" component={MedicineFeedScreen}
        options={{
          tabBarIcon: () => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
              <Text
                style={{ color: '#fff', fontSize: 15, }}>Remédios
              </Text>
              <Image
                source={require('../assets/icons/remedios.png')}
                resizeMode='contain'
                style={{
                  width: 45,
                  height: 45,
                }}
              />
            </View>
          ),

          headerShown: false,

        }}
      />

      <Tab.Screen name="Sintomas" component={SymptomsFeedScreen}
        options={{
          tabBarIcon: () => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
              <Text
                style={{ color: '#fff', fontSize: 15, }}>Sintomas
              </Text>
              <Image
                source={require('../assets/icons/sintomas.png')}
                resizeMode='contain'
                style={{
                  width: 45,
                  height: 45,
                }}
              />
            </View>
          ),

          headerShown: false,

        }}
      />

    </Tab.Navigator>
  );
}