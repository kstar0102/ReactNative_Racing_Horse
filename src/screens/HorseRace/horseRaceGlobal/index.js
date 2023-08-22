
import { CpuState,cpuSpeed, cpuStrength, cpuStamina, cpuMoment, cpuHealth } from "../horseCpuState";

export const firstTiming = (x) => {
  // ---2000m
  // x = raceing total time;
  // 40000 / 5 = 8000
  const y = x / 5;
  return y;
};

export const secondTiming = (x) => {
  // x = firstspeed
  //  [34000, 34000]
  if (x.length === 0) {
    return 0; // Or any other default value/error handling approach you prefer
  }

  const sum = x.reduce((total, current) => total + current, 0);
  // sum of arrays
  const value = sum / x.length / 5;
  // value = 6800
  return value;
};

export const threeTiming = (x, y, z) => {
  // x = first speed [34000, 34000]
  // y = first timing 8000
  // z = second timing  6800
  if (x.length === 0) {
    // Handle empty array case
    return 0; // Or any other default value/error handling approach you prefer
  }

  const sum = x.reduce((total, current) => total + current, 0);
  // sum of arrays
  const value = sum / x.length - y - z;
  const result = value / 3;
  // result = 6400
  return result;
};

export const fourTiming = (x, y, z, j) => {
  // x = first speed [34000, 34000]
  // y = first timing 8000
  // z = second timing  6800
  // j = three timing 6400
  if (x.length === 0) {
    // Handle empty array case
    return 0; // Or any other default value/error handling approach you prefer
  }

  const sum = x.reduce((total, current) => total + current, 0);
  // sum of arrays
  const value = sum / x.length - y - z - j;
  const result = value / 2;
  // result = 6400
  return result;
};

// end fast speed controller
export const fivTiming = (x, y, z, j) => {
  // x = first speed [34000, 34000]
  // y = first timing 8000
  // z = second timing  6800
  // j = three timing 6400
  if (x.length === 0) {
    // Handle empty array case
    return 0; // Or any other default value/error handling approach you prefer
  }

  const sum = x.reduce((total, current) => total + current, 0);
  // sum of arrays
  const value = sum / x.length - y - z - j;
  const result = value / 2.6;
  // result =  4923.076923076923
  return result;
};

// first speed
// Calculated value by corneous
export const firstSpeedController = (raceRegisterData, time) => {
  // time = raceing total time
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
  // speed =  [34000, 34000]
  return speed;
};

// first speed
// Calculated value by corneous
// Calculations to make a lot of difference
export const cSpeedController = (raceRegisterData, time) => {
  // time = raceing total time
  let speed = [];
  raceRegisterData.forEach((item) => {
    if (item.quality_leg === "逃") {
      speed.push(time - time * 0.75);
    }
    if (item.quality_leg === "追") {
      speed.push(time);
    }
    if (item.quality_leg === "大逃") {
      speed.push(time - time * 1.2);
    }
    if (item.quality_leg === "先" || item.quality_leg === "自在") {
      speed.push(time - time * 0.6);
    }
    if (item.quality_leg === "差" || item.quality_leg === "まくり") {
      speed.push(time - time * 0.1);
    }
  });
  // speed = [10000, 10000]
  return speed;
};

// first timing speed calculations
export const secondSpeedController = (
  racingHorseData,
  speeds,
  firstSpeed,
  raceCpuData
) => {
  // racingHorseData = racingHorseData : Horse data participating in the race
  // speeds = speedcontroller : [394.44480000000004, 505.72800000000007]
  // firstSpeed = first speed : [34000, 34000]
  let secondSpeed = [];
  let cpuSpds = [];
  let sps = [];
  
  const cpuSpeeds =  cpuSpeed(raceCpuData);
  cpuSpeeds.map((item)=>{
    cpuSpds.push(item);
  })

 
  racingHorseData.forEach((item, i) => {
    if (
      item[0] &&
      item[0].speed_b !== undefined &&
      item[0].speed_w !== undefined
    ) {
      sps.push(Number(item[0].speed_b) + Number(item[0].speed_w));
    };

    if (item[0] && item[0].quality_leg === "追") {
      sps[i] *= 0.05;
    }

    if (item[0] && item[0].tired >= 15) {
      sps[i] -= 10000;
    }

  });
  raceCpuData.map((item, index)=>{
    if (item && item.quality_leg === "追") {
      cpuSpds[index] *= 0.05;
    }
    if (item && item.tired >= 15) {
      cpuSpds[index] -= 10000;
    }
  });
 
  const newArray = sps.concat(cpuSpds);

  // sps = quality_leg ==  追, tired >= 15, speed_b + speed_w : [213, 250]
  speeds.forEach((item, index) => {
    secondSpeed.push(
      firstSpeed[index] -
        (item + newArray[index]) * 10 -
        (firstSpeed[index] - (item + newArray[index]) * 10) / 5
    );
  });

  // secondSpeed = [21154.176, 22340.4416]
  return secondSpeed;
};

// second timing speed calculations
export const threeSpeedController = (racingHorseData, speeds, firstSpeed, raceCpuData) => {
  // racingHorseData = racingHorseData : Horse data participating in the race
  // speeds = speedcontroller : [394.44480000000004, 505.72800000000007]
  // firstSpeed = first speed : [34000, 34000]
  let threeSpeed = [];
  let cpuSth= [];
  let sps = [];

  const cpuStrengths = cpuStrength(raceCpuData);

  cpuStrengths.map((item)=>{
    cpuSth.push(item);
  })

  racingHorseData.forEach((item, i) => {
    if (
      item[0] &&
      item[0].strength_b !== undefined &&
      item[0].strength_w !== undefined
    ) {
      sps.push(item[0].strength_b - -item[0].strength_w);
    }
    if (item[0] && item[0].quality_leg === "差") {
      sps[i] *= 0.05;
    }

    if (item[0] && item[0].tired >= 15) {
      sps[i] -= 10000;
    }
  });

  raceCpuData.map((item, index)=>{
    if (item && item.quality_leg === "差") {
      cpuSth[index] *= 0.05;
    }
    if (item && item.tired >= 15) {
      cpuSth[index] -= 10000;
    }
  });

  const newArray = sps.concat(cpuSth);

  // sps = quality_leg ==  差, tired >= 15, strength_b + strength_w : [10.4, 12.3]
  speeds.forEach((item, i) => {
    threeSpeed.push(
      firstSpeed[i] -
        (item + newArray[i]) * 10 -
        (2 * (firstSpeed[i] - (item + newArray[i]) * 10)) / 5
    );
  });
  // threeSpeed = [17303.232, 17959.531199999998]
  return threeSpeed;
};

// three timing speed calculations
export const fourSpeedController = (racingHorseData, speeds, firstSpeed, raceCpuData) => {
  // racingHorseData = racingHorseData : Horse data participating in the race
  // speeds = speedcontroller : [394.44480000000004, 505.72800000000007]
  // firstSpeed = first speed : [34000, 34000]
  let fourSpeed = [];
  let cpuMnt= [];
  let sps = [];

  const cpuMoments = cpuMoment(raceCpuData);
  
  cpuMoments.map((item)=>{
    cpuMnt.push(item);
  })

  racingHorseData.forEach((item, i) => {
    if (
      item[0] &&
      item[0].moment_b !== undefined &&
      item[0].moment_w !== undefined
    ) {
      sps.push(item[0].moment_b - -item[0].moment_w);
    }

    if (item[0] && item[0].quality_leg === "先") {
      sps[i] *= 0.05;
    }

    if (item[0] && item[0].tired >= 15) {
      sps[i] -= 10000;
    }
  });

  raceCpuData.map((item, index)=>{
    if (item && item.quality_leg === "差") {
      cpuMnt[index] *= 0.05;
    }
    if (item && item.tired >= 15) {
      cpuMnt[index] -= 10000;
    }
  });

  const newArray = sps.concat(cpuMnt);

  //sps = quality_leg ==  差, tired >= 15, moment_b + moment_w: [223, 216]
  speeds.forEach((item, i) => {
    fourSpeed.push(
      firstSpeed[i] -
        (item + newArray[i]) * 10 -
        (3 * (firstSpeed[i] - (item + newArray[i]) * 10)) / 5
    );
  });
  //  fourSpeed = [10713.088, 11130.2208]
  return fourSpeed;
};

// four timing speed calculations
export const fiveSpeedController = (racingHorseData, speeds, firstSpeed, raceCpuData) => {
  // racingHorseData = racingHorseData : Horse data participating in the race
  // speeds = speedcontroller : [394.44480000000004, 505.72800000000007]
  // firstSpeed = first speed : [34000, 34000]
  let fiveSpeed = [];
  let cpuSta= [];
  let sps = [];
  const cpuStaminas = cpuStamina(raceCpuData);
  
  cpuStaminas.map((item)=>{
    cpuSta.push(item);
  })

  racingHorseData.forEach((item) => {
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
    if (item[0] && item[0].tired >= 15) {
      sps[sps.length - 1] -= 10000;
    }
  });

  raceCpuData.map((item, index)=>{
    if (item && item.quality_leg === "差") {
      cpuSta[index] *= 0.05;
    }
    if (item && item.tired >= 15) {
      cpuSta[index] -= 10000;
    }
  });

  const newArray = sps.concat(cpuSta);

  // sps = quality_leg ==  差, tired >= 15, stamina_b + stamina_w : [239, 226]
  speeds.forEach((item, i) => {
    fiveSpeed.push(
      firstSpeed[i] -
        (item + newArray[i]) * 10 -
        (4 * (firstSpeed[i] - (item + newArray[i]) * 10)) / 5
    );
  });

  // fiveSpeed = [5533.110400000001, 5336.544000000002]
  return fiveSpeed;
};

// five timing speed calculations END TIMIMG SPEED
export const sixSpeedController = (racingHorseData, speeds, firstSpeed, raceCpuData) => {
  let sixSpeed = [];
  let cpuSta= [];
  let sps = [];
  const cpuStaminas = cpuStamina(raceCpuData);
  
  cpuStaminas.map((item)=>{
    cpuSta.push(item);
  })

  racingHorseData.forEach((item) => {
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
    if (item[0] && item[0].tired >= 15) {
      sps[sps.length - 1] -= 10000;
    }
  });
  raceCpuData.map((item, index)=>{
    if (item && item.quality_leg === "差") {
      cpuSta[index] *= 0.05;
    }
    if (item && item.tired >= 15) {
      cpuSta[index] -= 10000;
    }
  });

  const newArray = sps.concat(cpuSta);
  speeds.forEach((item, i) => {
    sixSpeed.push(
      firstSpeed[i] -
        (item + newArray[i]) * 10 -
        (4.5 * (firstSpeed[i] - (item + newArray[i]) * 10)) / 5
    );
  });

  return sixSpeed;
};

// all Speed sum
export const speedController = (
  racingHorseData,
  ground,
  racingJockeyData,
  raceCpuData
) => {
  // racingHorseData = racingHorseData : Horse data participating in the race
  // ground = ダ or 芝
  // racingJockeyData =  Jockey data participating in the race
  let totalValue = [];
  let stateValue = [];
  let jockeyValue = [];

  if (raceCpuData != "") {
    raceCpuData.map((item) => {
      let condition = "";
      let strength = "";
      let stamina = "";
      let speed = "";
      let moment = "";
      let health = "";

      if (item.condition_b == "S") {
        condition = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.condition_b == "A") {
        condition = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.condition_b == "B") {
        condition = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.condition_b == "C") {
        condition = Math.floor(Math.random() * (201 - 100) + 100);
      }

      if (item.strength == "S") {
        strength = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.strength == "A") {
        strength = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.strength == "B") {
        strength = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.strength == "C") {
        strength = Math.floor(Math.random() * (201 - 100) + 100);
      }

      if (item.stamina == "S") {
        stamina = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.stamina == "A") {
        stamina = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.stamina == "B") {
        stamina = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.stamina == "C") {
        stamina = Math.floor(Math.random() * (201 - 100) + 100);
      }

      if (item.speed == "S") {
        speed = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.speed == "A") {
        speed = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.speed == "B") {
        speed = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.speed == "C") {
        speed = Math.floor(Math.random() * (201 - 100) + 100);
      }

      if (item.moment == "S") {
        moment = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.moment == "A") {
        moment = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.moment == "B") {
        moment = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.moment == "C") {
        moment = Math.floor(Math.random() * (201 - 100) + 100);
      }

      if (item.health == "S") {
        health = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.health == "A") {
        health = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.health == "B") {
        health = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.health == "C") {
        health = Math.floor(Math.random() * (201 - 100) + 100);
      }


      const horseValue = happyFun(
        Number(item.happy),
        condition + strength + stamina + speed + moment + health,
        Number(item.tired)
      );
      const horseGroundValue = horseGround(item.ground, horseValue, ground);

      totalValue.push(horseGroundValue);
    });
  }

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
  // stateValue =  [842.8800000000001, 657.4080000000001]

  // jockey state calculations
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

  // totalValue = [505.72800000000007, 394.44480000000004]
  return totalValue;
};

// jockeySkill calculations
const jockeySkillRange = (skill, stateValue) => {
  // skill = 1, 5.75
  // stateValue = 842.8800000000001, 657.4080000000001
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

// happy calculations
const happyFun = (happys, states, tireds) => {
  // happys = 0, 0
  // states = all sum states 1317,  1284
  // tireds = 10, 10
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
  // return = 842.8800000000001, 821.7600000000001
  return tiredFun(states * multipliers[happys], tireds);
};

// happy calculations
const cpuhappyFun = (happys, states, tireds) => {
  // happys = 0, 0
  // states = all sum states 1317,  1284
  // tireds = 10, 10
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

  // tiredFun(states * multipliers[happys], tireds);
  // // return = 842.8800000000001, 821.7600000000001
  // return tiredFun(states * multipliers[happys], tireds);
};

const tiredFun = (happys, tireds) => {
  // happys = 1027.2, 1053.6000000000001
  // tireds = 10,  10
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
  // return  842.8800000000001, 821.7600000000001
  return happys * multipliers[tireds];
};

//  horse ground speed calculation.
const horseGround = (horseGrounds, speedValue, ground) => {
  // horseGrounds = ダ, 万
  // speedValue = horseSpeed 842.8800000000001, 821.7600000000001
  // ground = ダ, ダ
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

  // results = 842.8800000000001, 657.4080000000001
  return results;
};

const distanceRange = (distance, average) => {
  // distance = distance_max + distance_min : 2100, 2100
  // average = horseGround Value : 842.8800000000001, 657.4080000000001
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

  // results 0, 0
  // distanceSpeed(results, average = 657.4080000000001, 842.8800000000001
  return distanceSpeed(results, average);
};

const distanceSpeed = (distance, averageSpeed) => {
  // distance = 0, 0
  // averageSpeed = 842.8800000000001, 657.4080000000001
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
  // return = 842.8800000000001, 657.4080000000001
  return averageSpeed * multipliers[distance];
};

// raceTime fun
export const raceTime = (raceWidths) => {
  // raceWidths = 2000
  if (typeof raceWidths !== "number") {
    return;
  }
  let result = "";
  switch (true) {
    case raceWidths >= 1000 && raceWidths <= 1300:
      result = 30000;
      break;
    case raceWidths >= 1400 && raceWidths <= 1600:
      result = 35000;
      break;
    case raceWidths >= 1700 && raceWidths <= 2100:
      result = 40000;
      break;
    case raceWidths >= 2100 && raceWidths <= 2400:
      result = 45000;
      break;
    case raceWidths >= 2500 && raceWidths <= 2800:
      result = 50000;
      break;
    case raceWidths >= 2900 && raceWidths <= 3200:
      result = 55000;
      break;
    case raceWidths >= 3300:
      result = 60000;
      break;
    default:
      return;
  }
  // result = 40000
  return result;
};

// ODDS FUN
export const oddsFun = (racingHorseData, raceAllData) => {
  //
  let stateValue = [];
  const cpuValue = CpuState(raceAllData);
  if (racingHorseData != "") {
    racingHorseData.map((item) => {
      stateValue.push(
        item[0].speed_b -
          -item[0].speed_w +
          (item[0].strength_b - -item[0].strength_w) +
          (item[0].moment_b - -item[0].moment_w) +
          (item[0].stamina_b - -item[0].stamina_w) +
          (item[0].condition_b - -item[0].condition_w) +
          (item[0].health_b - -item[0].health_b)
      );
    });
  }

  cpuValue.map((item) => {
    stateValue.push(item);
  });

  let sum = 0;

  stateValue.map((item) => {
    sum += item;
  });

  const averageSum = sum / stateValue.length;

  const lessThanAverageSum = stateValue.filter((item) => item < averageSum);
  const greaterThanAverageSum = stateValue.filter((item) => item > averageSum);

  const randomValueBig = Array.from({ length: lessThanAverageSum.length }, () =>
    (Math.random() * (50.1 - 20.1) + 20.1).toFixed(1)
  );
  const randomValueSmall = Array.from(
    { length: greaterThanAverageSum.length },
    () => (Math.random() * (1.1 - 20.1) + 20.1).toFixed(1)
  );

  // 20 ~ 50 Random < averageSum
  const sortedValuesBig = randomValueBig.map(Number).sort((a, b) => a - b);
  const sortedValuesSmall = lessThanAverageSum
    .map(Number)
    .sort((a, b) => b - a);
  //  10 ~ 50 > averageSum
  const randomSmallValues = randomValueSmall.map(Number).sort((a, b) => a - b);
  const sortedSmallValuesSmall = greaterThanAverageSum
    .map(Number)
    .sort((a, b) => b - a);

  const mergedOriginValue = sortedValuesSmall.concat(sortedSmallValuesSmall);
  const mergedCalculatedValue = sortedValuesBig.concat(randomSmallValues);

  let resultArray = [];
  stateValue.map((item) => {
    for (let i = 0; i < stateValue.length; i++) {
      if (item == mergedOriginValue[i]) {
        resultArray.push(mergedCalculatedValue[i]);
      }
    }
  });

  return resultArray;
};

// IMAGE
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
      break;
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

export const finalsType = (ground, place) => {
  let result = "";
  switch (true) {
    case ground == "芝": {
      switch (place) {
        case "京都競馬場": {
          result = require("../../../assets/horseImageData/Right/2-2.png");
          break;
        }
        case "中山競馬場": {
          result = require("../../../assets/horseImageData/Right/2-1.png");
          break;
        }
        case "小倉競馬場": {
          result = require("../../../assets/horseImageData/Right/2-3.png");
          break;
        }
        case "東京競馬場": {
          result = require("../../../assets/horseImageData/Left/2-4.png");
          break;
        }
        case "阪神競馬場": {
          result = require("../../../assets/horseImageData/Right/2-5.png");
          break;
        }
        case "福島競馬場": {
          result = require("../../../assets/horseImageData/Right/2-6.png");
          break;
        }
        case "新潟競馬場": {
          result = require("../../../assets/horseImageData/Left/2-7.png");
          break;
        }
        case "函館競馬場": {
          result = require("../../../assets/horseImageData/Right/2-8.png");
          break;
        }
        case "沙田競馬場": {
          result = require("../../../assets/horseImageData/Right/2-2.png");
          break;
        }
        case "札幌競馬場": {
          result = require("../../../assets/horseImageData/Right/2-9.png");
          break;
        }
        default:
          result = require("../../../assets/horseImageData/Right/2-2.png");
          break;
      }
    }
    case ground == "ダ": {
      switch (place) {
        case "京都競馬場": {
          result = require("../../../assets/horseImageData/Right/1-2.png");
          break;
        }
        case "中山競馬場": {
          result = require("../../../assets/horseImageData/Right/1-1.png");
          break;
        }
        case "小倉競馬場": {
          result = require("../../../assets/horseImageData/Right/1-3.png");
          break;
        }
        case "東京競馬場": {
          result = require("../../../assets/horseImageData/Left/1-4.png");
          break;
        }
        case "阪神競馬場": {
          result = require("../../../assets/horseImageData/Right/1-5.png");
          break;
        }
        case "福島競馬場": {
          result = require("../../../assets/horseImageData/Right/1-6.png");
          break;
        }
        case "新潟競馬場": {
          result = require("../../../assets/horseImageData/Left/1-7.png");
          break;
        }
        case "函館競馬場": {
          result = require("../../../assets/horseImageData/Right/1-8.png");
          break;
        }
        case "沙田競馬場": {
          result = require("../../../assets/horseImageData/Right/1-8.png");
          break;
        }
        case "札幌競馬場": {
          result = require("../../../assets/horseImageData/Right/1-9.png");
          break;
        }
        default:
          result = require("../../../assets/horseImageData/Right/1-3.png");
          break;
      }
    }
  }
  return result;
};
