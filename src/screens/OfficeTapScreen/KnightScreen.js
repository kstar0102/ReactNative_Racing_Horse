import React, { useState } from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import OfficeTableTemplate from '../../components/OfficeTable/OfficeTableTemplate';

const KnightScreen = () => {
  const CONTENT = {
    tableHeadTitle: ['順位', '騎手名', ' ', '通算成績', '獲得賞金(Pt)'],
    tableHeadValue1: ['1位', 'アレックス', '牝馬', '100-100-100-100', '300,000,000'],
    tableHeadValue2: ['2位', '田中太郎', '牡馬', '90-90-90-90', '250,000,000'],
    tableHeadValue3: ['3位', '王　金銀', '牝馬', '80-80-80-80', '200,000,000'],
    // tableNumber: ['4位', '5位', '6位', '7位', '8位','9位','10位'],
    tableData: [
      ['4位','マイケル', '牡馬', '70-70-70-70', '150,000,000'],
      ['5位','メイプル', '牝馬', '60-60-60-60', '100,000,000'],
      ['6位', 'ジョーダン', '牡馬', '50-50-50-50', '80,000,000'],
      ['7位', 'りんご', '牡馬', '40-40-40-40', '60,000,000'],
      ['8位', 'イチゴ', '牝馬', '30-30-30-30', '40,000,000'],
      ['9位', 'バナナ', '牡馬', '20-20-20-20', '20,000,000'],
      ['10位', '東京', '牝馬', '10-10-10-10', '10,000,000'],
  
    ],
  };
  
  // < HorseTable horseFee={'500pt'} SP={'10'} ST={'9'} instantaneous={'12'} guts={'12'} Temperament={'15'} health={'10'} HorseName={'馬名'} />
  // {label ? label : "Button"}
    return (
      <ScrollView style={styles.container}>
        <OfficeTableTemplate  
          tableHeadTitle={CONTENT.tableHeadTitle} 
          tableHeadValue1={CONTENT.tableHeadValue1} 
          tableHeadValue2={CONTENT.tableHeadValue2}
          tableHeadValue3={CONTENT.tableHeadValue3}
          tableData={CONTENT.tableData}
        />
      </ScrollView>
    )
  }
export default KnightScreen;

const styles = StyleSheet.create({
  container:{
    // height: 
    // flexDirection: 'column',
    // justifyContent: 'center'
    // alignItems: 'center'
  }
})