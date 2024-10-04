import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import AguaDisponivel from './AguaDisponivel';
import React, { useState } from 'react';

const HomeCliente = ({onBack}) => {

    const [currentScreen, setCurrentScreen] = useState('App');

    return (
        <SafeAreaView style={styles.container}>
            {currentScreen === 'App' ? (
                <View>
                    <Text style={styles.titulo}>Acessar automações</Text>

                    <View style={styles.blocos}>
                        <View style={styles.opcoes}>
                            <Image style={{width: 70, height: 70, marginTop: 7}} source={require('./imgs/relogio.png')} />
                            <Text style={[styles.opcoes_text, {bottom: -35}]}>Consumo de Água</Text>
                        </View>
                        <TouchableOpacity style={styles.opcoes} onPress={() => setCurrentScreen('AguaDisponivel')}>
                            <Image style={{width: 80, height: 60, marginTop: 13}} source={require('./imgs/caixa.png')} />
                            <Text style={[styles.opcoes_text, {bottom: -38}]}>Água Disponível</Text>
                        </TouchableOpacity>
                        <View style={styles.opcoes}>
                            <Image style={{width: 80, height: 60, marginTop: 23}} source={require('./imgs/piscina.png')} />
                            <Text style={[styles.opcoes_text, {bottom: -39}]}>Alcalinidade da Piscina</Text>
                        </View>
                    </View>
                    <View style={styles.blocos}>
                        <View style={styles.opcoes}>
                            <Image style={{width: 90, height: 90, marginTop: 30}} source={require('./imgs/irrigacao.png')} />
                            <Text style={[styles.opcoes_text, {bottom: -15}]}>Sistema de Irrigação</Text>
                        </View>
                        <View style={styles.opcoes}>
                            <Image style={{width: 100, height: 100, marginTop: 45}} source={require('./imgs/lampadas.png')} />
                            <Text style={[styles.opcoes_text, {bottom: -3}]}>Sistema de Iluminação</Text>
                        </View>
                        <View style={styles.opcoes}>
                            <Image style={{width: 70, height: 70, marginTop: 22}} source={require('./imgs/caixa2.png')} />
                            <Text style={[styles.opcoes_text, {bottom: -26}]}>Captação de Água</Text>
                        </View>
                    </View>
                    <View style={styles.blocos}>
                        <View style={styles.opcoes}>
                            <Image style={{width: 80, height: 80, marginTop: 13}} source={require('./imgs/placasolar.png')} />
                            <Text style={[styles.opcoes_text, {bottom: -30}]}>Geração de Energia Solar</Text>
                        </View>
                        <View style={styles.opcoes}>
                            <Image style={{width: 80, height: 80, marginTop: 29}} source={require('./imgs/consumo.png')} />
                            <Text style={[styles.opcoes_text, {bottom: -25}]}>Consumo de Energia Total</Text>
                        </View>
                        <View style={styles.opcoes}>
                            <Image style={{width: 80, height: 60, marginTop: 23}} source={require('./imgs/piscina.png')} />
                            <Text style={[styles.opcoes_text, {bottom: -40}]}>Volume de Água da Piscina</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', gap: 5, justifyContent: 'center'}}>
                        <View style={styles.menu_carrossel}></View>
                        <View style={styles.menu_carrossel}></View>
                        <View style={styles.menu_carrossel}></View>
                    </View>

                    <Text style={styles.subtitulo}>Automações sugeridas</Text>

                    <View style={styles.blocos}>
                        <View style={styles.opcoes}>
                            <Image style={{width: 80, height: 60, marginTop: 23}} source={require('./imgs/consumoele.png')} />
                            <Text style={[styles.opcoes_text, {bottom: -40}]}>Consumo Elétrico Individual</Text>
                        </View>
                        <View style={styles.opcoes}>
                            <Image style={{width: 100, height: 80, marginTop: 23}} source={require('./imgs/camera.png')} />
                            <Text style={[styles.opcoes_text, {bottom: -30}]}>Consumo Elétrico Individual</Text>
                        </View>
                        <View style={[styles.opcoes, {flexDirection: 'row', gap: 5}]}>
                            <View style={styles.menu}></View>
                            <View style={styles.menu}></View>
                            <View style={styles.menu}></View>
                        </View>
                    </View>
                </View>
            ): (
                <AguaDisponivel onBack={() => setCurrentScreen('App')} />
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#10445E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 23,
        color: 'black',
        backgroundColor: '#FFF',
        padding: 7,
        borderRadius: 7,
        textTransform: 'uppercase',
        marginBottom: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitulo: {
        fontSize: 18,
        color: 'black',
        backgroundColor: '#FFF',
        padding: 5,
        borderRadius: 7,
        textTransform: 'uppercase',
        marginBottom: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    blocos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginBottom: 70
    },
    opcoes: {
        width: 100,                // Largura do círculo
        height: 100,               // Altura do círculo
        borderRadius: 50,          // Cria um círculo
        backgroundColor: '#FFF', // Cor do círculo
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    opcoes_image: {
        width: 70,
        height: 70
    },
    opcoes_text: {
        fontSize: 12,
        color: '#FFF', 
        textAlign: 'center'
    },
    menu: {
        width: 15,                // Largura do círculo
        height: 15,               // Altura do círculo
        borderRadius: 7.5,          // Cria um círculo
        backgroundColor: '#A29696', // Cor do círculo
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    menu_carrossel: {
        width: 10,                // Largura do círculo
        height: 10,               // Altura do círculo
        borderRadius: 5,          // Cria um círculo
        backgroundColor: '#FFF', // Cor do círculo
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 13
    }
})

export default HomeCliente;