import React, {useState} from 'react';
import {TouchableOpacity, Image, View, StyleSheet,Alert } from 'react-native';
import colors from '../../containers/colors';
import { vh, vw } from 'react-native-expo-viewport-units';
import { useNavigation } from '@react-navigation/native';

const AvatarButton = ({onPress, disabled, id }) =>{
    const navigation = useNavigation();

    let sources = null;
    if(id == 1){
        sources = require('../../assets/images/avatars/1.png')
    }else if( id == 2 ){
        sources = require('../../assets/images/avatars/2.png')
    }else if( id == 3 ){
        sources = require('../../assets/images/avatars/3.png')
    }else if( id == 4 ){
        sources = require('../../assets/images/avatars/4.png')
    }
    else if( id == 5 ){
        sources = require('../../assets/images/avatars/5.png')
    }
    else if( id == 6 ){
        sources = require('../../assets/images/avatars/6.png')
    }
    else if( id == 7 ){
        sources = require('../../assets/images/avatars/7.png')
    }
    else if( id == 8 ){
        sources = require('../../assets/images/avatars/8.png')
    }
    else if( id == 9 ){
        sources = require('../../assets/images/avatars/9.png')
    }
    else if( id == 10 ){
        sources = require('../../assets/images/avatars/10.png')
    }
    else if( id == 11 ){
        sources = require('../../assets/images/avatars/11.png')
    }
    else if( id == 12 ){
        sources = require('../../assets/images/avatars/12.png')
    }


    
   const handlePress = () => {
        if(id){
          Alert.alert(
            "厩舎",
            "○○厩舎に預けますか?",
            [
              {
                text: "いいえ",
                style: "cancel"
              },
              { 
                text: "はい",
                onPress:() => navigation.navigate('StallScreen') 
              }
            ],
            { cancelable: false }
          );
        }
    }
    return(
        <TouchableOpacity 
            style={[
                styles.button, 
                disabled && styles.disabled
            ]}
            onPress={onPress ? onPress : () => handlePress()}
            disabled={disabled ? disabled : false}
        >
        <Image 
            style={styles.avatarImage}
            source={sources}
        />
        </TouchableOpacity>
    )
}
export default AvatarButton;

const styles = StyleSheet.create({
    absoluteView: {
    },
    label:{
        color: colors.black,
        borderWidth: 1,
        borderColor: colors.white,
        fontWeight: 600,
    },
    avatarImage: {
        width: 95,
    height: 95
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