import React, {useEffect, useState} from 'react';
import { 
    Modal,
    View,
    StyleSheet,
    Text,
} from "react-native";
import { 
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import NormalButton from '../../../components/Buttons/NormalButton';
import { updateSaleStateAction } from '../../../store/actions/Pasture/saleAction';
import { useDispatch } from 'react-redux';

const SaleModal = ({modalState, onPress, etc, horse_id, user_id, pasture_id}) => {

    const dispatch = useDispatch();

    const [modalVisible, setModalVisible] = useState(modalState);

    useEffect(()=>{

        setModalVisible(modalState);

    },[modalState]);

    const updateSaleState = () => {
        dispatch(updateSaleStateAction(horse_id, user_id, pasture_id));
        onPress();
    };

    return (
        <Modal
            animationType="fade" 
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>

                <View style={styles.modalContainer}>
                    
                    <Text style={styles.text}>この馬を売却しますか?</Text>

                    <Text style={styles.text}>この馬は{etc}Pt からセリに出せます!</Text>

                    <View style={{alignItems: 'center'}}>

                        <View style={{flexDirection: 'row',}}>

                            <NormalButton label="はい" buttonStyle={{width: 100, backgroundColor: '#ff0066', marginRight: 20}} onPress={updateSaleState}/>

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
        padding: 5
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
    },
    text: {
        fontSize: 18
    }
});

export default SaleModal;