import { 
    View, 
    Text, 
    ImageBackground, 
    Image 
} from "react-native";

import HeaderScreen from "../LayoutScreen/HeaderScreen";
import FooterScreen from "../LayoutScreen/FooterScreen";

import Screenstyles from "../ScreenStylesheet";
import { ScrollView } from "react-native";
import styles from "./style";
import DropDwonM from "../../components/Buttons/DropDwonM";
import { useEffect, useState } from "react";
import colors from "../../containers/colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import SaleHorseCard from "./SaleHorseCard";
import { getSaleHorseDataAction } from "../../store/actions/Pasture/saleAction";
import AuctionModal from "./AuctionModal";
import NormalButtonGrop from "../../components/Buttons/NormalButtonGrop";

export default Auction = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const saleHorseData = useSelector(state => state.horseData.saleHorseData);
    const userData = useSelector(state => state.user.userData);

    const [selected, setSelected] = useState([]);
    const [selectedId, setSelectedID] = useState(0);
    const [modalAuctionVisible, setModalActionVisible] = useState(false);
    const [horseData, setHorseData] = useState([]);

    const data = [
        {
            "id" : 1,
            "name": "・0歳馬"
        },
        {
            "id" : 2,
            "name": "・1歳馬"
        },
        {
            "id" : 3,
            "name": "・2歳馬"
        },
        {
            "id" : 4,
            "name": "・繁殖馬"
        }
    ];

    useEffect(()=>{
        dispatch(getSaleHorseDataAction());
    },[]);
    
    useEffect(()=>{
        const saleHorseArray = Object.values(saleHorseData);
        const selectData = saleHorseArray.filter((item) => item.work_horses.age == '・0歳馬');
        setSelected(selectData);
    },[saleHorseData]);

    const [highestBidAmount, setHighestBidAmount] = useState();

    const handleMainModalAuctionVisible = (item, highest_bid_amount) => {
        setHorseData(item);
        setModalActionVisible(!modalAuctionVisible);
        setHighestBidAmount(highest_bid_amount);
    }
    console.log(highestBidAmount, "highestBidAmount");
    const handleModalAuctionVisible = () => {
        setModalActionVisible(!modalAuctionVisible);
    }

    const handleSettingId = (value) => {

        setSelectedID(value.id);

        let selectData;
        
        const saleHorseArray = Object.values(saleHorseData);

        if (value.name == '繁殖馬') {

            selectData = saleHorseArray.filter((item) => item.work_horses.age == value.name);

        }else{

            selectData = saleHorseArray.filter((item) => item.work_horses.age == value.name);

        }
       
        setSelected(selectData);
    }

    const handleFirstEvent = () => {
        const saleHorseArray = Object.values(saleHorseData);
        const selectData = saleHorseArray.filter((item) => item.work_horses.age == '・0歳馬');
        setSelected(selectData);
        
        setSelectedID(0);

        navigation.navigate("PastureScreen");
    };

    return (
        <View style={Screenstyles.container}>

            <ImageBackground
                source={require("../../assets/images/1.png")}
                resizeMode="cover"
                style={Screenstyles.img}
            >

                <HeaderScreen />

                <View style={{flexDirection: 'row'}}>

                    <NormalButtonGrop
                        BigPlace={"牧 場"}
                        screenName={"セ リ"}
                        onFirstEvent={handleFirstEvent}
                    />

                    <View style={styles.horseDropdown}> 

                        <DropDwonM
                            name={data[0].name}
                            data={data}
                            onSelect={setSelected}
                            setId={handleSettingId}
                            selectedId={selectedId}
                        />

                    </View>

                </View>

                <View style={Screenstyles.auctionContainers}>
                    
                    <ScrollView>

                        <View style={Screenstyles.auctionContent}>

                            {

                                selected.map((item)=>(
                                    
                                    <SaleHorseCard key={item.id} item={item} onPress={handleMainModalAuctionVisible} user_id={userData.id} user_name={userData.name}/>

                                ))

                            }

                        </View>

                    </ScrollView> 

                </View>

                <FooterScreen />

                <AuctionModal modalState={modalAuctionVisible} onPress={handleModalAuctionVisible} item={horseData} user_id={userData.id} highest_bid_amount={highestBidAmount} user_pt={userData.user_pt} />

            </ImageBackground>

        </View>
    )

};