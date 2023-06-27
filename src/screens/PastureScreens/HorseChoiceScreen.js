import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
// Redux
import { connect, useDispatch } from 'react-redux';
import { horseCheckAction } from '../../store/actions/horse/horseCheckAction';
import { horseRandAction } from '../../store/actions/horse/horseRandAction';
// Custom Import
import NRHeaderScreen from '../LayoutScreen/NRHeaderScreen';
import { horseColor } from '../../utils/globals';
import { HorseBuyButton, BackButton, CheckButton } from '../../components/Buttons';
import DropDownB from '../../components/Buttons/DropDwonB';
import HorseTable from '../../components/table/HorseTable';
import BloodLineTable from '../../components/table/BloodlineTable';
import Screenstyles from '../ScreenStylesheet';


// Array value
let horses = [];
let prices = [];
let horsecheckornot = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let checkflag = 0;
const HorseChoiceScreen = ({ navigation, horseData, userPrice }) => {
    
    const dispatch = useDispatch();
    const [selected, setSelected] = useState();
    const [groupedData, setGroupedData] = useState([]);
    const [loading, setLoading] = useState(true);

    const data = [
        { label: '・0歳馬' },
        { label: '・1歳馬' },
        { label: '・2歳馬' },
        { label: '・繁殖馬' },
    ];
    
    useEffect(() => {
        let filteredData;
        if (!selected) {
            checkflag = 0;
            filteredData = (horseData && horseData.filter(data => data.age === "・0歳馬")) || [];
        } else {
            if(selected.label == "・0歳馬"){
                checkflag = 0;
            }
            else if(selected.label == "・1歳馬"){
                checkflag = 1;
            }
            else if(selected.label == "・2歳馬"){
                checkflag = 2;
            }
            else if(selected.label == "・繁殖馬"){
                checkflag = 3;
            }
            filteredData = (horseData && horseData.filter(data => data.age === selected.label)) || [];
        }
        const chunkSize = 5;
        const chunks = [];
        for (let i = 0; i < filteredData.length; i += chunkSize) {
            chunks.push(filteredData.slice(i, i + chunkSize));
        }
        setGroupedData(chunks);
        setLoading(false); // set loading to false after fetching the data
    }, [horseData, selected]);

    useEffect(() => {
        dispatch(horseRandAction())
    }, []);

    // Value and id, price array push
    const handleCheck = (value, id, price) => {
        if (value == true) {
            horses.push(id);
            prices.push(price);
            horsecheckornot[id] = true;
        }
        else {
            removeId(id);
            removePrice(price);
            horsecheckornot[id] = false;
        }
        return value;
    };

    // horses array Remove Id
    const removeId = (id) => {
        for (let index = 0; index < horses.length; index++) {
            if (horses[index] == id) {
                horses.splice(index, 1);
            }
        }
    };
    // Price array Remove price
    const removePrice = (price) => {
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] == price) {
                prices.splice(i, 1);
            }
        }
    };
    
    // Click Buybutton 
    const handleSubmit = () => {
        const horseDataId = horseData.filter(data => horses.includes(data.id));
        const priceByRange = {};
        horseDataId.forEach(horse => {
            const { price } = horse;

            if (price <= 100) {
                if (!priceByRange['1']) priceByRange['1'] = 0;
                priceByRange['1'] += price;
            } else if (price <= 500) {
                if (!priceByRange['2']) priceByRange['2'] = 0;
                priceByRange['2'] += price;
            } else {
                if (!priceByRange['3']) priceByRange['3'] = 0;
                priceByRange['3'] += price;
            }
        });
        let totalPrice = 0;

        for (let key in priceByRange) {
            totalPrice += priceByRange[key];
        }
        if(!totalPrice){
            alert('Check you horse');
            return false;
        }
        else if(userPrice < totalPrice){
            alert('ポイントが足りません。');
            return false;
        }else{
            dispatch(horseCheckAction(horseDataId));
            navigation.navigate('HorseNameScreen')
        } 
    };
    return (
        <View style={Screenstyles.container}>
            <ImageBackground
                source={require('../../assets/images/1.png')}
                resizeMode="contain"
                style={Screenstyles.img}>
                <NRHeaderScreen />
                <View style={Screenstyles.HContainer}>
                    <View style={Screenstyles.HCtitle}>
                        <Text style={Screenstyles.NRtitleA}>競走馬を購入する</Text>
                    </View>
                    <View style={Screenstyles.DropDwonButton}>
                        <DropDownB label="・0歳馬" data={data} onSelect={setSelected} />
                    </View>
                    {loading ? ( // show spinner if loading is true
                        <Spinner visible={loading} textContent={'Loading...'} textStyle={styles.spinnerTextStyle} />
                    ) : (
                        groupedData.map((chunk, index) => (
                            <ScrollView key={index} style={Screenstyles.ScrollView}>
                                {chunk.map((data, index) => (
                                    <View key={index} style={Screenstyles.horseCard}>
                                        <CheckButton checkState={handleCheck} id={data.id} price={data.price} checkingstate={horsecheckornot[index+checkflag*5]} />
                                        <View style={Screenstyles.horseCardContent}>
                                            <View style={Screenstyles.horseCardLeft}>
                                                {horseColor.map((colorName, index) => {
                                                    if (colorName[data.color]) {
                                                        return (
                                                            <Image
                                                                key={`${data.id}${index}`}
                                                                style={Screenstyles.HCImage}
                                                                source={colorName[data.color]}
                                                            />
                                                        );
                                                    } else {
                                                        return null;
                                                    }
                                                })}
                                            </View>
                                            <View style={Screenstyles.horseCardRight}>
                                                <BloodLineTable father_sys={data.f_sys} father_f_sys={data.f_f_sys} father_m_sys={data.f_m_sys} mother_sys={data.m_sys} mother_f_sys={data.m_f_sys} mohter_m_sys={data.m_m_sys} />
                                            </View>
                                        </View>
                                        <HorseTable name={data.m_sys} price={data.price} />
                                    </View>
                                ))}
                            </ScrollView>
                        ))
                    )}
                    <BackButton label={'前に戻る'} onPress={() => navigation.goBack()} />
                    <HorseBuyButton label={'購入する'} onPress={() =>  handleSubmit()} />
                </View>
            </ImageBackground>
        </View>
    );
};

const mapStateToProps = state => {
    return {
        horseData: state.horseData.allData.data,
        userPrice: state.user.userData.user_pt
    };
};

export default connect(mapStateToProps)(HorseChoiceScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 30,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    spinnerTextStyle: {
        color: '#FFF',
    },
});