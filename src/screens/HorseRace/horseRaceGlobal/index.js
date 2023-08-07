import {
  Animated,
} from "react-native";

export const firstTiming = (x) => {
  y = x / 5 + x / 20;
  return y;
};

export const firstSpeedController = (reaceReigsterData, time) => {
  let speed = [];
  reaceReigsterData.map((item) => {
    if (item.quality_leg == "逃") {
      speed.push(time - time * 0.15);
    }
    if (item.quality_leg == "追") {
      speed.push(time);
    }
    if (item.quality_leg == "大逃") {
      speed.push(time - time * 0.2);
    }
    if (item.quality_leg == "先" || item.quality_leg == "自在") {
      speed.push(time - time * 0.1);
    }
    if (item.quality_leg == "差" || item.quality_leg == "まくり") {
      speed.push(time - time * 0.05);
    }
  });
  return speed;
};


export const raceTime = (raceWidths) => {
  if (typeof raceWidths !== "number") {
    return;
  }
  let result = "";
  switch (true) {
    case raceWidths >= 1000 && raceWidths <= 1600:
      result = 30000;
      break;
    case raceWidths >= 1700 && raceWidths <= 2400:
      result = 40000;
      break;
    case raceWidths >= 2500 && raceWidths <= 3200:
      result = 50000;
      break;
    case raceWidths >= 3300:
      result = 60000;
      break;
    default:
      return;
  }
  return result;
};

export const weatherType = (weather) => {
  let result = "";
  switch (true) {
    case weather == "雨":
      result = require("../../../assets/horseImageData/NewBack/S-3.png");
      break;
    case weather == "雪":
      result = require("../../../assets/horseImageData/NewBack/S-3.png");
      break;
    case weather == "晴":
      result = require("../../../assets/horseImageData/NewBack/S-1.png");
      break;
    case weather == "曇":
      result = require("../../../assets/horseImageData/NewBack/S-2.png");
    default:
      return;
  }
  return result;
};


export const groundType = (ground, glasss, grouns) => {


  let result = "";
  switch (true) {
    case ground == "芝": {
      let gls;
      const randomNumber = Math.floor(Math.random() * 3) + 0;
      gls = glasss[randomNumber];
      result = gls;
      break;
    }
    case ground == "ダ": {
      const randomNumber = Math.floor(Math.random() * 3) + 0;
      grn = grouns[randomNumber];
      result = grn;
      break;
    }
    default:
      return;
  }
  return result;
};
