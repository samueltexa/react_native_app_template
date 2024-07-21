import { StyleSheet, TextInput, TextInputProps, ViewStyle } from 'react-native'
import { TEXTINPUT_COLOR } from '../../constants/colors'

export interface RTextInput extends TextInputProps {
    custom_styles?: ViewStyle,
}
const ReusableTextInput = ({ children, custom_styles, ...other_props }: RTextInput) => {
    return (
        <TextInput {...other_props} style={[styles.input_wrapper, custom_styles]}></TextInput>
    )
}

export default ReusableTextInput

const styles = StyleSheet.create({
    input_wrapper: {
        backgroundColor: TEXTINPUT_COLOR,
        width: '100%',
        borderRadius: 10,
        paddingLeft:20
    }
})