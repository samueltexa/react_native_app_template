import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import ReusableTextInput from '../components/userInterfaceComponents/ReusableTextInput'
import ReusableText from '../components/userInterfaceComponents/ReusableText'
import ReusableButton from '../components/userInterfaceComponents/ReusableButton'
import { ERROR_COLOR } from '../constants/colors'
import ReusableImage from '../components/reusable/ReusableImage'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = ({navigation}:{navigation:any}) => {

    // State management
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const [email_error, setEmailError] = useState('')
    const [password_error, setPasswordError] = useState('')

    // Validations
    const  handleLogin = async () => {
        let isValid = true;
    
        // username validation
        if (username) {
            if (username.length <= 4) {
                setEmailError('Too short');
                isValid = false;
            } else if (username.length >= 31) {
                setEmailError('Maximum characters 30');
                isValid = false;
            } else {
                setEmailError('');
            }
        } else {
            setEmailError('Email or username is required');
            isValid = false;
        }
    
        // Password Validation
        if (password) {
            if (password.length <= 4) {
                setPasswordError('Too short');
                isValid = false;
            } else if (password.length >= 16) {
                setPasswordError('Maximum characters 15');
                isValid = false;
            } else {
                setPasswordError('');
            }
        } else {
            setPasswordError('Password is required');
            isValid = false;
        }
    
        if (isValid) {
            try{
                await AsyncStorage.setItem('@user', username);
                navigation.replace('BottomTabsNavigator')
            }catch(error){
                console.error('Failed to save the user data', error);
            }
            // const userDetails = {
            //     username,
            //     password
            // };
            // console.log(userDetails);
            // Alert.alert('Login Successful')
            // navigation.replace('BottomTabsNavigator')
        }
    }

    const localImage = ('../assets/logo/logo.png')
    
    return (
        <ScreenWrapper custom_styles={styles.login_wrapper}>
            <ReusableImage image_url={require(localImage)}/>
            <ReusableText custom_styles={{ fontSize: 30 }} text_content='Login here'></ReusableText>
            <View style={{ width: '100%' }}>
                <ReusableTextInput value={username} onChangeText={(text) => setUsername(text)} placeholder='Enter username or email'></ReusableTextInput>
                {email_error ? <Text style={styles.error_message}>{email_error}</Text> : null}
            </View>
            <View style={{ width: '100%' }}>
                <ReusableTextInput value={password} onChangeText={(text) => setPassword(text)} placeholder='Enter password' secureTextEntry></ReusableTextInput>
                {password_error ? <Text style={styles.error_message}>{password_error}</Text> : null}
            </View>
            <ReusableButton onPress={handleLogin} custom_style={{ color: 'gray', fontSize: 25 }} button_content='Login'></ReusableButton>
            <View style={{ flexDirection: 'row', gap: 5 }}>
                <ReusableText custom_styles={{ fontSize: 20 }} text_content={'Dont have an account?'}></ReusableText>
                <TouchableOpacity onPress={()=>navigation.navigate('RegisterScreen')}>
                    <Text style={{ color: 'blue', fontSize: 20 }}>Register</Text>
                </TouchableOpacity>
            </View>
        </ScreenWrapper>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    login_wrapper: {
        height: '100%',
        gap: 30
    },
    error_message: {
        color: ERROR_COLOR,
    }
})