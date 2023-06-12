// Define the months and their corresponding weather patterns
const weatherPatterns = {
	12: ['晴', '晴', '晴', '晴', '曇', '曇', '雨', '雪', '雪', '雪'],
	1: ['晴', '晴', '晴', '晴', '曇', '曇', '雨', '雪', '雪', '雪'],
	2: ['晴', '晴', '晴', '晴', '曇', '曇', '雨', '雪', '雪', '雪'],
	3: ['晴', '晴', '晴', '晴', '晴', '曇', '曇', '雨', '雨', '雨'],
	4: ['晴', '晴', '晴', '晴', '晴', '曇', '曇', '雨', '雨', '雨'],
	5: ['晴', '晴', '晴', '晴', '晴', '曇', '曇', '雨', '雨', '雨'],
	6: ['晴', '晴', '晴', '晴', '晴', '曇', '雨', '雨', '雨', '雨'],
	7: ['晴', '晴', '晴', '晴', '晴', '曇', '雨', '雨', '雨', '雨'],
	8: ['晴', '晴', '晴', '晴', '晴', '曇', '雨', '雨', '雨', '雨'],
	9: ['晴', '晴', '晴', '晴', '曇', '曇', '雨', '雨', '雨', '雨'],
	10: ['晴', '晴', '晴', '晴', '曇', '曇', '雨', '雨', '雨', '雨'],
	11: ['晴', '晴', '晴', '晴', '曇', '曇', '雨', '雨', '雨', '雨'],
};

// Generate a random month
const months = Object.keys(weatherPatterns);

export const getRandomWeather = (randomMonth) => {
	// randomMonth = months[Math.floor(Math.random() * months.length)];

	// Generate a random weather pattern based on the mont
	if (randomMonth === undefined) {
		return ["", "", ""];
	}
	const weatherPattern = weatherPatterns[randomMonth];
	const randomWeather = weatherPattern[Math.floor(Math.random() * weatherPattern.length)];
	let d1 = ['良', '稍重']
	let d2 = ['重', '不良']
	let turf = "";
	let da = "";
	switch (randomWeather) {
	case '晴':
	case '曇':
		turf = '良';
		da = '良';
		break;
	case '雨':
		turf = d1[Math.floor(Math.random() * d1.length)];
		da = d1[Math.floor(Math.random() * d1.length)];
		break;
	case '雪':
		turf = d2[Math.floor(Math.random() * d1.length)];
		da = d2[Math.floor(Math.random() * d1.length)];
		break;
	}
	return [randomWeather, turf, da];
}