import React from 'react';
import { View, ImageBackground } from 'react-native';
// Custom IMPORT
import HeaderScreen from '../../LayoutScreen/HeaderScreen';
import { ReturnButton } from '../../../components/Buttons';
import Screenstyles from '../../ScreenStylesheet';
import RacetrackCourse from '../../PastureScreens/RacetrackTableScreen/RacetrackCourse';

const RaceCourse = ({ navigation }) => {
    return (
        <View style={Screenstyles.container}>
            <ImageBackground
                source={require('../../../assets/images/horse_track/stall.jpg')}
                resizeMode="cover"
                style={Screenstyles.img}>
                <HeaderScreen />
                <View>
                    <View>
                        <View>
                            <ReturnButton label="厩 舎" color={1} onPress={() => navigation.navigate('StallScreen')} />
                        </View>
                        <View style={Screenstyles.UPRButton} >
                            <ReturnButton label="競馬場" color={1} />
                        </View>
                    </View>
                    <View style={Screenstyles.UPCourse}>
                        <RacetrackCourse/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default RaceCourse;