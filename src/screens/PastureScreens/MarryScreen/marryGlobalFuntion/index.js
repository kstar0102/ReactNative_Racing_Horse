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

export const closeRelatives = () => {
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
  g_name_array.push(filteredGirl.name);
  m_name_array.push(filteredMan.name);

  // 25%
  g_f_name_array.push(filteredGirl.f_name, filteredGirl.m_name);
  m_f_name_array.push(filteredMan.f_name, filteredMan.m_name);

  // 12.50%
  g_f_f_name_array.push(
    filteredGirl.f_f_name,
    filteredGirl.f_m_name,
    filteredGirl.m_f_name,
    filteredGirl.m_m_name
  );
  m_f_f_name_array.push(
    filteredMan.f_f_name,
    filteredMan.f_m_name,
    filteredMan.m_f_name,
    filteredMan.m_m_name
  );

  // 6.25%
  g_f_f_f_name_array.push(
    filteredGirl.f_f_f_name,
    filteredGirl.f_f_m_name,
    filteredGirl.f_m_f_name,
    filteredGirl.f_m_m_name,
    filteredGirl.m_m_m_name,
    filteredGirl.m_m_f_name,
    filteredGirl.m_f_m_name,
    filteredGirl.m_f_f_name
  );
  m_f_f_f_name_array.push(
    filteredMan.f_f_f_name,
    filteredMan.f_f_m_name,
    filteredMan.f_m_f_name,
    filteredMan.f_m_m_name,
    filteredGirl.m_m_m_name,
    filteredGirl.m_m_f_name,
    filteredGirl.m_f_m_name,
    filteredGirl.m_f_f_name
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
  // f_name, m_name 25,

  // f_f_name, m_m_name 12,50
  // f_m_name, m_f_name

  // f_f_f_name, m_m_m_name 6.25
  // f_f_m_name, m_m_f_name
  // f_m_f_name, m_f_m_name
  // f_m_m_name, m_f_f_name

  console.log(lenghtTotal);
  console.log(totalCalculator);
  result = "";
  switch (true) {
    case totalCalculator >= 50 || lenghtTotal >= 4:
      result = "ok";
      break;
    case filteredGirl.f_name == filteredMan.f_name:
      f_nameResults = 25;
      break;
    // case skill >= 2001 && skill <= 3000:
    //   results = stateValue * 0.8;
    //   break;
    // case skill >= 1001 && skill <= 2000:
    //   results = stateValue * 0.7;
    //   break;
    // case skill >= 0 && skill <= 1000:
    //   results = stateValue * 0.6;
    //   break;
    default:
      return;
  }

  // console.log(result);
  // return results;
};
