import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors'
import AppButton from '../components/AppButton';
import App from '../../App';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Text style={styles.tagLine}>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <AppButton title="Login" onPress={() => console.log("Tapped") }/>
            <AppButton title="Register" color="secondary"/>
        </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    tagLine: {
        fontSize: 25,
        fontWeight: "600",
        padding: 20,
    }

})
export default WelcomeScreen;