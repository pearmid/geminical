import React from 'react';
import { FlatList } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';

function ListingsScreen(props) {
    const listings = [
        {
            id: 1,
            title: 'Red Jacket for sale',
            price: 100,
            image: require('../assets/kour7rcm.bmp')
        },
        {
            id: 2,
            title: 'Couch in great condition',
            price: 1000,
            image: require('../assets/kour7rcm.bmp')
        }
    ]
    return (
        <Screen>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) =>
                    <Card  
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    /> }
            />
        </Screen>
    );
}

export default ListingsScreen;