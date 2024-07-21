import React from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import ReusableImage from '../components/reusable/ReusableImage'
import ReusableText from '../components/userInterfaceComponents/ReusableText'
import ReusableButton from '../components/userInterfaceComponents/ReusableButton'

const SuccessRegistration = ({navigation}:{navigation:any}) => {

    const localImage = ('../assets/images/success.png')
    return (
        <ScreenWrapper custom_styles={{ backgroundColor: '#fff', height: '100%' }}>
            <ReusableImage custom_styles={{ width: 300, height: 400, borderRadius: 0 }} image_url={require(localImage)} />
            <ReusableText text_content={'Congragulations'} />
            <ReusableText custom_styles={{ fontSize: 15, textAlign: 'center', color: 'black' }} text_content={"We've sent you a verification email, please\n check your inbox and follow the instructions to verify\n your account"} />
            <ReusableText custom_styles={{ color: 'gray', marginTop: 15, fontSize: 20 }} text_content={'Thank you for signing up with us'} />
            <ReusableText text_content={'#StaySafe'} />
            <ReusableButton onPress={()=>navigation.replace('LoginScreen')} custom_style={{ color: 'blue', fontSize: 25 }} button_content={'Sign in here'}></ReusableButton>
        </ScreenWrapper>
    )
}

export default SuccessRegistration