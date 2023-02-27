export const getRandomNum = (minNum = 1, maxNum = 99) => (
  Math.floor(Math.random() * (maxNum - minNum)) + minNum
);

export const getStringFormatAnswer = (value) => (value ? 'yes' : 'no');
