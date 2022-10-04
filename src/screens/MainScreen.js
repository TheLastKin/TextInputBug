import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';
import ForthTab from './ForthTab';

const TopTab = createMaterialTopTabNavigator();

const MainScreen = () => {
  return (
    <View style={{ flex: 1 }}>
        <TopTab.Navigator>
            <TopTab.Screen name='First Tab' component={FirstTab}/>
            <TopTab.Screen name='Second Tab' component={SecondTab}/>
            <TopTab.Screen name='Third Tab' component={ThirdTab}/>
            <TopTab.Screen name='Forth Tab' component={ForthTab}/>
        </TopTab.Navigator>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({})