import { StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React, { ReactNode } from 'react'
import { BUTTON_COLOR } from '../../constants/colors'

export interface RButton extends TouchableOpacityProps {
    button_content: string | ReactNode
    custom_style?: TextStyle

}
const ReusableButton = ({ button_content, custom_style, ...other_props }: RButton) => {
    return (
        <TouchableOpacity {...other_props} style={[styles.button_wrapper, custom_style]} {...other_props}>
            <Text style={[custom_style ,{ textAlign: 'center' }]}>{button_content}</Text>
        </TouchableOpacity>
    )
}

export default ReusableButton

const styles = StyleSheet.create({
    button_wrapper: {
        backgroundColor: BUTTON_COLOR,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        width: '100%'
    }
})