import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
    // Header Table
        lifetimeMaturity: ['通 算 成 積'],
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
                        通 算 成 績
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
                        <Text style={[styles.txt, styles.hiddenTxtDotes]}>
                            隠しGI
                        </Text>
                    </View>
                    <View style={styles.hiddenWin}>
                        <Text style={[styles.txt]}>
                            100勝
                        </Text>
                    </View>
                    <View style={styles.hiddenWinRate}>
                        <Text style={[styles.txt, styles.hiddenTxtDotes, styles.hiddenColor]}>
                            勝率
                        </Text>
                    </View>
                    <View style={styles.hiddenPercent}>
                        <Text style={[styles.txt, styles.hiddenTxt]}>
                            50%
                        </Text>
                    </View>
                </View>
                {/*  */}
                <View style={styles.twoColumn}>
                    <View style={styles.overseasContent}>
                        <View style={styles.overseas}>
                            <Text style={[styles.txt, styles.overseasTxtDotes]}>
                                海外GI
                            </Text>
                        </View>
                        <View style={styles.overseasWin}>
                            <Text style={[styles.txt]}>
                            100勝
                            </Text>
                        </View>
                    </View>
                    

                    <View style={styles.overseasContent}>
                        <View style={styles.overseasGrass}>
                            <Text style={[styles.txt, styles.overseasTxtDotes, styles.overseasColor]}>
                            芝
                            </Text>
                        </View>
                        <View style={styles.overseasPercent}>
                            <Text style={[styles.txt]}>
                            50%
                            </Text>
                        </View>
                    </View>
                </View>
                {/*  */}
                <View style={styles.threeColumn}>
                    <View style={styles.domestic}>
                        <Text style={[styles.txt, styles.domesticTxtDotes]}>
                            国内GI
                        </Text>
                    </View>
                    <View style={styles.domesticWin}>
                        <Text style={[styles.txt]}>
                        100勝
                        </Text>
                    </View>
                    
                    <View style={styles.domesticDirt}>
                        <Text style={[styles.txt,styles.domesticTxtDotes, styles.domesticColor]}>
                        ダート
                        </Text>
                    </View>
                    <View style={styles.domesticPercent}>
                        <Text style={[styles.txt]}>
                        50%
                        </Text>
                    </View>

                </View>
            </View>
            <View style={styles.lifetimeMaturity}>
                <View style={styles.lifetimeMaturityName}>
                    <Text style={styles.lifetimeMaturityTxt}>
                        獲 得 賞 金
                    </Text>
                </View>
                <View style={styles.lifetimeMaturityValue}>
                    <Text style={styles.lifetimeMaturityNumber}>
                        300,000,000
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
        marginTop: 60
    },
    content:{
        width: 200,
        borderWidth: 2,
        textAlign:'center',
    },
    lifetimeMaturityTxt:{
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: '#b2cefd'
    },
    lifetimeMaturityNumber:{
        fontSize: 18,
        textAlign: 'center',
        borderTopWidth: 2,
        borderStyle: 'dotted',
        backgroundColor: '#fff'
    },
    bodyContent:{
        flexDirection: 'row',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        textAlign: 'center',
    },
    oneColumn:{
        borderRightWidth: 2,
        
    },
    twoColumn:{
        borderRightWidth: 2,
    },
    hidden:{
    },
    overseas:{
    },
    txt:{
        paddingVertical:2,
        paddingHorizontal: 5,
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: '#fff'
    },
    domestic:{
    },
    // BACKGROUND COLOR
    hiddenTxtDotes:{
        borderBottomWidth: 2,
        borderStyle: 'dotted',
        backgroundColor: '#ef907f'
    },
    hiddenColor:{
        backgroundColor: '#facffb'
    },
    overseasTxtDotes:{
        borderBottomWidth: 2,
        borderStyle: 'dotted',
        backgroundColor: '#f7b0ab'
    },
    overseasColor:{
        backgroundColor: '#68ff99'
    },
    domesticTxtDotes:{
        borderBottomWidth: 2,
        borderStyle: 'dotted',
        backgroundColor: '#fbdcd7'
    },
    domesticColor:{
        backgroundColor: '#ffcca5'
    },
});