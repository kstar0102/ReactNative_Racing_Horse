import React, {useEffect, useState} from 'react';
import { 
    Modal,
    View,
    StyleSheet,
    Text,
    TextInput
} from "react-native";
import { 
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import NormalButton from '../../components/Buttons/NormalButton';
import { updateAuctionAction } from '../../store/actions/Pasture/saleAction';
import { useDispatch } from 'react-redux';

const AuctionModal = ({modalState, onPress, item, user_id, highest_bid_amount}) => {

    const dispatch = useDispatch();

    const [modalVisible, setModalVisible] = useState(modalState);
    const [bidAmount, setBidAmount] = useState();
    const [error, setError] = useState(false);
    const [maxAmount, setMaxAmount] =  useState();
    const [digit, setDigit] = useState(2);

    useEffect(()=>{

        setModalVisible(modalState);

        if (highest_bid_amount != undefined) {
            setDigit(Math.floor(Math.log10(highest_bid_amount)) + 1);
        }

    },[modalState]);

    const updateAuctionState = () => {

        const standNumber = (highest_bid_amount ? highest_bid_amount : item.work_horses.etc) * 1;

        let plusNumber; 

        if (standNumber >= 1000 && 10000 > standNumber) {
            plusNumber = 100;
        }else if (standNumber >= 10000 && 100000 > standNumber) {
            plusNumber = 1000;
        }else if (standNumber >= 100000) {
            plusNumber = 10000;
        }else{
            plusNumber = 0;
        }

        let max_amount = standNumber + plusNumber;

        if (bidAmount == undefined || bidAmount * plusNumber < max_amount) {

            setMaxAmount(max_amount);
                
            setError(true);

        }else{

            dispatch(updateAuctionAction(item.id, user_id, bidAmount * plusNumber));
            setBidAmount();
            setError(false);
            onPress();
            
        }
    };

    const closeModal = () => {
        setError(false);
        setBidAmount();
        onPress();
    }

    const letter = "0";

    return (
        <Modal
            animationType="fade" 
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>

                <View style={styles.modalContainer}>

                    <Text style={styles.text}>入札価格:</Text>

                    <View style={{position: 'relative'}}>
                        <TextInput style={[styles.text_input, { paddingRight: digit * wp(2.5) }]} onChangeText={(text) => setBidAmount(text)} value={bidAmount} keyboardType='numeric' textAlign='right'/>
                        <Text style={styles.rightText}>{letter.repeat(digit-2)}pt </Text>
                    </View>

                    {error && (<Text style={styles.errorText}>最低入札金額[{maxAmount}]を下回っています。</Text>)  }

                    <Text style={styles.text}>この馬を入札しますか？</Text>

                    <View style={{alignItems: 'center'}}>

                        <View style={{flexDirection: 'row',}}>

                            <NormalButton label="はい" buttonStyle={{width: 100, backgroundColor: '#ff0066', marginRight: 20}} onPress={updateAuctionState}/>

                            <NormalButton label="いいえ"　buttonStyle={{width: 100, backgroundColor: '#66ff99'}} onPress={closeModal}/>

                        </View>

                    </View>

                </View>
                
            </View>
            
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: '#bdd7ee',
        width: wp(92),
        padding: 10
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
    },
    text: {
        fontSize: 18
    },
    text_input: {
        marginVertical: hp(1.5),
        fontSize: 18,
        borderWidth: 1
    },
    errorText: {
        fontSize: 16,
        color: 'red'
    },
    rightText: {
        position: 'absolute', 
        right:0, 
        top: hp(1.85), 
        fontSize: 18
    }
});

export default AuctionModal;