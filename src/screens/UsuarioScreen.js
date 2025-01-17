import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UsuarioScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estoy en los datos del usuario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default UsuarioScreen;