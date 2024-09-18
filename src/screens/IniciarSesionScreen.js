import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputUsuario from './components/CustomInput/customInput';

const IniciarSesionScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Lógica de inicio de sesión
        console.log('Iniciar sesión con:', email, password);
    };

    return (
        <View style={styles.container}>
            <InputUsuario
                placeholder="Email o nombre de usuario"
                value={email}
                onChangeText={setEmail}
            />
            <InputUsuario
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#8b9b62'
    },
    forgotPassword: {
        marginTop: 16,
        color: 'blue',
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#c6733e',
        borderRadius: 20,
        
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default IniciarSesionScreen;
