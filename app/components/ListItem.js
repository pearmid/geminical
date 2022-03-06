import React from 'react';
import {View, Image, StyleSheet, TouchableHighlight} from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';
import { Swipeable } from 'react-native-gesture-handler';
import MyIcon from './Icon';

function ListItem({title, subTitle, image, ImageComponent, onPress, renderRightActions, chevrons=false}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>

        <TouchableHighlight
            underlayColor={colors.medium}
            onPress={onPress}>
        <View style={styles.container}>
            {ImageComponent}
            { image && <Image style={styles.image} source={image}/> }
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                { subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText> }
            </View>
                {
                chevrons ? (
                    <MyIcon color={colors.medium} style={styles.icon}name="chevron-right" type="font-awesome"/>
                ) : ( "" )
                }
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
        borderRadius: 25,
        width: '100%',
        alignItems: "center",
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1,
    },
    image: {
        width: 70,
        height: 70,
    },
    icon: {
        marginRight: 10,
    },
    title: {
        fontWeight: "500",
        flex: 1,
    },
    subTitle: {
        color: colors.medium,
    }
    
})

export default ListItem;