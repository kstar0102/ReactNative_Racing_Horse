import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Alert } from 'react-native';
// Redux
import { connect ,useDispatch } from 'react-redux';
import { stableAction } from '../../store/actions/truck/stableAction';
// Custom Import
import colors from '../../containers/colors';
    import { useNavigation } from '@react-navigation/native';

const AvatarButton = ({onPress, disabled, id, name, stableId, horseId, userId }) =>{
    const dispatch = useDispatch()
    const navigation = useNavigation();
    let sources = null;
    let nameShow = "";
    if(id == 1){
        sources = require('../../assets/images/avatars/1.png')
        nameShow = name;
    }else if( id == 2 ){
        sources = require('../../assets/images/avatars/2.png')
        nameShow = name;
    }else if( id == 3 ){
        sources = require('../../assets/images/avatars/3.png')
        nameShow = name;
    }else if( id == 4 ){
        sources = require('../../assets/images/avatars/4.png')
        nameShow = name;
    }
    else if( id == 5 ){
        sources = require('../../assets/images/avatars/5.png')
        nameShow = name;
    }
    else if( id == 6 ){
        sources = require('../../assets/images/avatars/6.png')
        nameShow = name;
    }
    else if( id == 7 ){
        sources = require('../../assets/images/avatars/7.png')
        nameShow = name;
    }
    else if( id == 8 ){
        sources = require('../../assets/images/avatars/8.png')
        nameShow = name;
    }
    else if( id == 9 ){
        sources = require('../../assets/images/avatars/9.png')
        nameShow = name;
    }
    else if( id == 10 ){
        sources = require('../../assets/images/avatars/10.png')
        nameShow = name;
    }
    else if( id == 11 ){
        sources = require('../../assets/images/avatars/11.png')
        nameShow = name;
    }
    else if( id == 12 ){
        sources = require('../../assets/images/avatars/12.png')
        nameShow = name;
    }
   const handlePress = () => {
        if(id){
          Alert.alert(
            "厩舎",
            nameShow+"に預けますか?",
            [
              {
                text: "いいえ",
                style: "cancel"
              },
              { 
                text: "はい",
                onPress:() =>  handleSendClick(stableId, horseId)
              }
            ],
            { cancelable: false }
          );
        }
    }

    const handleSendClick = (stableId, horseId) => {
        const sendIds = {
            'stall_id': stableId,
            'horse_id': horseId,
            'user_id': userId
        };
        dispatch(stableAction(sendIds));
        navigation.navigate('StallScreen')
    };

    return(
        <TouchableOpacity 
            style={[
                styles.button, 
                disabled && styles.disabled
            ]}
            onPress={onPress ? onPress : () => handlePress(stableId, horseId)}
            disabled={disabled ? disabled : false}
        >
        <Image 
            style={styles.avatarImage}
            source={sources}
        />
        </TouchableOpacity>
    )
}

const mapStateToProps = state => {
    return{
        userId: state.user.userData.id
    }
}

export default connect(mapStateToProps)(AvatarButton);

const styles = StyleSheet.create({
    absoluteView: {
    },
    label:{
        color: colors.black,
        borderWidth: 1,
        borderColor: colors.white,
        fontWeight: 600,
    },
    avatarImage: {
        width: 95,
    height: 95
    },
    imgBorder: {
        borderWidth: 1,
        borderColor: colors.black,
        backgroundColor: '#6a6d6b',
        borderRadius: 8
    },
    button: {
        position: 'relative',
        alignItems: 'center',
    },
    TooltipContent:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});