import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SuccessRegistration from '../screens/SuccessRegistration';
import HomeScreen from '../screens/HomeScreen';
import BottomTabsNavigator from './BottomTabsNavigator';


const MainStack = createStackNavigator();

const StackNavigator = () => {
    return (
        <MainStack.Navigator initialRouteName='SplashScreen'>
            <MainStack.Screen name='SplashScreen' options={{ header: () => null }} component={SplashScreen} />
            <MainStack.Screen name='WelcomeScreen' options={{ header: () => null }} component={WelcomeScreen} />
            <MainStack.Screen name='LoginScreen' options={{ header: () => null }} component={LoginScreen} />
            <MainStack.Screen name='RegisterScreen' options={{ header: () => null }} component={RegisterScreen} />
            <MainStack.Screen name='SuccessRegistration' options={{ header: () => null }} component={SuccessRegistration} />
            <MainStack.Screen name='HomeScreen' options={{ header: () => null }} component={HomeScreen} />
            <MainStack.Screen name='BottomTabsNavigator' options={{ header: () => null }} component={BottomTabsNavigator} />
        </MainStack.Navigator>
    )
}
export default StackNavigator

const styles = StyleSheet.create({})