import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

function Screen({children}) {
    return (
        <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 30,
        flex: 1,
    }
})

export default Screen;

