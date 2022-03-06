import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import {Icon} from 'react-native-elements';

import colors from '../config/colors';

function AppTextInput({icon, width="100%", ...otherProps}) {
  return (
    <View style={[styles.container, { width }]}>
        { icon && <Icon 
            name={icon}
            size={40}
            color={colors.medium}
            style={styles.icon}
         /> }
        <TextInput 
            placeholderTextColor={colors.medium} style={styles.textInput} {...otherProps}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 50,
        flexDirection: "row",
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