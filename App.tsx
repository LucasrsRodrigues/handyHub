import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { Text } from '@components/base/Typography/Text';
import { ThemeProvider } from 'styled-components/native';
import defaultStyle from '@global/styles/default.style';
import { SplashScreen } from '@screens/SplashScreen';

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
    <ThemeProvider theme={defaultStyle}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <SplashScreen />

      </View>
    </ThemeProvider>

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
