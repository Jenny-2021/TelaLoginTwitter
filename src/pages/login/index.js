import React from 'react';
import {
    KeyboardAvoidingView,
    Image,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';

import styles from './styles';
import Twitter from '../../assets/logo.png';

export default function Login() {
    return (
        <KeyboardAvoidingView
            style={styles.container}  >
            <Image
                source={Twitter}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCorrect={false}
                onChargeText={() => { }}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                onChargeText={() => { }}
            />
            <TouchableOpacity style={styles.btnSubmit}>
                <Text style={styles.submitText}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:25}}>
                <Text style={styles.submitText}>Criar conta gratuita</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}
