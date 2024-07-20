import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from './src/components/reusable/ScreenWrapper'
import { TEXT_COLOR } from './src/constants/colors'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigation/StackNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
    // <View>
    //   <StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle="light-content" />
    //   <RegisterScreen></RegisterScreen>
    //   {/* <LoginScreen></LoginScreen> */}
    // </View>

  )
}

export default App

const styles = StyleSheet.create({
  statusBar:{
    backgroundColor:'purple'
  }
})