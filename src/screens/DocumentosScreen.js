import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; // Asegúrate de tener estos íconos instalados

const DocumentosScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos de Zoe</Text>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.vacunas]} onPress={() => navigation.navigate('Vacunas')}>
          <MaterialIcons name="local-hospital" size={24} color="black" />
          <Text style={styles.buttonText}>Vacunas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.documentos]} onPress={() => navigation.navigate('Documentos')}>
          <FontAwesome5 name="file-alt" size={24} color="black" />
          <Text style={styles.buttonText}>Documentos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.historial]} onPress={() => navigation.navigate('HistorialClinico')}>
          <MaterialIcons name="history" size={24} color="black" />
          <Text style={styles.buttonText}>Historial Clínico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.alergias]} onPress={() => navigation.navigate('Alergias')}>
          <FontAwesome5 name="allergies" size={24} color="black" />
          <Text style={styles.buttonText}>Alergias</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9', // Fondo verde claro
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  vacunas: {
    backgroundColor: '#FFEB3B', // Amarillo
  },
  documentos: {
    backgroundColor: '#F48FB1', // Rosa
  },
  historial: {
    backgroundColor: '#F48FB1', // Rosa
  },
  alergias: {
    backgroundColor: '#81C784', // Verde
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default DocumentosScreen;
