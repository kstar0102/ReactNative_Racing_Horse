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

    useEffect(()=>{

        setModalVisible(modalState);

    },[modalState]);

    const updateAuctionState = () => {
        if (bidAmount > highest_bid_amount) {
            dispatch(updateAuctionAction(item.id, user_id, bidAmount));
            onPress();
        }else{
            setError(true);
        }
    };

    return (
        <Modal
            animationType="fade" 
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>

                <View style={styles.modalContainer}>

                    <Text style={styles.text}>入札価格:</Text>

                    <TextInput style={styles.text_input} onChangeText={(text) => setBidAmount(text)} value={bidAmount} keyboardType='numeric'/>

                    {error ? (<Text style={styles.errorText}>入札金額は{highest_bid_amount}より高くする必要があります。</Text>) : ('') }

                    <Text style={styles.text}>この馬を購入いたしますか？</Text>

                    <View style={{alignItems: 'center'}}>

                        <View style={{flexDirection: 'row',}}>

                            <NormalButton label="はい" buttonStyle={{width: 100, backgroundColor: '#ff0066', marginRight: 20}} onPress={updateAuctionState}/>

                            <NormalButton label="いいえ"　buttonStyle={{width: 100, backgroundColor: '#66ff99'}} onPress={onPress}/>

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
    }
});

export default AuctionModal;