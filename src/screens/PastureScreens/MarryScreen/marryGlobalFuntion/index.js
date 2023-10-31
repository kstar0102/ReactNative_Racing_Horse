import {
  constantKnicks,
  marryAbilityData,
  marryGrowData,
  marryDistanceData,
  marryGroundData,
  marryQualityLegData,
  knicksData,
  crossSingleData,
  crossDoubleData,
  abilityFactorFiveData,
  abilityFactorTenData,
  abilityFactorFifteenData,
  abilityFactorTwentyData,
  marryColorData
} from "../../../../utils/globals";

export const toGetNum = (str) => {
  const regex = /\d+/g;
  const matches = str.match(regex);
  return matches ? matches.map(Number) : [];
};

export const compareCross = (man, girl) => {

  const manArray = [
    man.name,
    man.f_name,
    man.m_name,
    man.f_f_name,
    man.f_m_name,
    man.m_f_name,
    man.m_m_name,
    man.f_f_f_name,
    man.f_f_m_name,
    man.f_m_f_name,
    man.f_m_m_name,
    man.m_f_f_name,
    man.m_f_m_name,
    man.m_m_f_name,
    man.m_m_m_name
  ];
  const girlArray = [
    girl.name,
    girl.f_name,
    girl.m_name,
    girl.f_f_name,
    girl.f_m_name,
    girl.m_f_name,
    girl.m_m_name,
    girl.f_f_f_name,
    girl.f_f_m_name,
    girl.f_m_f_name,
    girl.f_m_m_name,
    girl.m_f_f_name,
    girl.m_f_m_name,
    girl.m_m_f_name,
    girl.m_m_m_name
  ];

  const crossArray = manArray.filter((element) =>
    girlArray.includes(element)
  );

  return crossArray;
}

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
  g_f_name_array.push(
    girl.f_name, 
    girl.m_name
  );
  m_f_name_array.push(
    man.f_name, 
    man.m_name
  );

  // 12.50%
  g_f_f_name_array.push(
    girl.f_f_name,
    girl.f_m_name,
    girl.m_f_name,
    girl.m_m_name
  );
  m_f_f_name_array.push(
    man.f_f_name, 
    man.f_m_name, 
    man.m_f_name, 
    man.m_m_name
  );

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


  const hasThreeSameElements = (input) => {
    let count = 0;

    for (let i = 0; i < 4; i++) {
      let currentElement = input[i];

      // Check how many times the current element occurs in the array
      for (let j = 4; j < input.length; j++) {
        if (input[j] === currentElement) {
          count++;
        }
      }

      if (count >= 3) {
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
    const convertArray1 = arr1.sort();
    const convertArray2 = arr2.sort();

    return convertArray1.every((element, index) => element === convertArray2[index]);
  };

  const compareLineages = () => {
    if (man.sys == man.f_sys && man.f_sys == man.f_f_sys && man.f_f_sys == man_f_f_f_sys) {
      console.log("lineage succession", "血統継承");
      return true;
    }else {
      return false;
    }
  }

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

  let fatherBloodVolume = 0;
  let motherBloodVolume = 0;

  if (lenghtTotal > 0) {
    fatherBloodVolume = 
      6.25 * m_f_f_f_name_array.filter((element) =>
        element == crossName
      ).length + 
      12.50 * m_f_f_name_array.filter((element) =>
        element == crossName
      ).length + 
      25 * m_f_name_array.filter((element) =>
        element == crossName
      ).length + 
      50 * m_name_array.filter((element) =>
        element == crossName
      ).length;

    motherBloodVolume = 
      6.25 * g_f_f_f_name_array.filter((element) =>
        element == crossName
      ).length + 
      12.50 * g_f_f_name_array.filter((element) =>
        element == crossName
      ).length + 
      25 * g_f_name_array.filter((element) =>
        element == crossName
      ).length + 
      50 * g_name_array.filter((element) =>
        element == crossName
      ).length;
  }  

  const totalBloodVolume = fatherBloodVolume + motherBloodVolume;
  console.log("1231312313132132132132132132121", totalBloodVolume);

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

  const konwArr1 = [
    man.f_f_m_sys, 
    man.f_m_m_sys, 
    man.m_m_m_sys, 
    man.m_f_m_sys
  ];
  const knowArr2 = [
    girl.f_f_f_sys,
    girl.f_m_f_sys,
    girl.m_m_f_sys,
    girl.m_f_f_sys,
  ];

  //cross
  if (lenghtTotal > 0) {
    isCross = true;
    console.log("===================================");
    console.log("種牡馬", "繁殖牝馬", lenghtTotal);
    console.log("===================================");
    console.log("1代");
    console.log(man.name, girl.name);
    console.log("2代");
    console.log(man.f_name, girl.f_name);
    console.log(man.m_name, girl.m_name);
    console.log("3代");
    console.log(man.f_f_name, girl.f_f_name);
    console.log(man.f_m_name, girl.f_m_name);
    console.log(man.m_f_name, girl.m_f_name);
    console.log(man.m_m_name, girl.m_m_name);
    console.log("4代");
    console.log(man.f_f_f_name, girl.f_f_f_name);
    console.log(man.f_f_m_name, girl.f_f_m_name);
    console.log(man.f_m_f_name, girl.f_m_f_name);
    console.log(man.f_m_f_name, girl.f_m_f_name);
    console.log(man.m_f_f_name, girl.m_f_f_name);
    console.log(man.m_f_m_name, girl.m_f_m_name);
    console.log(man.m_m_f_name, girl.m_m_f_name);
    console.log(man.m_m_m_name, girl.m_m_m_name);

    console.log("====================================");
    console.log("cross", crossName, "クロス(インブリード)");
  }

  console.log(totalCalculator, lenghtTotal);
  // inbreeding
  if (totalBloodVolume >= 50 && lenghtTotal >= 4) {
    isClose = true;
    console.log("inbreeding", "近親配合");
  }

  // final
  
  else if (toGetNum(man.age) >= 23 && toGetNum(girl.age) >= 18) {
    isFinal = true;
    console.log("===================================");
    console.log("種牡馬", man.age);
    console.log("繁殖牝馬", girl.age);
    console.log("====================================");
    console.log("final", "ファイナル配合");
  }

  // goodFriend
  else if (hasThreeSameElements(finalArr)) {
    isGoodFriend = true;
    console.log("===================================");
    console.log("種牡馬-父-父", man.f_f_sys);
    console.log("種牡馬-父-母", man.f_m_sys);
    console.log("種牡馬-母-父", man.m_f_sys);
    console.log("種牡馬-母-母", man.m_m_sys);
    console.log("====================================");
    console.log("繁殖牝馬-父-父", girl.f_f_sys);
    console.log("繁殖牝馬-父-母", girl.f_m_sys);
    console.log("繁殖牝馬-母-父", girl.m_f_sys);
    console.log("繁殖牝馬-母-母", girl.m_m_sys);
    console.log("=====================================");
    console.log("good Friend", "仲良し配合");
  }

  // match
  if (hasSevenDifferentElements(finalArr)) {
    isMatch = true;
    console.log(finalArr);
    console.log("===================================");
    console.log("種牡馬-父-父", finalArr[4]);
    console.log("種牡馬-父-母", finalArr[6]);
    console.log("種牡馬-母-父", finalArr[5]);
    console.log("種牡馬-母-母", finalArr[7]);
    console.log("====================================");
    console.log("繁殖牝馬-父-父", finalArr[0]);
    console.log("繁殖牝馬-父-母", finalArr[2]);
    console.log("繁殖牝馬-母-父", finalArr[1]);
    console.log("繁殖牝馬-母-母", finalArr[3]);
    console.log("=====================================");
    console.log("match", "お見合い配合");
  }

  // know
  if (compareArrays(konwArr1, knowArr2)) {
    isKnow = true;
    console.log("===================================");
    console.log("種牡馬-父-父-母", man.f_f_m_sys);
    console.log("種牡馬-父-母-母", man.f_m_m_sys);
    console.log("種牡馬-母-父-母", man.m_f_m_sys);
    console.log("種牡馬-母-母-母", man.m_m_m_sys);
    console.log("====================================");
    console.log("繁殖牝馬-父-父-父", girl.f_f_f_sys);
    console.log("繁殖牝馬-父-母-父", girl.f_m_f_sys);
    console.log("繁殖牝馬-母-父-父", girl.m_f_f_sys);
    console.log("繁殖牝馬-母-母-父", girl.m_m_f_sys);
    console.log("=====================================");
    console.log("know", "知り合い配合");
  }

  // miracle
  if (isMatch && isKnow && compareLineages()) {
    isMiracle = true;
    console.log("miracle", "奇跡の配合");
  }

  // outblid
  if (lenghtTotal == 0) {
    isOutBlid = true;
    console.log("outblid", "アウトブリード");
  }

  //triple crown
  if (girl.triple_crown == 20 && man.triple_crown == 20) {
    isTripCrown = true;
    console.log("triple crown", "三冠配合");
  }

  if (girl.etc <= 100 && man.etc >= 6000) {
    isShotReversal = true;
    console.log("===================================");
    console.log("種牡馬", man.etc);
    console.log("繁殖牝馬", girl.etc);
    console.log("=====================================");
    console.log("shot reversal", "一発逆転配合");
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


export const calculatorKincks = () => {
  return generateResult(knicksData) * 1;
}

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
      "逃",
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

export const getChildColor = (fatherColor, motherColor) => {
  console.log(marryColorData[fatherColor]);
  console.log(marryColorData[motherColor]);
  if (
    marryColorData[fatherColor] &&
    marryColorData[fatherColor][motherColor]
  ) {
    const abilities = [
      '鹿毛',
      '黑鹿毛',
      '栗毛',
      '青鹿毛',
      '青毛',
      '芦毛',
      '栃栗毛',
      '白毛',
      '海空毛',
      '赤毛',
      '尾花栗毛',
      '星毛',
      '縞毛',
      '豹毛',
      '虹毛'
    ];
    const childAbilities =
    marryColorData[fatherColor][motherColor];
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

const splitProblemSequence = (sequence) => {

  const pattern = /^([a-zA-Z]+)(\d+)([a-zA-Z]+)?(\d+)?$/;
  const matches = sequence.match(pattern);

  if (matches) {
    if (matches[3] && matches[4]) {
      const part1 = matches[1] + matches[2];
      const part2 = matches[3] + matches[4];
      return [part1, part2];
    } else {
      return [sequence];
    }
  } else {
    return [];
  }

}

const divideString = (str) => {
  const matches = str.match(/^([a-zA-Z]+)(\d+)$/);

  if (matches) {
    const letters = matches[1];
    const numbers = parseInt(matches[2]);
    
    return { letters, numbers };
  } else {
    return null; // Invalid format
  }

}


export const calculatorCross = (item) => {

  const item_factor_array = [
    item.m_m_f_factor,
    item.m_f_f_factor,
    item.f_m_f_factor,
    item.f_f_f_factor,
    item.m_f_factor,
    item.f_f_factor,
    item.f_factor
  ];

  const item_add_point = {
    speed : 0,
    strength : 0,
    stamina : 0,
    moment : 0,
    condition : 0,
    health : 0,
  };

  item_factor_array.map((item)=>{

    if (item !== "#N/A") {
      const parts = splitProblemSequence(item);

      parts.map((part)=>{
        const divided = divideString(part);
  
        if (divided) {

          if (divided.numbers == 1) {

            if (divided.letters == 'sp') {

              item_add_point.speed += generateResult(crossSingleData) * 1;

            }else if (divided.letters == 'st') {

              item_add_point.strength += generateResult(crossSingleData) * 1;

            }else if (divided.letters == 'kon') {

              item_add_point.stamina += generateResult(crossSingleData) * 1;

            }else if (divided.letters == 'sy') {

              item_add_point.moment += generateResult(crossSingleData) * 1;

            }else if (divided.letters == 'ki') {

              item_add_point.condition += generateResult(crossSingleData) * 1;

            }else if (divided.letters == 'ken') {

              item_add_point.health += generateResult(crossSingleData) * 1;

            }
            
          }else {

            if (divided.letters == 'sp') {

              item_add_point.speed += generateResult(crossDoubleData) * 1;

            }else if (divided.letters == 'st') {

              item_add_point.strength += generateResult(crossDoubleData) * 1;

            }else if (divided.letters == 'kon') {

              item_add_point.stamina += generateResult(crossDoubleData) * 1;

            }else if (divided.letters == 'sy') {

              item_add_point.moment += generateResult(crossDoubleData) * 1;

            }else if (divided.letters == 'ki') {

              item_add_point.condition += generateResult(crossDoubleData) * 1;

            }else if (divided.letters == 'ken') {

              item_add_point.health += generateResult(crossDoubleData) * 1;

            }
          }
        } else {
          console.log("Invalid format");
        }

      });
    }
  });

  return item_add_point;
}

export const calculatorAbilityFactor = (item) => {

  const item_factor_array = [
    item.m_m_f_factor,
    item.m_f_f_factor,
    item.f_m_f_factor,
    item.f_f_f_factor,
    item.m_f_factor,
    item.f_f_factor,
    item.f_factor
  ];

  const item_add_point_number = {
    speed : 0,
    strength : 0,
    stamina : 0,
    moment : 0,
    condition : 0,
    health : 0,
  };

  const item_add_point = {
    speed : 0,
    strength : 0,
    stamina : 0,
    moment : 0,
    condition : 0,
    health : 0,
  };

  item_factor_array.map((item)=>{

    if (item !== "#N/A") {
      const parts = splitProblemSequence(item);

      parts.map((part)=>{

        const divided = divideString(part);

        switch (divided.letters) {
          case "sp":
            item_add_point_number.speed += divided.numbers;
            break;
          case "st":
            item_add_point_number.strength += divided.numbers;
            break;
          case "kon":
            item_add_point_number.stamina += divided.numbers;
          break;
          case "sy":
            item_add_point_number.moment += divided.numbers;
          break;
          case "ki":
            item_add_point_number.condition += divided.numbers;
          break;
          case "ken":
            item_add_point_number.health += divided.numbers;
          break;
          default:
            break;
        }

      });
    }
  });

  item_add_point.speed += chooseAbilityFactor(item_add_point_number.speed) * 1;
  item_add_point.strength += chooseAbilityFactor(item_add_point_number.strength) * 1;
  item_add_point.stamina += chooseAbilityFactor(item_add_point_number.stamina) * 1;
  item_add_point.moment += chooseAbilityFactor(item_add_point_number.moment) * 1;
  item_add_point.condition += chooseAbilityFactor(item_add_point_number.condition) * 1;
  item_add_point.health += chooseAbilityFactor(item_add_point_number.health) * 1;

  return item_add_point;
}

const chooseAbilityFactor = (number) => {
  if(number < 6){
    return generateResult(abilityFactorFiveData);
  }else if (5 < number < 11) {
    return generateResult(abilityFactorTenData);
  }else if (10 < number < 16) {
    return generateResult(abilityFactorFifteenData);
  }else if (15 < number < 21) {
    return generateResult(abilityFactorTwentyData);
  }
}