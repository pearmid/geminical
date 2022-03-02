import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {Icon} from 'react-native-elements';


import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <Icon 
                    color={colors.primary}
                    name='close'
                    size={30}
                />
            </View>
            <View style={styles.deleteIcon}>
                <Icon
                    color={colors.secondary}
                    name='delete'
                    size={30}
                />
            </View>
        <Image 
         style={styles.image}
         resizeMode='contain'
         source={require("../assets/chair.jpg")}/>
         </View>
    );
}


const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 20,
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        position: 'absolute',
        top: 20,
        right: 30,
    },
    image: {
     width: '100%',
     height: '100%',
    }
})
export default ViewImageScreen;