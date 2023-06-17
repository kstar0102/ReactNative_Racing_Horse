import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import colors from '../../containers/colors';
import { vh, vw } from 'react-native-expo-viewport-units';

const ImageButton = ({ disabled, source, id }) =>{
    return(
            <TouchableOpacity 
                style={[
                    styles.button, 
                    disabled && styles.disabled
                ]}
                disabled={disabled ? disabled : false}
            >
                <Image source={source ? source : require('../../assets/images/Pasture/icon00.png')}  style={[styles.img, id == 2 ? styles.imgBorder : styles.img]}/>
            </TouchableOpacity>
    )
}
    

const styles = StyleSheet.create({
    absoluteView: {
    },
    label:{
        color: colors.black,
        borderWidth: 1,
        borderColor: colors.white,
        fontWeight: 600,
    },
    img: {
        width:  vw(25),
        height: vh(6.7)
    },
    imgBorder: {
        borderWidth: 1,
        borderColor: colors.black,
        backgroundColor: '#6a6d6b',
        borderRadius: 8
    },
    button: {
        position: 'relative',
        alignItems: 'center',
    },
    TooltipContent:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default ImageButton;