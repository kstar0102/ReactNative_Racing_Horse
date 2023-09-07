let filteredGirl;
let filteredMan;

export const stallion = (man) => {
  filteredMan = man;
  return man;
};

export const breedingHorse = (girl) => {
  filteredGirl = girl;
  return girl;
};

export const checkMarry = (man, girl) => {
let result =  closeRelatives(man, girl);
console.log(result);
}

// inbreeding
const closeRelatives = (man, girl) => {
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
  g_f_name_array.push(girl.f_name);
  m_f_name_array.push(man.f_name);

  // 12.50%
  g_f_f_name_array.push(
    girl.f_f_name,
    girl.m_f_name
  );
  m_f_f_name_array.push(
    man.f_f_name,
    man.m_f_name
  );

  // 6.25%
  g_f_f_f_name_array.push(
    girl.f_f_f_name,
    girl.f_m_f_name,
    girl.m_m_f_name,
    girl.m_f_f_name
  );
  
  m_f_f_f_name_array.push(
    man.f_f_f_name,
    man.f_m_f_name,
    man.m_m_f_name,
    man.m_f_f_name
  );

  // 6.25% calculator
  const f_f_f_one_EqualElements = m_f_f_f_name_array.filter((element) =>
    g_f_f_f_name_array.includes(element)
  );
  const f_f_f_two_EqualElements = m_f_f_f_name_array.filter((element) =>
    g_f_f_name_array.includes(element)
  );
  const f_f_f_three_EqualElements = m_f_f_f_name_array.filter((element) =>
    g_f_name_array.includes(element)
  );
  const f_f_f_four_EqualElements = m_f_f_f_name_array.filter((element) =>
    g_name_array.includes(element)
  );

  const f_f_one_EqualElements = m_f_f_name_array.filter((element) =>
    g_f_f_f_name_array.includes(element)
  );
  // 12.50% calculator
  const f_f_two_EqualElements = m_f_f_name_array.filter((element) =>
    g_f_f_name_array.includes(element)
  );
  const f_f_three_EqualElements = m_f_f_name_array.filter((element) =>
    g_f_name_array.includes(element)
  );
  const f_f_four_EqualElements = m_f_f_name_array.filter((element) =>
    g_name_array.includes(element)
  );

  const f_one_EqualElements = m_f_name_array.filter((element) =>
    g_f_f_f_name_array.includes(element)
  );

  const f_two_EqualElements = m_f_name_array.filter((element) =>
    g_f_f_name_array.includes(element)
  );
  // 25%

  const f_three_EqualElements = m_f_name_array.filter((element) =>
    g_f_name_array.includes(element)
  );
  const f_four_EqualElements = m_f_name_array.filter((element) =>
    g_name_array.includes(element)
  );

  // 50%
  const one_EqualElements = m_name_array.filter((element) =>
    g_f_f_f_name_array.includes(element)
  );

  const two_EqualElements = m_name_array.filter((element) =>
    g_f_f_name_array.includes(element)
  );

  const three_EqualElements = m_name_array.filter((element) =>
    g_f_name_array.includes(element)
  );

  const four_EqualElements = m_name_array.filter((element) =>
    g_name_array.includes(element)
  );

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

  console.log(lenghtTotal);
  console.log(totalCalculator);
  
  if(totalCalculator >= 50 || lenghtTotal >= 4){
    return "inbreeding"
  }
  return "no";
};

const croseRelatives = (man, girl) => {

}

const tripleCrownRelatives = (man, girl) => {
  
}

