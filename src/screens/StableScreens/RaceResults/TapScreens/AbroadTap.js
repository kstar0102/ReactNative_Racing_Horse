import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
// Redux
import { connect } from 'react-redux';

// Custom import
import StableStyles from '../../StableStyles';

const AbroadTap = () => {
    return (
        <ScrollView style={StableStyles.stallContainer}>
            <View
                style={StableStyles.abroadTap}

            >
                <View style={StableStyles.stallGroup}>
                    <Text> 国沢厩舎</Text>
                    <Text> ・通算成績:○戦 ○勝 ○敗</Text>
                    <Text> ・勝率:0%</Text>
                    <Text> ・預託数:1530頭</Text>
                    <Text> ・代表馬:</Text>
                    <Text>     A号(○號○肠,10億5000万,有記念)</Text>
                    <Text>     B号(○戦○勝,5億7000万,日本第一七一)</Text>
                    <Text>     C号(○號○膀,30000万,面館2歲于一个)</Text>
                </View>

                <View style={StableStyles.stallGroup}>
                    <Text> 堀塚厩舎</Text>
                    <Text> ・通算成績:○戦 ○勝 ○敗</Text>
                    <Text> ・勝率:0%</Text>
                    <Text> ・預託数:160頭</Text>
                    <Text> ・代表馬:</Text>
                    <Text>     D号(○戦○勝,1億5000万,皐月賞)</Text>
                </View>

                <View style={StableStyles.stallGroup}>
                    <Text> 木藤廐舎</Text>
                    <Text> ・通算成績:○戦 ○勝 ○敗</Text>
                    <Text> ・勝率:0%</Text>
                    <Text> ・預託数:1530頭</Text>
                    <Text> ・代表馬:</Text>
                    <Text>     E号(○戦○勝,9000万,八C)</Text>
                </View>
            </View>
            <Image
                style={[StableStyles.RaceLockBlur]}
                source={require('../../../../assets/images/6.png')}
                blurRadius={Platform.OS === 'ios' ? 10 : 4}
           />
            <Image
                style={[StableStyles.RaceLockIcon]}
                source={require('../../../../assets/images/Lock.png')}
            />
             
        </ScrollView>
    )
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(AbroadTap);