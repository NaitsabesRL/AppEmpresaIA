import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ContactScreen from '../screens/ContactScreen';
import { colors } from '../theme';

const Stack = createNativeStackNavigator();

// Navegación entre pantallas. Para añadir una pantalla nueva:
// 1) Créeela en src/screens/  2) Añada un <Stack.Screen> aquí.
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '700' },
        }}
      >
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Servicios" component={ServicesScreen} />
        <Stack.Screen name="Contacto" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
