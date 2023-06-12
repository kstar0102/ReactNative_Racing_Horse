import React, { useState, useEffect, useContext } from 'react';

const CountdownContext = React.createContext();

// Hook for child components to get the countdown context
export const useCountdown = () => {
  return useContext(CountdownContext);
};

const NewCount = ({ children, totalTimeInSeconds }) => {
  const [timer, setTimer] = useState({
    hours: Math.floor(totalTimeInSeconds / 3600),
    minutes: Math.floor((totalTimeInSeconds % 3600) / 60),
    seconds: totalTimeInSeconds % 60,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        let { hours, minutes, seconds } = prevTimer;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const resetTimer = () => {
    setTimer({
      hours: Math.floor(totalTimeInSeconds / 3600),
      minutes: Math.floor((totalTimeInSeconds % 3600) / 60),
      seconds: totalTimeInSeconds % 60,
    });
  };

  const value = {
    timer,
    resetTimer,
  };

  return (
    <CountdownContext.Provider value={value}>
      {children}
    </CountdownContext.Provider>
  );
};

export default NewCount;
