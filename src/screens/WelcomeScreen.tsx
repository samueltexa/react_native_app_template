import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import ReusableImage from '../components/reusable/ReusableImage'
import ReusableButton from '../components/userInterfaceComponents/ReusableButton'
import ReusableText from '../components/userInterfaceComponents/ReusableText'

const WelcomeScreen = ({ navigation }: { navigation: any }) => {

    const localImage = ('../assets/logo/logo.png')
    return (
        <ScreenWrapper custom_styles={{ height: '100%', width: '100%', gap: 60 }}>
            <View>
                <ReusableImage image_url={require(localImage)} />
            </View>
            <View>
                <ReusableText custom_styles={{ fontSize: 25, color: 'lightblue', textAlign: 'center' }} text_content={'Discover your dream job here'}></ReusableText>
            </View>
            <View>
                <ReusableText custom_styles={{ fontSize: 20, textAlign: 'center' }} text_content={'Welcome'}></ReusableText>
                <ReusableText custom_styles={{ fontSize: 20, textAlign: 'center' }} text_content={'Create an account'}></ReusableText>
            </View>
            <View style={{ gap: 8, flexDirection: 'row', width: '50%', alignContent: 'center', justifyContent: 'center' }}>
                <ReusableButton onPress={() => navigation.navigate('LoginScreen')} custom_style={{ color: 'gray', backgroundColor: 'blue', fontSize: 25 }} button_content='Login'></ReusableButton>
                <ReusableButton onPress={() => navigation.navigate('RegisterScreen')} custom_style={{ color: 'gray', fontSize: 25 }} button_content='Register'></ReusableButton>
            </View>
        </ScreenWrapper>

    )
}

export default WelcomeScreen

const styles = StyleSheet.create({})