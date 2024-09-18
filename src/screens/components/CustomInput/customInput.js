import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputUsuario = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 20, 
        backgroundColor: '#FFFFFF'
        
    }, 
    inputEmail: {
        left:48, 
        top: 512

    }, 
    inputPassword: {
        left:48, 
        top: 602
    }
});

export default InputUsuario;
