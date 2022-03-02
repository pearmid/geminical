import { List } from 'native-base';
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Icon from '../components/Icon';
import Screen from '../components/Screen';
import colors from '../config/colors';

function AccountScreen(props) {
    const menuItems = [
        {
            title: "My Listings",
            icon: {
                name: "format-list-bulleted",
                backgroundColor: colors.primary,
            }
        },
        {
            title: "My Messages",
            icon: {
                name: "email",
                backgroundColor: colors.secondary,
            }
        }
    ]
    return (
        <Screen>
            <View style={styles.container}>
                <ListItem 
                    title="Jody Pearson"
                    subTitle="jody.pearson@gmail.com"
                    image={require('../assets/me.png')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems} 
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        ImageComponent={
                            <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                        }
                    />}
                />
            </View>
            <ListItem 
                title="Log Out"
                ImageComponent={
                    <Icon name="logout" backgroundColor="#ffe66d"
                />}
            />


        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    }    
})
export default AccountScreen;