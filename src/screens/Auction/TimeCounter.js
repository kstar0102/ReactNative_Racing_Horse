import React, { useState, useEffect } from 'react';
import { 
    Text,
} from 'react-native';
import styles from './style';

const TimeCounter = ({remain_bidding_time, setCloseAuction}) => {

    const [endingTime, setEndingTime] = useState(null);
    const [time, setTime] = useState({ hours: '', minutes: '', seconds: '' });

    useEffect(()=>{
        const startingTime = new Date();
        console.log("startingTime", startingTime);
        const currentHour = startingTime.getHours();
        if (currentHour >= 12) {
            startingTime.setHours(12);
            startingTime.setMinutes(0);
            startingTime.setSeconds(0);
            setEndingTime(new Date(startingTime.getTime() + `${remain_bidding_time}` * 60 * 60 * 1000));
        }else{
            startingTime.setDate(startingTime.getDate() - 1);
            startingTime.setHours(12);
            startingTime.setMinutes(0);
            startingTime.setSeconds(0);
            setEndingTime(new Date(startingTime.getTime() + `${remain_bidding_time}` * 60 * 60 * 1000));
        }
    }, [remain_bidding_time]);
    console.log("===================", new Date());
    useEffect(() => {
        if (endingTime) {
            const interval = setInterval(() => {
                const currentTime = new Date();
                // Calculate the remaining time in milliseconds
                console.log("endingTime", endingTime);
                console.log("currentTime", currentTime);
                console.log("remain_bidding_time", remain_bidding_time);
                const remainingTime = endingTime.getTime() - currentTime.getTime();
                if (remainingTime <= 0) {
                    // If the countdown has ended, set the time to 0
                    setTime({ hours: 0, minutes: 0, seconds: 0 });
                    clearInterval(interval);
                    setCloseAuction(true);
                } else {
                    // Calculate the remaining time in hours, minutes, and seconds
                    const remainingHours = Math.floor(remainingTime / (60 * 60 * 1000));
                    const remainingMinutes = Math.floor(
                        (remainingTime % (60 * 60 * 1000)) / (60 * 1000)
                    );
                    const remainingSeconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
        
                    setTime({ hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds });
                }
                }, 1000);
        
                // Clear interval on component unmount
            return () => clearInterval(interval);
        }
    }, [endingTime]);


    const formatTime = (timeValue) => {
        return timeValue.toString().padStart(2, '0');
    };

    return (
        <Text style={styles.BigText}>
            {(time.hours == 0 && time.minutes == 0 && time.seconds == 0) ? '' : `残り: ${formatTime(time.hours)}時間${formatTime(time.minutes)}分${formatTime(time.seconds)}秒`}
        </Text>
    );
};

export default TimeCounter;