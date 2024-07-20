import { ScrollView, StyleSheet, Text, View, ViewProps, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { BACKGROUND_COLOR } from '../../constants/colors';

export interface isScreenWrapper extends ViewProps {
    children: ReactNode;
    isScrollable?: boolean;
    custom_styles?: ViewStyle
}

const ScreenWrapper = ({ children, isScrollable, custom_styles, ...other_props }: isScreenWrapper) => {
    return (
        <>
            {isScrollable ? (
                <ScrollView {...other_props} contentContainerStyle={[styles.screen_wrapper, custom_styles]}>
                    {children}
                </ScrollView>
            ) : (
                <View {...other_props} style={[styles.screen_wrapper, custom_styles]}>
                    {children}
                </View>
            )}
        </>
    )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    screen_wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor:BACKGROUND_COLOR
    },
})