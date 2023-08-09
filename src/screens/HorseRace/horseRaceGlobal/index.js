export const firstTiming = (x) => {
  const y = x / 5 + x / 20;
  return y;
};

export const secondTiming = (x) => {
  if (x.length === 0) {
    // Handle empty array case
    return 0; // Or any other default value/error handling approach you prefer
  }

  const sum = x.reduce((total, current) => total + current, 0);
  const value = sum / x.length / 5;
  return value;
};

export const threeTiming = (x, y, z) => {
  if (x.length === 0) {
    // Handle empty array case
    return 0; // Or any other default value/error handling approach you prefer
  }

  const sum = x.reduce((total, current) => total + current, 0);
  const value = sum / x.length - y - z;
  const result = value / 3;
  return result;
};

export const fourTiming = (x, y, z, j) => {
  if (x.length === 0) {
    // Handle empty array case
    return 0; // Or any other default value/error handling approach you prefer
  }

  const sum = x.reduce((total, current) => total + current, 0);
  const value = sum / x.length - y - z - j;
  const result = value / 2;
  return result;
};

export const firstSpeedController = (raceRegisterData, time) => {
  let speed = [];
  raceRegisterData.forEach((item) => {
    if (item.quality_leg === "逃") {
      speed.push(time - time * 0.15);
    }
    if (item.quality_leg === "追") {
      speed.push(time);
    }
    if (item.quality_leg === "大逃") {
      speed.push(time - time * 0.2);
    }
    if (item.quality_leg === "先" || item.quality_leg === "自在") {
      speed.push(time - time * 0.1);
    }
    if (item.quality_leg === "差" || item.quality_leg === "まくり") {
      speed.push(time - time * 0.05);
    }
  });
  return speed;
};

export const secondSpeedController = (
  racingHorseData,
  speeds,
  firstSpeed,
  time
) => {
  let secondSpeed = [];
  let sps = [];
  racingHorseData.forEach((item) => {
    if (
      item[0] &&
      item[0].speed_b !== undefined &&
      item[0].speed_w !== undefined
    ) {
      sps.push(item[0].speed_b - -item[0].speed_w);
    }

    if (item[0] && item[0].quality_leg === "追") {
      sps[sps.length - 1] *= 0.05;
    }
  });

  speeds.forEach((item, index) => {
    secondSpeed.push(
      firstSpeed[index] -
        (item + sps[index]) * 10 -
        (firstSpeed[index] - (item + sps[index]) * 10) / 5
    );
  });

  return secondSpeed;
};

export const threeSpeedController = (
  racingHorseData,
  speeds,
  firstSpeed,
  time
) => {
  let threeSpeed = [];
  let sps = [];
  racingHorseData.forEach((item, i) => {
    if (
      item[0] &&
      item[0].strength_b !== undefined &&
      item[0].strength_w !== undefined
    ) {
      sps.push(item[0].strength_b - -item[0].strength_w);
    }
    if (item[0] && item[0].quality_leg === "差") {
      sps[sps.length - 1] *= 0.05;
    }
  });
  speeds.forEach((item, i) => {
    threeSpeed.push(
      firstSpeed[i] -
        (item + sps[i]) * 10 -
        (2 * (firstSpeed[i] - (item + sps[i]) * 10)) / 5
    );
  });

  return threeSpeed;
};

export const fourSpeedController = (
  racingHorseData,
  speeds,
  firstSpeed,
  time
) => {
  let fourSpeed = [];
  let sps = [];
  racingHorseData.forEach((item, i) => {
    if (
      item[0] &&
      item[0].moment_b !== undefined &&
      item[0].moment_w !== undefined
    ) {
      sps.push(item[0].moment_b - -item[0].moment_w);
    }

    if (item[0] && item[0].quality_leg === "先") {
      sps[sps.length - 1] *= 0.05;
    }
  });

  speeds.forEach((item, i) => {
    fourSpeed.push(
      firstSpeed[i] -
        (item + sps[i]) * 10 -
        (3 * (firstSpeed[i] - (item + sps[i]) * 10)) / 5
    );
  });

  return fourSpeed;
};

export const fiveSpeedController = (
  racingHorseData,
  speeds,
  firstSpeed,
  time
) => {
  let fiveSpeed = [];
  let sps = [];
  racingHorseData.forEach((item, i) => {
    if (
      item[0] &&
      item[0].stamina_b !== undefined &&
      item[0].stamina_w !== undefined
    ) {
      sps.push(item[0].stamina_b - -item[0].stamina_w);
    }

    if (item[0] && item[0].quality_leg === "逃") {
      sps[sps.length - 1] *= 0.05;
    }
  });
  speeds.forEach((item, i) => {
    fiveSpeed.push(
      firstSpeed[i] -
        (item + sps[i]) * 10 -
        (4 * (firstSpeed[i] - (item + sps[i]) * 10)) / 5
    );
  });

  return fiveSpeed;
};
export const speedController = (racingHorseData, ground, racingJockeyData) => {
  let totalValue = [];
  let stateValue = [];
  let jockeyValue = [];

  racingHorseData.map((item) => {
    // Calculate horse value
    const horseValue = happyFun(
      Number(item[0].happy),
      item[0].speed_b -
        -item[0].speed_w +
        (item[0].strength_b - -item[0].strength_w) +
        (item[0].moment_b - -item[0].moment_w) +
        (item[0].stamina_b - -item[0].stamina_w) +
        (item[0].condition_b - -item[0].condition_w) +
        (item[0].health_b - -item[0].health_b),
      Number(item[0].tired)
    );

    // Calculate horse value based on ground
    const horseGroundValue = horseGround(item[0].ground, horseValue, ground);

    stateValue.push(
      distanceRange(
        (item[0].distance_max - -item[0].distance_min) / 2,
        horseGroundValue
      )
    );
  });

  racingJockeyData.map((items, index) => {
    const jockeySkillValue =
      items[0].p_add -
      -items[0].p_difference -
      -items[0].p_miss -
      -items[0].p_target;
    jockeyValue.push(jockeySkillValue);

    const totalHorseAndJockeyValue = jockeySkillRange(
      jockeySkillValue / 4,
      stateValue[index]
    );
    totalValue.push(totalHorseAndJockeyValue);
  });

  return totalValue;
};
const jockeySkillRange = (skill, stateValue) => {
  if (typeof skill !== "number") {
    return;
  }
  let results = "";
  switch (true) {
    case skill >= 4001 && skill <= 5000:
      results = stateValue * 1;
      break;
    case skill >= 3001 && skill <= 4000:
      results = stateValue * 0.9;
      break;
    case skill >= 2001 && skill <= 3000:
      results = stateValue * 0.8;
      break;
    case skill >= 1001 && skill <= 2000:
      results = stateValue * 0.7;
      break;
    case skill >= 0 && skill <= 1000:
      results = stateValue * 0.6;
      break;
    default:
      return;
  }

  return results;
};

const happyFun = (happys, states, tireds) => {
  if (typeof happys !== "number") {
    throw new Error("Invalid input. The 'happys' parameter must be a number.");
  }

  const multipliers = {
    10: 1.0,
    9: 0.98,
    8: 0.96,
    7: 0.94,
    6: 0.92,
    5: 0.9,
    4: 0.88,
    3: 0.86,
    2: 0.84,
    1: 0.82,
    0: 0.8,
    "-1": 0.78,
    "-2": 0.76,
    "-3": 0.74,
    "-4": 0.72,
    "-5": 0.7,
    "-6": 0.68,
    "-7": 0.66,
    "-8": 0.64,
    "-9": 0.62,
    "-10": 0.6,
  };

  if (!(happys in multipliers)) {
    throw new Error(
      "Invalid input. The 'happys' parameter must be in the range [-10, 10]."
    );
  }
  tiredFun(states * multipliers[happys], tireds);
  return tiredFun(states * multipliers[happys], tireds);
};

// const jockeyHappyFun = (jockeyHappys, jockeyStates, jockeyTired) => {

//   if (typeof jockeyHappys !== "number") {
//     throw new Error("Invalid input. The 'jockeyHappys' parameter must be a number.");
//   }

//   const multipliers = {
//     10: 1.0,
//     9: 0.98,
//     8: 0.96,
//     7: 0.94,
//     6: 0.92,
//     5: 0.9,
//     4: 0.88,
//     3: 0.86,
//     2: 0.84,
//     1: 0.82,
//     0: 0.8,
//     "-1": 0.78,
//     "-2": 0.76,
//     "-3": 0.74,
//     "-4": 0.72,
//     "-5": 0.7,
//     "-6": 0.68,
//     "-7": 0.66,
//     "-8": 0.64,
//     "-9": 0.62,
//     "-10": 0.6,
//   };

//   if (!(jockeyHappys in multipliers)) {
//     throw new Error(
//       "Invalid input. The 'jockeyHappys' parameter must be in the range [-10, 10]."
//     );
//   }

//   jockeyTiredFun(jockeyStates * multipliers[jockeyHappys], jockeyTired);
//   return jockeyTiredFun(jockeyStates * multipliers[jockeyHappys], jockeyTired);
// };

const tiredFun = (happys, tireds) => {
  if (typeof tireds !== "number") {
    throw new Error("Invalid input. The 'happys' parameter must be a number.");
  }

  const multipliers = {
    0: 1.0,
    1: 0.98,
    2: 0.96,
    3: 0.94,
    4: 0.92,
    5: 0.9,
    6: 0.88,
    7: 0.86,
    8: 0.84,
    9: 0.82,
    10: 0.8,
    11: 0.78,
    12: 0.76,
    13: 0.74,
    14: 0.72,
    15: 0.7,
    16: 0.68,
    17: 0.66,
    18: 0.64,
    19: 0.62,
    20: 0.6,
  };

  if (!(tireds in multipliers)) {
    throw new Error(
      "Invalid input. The 'happys' parameter must be in the range [-10, 10]."
    );
  }

  return happys * multipliers[tireds];
};

// const jockeyTiredFun = (jockeyHappys, jockeyTireds) => {
//   if (typeof jockeyTireds !== "number") {
//     throw new Error("Invalid input. The 'happys' parameter must be a number.");
//   }

//   const multipliers = {
//     0: 1.0,
//     1: 0.98,
//     2: 0.96,
//     3: 0.94,
//     4: 0.92,
//     5: 0.9,
//     6: 0.88,
//     7: 0.86,
//     8: 0.84,
//     9: 0.82,
//     10: 0.8,
//     11: 0.78,
//     12: 0.76,
//     13: 0.74,
//     14: 0.72,
//     15: 0.7,
//     16: 0.68,
//     17: 0.66,
//     18: 0.64,
//     19: 0.62,
//     20: 0.6,
//   };

//   if (!(jockeyTireds in multipliers)) {
//     throw new Error(
//       "Invalid input. The 'happys' parameter must be in the range [-10, 10]."
//     );
//   }

//   return jockeyHappys * multipliers[jockeyTireds];
// };

const horseGround = (horseGrounds, speedValue, ground) => {
  let results = "";
  switch (true) {
    case horseGrounds === ground:
      results = speedValue * 1;
      break;
    case horseGrounds != ground:
      results = speedValue * 0.8;
      break;
    default:
      return;
  }

  return results;
};

const distanceRange = (distance, average) => {
  if (typeof distance !== "number") {
    return;
  }
  let results = "";
  switch (true) {
    case distance >= 1000 && distance <= 1600:
      results = distance - 1300;
      break;
    case distance >= 1400 && distance <= 2000:
      results = distance - 1700;
      break;
    case distance >= 1800 && distance <= 2400:
      results = distance - 2100;
      break;
    case distance >= 2200 && distance <= 2800:
      results = distance - 2500;
      break;
    case distance >= 3000 && distance <= 3600:
      results = distance - 3000;
      break;
    default:
      return;
  }
  return distanceSpeed(results, average);
};

const distanceSpeed = (distance, averageSpeed) => {
  if (typeof distance !== "number") {
    throw new Error("Invalid input. The 'happys' parameter must be a number.");
  }

  const multipliers = {
    0: 1,
    100: 0.95,
    200: 0.9,
    300: 0.85,
    400: 0.8,
    500: 0.75,
    600: 0.7,
    700: 0.65,
    800: 0.6,
    900: 0.55,
    1000: 0.5,
  };

  if (!(distance in multipliers)) {
    throw new Error(
      "Invalid input. The 'happys' parameter must be in the range [-10, 10]."
    );
  }

  return averageSpeed * multipliers[distance];
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
