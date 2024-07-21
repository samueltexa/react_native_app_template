import React, { useState } from 'react';
import { ActivityIndicator, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReusableButton from '../components/userInterfaceComponents/ReusableButton';

const handleLogout = async (setLoading: React.Dispatch<React.SetStateAction<boolean>>, navigation: any) => {
  setLoading(true); // Start loading
  try {
    await AsyncStorage.removeItem('@user'); // Remove username or email
    setTimeout(() => {
      setLoading(false); // Stop loading after 2 minutes
      navigation.replace('WelcomeScreen'); // Redirect to welcome screen
    }, 1000); // 2 minutes delay
  } catch (error) {
    console.error('Failed to clear user data', error);
    setLoading(false); // Stop loading on error
  }
}

const SettingsScreen = ({navigation}:{navigation:any}) => {
  const [loading, setLoading] = useState(false); // State to manage loading

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" /> // Show loader
      ) : (
        <ReusableButton 
          onPress={() => handleLogout(setLoading, navigation)} 
          custom_style={styles.button} 
          button_content='Logout' 
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // marginTop:100,
    backgroundColor: 'red',
  }
});

export default SettingsScreen;
