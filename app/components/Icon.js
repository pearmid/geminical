import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

function MyIcon({
    name,
    size = 40,
    backgroundColor = "black",
    iconColor = "white"
}) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size/2,
            backgroundColor: backgroundColor,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Icon name={name} color={iconColor} size={size *0.5}></Icon>
        </View>
    );
}

export default MyIcon;