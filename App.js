import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from './src/screens/OnBoardingScreen';
import RegisterScreen from './src/screens/register';
import SignInScreen from './src/screens/signIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homeScreen';
import Tabs from './src/screens/Tabs';
import CartScreen from './src/screens/cartScreen/CartScreen';

import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import DetailScreen from './src/screens/detailsScreen';
import OrderScreen from './src/screens/orderScreen/OrderScreen';
import FavoriteScreen from './src/screens/favoriteScreen';

export default function App() {

  let [loadFonts] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!loadFonts) {
    return <AppLoading />;
  }

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='onBoarding'>
        <Stack.Screen name="onBorading" component={OnBoarding} options={{ headerShown: false }} />
        <Stack.Screen name="signin" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="cart" component={CartScreen} />
        <Stack.Screen name="order" component={OrderScreen} />
        <Stack.Screen name="favorite" component={FavoriteScreen} />
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="detail" component={DetailScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
