import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import {Icon} from 'react-native-elements';

import colors from '../config/colors';

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
        { icon && <Icon 
            name={icon}
            size={40}
            color={colors.medium}
            style={styles.icon}
         /> }
        <TextInput style={styles.textInput} {...otherProps}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        alignItems: "center",
        marginVertical: 10,
    },
    textInput: {
        fontSize: 18,
        fontFamily: "Roboto",
    },
    icon: {
        marginRight: 10,
    }
})
export default AppTextInput;