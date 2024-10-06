import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, View, Image, ScrollView } from 'react-native';

const AguaDisponivel = () => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={{width:100, height:100, backgroundColor: '#FFF', borderRadius: 50}}><Image style={styles.img} source={require('../../../imgs/caixa.png')}/></View>
                    <Text style={styles.titulo}>Água Disponível</Text>
                </View>

                <View style={{width: '90%'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.porcentagem_text}>Acima de</Text>
                        <Text style={styles.porcentagem_numero}>100%</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitulo}>SITUAÇÃO: NÍVEL DE ÁGUA ACIMA DO PERMITIDO.</Text>
                        <Text style={styles.descricao}>DESCRIÇÃO: O nível de água excedeu a capacidade da caixa d’água</Text>
                        <Text style={styles.solucao}>SOLUÇÃO: A água será despejada no telhado pela tubulação (ladrão) para evitar o acúmulo na laje. Esse é o procedimento padrão para essa instalação.</Text>
                        <Text style={{color: '#F30A0A', marginBottom: 15}}>CONTATAR UM TÉCNICO HIDRÁULICO PARA MANUTENÇÃO!</Text>
                        <Text style={styles.motivos}>MOTIVOS: Podem ser obstrução do retorno da boia, fissuras no corpo da boia que agora adquire peso por causa da água dentro ou o tampão da boia perdeu sua capacidade de bloquear a entrada de água. </Text>
                    </View>
                </View>

                <View style={{width: '90%'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.porcentagem_text}>Completo</Text>
                        <Text style={styles.porcentagem_numero}>100%</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitulo}>SITUAÇÃO: NÍVEL DE ÁGUA COMPLETO.</Text>
                        <Text style={styles.descricao}>DESCRIÇÃO:  A caixa d´água está cheia por completo.</Text>
                        <Text style={styles.solucao}>SOLUÇÃO: Não há nenhuma medida a ser tomada, este é o funcionamento padrão desta caixa d’água.</Text>
                        <Text style={styles.motivos}>MOTIVOS: Ao atingir sua capacidade máxima de 1000 litros a entrada de água é bloqueada e só voltará a entrar água novamente quando seu nível diminuir a 60%.</Text>
                    </View>
                </View>

                <View style={{width: '90%'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[styles.porcentagem_text, {color: '#FD9C09'}]}>Parcial</Text>
                        <Text style={[styles.porcentagem_numero, {color: '#FD9C09'}]}>75%</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitulo}>SITUAÇÃO: NÍVEL DE ÁGUA PARCIAL.</Text>
                        <Text style={styles.descricao}>DESCRIÇÃO: A caixa d´água está com um nível de água satisfatório.</Text>
                        <Text style={styles.solucao}>SOLUÇÃO: Não há nenhuma medida a ser tomada, este é o funcionamento padrão desta caixa d’água</Text>
                        <Text style={styles.motivos}>MOTIVOS: Neste momento ela segue com o fluxo de água aberto para encher até sua capacidade máxima com segurança (100%).</Text>
                    </View>
                </View>

                <View style={{width: '90%'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[styles.porcentagem_text, {color: '#918FF4'}]}>Médio</Text>
                        <Text style={[styles.porcentagem_numero, {color: '#918FF4'}]}>50%</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitulo}>SITUAÇÃO: NÍVEL MÉDIO DE ÁGUA.</Text>
                        <Text style={styles.descricao}>DESCRIÇÃO: A caixa d´água está com sua capacidade pela metade.</Text>
                        <Text style={styles.solucao}>SOLUÇÃO: Não há nenhuma medida a ser tomada, este é o funcionamento padrão desta caixa d’água</Text>
                        <Text style={styles.motivos}>MOTIVOS: Houve um consumo de água na residência acima do fluxo de entrada de água, mas não há nada com o que se preocupar pois neste momento ela segue com o fluxo aberto para encher até sua capacidade máxima com segurança (100%).</Text>
                    </View>
                </View>

                <View style={{width: '90%'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[styles.porcentagem_text, {color: '#C35A5A'}]}>RAZOÁVEL</Text>
                        <Text style={[styles.porcentagem_numero, {color: '#C35A5A'}]}>25%</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitulo}>SITUAÇÃO: NÍVEL RAZOÁVEL DE ÁGUA, COMECE A SE PREOCUPAR!</Text>
                        <Text style={styles.descricao}>DESCRIÇÃO: A capacidade da caixa d´água está abaixo da metade.</Text>
                        <Text style={styles.solucao}>SOLUÇÃO: Verifique se o registro de água está fechado, se há algum racionamento no fornecimento de água para sua região, se há alguma obstrução ou rompimento da tubulação que alimenta a caixa d’água.</Text>
                        <Text style={styles.motivos}>MOTIVOS: Conta de água não foi paga, racionamento, obstrução da tubulação ou rompimento, defeito na boia que não liberou o fluxo de água para encher a caixa, consumo excessivo de água acima da capacidade de alimentação ou algum vazamento extenso na tubulação.</Text>
                    </View>
                </View>

                <View style={{width: '90%', marginBottom: 100}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[styles.porcentagem_text, {color: '#FB0000'}]}>CRÍTICO</Text>
                        <Text style={[styles.porcentagem_numero, {color: '#FB0000'}]}>10%</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitulo}>SITUAÇÃO: CRÍTICA! TEREMOS PROBLEMAS NAS PRÓXIMAS HORAS.</Text>
                        <Text style={styles.descricao}>DESCRIÇÃO: A capacidade da caixa d´água está criticamente baixa.</Text>
                        <Text style={styles.solucao}>SOLUÇÃO: Acione a distribuidora de água da sua região para se informar quanto ao ocorrido e um técnico hidráulico para verificar toda a tubulação quanto à possíveis vazamentos e/ou rompimento.</Text>
                        <Text style={styles.motivos}>MOTIVOS: Conta de água não foi paga, racionamento, obstrução da tubulação ou rompimento, defeito na boia que não liberou o fluxo de água para encher a caixa, consumo excessivo de água acima da capacidade de alimentação ou algum vazamento extenso na tubulação.</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10445E',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginTop: 30,
        marginBottom: 20
    },
    img: {
        width:80,
        height:60,
        top: 20,
        left: 10
    },
    titulo: {
        fontSize: 20,
        color: 'black',
        backgroundColor: '#FFF',
        padding: 6,
        borderRadius: 7,
        textTransform: 'uppercase',
        marginBottom: 35,
        fontWeight: 'bold',
        top: 15
    },
    porcentagem_text: {
        fontSize: 20,
        color: '#92FD09',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 15
    },
    porcentagem_numero: {
        fontSize: 30,
        color: '#92FD09',
        fontWeight: 'bold',
        marginBottom: 20
    },
    subTitulo: {
        fontSize: 13,
        color: '#92FD09',
        marginBottom: 10
    },
    descricao: {
        color: '#FFF',
        marginBottom: 10
    },
    solucao: {
        color: '#FFF',
        marginBottom: 10
    },
    motivos: {
        color: '#FFF',
        marginBottom: 10
    }
})

export default AguaDisponivel;