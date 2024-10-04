import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import HomeCliente from './HomeCliente';
import TelaADM from './TelaADM';

const App = () => {
    const [currentScreen, setCurrentScreen] = useState('App');

    return (
        <SafeAreaView style={styles.container}>
            {currentScreen === 'App' ? (
                <View style={styles.container}>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            {/* Aqui pode ir o conteúdo do círculo, se necessário */}
                        </View>
                    </View>

                    <Image
                        source={ require('./imgs/LogoTecHouse.png') }
                        style={{width: 120, height: 120, top: -100}}
                    />

                    <Text style={{ fontSize: 30, color: '#000000', marginBottom: 30 }}>TecHome</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Digite seu e-mail:"
                    />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                    />

                    <View style={styles.opcoes}>
                        <Text>Realizar Cadastro</Text>
                        <Text>Esqueceu a senha?</Text>
                    </View>

                    <TouchableOpacity 
                        style={[styles.button, { backgroundColor: '#34353B', marginTop: 30 }]} 
                        onPress={() => setCurrentScreen('HomeCliente')} // Ação para acessar a tela do cliente
                    >
                        <Text style={styles.buttonCliente}>ACESSO CLIENTE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.button, { backgroundColor: '#C1C5D2' }]} 
                        onPress={() => { /* Ação para o botão ADM, se necessário */ }}
                    >
                        <Text style={styles.buttonADM}>ADMINISTRADOR</Text>
                    </TouchableOpacity>
                </View>
            ): (
                <HomeCliente onBack={() => setCurrentScreen('App')} />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleContainer: {
        position: 'absolute',
        top: -350,
    },
    circle: {
        width: 600,
        height: 600,
        borderRadius: 300,
        backgroundColor: '#004B5C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 300,
        paddingHorizontal: 8,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    opcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%'
    },
    button: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 30
    },
    buttonCliente: {
        color: '#fff',                
        fontSize: 16,                 
    },
    buttonADM: {
        color: '#7C5555',
        fontSize: 16, 
    }
});

export default App;
