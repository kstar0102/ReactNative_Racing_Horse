import React, { createContext, useState, useEffect } from 'react';
export const CountdownContext = createContext();



const CountdownProvider = ({ children }) => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    let intervalId;
    if (seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <CountdownContext.Provider value={{ seconds }}>
      {children}
    </CountdownContext.Provider>
  );
};

export default CountdownProvider;