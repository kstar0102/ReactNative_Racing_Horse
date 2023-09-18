
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
  g_f_f_name_array.push(girl.f_f_name, girl.f_m_name ,girl.m_f_name, girl.m_m_name);
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
  }

  const hasSevenDifferentElements = (input) => {
    let uniqueElements = new Set(input);
    
    return uniqueElements.size >= 7;
  }

  const compareArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false; // If array lengths are different, they are not equal
    }
  
    return arr1.every((element, index) => element === arr2[index]);
  }

  // 6.25% calculator
  const f_f_f_one_EqualElements = m_f_f_f_name_array.filter((element) =>
    g_f_f_f_name_array.includes(element)
  );
  if(f_f_f_one_EqualElements.length != 0){
    crossName = f_f_f_one_EqualElements[f_f_f_one_EqualElements.length - 1];
  }
  
  const f_f_f_two_EqualElements = m_f_f_f_name_array.filter((element) =>
    g_f_f_name_array.includes(element)
  );
  if(f_f_f_two_EqualElements.length != 0){
    crossName = f_f_f_two_EqualElements[f_f_f_two_EqualElements.length - 1];
  }

  const f_f_f_three_EqualElements = m_f_f_f_name_array.filter((element) =>
    g_f_name_array.includes(element)
  );

  if(f_f_f_three_EqualElements.length != 0){
    crossName = f_f_f_three_EqualElements[f_f_f_three_EqualElements.length - 1];
  }

  const f_f_f_four_EqualElements = m_f_f_f_name_array.filter((element) =>
    g_name_array.includes(element)
  );
  if(f_f_f_four_EqualElements.length != 0){
    crossName = f_f_f_four_EqualElements[f_f_f_four_EqualElements.length - 1];
  }

  const f_f_one_EqualElements = m_f_f_name_array.filter((element) =>
    g_f_f_f_name_array.includes(element)
  );
  if(f_f_one_EqualElements.length != 0){
    crossName = f_f_one_EqualElements[f_f_one_EqualElements.length - 1];
  }

  // 12.50% calculator
  const f_f_two_EqualElements = m_f_f_name_array.filter((element) =>
    g_f_f_name_array.includes(element)
  );
  if(f_f_two_EqualElements.length != 0){
    crossName = f_f_two_EqualElements[f_f_two_EqualElements.length - 1];
  }

  const f_f_three_EqualElements = m_f_f_name_array.filter((element) =>
    g_f_name_array.includes(element)
  );
  if(f_f_three_EqualElements.length != 0){
    crossName = f_f_three_EqualElements[f_f_three_EqualElements.length - 1];
  }
  
  const f_f_four_EqualElements = m_f_f_name_array.filter((element) =>
    g_name_array.includes(element)
  );
  if(f_f_four_EqualElements.length){
    crossName = f_f_four_EqualElements[f_f_four_EqualElements.length - 1];
  }

  const f_one_EqualElements = m_f_name_array.filter((element) =>
    g_f_f_f_name_array.includes(element)
  );
  if(f_one_EqualElements.length != 0){
    crossName = f_one_EqualElements[f_one_EqualElements.length - 1];
  }

  const f_two_EqualElements = m_f_name_array.filter((element) =>
    g_f_f_name_array.includes(element)
  );
  if(f_two_EqualElements.length != 0){
    crossName = f_two_EqualElements[f_two_EqualElements.length - 1];
  }
  
  // 25%

  const f_three_EqualElements = m_f_name_array.filter((element) =>
    g_f_name_array.includes(element)
  );
  if(f_three_EqualElements.length != 0){
    crossName = f_three_EqualElements[f_three_EqualElements.length - 1];
  }

  const f_four_EqualElements = m_f_name_array.filter((element) =>
    g_name_array.includes(element)
  );
  if(f_four_EqualElements.length != 0){
    crossName = f_four_EqualElements[f_four_EqualElements.length - 1];
  }

  // 50%
  const one_EqualElements = m_name_array.filter((element) =>
    g_f_f_f_name_array.includes(element)
  );
  if(one_EqualElements.length != 0){
    crossName = one_EqualElements[one_EqualElements.length - 1];
  }

  const two_EqualElements = m_name_array.filter((element) =>
    g_f_f_name_array.includes(element)
  );
  if(two_EqualElements.length != 0){
    crossName = two_EqualElements[two_EqualElements.length - 1];
  }

  const three_EqualElements = m_name_array.filter((element) =>
    g_f_name_array.includes(element)
  );
  if(three_EqualElements.length != 0){
    crossName = three_EqualElements[three_EqualElements.length - 1];
  }

  const four_EqualElements = m_name_array.filter((element) =>
    g_name_array.includes(element)
  );
  if(four_EqualElements.length != 0){
    crossName = four_EqualElements[four_EqualElements.length - 1];
  }

  console.log("crossName==================");
  console.log(crossName);
  console.log("crossName==================");

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

  console.log("lowestTotal-------------");
  console.log(lowestTotal);
  console.log("lowestTotal-------------");

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

  const finalArr = [girl.f_f_sys, girl.m_f_sys, girl.f_m_sys, girl.m_m_sys, man.f_f_sys, man.m_f_sys, man.f_m_sys, man.m_m_sys];

  const konwArr1 = [man.f_f_m_sys, man.f_m_m_sys, man.m_m_m_sys, man.m_f_m_sys];
  const knowArr2 = [girl.f_f_m_sys, girl.f_m_m_sys, girl.m_m_m_sys, girl.m_f_m_sys];
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
  else if (toGetNum(man.age) >= 23 && toGetNum(girl.age) >= 18){
    isFinal = true;
    console.log("final");
  }

  // goodFriend
  else if(hasThreeSameElements(finalArr)){
    isGoodFriend = true;
    console.log("good Friend");
  }

  // match
  else if(hasSevenDifferentElements(finalArr)){
    console.log(finalArr);
    isMatch = true;
    console.log("match111");
  }

  // know
  else if(compareArrays(konwArr1, knowArr2)){
    isKnow = true;
    console.log("know");
  }

  // miracle
  else if(isMatch && isKnow){
    isMiracle = true;
    console.log("miracle")
  }

 // outblid
  if (lenghtTotal == 0) {
    isOutBlid = true;
    console.log("outblid");
  }

  //triple crown
  if(girl.triple_crown == 20 && man.triple_crown == 20){
    isTripCrown = true;
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
  resultArray.isShotReversal = false;
  resultArray.crossName = crossName;

  return resultArray;
};

export const checkKnicks = (man, girl) => {

}

const tripleCrownRelatives = (man, girl) => {};
