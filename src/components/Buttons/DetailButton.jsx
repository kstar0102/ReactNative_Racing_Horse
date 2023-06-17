import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from "react-native";
// container
import colors from "../../containers/colors";import ModalButton from './ModalButton';
import Tooltip from 'react-native-walkthrough-tooltip';

const DetailButton = ({ label, onPress,disabled }) => {
	const [toolTipVisible, setToolTipVisible] = useState(false);
	return (
		<Tooltip
            animated={true}
            //(Optional) When true, tooltip will animate in/out when showing/hiding
            arrowSize={{width: 55, height: 12}}
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
            contentStyle={{backgroundColor: 'rgba(0,0,0,0)', bottom: 90}}
            //(Must) This is the view displayed in the tooltip
            placement="bottom"
            //(Must) top, bottom, left, right, auto.
            onClose={() => setToolTipVisible(false)}
            //(Optional) Callback fired when the user taps the tooltip
        >
			<TouchableOpacity
				style={[styles.button, disabled && styles.disabled]}
				onPress={onPress ? onPress : () => setToolTipVisible(true) }
				disabled={disabled ? disabled : false}
			>
				<Text style={styles.label}>{label ? label : "Button"}</Text>
			</TouchableOpacity>
		</Tooltip>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.DetailButtonColor,
        borderRadius: 50,
		height: 25,
		width: 100,
		paddingVertical: 2,
		borderWidth: 1,
		borderColor: colors.black
	},
	label: {
		color: colors.white,
		fontSize: 13,
		fontWeight: 700,
		textAlign: 'center',
		fontWeight: 600,
		fontWeight: 'bold',
		textShadowColor: colors.black,
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 10,
	},
	disabled: {
		opacity: 0.5,
	},
	   TooltipContent:{
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default DetailButton;
