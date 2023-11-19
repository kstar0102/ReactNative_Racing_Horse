import { 
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import styles from "./style";
import colors from "../../containers/colors";
import { horseColor } from "../../utils/globals";

import Echo from 'laravel-echo';
import { useEffect, useState } from "react";
import TimeCounter from "./TimeCounter";

window.Pusher = require('pusher-js');

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: "cd6c83a080012a4ba743",
  cluster: "mt1",
  forceTLS: false,
  wsHost: "192.168.144.23",
  wsPort: 6001,
  disableStats: true,
});

const SaleHorseCard = ({item, onPress}) => {

    const [highest_bidder, setHighestBidder] = useState("");
    const [highest_bid_amount, setHighestBidAmount] = useState("");
    const [remain_bidding_time, setRemainBiddingTime] = useState(0);
    const [closeAuction, setCloseAuction] = useState(false);

    useEffect(() => {
        window.Echo.channel('channel-name')
          .listen('MessageEvent', (e) => {
            if (item.id == e.horse_id) {
                setHighestBidder(e.highest_bidder);
                setHighestBidAmount(e.highest_bid_amount);
                setRemainBiddingTime(e.remain_bidding_time);
            }
          });
    }, []);

    const openModal = () => {
        if (!closeAuction) {
            onPress(item, highest_bid_amount ? highest_bid_amount : item.highest_bid_amount);
        }
    }

    return (
        <View style={{alignItems: 'center',}}>

            <TouchableOpacity onPress={openModal}>

                <View style={[styles.card, ((highest_bidder || item.highest_bidders) && closeAuction) && ({backgroundColor: '#00ff7f'})]}>
                    
                    <TimeCounter remain_bidding_time={remain_bidding_time ? remain_bidding_time : item.remain_bidding_time} setCloseAuction={setCloseAuction}/>

                    <View style={styles.listLabel}>

                    <View style={[styles.boughtPersonTag, {backgroundColor: 'red'}]}>

                        <Text style={styles.BigText}>{highest_bidder ? highest_bidder : (item.highest_bidders ? item.highest_bidders.name : "落札者なし")}</Text>

                    </View>
                        
                        <Text style={styles.BigText}>{highest_bid_amount ? highest_bid_amount : (item.highest_bid_amount ? item.highest_bid_amount : item.work_horses.etc)}Pt</Text>

                    </View>

                    {horseColor.map((colorName, index) => {
                        if (colorName[item.work_horses.color]) {
                            return (
                                <View key={`${index}`}>
                                    <Image
                                        style={styles.horseImage}
                                        source={colorName[item.work_horses.color]}
                                    />
                                    {
                                        ((highest_bidder || item.highest_bidders) && closeAuction) && (
                                            <Image
                                                source={require("../../assets/images/soldout.jpg")} 
                                                style={styles.soldImage}
                                            /> 
                                        )
                                    }
                                </View>
                            );
                        } else {
                        return null;
                        }
                    })}

                    <View style={styles.footerLabel}>

                        <Text style={styles.BigText}> 生産者:</Text>

                        <Text style={styles.SmallText}> {item.work_horses.user_id == 0 ? 'C O M': item.work_horses.users.name}</Text>
                        
                        {
                            item.work_horses.gender == '牡' ? (
                                <Text style={[styles.BigText, {color: colors.genderColorM}]}>       牡 </Text>
                            ) : (
                                <Text style={[styles.BigText, {color: colors.genderColorF}]}>       牝 </Text>
                            )
                        }
                        

                        <Text style={styles.BigText}> ・{item.work_horses.color} </Text>

                    </View>

                    <View style={styles.footerLabel}>

                        <Text style={styles.BigText}> 父 ：</Text>

                        <Text style={styles.BigText}> {item.work_horses.f_name} </Text>

                    </View>

                    <View style={styles.footerLabel}>

                        <Text style={styles.BigText}> 母 ：</Text>

                        <Text style={styles.BigText}> {item.work_horses.m_name} </Text>

                    </View>

                </View>

            </TouchableOpacity>

        </View>
    )
}

export default SaleHorseCard;