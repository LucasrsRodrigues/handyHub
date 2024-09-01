import 'react-native-gesture-handler';
import React from 'react';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import defaultStyle from '@global/styles/default.style';
import { SignIn } from '@screens/SignIn';
import { VerificationCode } from '@screens/VerificationCode';
import { SignUp } from '@screens/SignUp';
import { Home } from '@screens/Home';
import TabNavigation from '@routes/tab.routes';
import { Routes } from '@routes/index';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={defaultStyle}>
        <StatusBar style="auto" />

        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>


  );
}