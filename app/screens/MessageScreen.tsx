import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen'

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/me.png'),
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/me.png'),
    }
]
function MessageScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        // Delete the message from messages
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <Screen>
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) =>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log('Message selected', item)}
                    renderRightActions={() => <View style={{
                        backgroundColor: 'red',
                        width: 70,
                    }}>

                    </View>}
            /> }
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={
                () => {
                    setMessages([
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/me.png'),
    }
 
                    ])
                }
            }
        />
        </Screen>
    );
}

export default MessageScreen;