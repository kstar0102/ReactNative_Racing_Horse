import React, { useState } from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
// import OfficeTableTemplate from '../../components/OfficeTable/OfficeTableTemplate';
import NextWeekTable from './NextWeekTable';
import RaceWeekTable from './RaceWeekTable';

const RacetrackCourse = () => {
  const CONTENT = {
    raceWeekTitle: ['順位', '馬名', ' ', '通算成精', '獲得賞金(円)'],
    tableHeadValue1: ['1位', 'イチゴ', '騎手', '100-100-100-100', '300,000,000'],
    tableHeadValue2: ['2位', 'バナナ', '騎手', '90-90-90-90', '250,000,000'],
    tableHeadValue3: ['3位', '東京', '騎手', '80-80-80-80', '200,000,000'],
    // tableNumber: ['4位', '5位', '6位', '7位', '8位','9位','10位'],
    tableData: [
      ['4位','アレックス', '騎手', '70-70-70-70', '150,000,000'],
      ['5位','田中太郎', '騎手', '60-60-60-60', '100,000,000'],
      ['6位', '王　金銀', '騎手', '50-50-50-50', '80,000,000'],
      ['7位', 'マイケル', '騎手', '40-40-40-40', '60,000,000'],
      ['8位', 'メイプル', '騎手', '30-30-30-30', '40,000,000'],
      ['9位', 'ジョーダン', '騎手', '20-20-20-20', '20,000,000'],
      ['10位', 'りんご', '騎手', '10-10-10-10', '10,000,000'],
  
    ],

    nextWeekTitle: ['順位', '馬名', ' ', '通算成精', '獲得賞金(円)'],
    tableHeadValue1: ['1位', 'イチゴ', '騎手', '100-100-100-100', '300,000,000'],
    tableHeadValue2: ['2位', 'バナナ', '騎手', '90-90-90-90', '250,000,000'],
    tableHeadValue3: ['3位', '東京', '騎手', '80-80-80-80', '200,000,000'],
    // tableNumber: ['4位', '5位', '6位', '7位', '8位','9位','10位'],
    tableData: [
      ['4位','アレックス', '騎手', '70-70-70-70', '150,000,000'],
      ['5位','田中太郎', '騎手', '60-60-60-60', '100,000,000'],
      ['6位', '王　金銀', '騎手', '50-50-50-50', '80,000,000'],
      ['7位', 'マイケル', '騎手', '40-40-40-40', '60,000,000'],
      ['8位', 'メイプル', '騎手', '30-30-30-30', '40,000,000'],
      ['9位', 'ジョーダン', '騎手', '20-20-20-20', '20,000,000'],
      ['10位', 'りんご', '騎手', '10-10-10-10', '10,000,000'],
  
    ],
  };
  
  // < HorseTable horseFee={'500pt'} SP={'10'} ST={'9'} instantaneous={'12'} guts={'12'} Temperament={'15'} health={'10'} HorseName={'馬名'} />
  // {label ? label : "Button"}
    return (
      <ScrollView style={styles.container}>
        <NextWeekTable tableHeadTitle={CONTENT.raceWeekTitle}/>
        <RaceWeekTable tableHeadTitle={CONTENT.nextWeekTitle}/>
      </ScrollView>
    )
  }
export default RacetrackCourse;

const styles = StyleSheet.create({
  container:{
    // height: 
    // flexDirection: 'column',
    // justifyContent: 'center'
    // alignItems: 'center'
  }
})