import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import store from './store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './modules/login';
import HomeCliente from './modules/home';
import TelaADM from './modules/homeADM';
import AguaDisponivel from './modules/automacao';

type RootStackParamList = {
    Home: undefined,
    Login: undefined; 
    TelaADM: undefined;
    AguaDisponivel: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                    <Stack.Screen name="Home" component={HomeCliente} options={{headerShown: false}} />
                    <Stack.Screen name="TelaADM" component={TelaADM} options={{headerShown: false}} />
                    <Stack.Screen name="AguaDisponivel" component={AguaDisponivel} options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;