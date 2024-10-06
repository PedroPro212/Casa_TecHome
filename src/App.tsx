import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Login from './modules/login';
import store from './store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeCliente from './modules/home/screens/HomeCliente';

const Stack = createNativeStackNavigator();

const App = () => {

    return (
        // <Provider store={store}>

        // </Provider>
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Home" component={HomeCliente} />
                </Stack.Navigator>
            </NavigationContainer>
            <Login/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;