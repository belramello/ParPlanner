import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';   
import { MaterialCommunityIcons } from '@expo/vector-icons';   

import CalendarioScreen from './src/screens/CalendarioScreen';
import DocumentosScreen from './src/screens/DocumentosScreen';
import UsuarioScreen from './src/screens/UsuarioScreen';
import InicioSesionScreen from './src/screens/IniciarSesionScreen';
import GastosScreen from './src/screens/GastosScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Calendario"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize = size || 24;

          switch (route.name) {
            case 'Calendario':
              iconName = 'calendar-month';
              break;
            case 'Documentos':
              iconName = 'baby-face-outline'; // Ícono relacionado con un niño
              break;
            case 'Usuario':
              iconName = 'account-outline';
              break;
            case 'Gastos':
              iconName = 'currency-usd';
              break;
            case 'InicioSesión':
              iconName = 'login';
              break;
            default:
              iconName = 'circle-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={iconSize} color={color} />;
        },
        tabBarActiveTintColor: '#556B2F', // Tono más oscuro de verde para íconos activos
        tabBarInactiveTintColor: '#A9BA9D', // Tono más claro de verde para íconos inactivos
        tabBarStyle: {
          backgroundColor: '#8b9b62', // Color de fondo verde
          borderTopWidth: 0,
          height: 60,
          paddingHorizontal: 10,
          borderTopLeftRadius: 15, // Redondear solo las esquinas superiores
          borderTopRightRadius: 15, // Redondear solo las esquinas superiores
          overflow: 'hidden', // Asegurar que el contenido no se salga de los bordes redondeados
        },
        tabBarShowLabel: false,
        tabBarItemStyle: {
          paddingVertical: 5,
          alignItems: 'center',
        },
      })}
    >
      <Tab.Screen name="InicioSesión" component={InicioSesionScreen} />
      <Tab.Screen name="Gastos" component={GastosScreen} />
      <Tab.Screen name="Calendario" component={CalendarioScreen} />
      <Tab.Screen name="Documentos" component={DocumentosScreen} />
      <Tab.Screen name="Usuario" component={UsuarioScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
