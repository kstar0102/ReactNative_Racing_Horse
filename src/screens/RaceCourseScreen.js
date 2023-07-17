import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
// Custom IMPORT
import HeaderScreen from './LayoutScreen/HeaderScreen';
import FooterScreen from './LayoutScreen/FooterScreen';
import { ReturnButton } from '../components/Buttons';
import Screenstyles from './ScreenStylesheet';

const RaceCourseScreen = ({ navigation }) => {
    return (
        <View style={Screenstyles.container}>
            <ImageBackground
                source={require('../assets/images/1.png')}
                resizeMode="cover"
                style={Screenstyles.img}>
                <HeaderScreen />
                <View>
                    <View>
                        <View>
                            <ReturnButton label="競馬場"  onPress={() => navigation.goBack()} />
                        </View>
                    </View>
                    <View style={Screenstyles.UPCourse}>
                        <Text>Race Course Screen</Text>
                        {/* <RacetrackCourse/> */}
                    </View>
                </View>
                <FooterScreen/>
            </ImageBackground>
        </View>
    );
};

export default RaceCourseScreen;