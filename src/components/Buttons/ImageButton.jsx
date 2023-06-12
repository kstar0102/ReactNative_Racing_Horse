import React, { useState } from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet, Button, Modal} from 'react-native';
import colors from '../../containers/colors';
import ModalButton from './ModalButton';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
import { vh, vw } from 'react-native-expo-viewport-units';
import Tooltip from 'react-native-walkthrough-tooltip';
import style from 'react-native-background-image/style';

const ImageButton = ({label, onPress, disabled, source, id ,blurRadius}) =>{
    const [toolTipVisible, setToolTipVisible] = useState(false);
    return(
        <Tooltip
            animated={true}
            //(Optional) When true, tooltip will animate in/out when showing/hiding
            arrowSize={{width: 55, height: 15}}
            //(Optional) Dimensions of arrow bubble pointing to the highlighted element
            backgroundColor="rgba(0,0,0,0)"
            childrenWrapperStyle={{display: 'none'}}
            tooltipStyle={{width: 160}}
            //(Optional) Color of the fullscreen background beneath the tooltip.
            isVisible={toolTipVisible}
            //(Must) When true, tooltip is displayed
            content={
                <View style={styles.TooltipContent}>
                    <ModalButton label={'馬なり'} count={'1pt'}/>
                    <ModalButton label={'強め'} count={'3pt'}/>
                    <ModalButton  label={'一杯'} count={'5pt'}/>
                </View>
            }
            contentStyle={{backgroundColor: 'rgba(0,0,0,0)', top: -65}}
            //(Must) This is the view displayed in the tooltip
            placement="bottom"
            //(Must) top, bottom, left, right, auto.
            onClose={() => setToolTipVisible(false)}
            //(Optional) Callback fired when the user taps the tooltip
        >
            <TouchableOpacity 
                style={[
                    styles.button, 
                    disabled && styles.disabled
                ]}
                onPress={onPress ? onPress : () => setToolTipVisible(true) }
                disabled={disabled ? disabled : false}
            >
                <Image source={source ? source : require('../../assets/images/Pasture/icon00.png')}  style={styles.img}/>
            </TouchableOpacity>
        </Tooltip>
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
        height: vh(6.6)
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