import {
  constantKnicks,
  marryAbilityData,
  marryGrowData,
  marryDistanceData,
  marryGroundData,
  marryQualityLegData,
} from "../../../../utils/globals";
// inbreeding
export const closeRelatives = (man, girl) => {
  let isCross = false;
  let isOutBlid = false;
  let isClose = false;
  let isFinal = false;
  let isGoodFriend = false;
  let isMatch = false;
  let isKnow = false;
  let isMiracle = false;
  let isTripCrown = false;
  let isShotReversal = false;

  let crossName = "";

  // 50%
  g_name_array = [];
  m_name_array = [];

  // 25%
  g_f_name_array = [];
  m_f_name_array = [];

  //12.50%
  g_f_f_name_array = [];
  m_f_f_name_array = [];

  //6.25%
  g_f_f_f_name_array = [];
  m_f_f_f_name_array = [];

  // 50%
  g_name_array.push(girl.name);
  m_name_array.push(man.name);

  // 25%
  g_f_name_array.push(girl.f_name, girl.m_name);
  m_f_name_array.push(man.f_name, man.m_name);

  // 12.50%
  g_f_f_name_array.push(
    girl.f_f_name,
    girl.f_m_name,
    girl.m_f_name,
    girl.m_m_name
  );
  m_f_f_name_array.push(man.f_f_name, man.f_m_name, man.m_f_name, man.m_m_name);

  // 6.25%
  g_f_f_f_name_array.push(
    girl.f_f_f_name,
    girl.f_f_m_name,

    girl.f_m_f_name,
    girl.f_m_m_name,

    girl.m_m_f_name,
    girl.m_m_m_name,

    girl.m_f_f_name,
    girl.m_f_m_name
  );

  m_f_f_f_name_array.push(
    man.f_f_f_name,
    man.f_f_m_name,

    man.f_m_f_name,
    man.f_m_m_name,

    man.m_m_f_name,
    man.m_m_m_name,

    man.m_f_f_name,
    man.m_f_m_name
  );

  const toGetNum = (str) => {
    return parseInt(str, 10);
  };

  const hasThreeSameElements = (input) => {
    let count = 0;

    for (let i = 0; i < input.length; i++) {
      let currentElement = input[i];
      let tempCount = 0;

      // Check how many times the current element occurs in the array
      for (let j = 0; j < input.length; j++) {
        if (input[j] === currentElement) {
          tempCount++;
        }
      }

      if (tempCount >= 3) {
        return true; // Found three or more same elements
      }
    }

    return false; // No three same elements found
  };

  const hasSevenDifferentElements = (input) => {
    let uniqueElements = new Set(input);

    return uniqueElements.size >= 7;
  };

  const compareArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false; // If array lengths are different, they are not equal
    }

    return arr1.every((element, index) => element === arr2[index]);
  };

  // 6.25% calculator
  const f_f_f_one_EqualElements = m_f_f_f_name_array.filter((element) =>
    g_f_f_f_name_array.includes(element)
  );
  if (f_f_f_one_EqualElements.length != 0) {
    crossName = f_f_f_one_EqualElements[f_f_f_one_EqualElements.length - 1];
  }

  const f_f_f_two_EqualElements = m_f_f_f_name_array.filter((element) =>
    g_f_f_name_array.includes(element)
  );
  if (f_f_f_two_EqualElements.length != 0) {
    crossName = f_f_f_two_EqualElements[f_f_f_two_EqualElements.length - 1];
  }

  const f_f_f_three_EqualElements = m_f_f_f_name_array.filter((element) =>
    g_f_name_array.includes(element)
  );

  if (f_f_f_three_EqualElements.length != 0) {
    crossName = f_f_f_three_EqualElements[f_f_f_three_EqualElements.length - 1];
  }

  const f_f_f_four_EqualElements = m_f_f_f_name_array.filter((element) =>
    g_name_array.includes(element)
  );
  if (f_f_f_four_EqualElements.length != 0) {
    crossName = f_f_f_four_EqualElements[f_f_f_four_EqualElements.length - 1];
  }

  const f_f_one_EqualElements = m_f_f_name_array.filter((element) =>
    g_f_f_f_name_array.includes(element)
  );
  if (f_f_one_EqualElements.length != 0) {
    crossName = f_f_one_EqualElements[f_f_one_EqualElements.length - 1];
  }

  // 12.50% calculator
  const f_f_two_EqualElements = m_f_f_name_array.filter((element) =>
    g_f_f_name_array.includes(element)
  );
  if (f_f_two_EqualElements.length != 0) {
    crossName = f_f_two_EqualElements[f_f_two_EqualElements.length - 1];
  }

  const f_f_three_EqualElements = m_f_f_name_array.filter((element) =>
    g_f_name_array.includes(element)
  );
  if (f_f_three_EqualElements.length != 0) {
    crossName = f_f_three_EqualElements[f_f_three_EqualElements.length - 1];
  }

  const f_f_four_EqualElements = m_f_f_name_array.filter((element) =>
    g_name_array.includes(element)
  );
  if (f_f_four_EqualElements.length) {
    crossName = f_f_four_EqualElements[f_f_four_EqualElements.length - 1];
  }

  const f_one_EqualElements = m_f_name_array.filter((element) =>
    g_f_f_f_name_array.includes(element)
  );
  if (f_one_EqualElements.length != 0) {
    crossName = f_one_EqualElements[f_one_EqualElements.length - 1];
  }

  const f_two_EqualElements = m_f_name_array.filter((element) =>
    g_f_f_name_array.includes(element)
  );
  if (f_two_EqualElements.length != 0) {
    crossName = f_two_EqualElements[f_two_EqualElements.length - 1];
  }

  // 25%

  const f_three_EqualElements = m_f_name_array.filter((element) =>
    g_f_name_array.includes(element)
  );
  if (f_three_EqualElements.length != 0) {
    crossName = f_three_EqualElements[f_three_EqualElements.length - 1];
  }

  const f_four_EqualElements = m_f_name_array.filter((element) =>
    g_name_array.includes(element)
  );
  if (f_four_EqualElements.length != 0) {
    crossName = f_four_EqualElements[f_four_EqualElements.length - 1];
  }

  // 50%
  const one_EqualElements = m_name_array.filter((element) =>
    g_f_f_f_name_array.includes(element)
  );
  if (one_EqualElements.length != 0) {
    crossName = one_EqualElements[one_EqualElements.length - 1];
  }

  const two_EqualElements = m_name_array.filter((element) =>
    g_f_f_name_array.includes(element)
  );
  if (two_EqualElements.length != 0) {
    crossName = two_EqualElements[two_EqualElements.length - 1];
  }

  const three_EqualElements = m_name_array.filter((element) =>
    g_f_name_array.includes(element)
  );
  if (three_EqualElements.length != 0) {
    crossName = three_EqualElements[three_EqualElements.length - 1];
  }

  const four_EqualElements = m_name_array.filter((element) =>
    g_name_array.includes(element)
  );
  if (four_EqualElements.length != 0) {
    crossName = four_EqualElements[four_EqualElements.length - 1];
  }

  const lowestTotal =
    6.25 * f_f_f_one_EqualElements.length +
    f_f_f_two_EqualElements.length +
    f_f_f_three_EqualElements.length +
    f_f_f_four_EqualElements.length +
    f_f_one_EqualElements.length +
    f_one_EqualElements.length +
    one_EqualElements.length;

  const littleLowerTotal =
    12.5 * f_f_two_EqualElements.length +
    f_f_three_EqualElements.length +
    f_f_four_EqualElements.length +
    f_two_EqualElements.length +
    two_EqualElements.length;

  const normelTotal =
    25 * f_three_EqualElements.length +
    f_four_EqualElements.length +
    three_EqualElements.length;

  const topTotal = 50 * four_EqualElements.length;

  const totalCalculator =
    lowestTotal + littleLowerTotal + normelTotal + topTotal;

  const lenghtTotal =
    f_f_f_one_EqualElements.length +
    f_f_f_two_EqualElements.length +
    f_f_f_three_EqualElements.length +
    f_f_f_four_EqualElements.length +
    f_f_one_EqualElements.length +
    f_one_EqualElements.length +
    one_EqualElements.length +
    f_f_two_EqualElements.length +
    f_f_three_EqualElements.length +
    f_f_four_EqualElements.length +
    f_two_EqualElements.length +
    two_EqualElements.length +
    f_three_EqualElements.length +
    f_four_EqualElements.length +
    three_EqualElements.length +
    four_EqualElements.length;

  const finalArr = [
    girl.f_f_sys,
    girl.m_f_sys,
    girl.f_m_sys,
    girl.m_m_sys,
    man.f_f_sys,
    man.m_f_sys,
    man.f_m_sys,
    man.m_m_sys,
  ];

  const konwArr1 = [man.f_f_m_sys, man.f_m_m_sys, man.m_m_m_sys, man.m_f_m_sys];
  const knowArr2 = [
    girl.f_f_m_sys,
    girl.f_m_m_sys,
    girl.m_m_m_sys,
    girl.m_f_m_sys,
  ];
  //cross
  if (lenghtTotal > 0) {
    console.log("cross");
    isCross = true;
  }
  console.log(totalCalculator, lenghtTotal);
  // inbreeding
  if (totalCalculator >= 50 || lenghtTotal >= 4) {
    isClose = true;
    console.log("inbreeding");
  }

  // final
  else if (toGetNum(man.age) >= 23 && toGetNum(girl.age) >= 18) {
    isFinal = true;
    console.log("final");
  }

  // goodFriend
  else if (hasThreeSameElements(finalArr)) {
    isGoodFriend = true;
    console.log("good Friend");
  }

  // match
  else if (hasSevenDifferentElements(finalArr)) {
    console.log(finalArr);
    isMatch = true;
    console.log("match111");
  }

  // know
  else if (compareArrays(konwArr1, knowArr2)) {
    isKnow = true;
    console.log("know");
  }

  // miracle
  else if (isMatch && isKnow) {
    isMiracle = true;
    console.log("miracle");
  }

  // outblid
  if (lenghtTotal == 0) {
    isOutBlid = true;
    console.log("outblid");
  }

  //triple crown
  if (girl.triple_crown == 20 && man.triple_crown == 20) {
    isTripCrown = true;
  }

  if (girl.etc <= 100 && man.hidden == 20) {
    isShotReversal = true;
  }

  const resultArray = {};
  resultArray.isClose = isClose;
  resultArray.isCross = isCross;
  resultArray.isFinal = isFinal;
  resultArray.isGoodFriend = isGoodFriend;
  resultArray.isKnow = isKnow;
  resultArray.isMatch = isMatch;
  resultArray.isMiracle = isMiracle;
  resultArray.isOutBlid = isOutBlid;
  resultArray.isTripCrown = isTripCrown;
  resultArray.isShotReversal = isShotReversal;
  resultArray.crossName = crossName;

  return resultArray;
};

export const checkKnicks = (man, girl, knickData) => {
  let index = constantKnicks[man.f_sys];

  let row = knickData[index];

  if (row[girl.f_sys] == "★") {
    return true;
  }

  return false;
};

export const convertAbility = (averageNum) => {
  if (averageNum > 181 && averageNum < 200) {
    return "S+";
  } else if (averageNum > 161 && averageNum < 180) {
    return "S";
  } else if (averageNum > 141 && averageNum < 160) {
    return "A+";
  } else if (averageNum > 121 && averageNum < 140) {
    return "A";
  } else if (averageNum > 101 && averageNum < 120) {
    return "B+";
  } else if (averageNum > 81 && averageNum < 100) {
    return "B";
  } else if (averageNum > 61 && averageNum < 80) {
    return "C+";
  } else if (averageNum > 41 && averageNum < 60) {
    return "C";
  } else if (averageNum > 21 && averageNum < 40) {
    return "D+";
  } else if (averageNum > 1 && averageNum < 20) {
    return "D";
  }
};

export const convertAbilityNum = (letter) => {
  let randomNumber = '';
  switch (letter) {
    case "S+":
      randomNumber = Math.floor(Math.random() * (200 - 181 + 1)) + 181;
      break;

    case "S":
      randomNumber = Math.floor(Math.random() * (180 - 161 + 1)) + 161;
      break;

    case "A+":
      randomNumber = Math.floor(Math.random() * (160 - 141 + 1)) + 141;
      break;

    case "A":
      randomNumber = Math.floor(Math.random() * (140 - 121 + 1)) + 121;
      break;

    case "B+":
      randomNumber = Math.floor(Math.random() * (120 - 101 + 1)) + 101;
      break;

    case "B":
      randomNumber = Math.floor(Math.random() * (100 - 81 + 1)) + 81;
      break;

    case "C+":
      randomNumber = Math.floor(Math.random() * (80 - 61 + 1)) + 61;
      break;

    case "C":
      randomNumber = Math.floor(Math.random() * (60 - 41 + 1)) + 41;
      break;

    case "D+":
      randomNumber = Math.floor(Math.random() * (40 - 21 + 1)) + 21;
      break;

    case "D":
      randomNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
      break;

    default:
      randomNumber = Math.floor(Math.random() * (200 - 181 + 1)) + 181;
      break;
  }

  return randomNumber;
};

export const getChildAbilities = (fatherAbility, motherAbility) => {
  if (
    marryAbilityData[motherAbility] &&
    marryAbilityData[motherAbility][fatherAbility]
  ) {
    const abilities = ["S+", "S", "A+", "A", "B+", "B", "C+", "C", "D+", "D"];
    const childAbilities = marryAbilityData[motherAbility][fatherAbility];
    const childAbilitiesWithNames = {};

    for (let i = 0; i < abilities.length; i++) {
      childAbilitiesWithNames[abilities[i]] = childAbilities[i];
    }
    return childAbilitiesWithNames;
  } else {
    return null;
  }
};

export const getChildGrow = (fatherGrow, motherGrow) => {
  if (marryGrowData[motherGrow] && marryGrowData[motherGrow][fatherGrow]) {
    const abilities = ["早熟", "早め", "普通", "持続", "遅め", "晩成"];
    const childAbilities = marryGrowData[fatherGrow][motherGrow];
    const childAbilitiesWithNames = {};

    for (let i = 0; i < abilities.length; i++) {
      childAbilitiesWithNames[abilities[i]] = childAbilities[i];
    }
    return childAbilitiesWithNames;
  } else {
    return null;
  }
};

export const getChildDistance = (fatherDistance, motherDistance) => {
  if (
    marryDistanceData[motherDistance] &&
    marryDistanceData[motherDistance][fatherDistance]
  ) {
    const abilities = ["短", "中", "中長", "短中", "万能", "長"];
    const childAbilities = marryDistanceData[fatherDistance][motherDistance];
    const childAbilitiesWithNames = {};

    for (let i = 0; i < abilities.length; i++) {
      childAbilitiesWithNames[abilities[i]] = childAbilities[i];
    }
    return childAbilitiesWithNames;
  } else {
    return null;
  }
};

export const getChildGround = (fatherGround, motherGround) => {
  if (
    marryGroundData[motherGround] &&
    marryGroundData[motherGround][fatherGround]
  ) {
    const abilities = ["芝", "ダ", "万"];
    const childAbilities = marryGroundData[fatherGround][motherGround];
    const childAbilitiesWithNames = {};

    for (let i = 0; i < abilities.length; i++) {
      childAbilitiesWithNames[abilities[i]] = childAbilities[i];
    }
    return childAbilitiesWithNames;
  } else {
    return null;
  }
};

export const getChildQualityLeg = (fatherQualityLeg, motherQualityLeg) => {
  if (
    marryQualityLegData[motherQualityLeg] &&
    marryQualityLegData[motherQualityLeg][fatherQualityLeg]
  ) {
    const abilities = [
      "大逃",
      "逃げ",
      "先行",
      "差し",
      "追い",
      "自在",
      "まくり",
      "直一気",
    ];
    const childAbilities =
      marryQualityLegData[fatherQualityLeg][motherQualityLeg];
    const childAbilitiesWithNames = {};

    for (let i = 0; i < abilities.length; i++) {
      childAbilitiesWithNames[abilities[i]] = childAbilities[i];
    }
    return childAbilitiesWithNames;
  } else {
    return null;
  }
};

export const generateResult = (data) => {
  let totalChance = 0;
  for (let key in data) {
    totalChance += data[key];
  }
  let randomNumber = Math.floor(Math.random() * totalChance) + 1;
  let currentChance = 0;
  for (let key in data) {
    currentChance += data[key];
    if (randomNumber <= currentChance) {
      return key;
    }
  }
};

export const getDistanceLetter = (param) => {
  if (param == 1000) {
    return "短";
  } else if (param == 1400) {
    return "短中";
  } else if (param == 1800) {
    return "中";
  } else if (param == 2200) {
    return "中長";
  } else if (param == 3000) {
    return "長";
  }
};

export const convertQualityString = (string) => {
  if (string == "追") {
    return "追い";
  } else if (string == "差") {
    return "差し";
  } else if (string == "先") {
    return "先行";
  }
  return string;
};

export const getRandomValue = (data) => {
  // Calculate the total chance
  let totalChance = 0;
  data.forEach((item) => {
    totalChance += parseFloat(item.right);
  });

  // Generate a random number between 0 and the total chance
  const randomNum = Math.random() * totalChance;

  // Find the corresponding left value based on the random number
  let currentChance = 0;
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    currentChance += parseFloat(item.right);
    if (randomNum <= currentChance) {
      return item.left;
    }
  }

  // Return null if no left value is found
  return null;
};

export const checkNum = (num) => {
  if(num == null){
    return "0";
  }
  else return num;
}

const tripleCrownRelatives = (man, girl) => {};
