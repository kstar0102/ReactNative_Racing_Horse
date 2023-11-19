import * as React from 'react';
import { 
    ScrollView, 
    Text, 
    View 
} from 'react-native';
import DropdownR from '../../../components/Buttons/DropDwonR';
import STapScreensStyle from "./STapScreensStyle";

const NoData = () => {
    return (
        <ScrollView style={STapScreensStyle.twoContainer}>

            <View style={STapScreensStyle.oneTopContent}>

                <View style={STapScreensStyle.oneTopContentLeft}>
                <Text style={STapScreensStyle.oneRightContentTxt}>所有馬一覧</Text>
                <DropdownR
                    name={"選択できる馬がいない！"}
                />
                </View>

            </View>

        </ScrollView>
    )
}

export default NoData;