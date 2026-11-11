import React from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';
import { colors, spacing } from '../theme';

// Datos de contacto de la empresa — edítalos con tus datos reales.
const CONTACTO = {
  email: 'info@miempresa.com',
  telefono: '+34600000000',
  direccion: 'Calle Ejemplo 123, Ciudad',
};

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Card title="Email" subtitle={CONTACTO.email}>
        <Button
          label="Enviar email"
          onPress={() => Linking.openURL(`mailto:${CONTACTO.email}`)}
        />
      </Card>

      <Card title="Teléfono" subtitle={CONTACTO.telefono}>
        <Button
          label="Llamar"
          variant="secondary"
          onPress={() => Linking.openURL(`tel:${CONTACTO.telefono}`)}
        />
      </Card>

      <Card title="Dirección" subtitle={CONTACTO.direccion}>
        <Text style={styles.note}>Puedes añadir un mapa con react-native-maps.</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  note: { marginTop: spacing.sm, color: colors.textLight, fontSize: 13 },
});
