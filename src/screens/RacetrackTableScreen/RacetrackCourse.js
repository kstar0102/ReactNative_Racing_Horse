import React, { useState } from 'react';
import {ScrollView, StyleSheet } from 'react-native';
// import OfficeTableTemplate from '../../components/OfficeTable/OfficeTableTemplate';
import NextWeekTable from './NextWeekTable';
import RaceWeekTable from './RaceWeekTable';
import ThreeWeekTable from './ThreeWeekTable';
import FourWeekTable from './FourWeekTable';
import NextNextWeekTable from './NextNextWeekTable';

const RacetrackCourse = () => {
  const CONTENT = {
    raceWeekTitle: ['[今週のレース]'],
    raceWeekName: ['新馬', '未勝利', '1勝クラス', '2勝クラス', '3勝クラス','ジュニアC','中山金杯','京都金杯'],
    raceWeekData: [
      [' ', '中山', '芝', '1600m', '3歳限定'],
      [' ', '京都', 'ダ', '1200m', '3歳以上'],
      [' ','中山', '芝', '2200m', '3歳以上'],
      [' ', '京都', 'ダ', '1600m', '3歳以上'],
      [' ', '中山', '芝', '1400m', '3歳以上'],
      ['OP ', '京都', 'ダ', '1600m', '3歳以上'],
      ['G III', '中山', '芝', '2000m', '3歳以上'],
      ['G III', '京都', 'ダ', '1600m', '3歳以上'],
  
    ],

    nextWeekTitle: ['[来週のレース]'],
    nextWeekName: ['新馬', '未勝利', '1勝クラス', '2勝クラス', '3勝クラス', '万葉S','シンザン記念','フェアリーS'],
    nextWeekData: [
      [' ', '京都', 'ダ', '1400m', '3歳限定'],
      [' ', '中山', '芝', '1600m', '3歳以上'],
      [' ', '京都', 'ダ', '1600m', '3歳以上'],
      [' ', '中山', '芝', '2400m', '3歳以上'],
      [' ', '中山', 'ダ', '2000m', '3歳以上'],
      ['OP', '京都', '芝', '3000m', '3歳以上'],
      ['G III', '中山', 'ダ', '1600m', '3歳以上'],
      ['G III', '京都', '芝', '1600m', '3歳以上'],
  
    ],

    nextNextWeekTitle: ['[再 来週のレース]'],
    nextNextWeekName: ['新馬', '未勝利', '1勝クラス', '2勝クラス', '3勝クラス', '万葉S','シンザン記念','フェアリーS'],
    nextNextWeekData: [
      [' ', '京都', 'ダ', '1400m', '3歳限定'],
      [' ', '中山', '芝', '1600m', '3歳以上'],
      [' ', '京都', 'ダ', '1600m', '3歳以上'],
      [' ', '中山', '芝', '2400m', '3歳以上'],
      [' ', '中山', 'ダ', '2000m', '3歳以上'],
      ['OP', '京都', '芝', '3000m', '3歳以上'],
      ['G III', '中山', 'ダ', '1600m', '3歳以上'],
      ['G III', '京都', '芝', '1600m', '3歳以上'],
  
    ],


    threeWeekTitle: ['[3 週来のレース]'],
    threeWeekName: ['新馬', '未勝利', '1勝クラス', '2勝クラス', '3勝クラス', '万葉S','シンザン記念','フェアリーS'],
    threeWeekData: [
      [' ', '中山', '芝', '1600m', '3歳限定'],
      [' ', '京都', 'ダ', '1200m', '3歳以上'],
      [' ','中山', '芝', '2200m', '3歳以上'],
      [' ', '京都', 'ダ', '1600m', '3歳以上'],
      [' ', '中山', '芝', '1400m', '3歳以上'],
      ['OP ', '京都', 'ダ', '1600m', '3歳以上'],
      ['G III', '中山', '芝', '2000m', '3歳以上'],
      ['G III', '京都', 'ダ', '1600m', '3歳以上'],
    ],

    fourWeekTitle: ['[4 週来のレース]'],
    fourWeekName: ['新馬', '未勝利', '1勝クラス', '2勝クラス', '3勝クラス', '万葉S','シンザン記念','フェアリーS'],
    fourWeekData: [
      [' ', '京都', 'ダ', '1400m', '3歳限定'],
      [' ', '中山', '芝', '1600m', '3歳以上'],
      [' ', '京都', 'ダ', '1600m', '3歳以上'],
      [' ', '中山', '芝', '2400m', '3歳以上'],
      [' ', '中山', 'ダ', '2000m', '3歳以上'],
      ['OP', '京都', '芝', '3000m', '3歳以上'],
      ['G III', '中山', 'ダ', '1600m', '3歳以上'],
      ['G III', '京都', '芝', '1600m', '3歳以上'],
  
    ],
  };
  
  // < HorseTable horseFee={'500pt'} SP={'10'} ST={'9'} instantaneous={'12'} guts={'12'} Temperament={'15'} health={'10'} HorseName={'馬名'} />
  // {label ? label : "Button"}
    return (
      <ScrollView style={styles.container}>
        <RaceWeekTable raceWeekTitle={CONTENT.raceWeekTitle} raceWeekData={CONTENT.raceWeekData} raceWeekName={CONTENT.raceWeekName}/>
        <NextWeekTable nextWeekTitle={CONTENT.nextWeekTitle} nextWeekData={CONTENT.nextWeekData} nextWeekName={CONTENT.nextWeekName}/>
        <NextNextWeekTable nextNextWeekTitle={CONTENT.nextNextWeekTitle} nextNextWeekData={CONTENT.nextNextWeekData} nextNextWeekName={CONTENT.nextNextWeekName}/>
        <ThreeWeekTable threeWeekTitle={CONTENT.threeWeekTitle} threeWeekData={CONTENT.threeWeekData} threeWeekName={CONTENT.threeWeekName}/>
        <FourWeekTable fourWeekTitle={CONTENT.fourWeekTitle} fourWeekData={CONTENT.fourWeekData} fourWeekName={CONTENT.fourWeekName}/>
      </ScrollView>
    )
  }
export default RacetrackCourse;

const styles = StyleSheet.create({
  container:{
    // marginTop: 200,
    marginLeft: 30,
    marginRight: 30,
    height: 420
  }
})