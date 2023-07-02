// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Intro slider with a button in the center

// import React in our code
import React, { useState } from 'react';
import { JockeyCheck, JockeyOk } from '../../../components/Buttons';
import JokeyNameInput from '../../../components/input/JokeyNameInput';
import { useNavigation } from '@react-navigation/native';
// import all the components we are going to use
import {
    StyleSheet,
    View,
    Text,
    Image,
    Alert,
    ImageBackground
} from 'react-native';

//import AppIntroSlider to use it
import HeaderScreen from '../../LayoutScreen/HeaderScreen';
import StableFooterScreen from '../../LayoutScreen/StableFooterScreen';
import AppIntroSlider from 'react-native-app-intro-slider';
import Screenstyles from '../../ScreenStylesheet';
import { ReturnButton } from '../../../components/Buttons';


const JockeyRegister = () => {
    const navigation = useNavigation();
    const handlePress = (value) => {
        Alert.alert(
            `${value}`,
            `${value} でよろしいですか。`,
            [
                {
                    text: "いいえ",
                    style: "cancel"
                },
                {
                    text: "はい",
                    onPress: () => this.refSlider.goToSlide(2)
                }
            ],
            { cancelable: false },
        );
    }
    // navigation.replace('JocTraining')
    const handleDonePress = (value) => {
        Alert.alert(
            ' ',
            ' (入力した名前→)〇〇でよろしいでしょうか？ ',
            [
                {
                    text: "いいえ",
                    style: "cancel"
                },
                {
                    text: "はい",
                    onPress: () => handleSecondPress()
                }
            ],
            { cancelable: false },
        );
    }

    const handleSecondPress = (value) => {
        Alert.alert(
            ' ',
            '鍛えてたくさんレースに勝ってもらいましょう!',
            [
             
                {
                    text: "閉じる",
                    onPress: () => navigation.replace('JocTraining')
                }
            ],
            { cancelable: false },
        );
    }


    const handleNameChange = (value) => {
    }
    const RenderItem = ({ item }) => {

        if (item.key == 's1') {
            return (
                <View
                    style={{
                        height: 300,
                        marginTop: 80,
                        opacity: 0.9,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Text style={styles.introTextStyle}>{item.text}</Text>
                    <View style={styles.introBtnGroupStyle}>
                        <JockeyOk label={'いいえ'} onPress={() => navigation.goBack()} />
                        <JockeyOk label={'はい'}  onPress={() => this.refSlider.goToSlide(1)} />
                    </View>
                </View>
            );
        } else if (item.key == 's2') {
            return (
                <View
                    style={{
                        // flex: 1,
                        height: 350,
                        marginTop: 60,
                        opacity: 0.9,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text style={styles.introTextStyle}>{item.text}</Text>
                    <View style={styles.introGenderStyle}>
                        <View style={styles.introGroupStyle}>
                            <Image style={styles.introImageStyle} source={item.male} />
                            <JockeyCheck label={'男性'} color={2} onPress={() => handlePress('男性')} />
                        </View>

                        <View style={styles.introGroupStyle}>
                            <Image style={styles.introImageStyle} source={item.female} />
                            <JockeyCheck label={'女性'} color={3} onPress={() => handlePress('女性')} />
                        </View>

                    </View>
                </View>
            );
        } else if (item.key == 's3') {
            return (
                <View
                    style={{
                        // flex: 1,
                        height: 300,
                        marginTop: 80,
                        opacity: 0.9,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text style={styles.introTextStyle}>{item.text}</Text>

                    <View style={styles.introInputGroupStyle}>
                        <JokeyNameInput onChangeText={handleNameChange} />
                        <Text style={styles.introJokeyNameStyle}>  騎手ですね!</Text>
                    </View>

                    <View style={styles.introBtnGroupStyle}>
                        <JockeyOk label={'いいえ'} onPress={() => this.refSlider.goToSlide(1)} />
                        <JockeyOk label={'はい'} onPress={() => handleDonePress()} />
                    </View>
                </View>
            );
        }

    };


    return (
        <>

            <View style={styles.container}>
                <ImageBackground
                    source={require('../../../assets/images/horse_track/stall.jpg')}
                    resizeMode="cover"
                    style={Screenstyles.img}>
                    <HeaderScreen />
                    <View style={styles.buttonGroup}>
                        <View>
                            <ReturnButton label="厩 舎" color={1} onPress={() => navigation.navigate('StallScreen')} />
                        </View>
                        <View style={Screenstyles.UPRButton} >
                            <ReturnButton label="騎手育成" color={1} />
                        </View>
                    </View>
                    <AppIntroSlider
                        data={slides}
                        ref={component => { this.refSlider = component }}
                        renderItem={RenderItem}
                        showSkipButton={false}
                        showNextButton={false}
                        showDoneButton={false}
                        scrollEnabled={false}
                        dotClickEnabled={false}
                    />
                    <StableFooterScreen />
                </ImageBackground>

            </View>

        </>
    );
};

export default JockeyRegister;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    buttonGroup: {
        marginBottom: 180
    },
    titleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraphStyle: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    introGroupStyle: {
        alignItems: 'center'
    },
    introImageStyle: {
        width: 150,
        height: 150,
    },
    introTextStyle: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        paddingVertical: 30,
    },
    introJokeyNameStyle: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
    },
    introInputGroupStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    introTitleStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    },
    introButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    introBtnGroupStyle: {
        flexDirection: 'row',
    },
    introGenderStyle: {
        flexDirection: 'row'
    }
});

const slides = [
    {
        key: 's1',
        text: '専属騎手がいません。 雇用契約費用 5000pt が 毎年かかりますが契約しますか?',
        backgroundColor: '#b3cefb',
    },
    {
        key: 's2',
        text: '男性か女性かを選んでください。',
        male: require('../../../assets/images/People/1.png'),
        female: require('../../../assets/images/People/0.png'),
        btnTitle: "はい",
        backgroundColor: '#febe29',
    },
    {
        key: 's3',
        text: '騎手の名前を教えてください。',
        backgroundColor: '#b3cefb',
    }
];
