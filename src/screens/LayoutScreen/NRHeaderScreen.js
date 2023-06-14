import React from 'react';
import {Text, View, SafeAreaView } from 'react-native';
import HeaderStyleSheet from './HeaderStylesheet';

const NRHeaderScreen = () => {
  return (
    <SafeAreaView style={HeaderStyleSheet.NRHcontainer}>
      {/* Header Start */}
      <View style={HeaderStyleSheet.NRHeaderContent}>
            <View style={HeaderStyleSheet.NRHeaderLogo}>
                <Text style={HeaderStyleSheet.NRHeaderTextTop}>
                    ■ 新規登録
                </Text>
            </View>
            <View style={HeaderStyleSheet.NRHeaderTextGroup}>
                <Text style={HeaderStyleSheet.NRHeaderText}>
                    新しい牧場を作る !
                </Text>
            </View>
      </View>
    </SafeAreaView>
  );
};

export default NRHeaderScreen;