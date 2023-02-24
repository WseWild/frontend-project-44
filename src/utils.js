export const getRandomArrayIndex = (arr) => Math.floor(Math.random() * arr.length);
export const showGameCondition = (gameCondition) => console.log(gameCondition);
// eslint-disable-next-line max-len
export const getRandomNum = (minNum = 1, maxNum = 99) => Math.floor(Math.random() * (maxNum - minNum)) + minNum;

export const getStringFormatAnswer = (value) => (value ? 'yes' : 'no');
