import React from 'react';
import { Text, Button } from 'react-native';
import { useCountdown } from './NewCount';

const CountDisplay = () => {
  const { timer, resetTimer } = useCountdown();

  const handleReset = () => {
    resetTimer();
  };

  return (
    <>
      <Text>
        {`${timer.hours.toString().padStart(2, '0')}:${timer.minutes
          .toString()
          .padStart(2, '0')}:${timer.seconds.toString().padStart(2, '0')}`}
      </Text>
      <Button title="Reset" onPress={handleReset} />
    </>
  );
};

export default CountDisplay;