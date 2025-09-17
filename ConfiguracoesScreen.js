// ConfiguracoesScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ConfiguracoesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>
      <Text>Esta é a sua tela de configurações.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});