import React, {useEffect, useState} from 'react';
import { 
    Modal,
    View,
    Alert,
    StyleSheet,
    Text,
    Pressable
} from "react-native";
import { 
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons'; 
import MarryBloodlineSysTable from '../../../components/table/MarryBloodlineSysTable';
import NormalButton from '../../../components/Buttons/NormalButton';
import MarryBloodlineTable from '../../../components/table/MarryBloodlineTable';

const PedigreeTableModal = ({modalState, banner, onPress}) => {

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(()=>{

        setModalVisible(modalState);

    },[modalState]);

    const [state, setState] = useState(false);

    const handleState = () => {
        setState(!state);
    }

    return (
        <Modal
            animationType="fade" 
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>

                <View style={styles.modalContainer}>
                    <Pressable
                        style={styles.closeButton}
                        onPress={onPress}
                    >
                        <FontAwesome name="times" size={24} color="black" />
                    </Pressable>
                    {
                        state ? (
                            <MarryBloodlineTable
                                gender={banner.gender == "牝" ? 'girl' : 'man'}
                                horseName={banner.name}
                                father_name={banner.f_name}
                                father_f_name={banner.f_f_name}
                                father_m_name={banner.f_m_name}
                                mother_name={banner.m_name}
                                mother_f_name={banner.m_f_name}
                                mother_m_name={banner.m_m_name}
                                father_f_f_name={banner.f_f_f_name}
                                father_f_m_name={banner.f_f_m_name}
                                father_m_f_name={banner.f_m_f_name}
                                father_m_m_name={banner.f_m_m_name}
                                mother_f_f_name={banner.m_f_f_name}
                                mother_f_m_name={banner.m_f_m_name}
                                mother_m_f_name={banner.m_m_f_name}
                                mother_m_m_name={banner.m_m_m_name}
                                crossArray={''}
                                father_factor={banner.f_factor}
                                father_f_factor={banner.f_f_factor}
                                father_f_f_factor={banner.f_f_f_factor}
                                father_m_f_factor={banner.f_m_f_factor}
                                mother_f_factor={banner.m_f_factor}
                                mother_f_f_factor={banner.m_f_f_factor}
                                mother_m_f_factor={banner.m_m_f_factor}
                            />
                        ) : (
                            <MarryBloodlineSysTable
                                gender={banner.gender == "牝" ? 'girl' : 'man'}
                                horseName={banner.sys}
                                father_sys={banner.f_sys}
                                father_f_sys={banner.f_f_sys}
                                father_m_sys={banner.f_m_sys}
                                mother_sys={banner.m_sys}
                                mother_f_sys={banner.m_f_sys}
                                mother_m_sys={banner.m_m_sys}
                                father_f_f_sys={banner.f_f_f_sys}
                                father_f_m_sys={banner.f_f_m_sys}
                                father_m_f_sys={banner.f_m_f_sys}
                                father_m_m_sys={banner.f_m_m_sys}
                                mother_f_f_sys={banner.m_f_f_sys}
                                mother_f_m_sys={banner.m_f_m_sys}
                                mother_m_f_sys={banner.m_m_f_sys}
                                mother_m_m_sys={banner.m_m_m_sys}
                                father_factor={banner.f_factor}
                                father_f_factor={banner.f_f_factor}
                                father_f_f_factor={banner.f_f_f_factor}
                                father_m_f_factor={banner.f_m_f_factor}
                                mother_f_factor={banner.m_f_factor}
                                mother_f_f_factor={banner.m_f_f_factor}
                                mother_m_f_factor={banner.m_m_f_factor}
                            />
                        )
                    }

                </View>
                
                <NormalButton label={state ? "系  統" : "馬  名"}　buttonStyle={styles.changeButton} onPress={handleState}/>
            </View>
            
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        flexDirection: 'column',
        marginTop: hp(55)
    },
    modalContainer: {
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
    },
    changeButton: {
        width: 100, 
        backgroundColor: '#66ff99',
        left: wp(70)
    }
});

export default PedigreeTableModal;