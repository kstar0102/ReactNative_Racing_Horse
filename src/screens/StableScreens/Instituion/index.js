import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
// Redux
import { connect } from 'react-redux';
// Custom IMPORT
import HeaderScreen from '../../LayoutScreen/HeaderScreen';
import StableFooterScreen from '../../LayoutScreen/StableFooterScreen';
import { ReturnButton } from '../../../components/Buttons';
import Screenstyles from '../../ScreenStylesheet';
import TapScreen from './TapScreen';
import DropDwonI from '../../../components/Buttons/DropDwonI';
import StableStyles from '../StableStyles';

const Institution = ({ navigation, level }) => {
    const [selected, setSelected] = useState(undefined);
    const [banner, setBanner] = useState(0);

    const data = [
        { name: '国沢厩舎', label: 'A', id: 1, sp: 'S', st: 'D+', fatigue: 'O', instantaneous: 'A', guts: 'C', temper: 'B', health: 'A', Hair: '黑鹿毛', class: 'GIクラス' },
        { name: '池貝買告', label: 'B', id: 2, sp: 'S+', st: 'D', fatigue: '△', instantaneous: 'A+', guts: 'C', temper: 'B', health: 'A', Hair: '黑鹿毛', class: 'GⅡクラス' },
        { name: '中外田版告', label: 'C', id: 3, sp: 'S', st: 'D', fatigue: '▲', instantaneous: 'A', guts: 'C+', temper: 'B', health: 'A+', Hair: '栗毛', class: 'GⅢクラス' },
    ];

    const handleSettingId = (value) => {
        setBanner(value);
    }


    return (
        <View style={Screenstyles.container}>
            <ImageBackground
                source={require('../../../assets/images/horse_track/stall.jpg')}
                resizeMode="cover"
                style={Screenstyles.img}>
                <HeaderScreen />
                <View style={Screenstyles.footerTap}>
                    <View>
                        <View>
                            <ReturnButton label="厩 舎" color={1} onPress={() => navigation.navigate('StallScreen')} />
                        </View>
                        <View style={Screenstyles.UPRButton}>
                            <ReturnButton label="施 設" color={1} />
                        </View>
                    </View>
                    {/* SCREEN SHOW */}
                    <View style={StableStyles.institutionContainer}>
                        <View style={StableStyles.upperContent}>
                            <View style={StableStyles.upperLeft}>
                                <Text style={StableStyles.upperLeftTxt}>廠告 一覧</Text>
                                <DropDwonI name={data[0].name} data={data} onSelect={setSelected} setId={handleSettingId} />
                            </View>
                            <View style={StableStyles.upperRight}>
                                <View style={StableStyles.cardHeader}>
                                    <Text style={StableStyles.cardHeaderTxt}>{!!selected &&  banner.name || data[0].name}</Text>
                                    <Text style={StableStyles.cardHeaderTxtLv}>厩舎Lv.{level}</Text>
                                </View>
                                <View style={StableStyles.cardBody}>
                                    <View style={StableStyles.cardRow}>
                                        <Text style={StableStyles.cardBodyTxt}>厩舎Lv.1</Text>
                                        <Text style={StableStyles.cardBodyTxt}>ロンギ場 Lv.1</Text>
                                        <Text style={StableStyles.cardBodyTxt}>トラック-</Text>
                                    </View>
                                    <View style={StableStyles.cardRow}>
                                        <Text style={StableStyles.cardBodyTxt}>坂路-</Text>
                                        <Text style={StableStyles.cardBodyTxt}>ブールー</Text>
                                        <Text style={StableStyles.cardBodyTxt}>?????</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* SCREEN SHOW END */}
                    <TapScreen/>
                </View>
                <StableFooterScreen/>
            </ImageBackground>
            
        </View>
    );
};

const mapStateToProps = state =>{
    return{
       level: state.user.userData.level
    }
}

export default connect(mapStateToProps)(Institution);