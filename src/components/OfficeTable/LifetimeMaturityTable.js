import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
    // Header Table
        lifetimeMaturity: ['通 算 成 精'],
        lifetimeMaturityValue: ['100-100-100-100'],
    // Footer Talble
        PrizeMoneyEarned: ['通 算 成 精'],
        PrizeMoneyEarnedValue: ['300,000,000'],
    // Prize money PrizeMoneyEarned
    tableHead: ['Column 3', 'Column 3','Column 3'],
    tableTitle: ['Row', 'Row 2', 'Row 3', 'Row 4'],
    tableData: [
        ['隠しGI', '海外GI', '国内GI'],
        ['100勝', '100勝', '100勝'],
        ['勝率', '芝', 'ダート'],
        ['50%', '50%', '50%'],
    ],

};

 const LifetimeMaturityTable = () => {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.lifetimeMaturity}>
                <View style={styles.lifetimeMaturityName}>
                    <Text style={styles.lifetimeMaturityTxt}>
                        通 算 成 精
                    </Text>
                </View>
                <View style={styles.lifetimeMaturityValue}>
                    <Text style={styles.lifetimeMaturityNumber}>
                        100-100-100-100
                    </Text>
                </View>
            </View>
            {/* hidden GI */}
{/* Overseas GI */}
{/* Domestic GI */}
            <View style={styles.bodyContent}>
                <View style={styles.oneColumn}>
                    <View style={styles.hidden}>
                        <Text style={styles.hiddenTxt}>
                            隠しGI
                        </Text>
                    </View>
                    <View style={styles.hiddenWin}>
                        <Text style={styles.hiddenTxt}>
                        100勝
                        </Text>
                    </View>
                    <View style={styles.hiddenWinRate}>
                        <Text style={styles.hiddenTxt}>
                        勝率
                        </Text>
                    </View>
                    <View style={styles.hiddenPercent}>
                        <Text style={styles.hiddenTxt}>
                        50%
                        </Text>
                    </View>
                </View>
                {/*  */}
                <View style={styles.twoColumn}>
                    <View style={styles.overseas}>
                        <Text style={styles.overseasTxt}>
                            隠しGI
                        </Text>
                    </View>
                    <View style={styles.overseasWin}>
                        <Text style={styles.overseasTxt}>
                        100勝
                        </Text>
                    </View>
                    <View style={styles.overseasGrass}>
                        <Text style={styles.overseasTxt}>
                        芝
                        </Text>
                    </View>
                    <View style={styles.overseasPercent}>
                        <Text style={styles.overseasTxt}>
                        50%
                        </Text>
                    </View>
                </View>
                {/*  */}
                <View style={styles.threeColumn}>
                    <View style={styles.domestic}>
                        <Text style={styles.domesticTxt}>
                            隠しGI
                        </Text>
                    </View>
                    <View style={styles.domesticWin}>
                        <Text style={styles.domesticTxt}>
                        100勝
                        </Text>
                    </View>
                    <View style={styles.domesticDirt}>
                        <Text style={styles.domesticTxt}>
                        ダート
                        </Text>
                    </View>
                    <View style={styles.domesticPercent}>
                        <Text style={styles.domesticTxt}>
                        50%
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.lifetimeMaturity}>
                <View style={styles.lifetimeMaturityName}>
                    <Text style={styles.lifetimeMaturityTxt}>
                        通 算 成 精
                    </Text>
                </View>
                <View style={styles.lifetimeMaturityValue}>
                    <Text style={styles.lifetimeMaturityNumber}>
                        100-100-100-100
                    </Text>
                </View>
            </View>
        </View>
    </View>
  );
};

export default LifetimeMaturityTable;

const styles = StyleSheet.create({
    container:{
        textAlign:'center',
        alignItems: 'center',

    },
    content:{
        width: 200,
        borderWidth: 2,
        textAlign:'center',
    },
    lifetimeMaturity:{
        // textAlign:'center',
        // flexDirection: 'column',

    },
    lifetimeMaturityName:{
        
        // width:100,
    },
    lifetimeMaturityTxt:{
        // borderBottomWidth: 2,
    },
    lifetimeMaturityValue:{
        // borderTopWidth: 2
    },
    lifetimeMaturityNumber:{

    },
    bodyContent:{
        flexDirection: 'row',
        // width: 150,
        // justifyContent: 'space-around',
        borderTopWidth: 2,
        borderBottomWidth: 2
    },
    oneColumn:{
        borderRightWidth: 2,
    },
    twoColumn:{
        borderRightWidth: 2,
    },
  
    hidden:{
        // borderTopWidth: 2,
    },
    hiddenTxt:{
        fontSize: 18,
        borderBottomWidth: 2,
    },
    overseas:{
        // borderRightWidth: 2,
    },
    overseasTxt:{
        fontSize: 18,
        borderBottomWidth: 2,
    },

    domestic:{
        // borderRightWidth: 2,
    },
    domesticTxt:{
        fontSize: 18,
        borderBottomWidth: 2,
    }
});