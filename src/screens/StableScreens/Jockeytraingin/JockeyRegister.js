// import React in our code
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { vw } from 'react-native-expo-viewport-units';
// Redux
import { connect, useDispatch } from 'react-redux';
import { JockeyGenderAction } from '../../../store/actions/jockey/JockeyGenderAction';
import { JockeyNameAction } from '../../../store/actions/jockey/JockeyNameAction';
import { JockeyRegisterAction } from '../../../store/actions/jockey/JockeyRegisterAction';
// Custom Import
import { JockeyCheck } from '../../../components/Buttons';
import ButtonStyle from '../../../components/Buttons/ButtonStyle';
import SaleInputButton from '../../../components/Buttons/SaleInputButton';
// import all the components we are going to use
import {
    StyleSheet,
    View,
    Text,
    Image,
    Alert,
    ImageBackground,
    Modal,
    TextInput
} from 'react-native';

//import AppIntroSlider to use it
import HeaderScreen from '../../LayoutScreen/HeaderScreen';
import StableFooterScreen from '../../LayoutScreen/StableFooterScreen';
import AppIntroSlider from 'react-native-app-intro-slider';
import Screenstyles from '../../ScreenStylesheet';
import { ReturnButton } from '../../../components/Buttons';


const JockeyRegister = ({jockeyName,jockeyGender, stable_id, user_id}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const [secondModalVisible, setSecondModalVisible] = useState(false);
    const [inputText, setInputText] = useState('');

    const handleYesPress = (inputValue) => {
        if (inputValue == '') {
            return false;
        } else {
            dispatch(JockeyNameAction(inputValue));
            setModalVisible(false);
            setSecondModalVisible(true);
        }
    };

    const handleNoPress = () => {
        setModalVisible(false);
    };

    const handleSecondNoModalSubmit = () => {
        setSecondModalVisible(false);
    };

    const handlePress = (value) => {
        Alert.alert(
            `${value}`,
            `${value} でよろしいですか?`,
            [
                {
                    text: "いいえ",
                    style: "cancel"
                },
                {
                    text: "はい",
                    onPress: () => handleSubmitGender(value)
                }
            ],
            { cancelable: false },
        );
    }

    const handleSecondPress = () => {
        setSecondModalVisible(false);
        Alert.alert(
            ' ',
            '鍛えてたくさんレースに勝ってもらいましょう!',
            [

                {
                    text: "閉じる",
                    onPress: () => handlesSubmitJockey()
                }
            ],
            { cancelable: false },
        );
    }

    const handlesSubmitJockey = () => {
        if(jockeyName != '' && jockeyGender != ''){
            const sendJockey = {
                'name': jockeyName,
                'gender': jockeyGender,
                'stall_id': stable_id,
                'user_id': user_id
            }
            dispatch(JockeyRegisterAction(sendJockey));
            navigation.replace('JocTraining')
        }
    }

    const handleSubmitGender = (gender) => {
        dispatch(JockeyGenderAction(gender));
        setModalVisible(true);
    }
    const RenderItem = ({ item }) => {
        return (
            <View
                style={{
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

            {/* MODAL */}
            <View style={ButtonStyle.container}>
                <Modal
                    visible={secondModalVisible}
                    animationType="fade"
                    transparent={true}
                >
                    <View style={ButtonStyle.ModalCenter}>
                        <Text style={ButtonStyle.saleTxt}>[{inputText}]でよろしいでしょうか？</Text>
                        <View style={ButtonStyle.buttonContainer}>
                            <View style={{ margin: 10 }}>
                                <SaleInputButton label="いいえ" onPress={handleSecondNoModalSubmit} />
                            </View>
                            <View style={{ margin: 10 }}>
                                <SaleInputButton label="はい" onPress={handleSecondPress} />
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    visible={modalVisible}
                    animationType="fade"
                    transparent={true}
                >
                    <View style={ButtonStyle.ModalCenter}>
                        <Text style={ButtonStyle.ModalCenterTxt}>   騎手の名前を教えてください。</Text>
                        <View style={ButtonStyle.inputText}>
                            <TextInput
                                style={{
                                    width: vw(36),
                                    height: 38,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    margin: 10,
                                    // padding: 10,
                                    borderRadius: 5
                                }}
                                onChangeText={(text) => setInputText(text)}
                                value={inputText}
                            />
                            <Text style={ButtonStyle.Itxt}>騎手ですね!</Text>
                        </View>
                        <View style={ButtonStyle.buttonContainer}>
                            <View style={{ margin: 10 }}>
                                <SaleInputButton label="いいえ" onPress={handleNoPress} />
                            </View>
                            <View style={{ margin: 10 }}>
                                <SaleInputButton label="はい" onPress={() => handleYesPress(inputText)} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            {/* Modal */}
        </>
    );
};

const mapStateToProps = state => {
    return {
        jockeyName: state.jockeyData.name,
        jockeyGender: state.jockeyData.gender,
        stable_id: state.stableMenu.StableSendData[0].stall_id,
        user_id: state.user.userData.id,
    }
}

export default connect(mapStateToProps)(JockeyRegister);

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
        text: '男性か女性かを選んでください。',
        male: require('../../../assets/images/People/1.png'),
        female: require('../../../assets/images/People/0.png'),
        btnTitle: "はい",
        backgroundColor: '#febe29',
    },
    {
        key: 's2',
        text: '騎手の名前を教えてください。',
        backgroundColor: '#b3cefb',
    }
];
