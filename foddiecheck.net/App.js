import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FirstScreen from "./screens/FirstScreen"
import CharRecScreen from "./screens/CharRecScreen"

const styles = StyleSheet.create(
{
   container:
   {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },

   text:
   {
      fontSize: 25,
      color: 'black'
   },

   buttonHolder:
   {
      paddingTop: 25
   }
});


class SecondScreen extends Component
{
   static navigationOptions =
   {
      title: 'Second Screen',
   };

   render()
   {
      return(
         <View style = { styles.container }>
            <Text style = { styles.text }>
               Second Screen.
            </Text>
         </View>
      );
   }
}


const AppNavigator = createStackNavigator({
   First: FirstScreen,
   Second: SecondScreen,
   CharRec: CharRecScreen
});

export default createAppContainer(AppNavigator);