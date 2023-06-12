import React from 'react';
import { Animated, Image, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    iconContainer: {
        marginTop: 300,
      height: 70,
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const AnimationButton: React.FC = () => {

    // Initial scale value of 1 means no scale applied initially.
    const animatedButtonScale = new Animated.Value(1);

    // When button is pressed in, animate the scale to 1.5
    const onPressIn = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1.5,
            useNativeDriver: true,
        }).start();
    };

    // When button is pressed out, animate the scale back to 1
    const onPressOut = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    // The animated style for scaling the button within the Animated.View
    const animatedScaleStyle = {
        transform: [{scale: animatedButtonScale}]
    };

    return (
        <TouchableWithoutFeedback
            onPress={()=>{}}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
        >
            <Animated.View style={[styles.iconContainer, animatedScaleStyle]}>
                <Image source={require('../../assets/images/favicon.png')}/>
            </Animated.View>
      </TouchableWithoutFeedback>
    );
};

export default AnimationButton;