// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Intro slider with a button in the center

// import React in our code
import React, { useState } from 'react';
import { CustomButtons } from '../../../components/Buttons';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const JockeyTraingin = () => {
    const [showRealApp, setShowRealApp] = useState(false);

    const onDone = () => {
        setShowRealApp(true);
    };
    const onSkip = () => {
        setShowRealApp(true);
    };

    const RenderItem = ({ item }) => {
        
        if(item.key == 's1'){
            console.log('====================================')
            console.log(item.key)
            console.log('===========================s=========')
        }else if(item.key == 's2'){
            console.log('=================s2==========s=========')
        }else if(item.key == 's3'){
            console.log('=================s3====s===============')
        }
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingBottom: 100,
                }}>
                <Text style={styles.introTextStyle}>{item.text}</Text>
                <View style={styles.introGenderStyle}>
                    <View>
                        <Image style={styles.introImageStyle} source={item.male} />
                        <CustomButtons />
                    </View>

                    <Image style={styles.introImageStyle} source={item.female} />
                
                </View>
            </View>
        );
    };

    return (
        <>
            {showRealApp ? (
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <Text style={styles.titleStyle}>
                            React Native App Intro Slider using AppIntroSlider
                        </Text>
                        <Text style={styles.paragraphStyle}>
                            This will be your screen when you click Skip from any slide or
                            Done button at last
                        </Text>
                        <Button
                            title="Show Intro Slider again"
                            onPress={() => setShowRealApp(false)}
                        />
                    </View>
                </SafeAreaView>
            ) : (
                <AppIntroSlider
                    data={slides}
                    ref={component => { this.refSlider = component }}
                    renderItem={RenderItem}
                    onDone={onDone}
                    showSkipButton={false}
                    showNextButton={false}
                    showDoneButton={false}
                    onSkip={onSkip}
                    bottomButton
                />
            )}
            <View style={styles.introButtonStyle}>
                <Button title={"いいえ"} onPress={() => this.refSlider.goToSlide()} />
                <Button title={"はい"} onPress={() => this.refSlider.goToSlide(2)} />
            </View>
        </>
    );
};

export default JockeyTraingin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
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
    introImageStyle: {
        width: 150,
        height: 150,
    },
    introTextStyle: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        // paddingVertical: 30,
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
    introGenderStyle:{
        flexDirection: 'row'
    }
});

const slides = [
    {
        key: 's1',
        text: '「専属騎手がいません。 雇用契約費用 5000pt が 毎年かかりますが契約しますか?」',
        backgroundColor: '#20d2bb',
    },
    {
        key: 's2',
        text: '「男性か女性かを選んでください。」',
        male: require('../../../assets/images/People/1.png'),
        female: require('../../../assets/images/People/0.png'),
        btnTitle: "はい",
        backgroundColor: '#febe29',
    },
    {
        key: 's3',
        text: '「騎手の名前を教えてください。」',
        backgroundColor: '#22bcb5',
    }
];
