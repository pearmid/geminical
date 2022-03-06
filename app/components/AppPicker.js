import { View, Text, TextInput, StyleSheet, Modal, Button, TouchableWithoutFeedback, FlatList } from 'react-native';
import React, { useState } from 'react';
import {Icon} from 'react-native-elements';

import colors from '../config/colors';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({
    icon,
    items,
    numberOfColumns = 1,
    placeholder,
    PickerItemComponent = PickerItem,
    selectedItem,
    onSelectItem,
    width="100%"
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
      <>
    <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
    <View style={[styles.container, {width}]}>
        { icon && <Icon 
            name={icon}
            size={40}
            color={colors.medium}
            style={styles.icon}
         /> }
         { selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText> 
          )}
         <Icon 
            name="chevron-down"
            type="font-awesome"
            size={30}
            color={colors.medium}
          />
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType="slide">
        <Screen>
            <Button title="Close" onPress={() => setModalVisible(false)}/>
            <FlatList 
                data={items}
                keyExtractor={item => item.value.toString()}
                numColumns={numberOfColumns}
                renderItem={({item}) => 
                    <PickerItemComponent
                        item={item}
                        label={item.label}
                        onPress={() => {
                            setModalVisible(false);
                            onSelectItem(item)
                        }}
                    />
            }
            
            />
        </Screen>
    </Modal>
      </>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
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
    },
    placeholder: {
        color: colors.medium,
        flex: 1,
    },
    text: {
        flex: 1,
    }
})
export default AppPicker;