import React, {useState} from 'react';
import { View, Text, TextInput} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessageScreen from './app/screens/MessageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import CalendarScreen from './app/screens/CalendarScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

import AppText from './app/components/AppText';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import AppButton from './app/components/AppButton';
import CalendarItem from './app/components/CalendarItem';

const categories = [
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label: "Cameras", value: 3},
]
export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return <CalendarScreen />;

  return (<Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        icon="apps" placeholder="Category" items={categories}/>
      <AppTextInput icon="email" placeholder="Email"/>
  </Screen>)




  return (
    <View>
      <AppText>I love react</AppText>
      <View style={{
        backgroundColor: "dodgerblue",
        width:100,
        height:100,
        borderWidth: 4,
        borderColor: "royalblue",
        borderRadius:10,
        borderTopWidth: 10,
        borderTopLeftRadius: 20,
        elevation: 20,
        padding: 20,
      }}>
        <View style={{
          backgroundColor: "gold",
          width:50,
          height:50,

        }}
      ></View>
      </View>
      <View style={{
        backgroundColor: "tomato",
        width:100,
        height:100,
        margin:20,
      }}></View>
    </View>
  )

}