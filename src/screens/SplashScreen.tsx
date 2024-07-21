import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import ReusableImage from '../components/reusable/ReusableImage'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({navigation}:{navigation:any}) => {

    const localImage = ('../assets/logo/logo.png')

    useEffect(()=>{
      const checkuserStatus = async () =>{
        try{
          const user = await AsyncStorage.getItem('@user')
          if(user){
            navigation.replace('BottomTabsNavigator');
          }else{
            navigation.replace('WelcomeScreen')
          }

        }catch(error){
          console.error('Failed to load user data', error);
          navigation.replace('WelcomeScreen');
        }
      };
        setTimeout(checkuserStatus, 1000);
        },[]);

  return (
    <ScreenWrapper custom_styles={{height:'100%'}}>
        <ReusableImage image_url={require(localImage)}/>
    </ScreenWrapper>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})