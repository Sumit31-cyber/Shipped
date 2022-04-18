import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from './src/screens/OnBoardingScreen';
import RegisterScreen from './src/screens/register';
import SignInScreen from './src/screens/signIn';

export default function App() {
  return (
    // <SignInScreen />
    // <OnBoarding />
    <RegisterScreen />
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
