import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Login from './modules/login';

const App = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Login/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default App;