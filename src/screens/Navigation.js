import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import CalendarioScreen from './CalendarioScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return {
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Screen} />
        </Tab.Navigator>
    }
}