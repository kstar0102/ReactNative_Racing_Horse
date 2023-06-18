import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import colors from '../containers/colors';

/**
 * 
 */
const CurrentData = () => {
    const [currentHour , setCurrentHour] = useState();
    const [currentMinute , setCurrentMinute] = useState();
    const [currentSecond , setCurrentSecond] = useState();
    useEffect(() => {
        const timer = setInterval(() => {
            let currentTime = new Date();
            let hour = currentTime.getHours();
            let minute = currentTime.getMinutes();
            let second = currentTime.getSeconds();
            let hourStr = hour.toString().padStart(2,'0');
            let minuteStr = minute.toString().padStart(2,'0');
            let secondStr = second.toString().padStart(2,'0');
            setCurrentHour(hourStr);
            setCurrentMinute(minuteStr);
            setCurrentSecond(secondStr);
        },1000)
        return () => clearInterval(timer)
    })
    return(
        <>
          <View>
              <Text 
                style={styles.currentHourStyle}
              >
                {currentHour}:{currentMinute}:{currentSecond}
              </Text>
          </View>

        </>
    )
}
export default CurrentData;

const styles = StyleSheet.create({
  currentHourStyle:{
    fontSize: 36,
    color: colors.white,
    fontWeight: 700,
  }
})