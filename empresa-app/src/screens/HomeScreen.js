import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Button from '../components/Button';
import Card from '../components/Card';
import { colors, spacing } from '../theme';

// Pantalla de inicio: reemplaza el contenido con la información de tu empresa.
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Bienvenido a tu App Empresarial</Text>
        <Text style={styles.subtitle}>
          Edita src/screens/HomeScreen.js para personalizar esta pantalla.
        </Text>

        <Card title="Nuestros Servicios" subtitle="Toca para ver la lista">
          <Button label="Ver servicios" onPress={() => navigation.navigate('Servicios')} />
        </Card>

        <Card title="Contacto" subtitle="Escríbenos o llámanos">
          <Button
            label="Contactar"
            variant="outline"
            onPress={() => navigation.navigate('Contacto')}
          />
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { padding: spacing.lg },
  title: { fontSize: 26, fontWeight: '800', color: colors.text },
  subtitle: {
    fontSize: 15,
    color: colors.textLight,
    marginVertical: spacing.md,
    marginBottom: spacing.lg,
  },
});
