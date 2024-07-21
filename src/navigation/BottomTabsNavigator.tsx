import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName='Home'
      screenOptions={{
        header: () => null,
        tabBarActiveTintColor: 'green',
        tabBarInactiveBackgroundColor: 'white'
      }}
    >
      <BottomTabs.Screen name='Home' component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome color={color} size={size} name='home' />)
        }}
      />
      <BottomTabs.Screen name='Favourites' component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='heart' size={size} color={color} />
          )
        }}
      />
      <BottomTabs.Screen name='Notifications' component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='notification' color={color} size={size} />
          )
        }}
      />
      <BottomTabs.Screen name='Settings' component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign color={color} size={size} name='setting' />
          )
        }} />
    </BottomTabs.Navigator>
  )
}

export default BottomTabsNavigator

const styles = StyleSheet.create({})