import { Image, ImageProps, ImageStyle, StyleSheet } from 'react-native'
import React from 'react'

export interface RImage extends ImageProps {
    isOnline?: boolean,
    image_url: any;
    custom_styles?: ImageStyle;
};

const ReusableImage = ({ isOnline, custom_styles, image_url, ...other_props }: RImage) => {
    return (
        <>
            {isOnline ? (
                <Image {...other_props} style={[styles.image_wrapper, custom_styles]} source={{ uri: image_url }} />
            ) : (
                <Image {...other_props} style={[styles.image_wrapper, custom_styles]} source={image_url} />
            )}
        </>
    )
}
export default ReusableImage

const styles = StyleSheet.create({
    image_wrapper: {
        borderRadius: 100,
    }
});
