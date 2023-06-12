import React from 'react';
import {Text, View,SafeAreaView, ImageBackground, Image} from 'react-native';
import HeaderStyleSheet from './HeaderStylesheet';

const LHeaderScreen = () => {
  return (
    <SafeAreaView style={HeaderStyleSheet.LHcontainer}>
      {/* Header Start */}
      <View style={HeaderStyleSheet.LHeaderContent}>
            <View style={HeaderStyleSheet.LHeaderLogo}>
                <Image 
                    style={HeaderStyleSheet.LheaderLogoImage}
                    source={require('../../assets/images/logo.png')}
                />
            </View>
            <View style={HeaderStyleSheet.LHeaderTextGroup}>
                <Text style={HeaderStyleSheet.LHeaderText}>
                    ようこそ!
                </Text>
                <Text style={HeaderStyleSheet.LHeaderText}>
                    『ダービードリーム』の世界へ!
                </Text>
            </View>
      </View>
    </SafeAreaView>
  );
};

export default LHeaderScreen;