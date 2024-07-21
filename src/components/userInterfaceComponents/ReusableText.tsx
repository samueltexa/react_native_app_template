import { StyleSheet, Text, TextProps, TextStyle, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { TEXT_COLOR } from '../../constants/colors'


export interface RText extends TextProps{
    children?: ReactNode,
    custom_styles?: TextStyle,
    text_content: string | number | undefined,
}
const ReusableText = ({children, text_content, custom_styles, ...other_props}:RText) => {
  return (
      <Text style={[styles.text_wrapper, custom_styles]}>{text_content}</Text>
  )
}

export default ReusableText

const styles = StyleSheet.create({
    text_wrapper:{
        color: TEXT_COLOR
    }
})