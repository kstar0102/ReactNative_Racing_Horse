import { useState, useEffect } from "react";

const CustomHook = ({ saveData }) => {
  const [banner, setBanner] = useState(saveData[0]);
  // Ground Color
  const [groundColor, setGroundColor] = useState("#1BFF00");

  useEffect(() => {
    setBanner(saveData[0]);
    if (saveData[0].ground == "ダ") {
      setGroundColor("#707172");
    } else if (saveData[0].ground == "芝") {
      setGroundColor("#1BFF00");
    } else if (saveData[0].ground == "万") {
      setGroundColor("red");
    }
  }, [saveData]);

  return banner, groundColor;
};

export default CustomHook;
