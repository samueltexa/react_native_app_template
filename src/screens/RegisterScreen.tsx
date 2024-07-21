import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import ReusableImage from '../components/reusable/ReusableImage'
import ReusableText from '../components/userInterfaceComponents/ReusableText'
import ReusableTextInput from '../components/userInterfaceComponents/ReusableTextInput'
import ReusableButton from '../components/userInterfaceComponents/ReusableButton'
import { ERROR_COLOR } from '../constants/colors'

const RegisterScreen = ({navigation}:{navigation:any}) => {

    // State change
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPasswrod] = useState('');

    // Input error message
    const [email_error, setEmailerror] = useState('');
    const [password_error, setPasswordError] = useState('');
    const [confirm_passwordError, setConfirmPasswordError] = useState('');

    // Handle registration
    const handle_Register = () => {
        let isValid = true;
        const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email) {
            if (email_pattern.test(email)) {
                setEmailerror('');
            } else {
                setEmailerror('Invalid email')
                isValid = false
            }
        } else {
            setEmailerror('Email is required')
            isValid = false
        }
        if(password){
            if(password.length<=7){
                setPasswordError('Atleast 8 chracters are required')
                isValid = false;
            }else{
                setPasswordError('');
            }if(!(password === confirm_password)){
                setConfirmPasswordError('Passwords do not match');
                isValid = false
            }else{
                setConfirmPasswordError('');
            }
        }else{
            setPasswordError('Password is required')
        }
        if(isValid){
            const userData = {
                email,
                password,
                confirm_password
            }
            // console.log(userData)
            // Alert.alert("Registration Successful")
            navigation.replace('SuccessRegistration')
        }
    }

    const localImage = ('../assets/logo/logo.png')
    return (
        <ScreenWrapper isScrollable custom_styles={styles.wrapper}>
            <ReusableImage image_url={require(localImage)} />
            <ReusableText custom_styles={{ fontSize: 30 }} text_content='Create an account'></ReusableText>
            <View style={{ width: '100%' }}>
                <ReusableTextInput value={email} onChangeText={(input) => setEmail(input)} placeholder='Enter email'></ReusableTextInput>
                {email_error?<Text style={styles.error_message}>{email_error}</Text>:null}
            </View>
            <View style={{ width: '100%' }}>
                <ReusableTextInput value={password} onChangeText={(input) => setPassword(input)} placeholder='Enter password' secureTextEntry></ReusableTextInput>
                {password_error?<Text style={styles.error_message}>{password_error}</Text>:null}
            </View>
            <View style={{ width: '100%' }}>
            <ReusableTextInput value={confirm_password} onChangeText={(input)=>setConfirmPasswrod(input)} placeholder='Confirm password' secureTextEntry></ReusableTextInput>
                {confirm_passwordError?<Text style={styles.error_message}>{confirm_passwordError}</Text>:null}
            </View>
            <ReusableButton onPress={handle_Register} custom_style={{ color: 'gray', fontSize: 25 }} button_content='Register'></ReusableButton>
            <View style={{ flexDirection: 'row', gap: 5 }}>
                <ReusableText custom_styles={{ fontSize: 20 }} text_content={'Already have account?'}></ReusableText>
                <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
                    <Text style={{ color: 'blue', fontSize: 20 }}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScreenWrapper>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    wrapper: {
        height: 750,
        gap: 30
    },
    error_message: {
        color: ERROR_COLOR,
    }
});