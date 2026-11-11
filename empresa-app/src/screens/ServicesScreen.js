import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { colors, spacing } from '../theme';

// Lista de ejemplo. Sustituye los datos por los servicios reales de tu empresa
// o conéctalos a una API en src/utils/api.js.
const SERVICIOS = [
  { id: '1', nombre: 'Consultoría', descripcion: 'Asesoramiento profesional para tu negocio.' },
  { id: '2', nombre: 'Desarrollo de Software', descripcion: 'Apps web y móviles a medida.' },
  { id: '3', nombre: 'Soporte Técnico', descripcion: 'Atención 24/7 para tus equipos.' },
];

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={SERVICIOS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card title={item.nombre} subtitle={item.descripcion} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  list: { padding: spacing.lg },
});
