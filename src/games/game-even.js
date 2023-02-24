import runGame from '../index.js';
import {
  getRandomNum,
  getStringFormatAnswer,
} from '../utils.js';

const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } return false;
};

const getRondData = () => {
  const questionValue = getRandomNum();
  const correctAnswer = getStringFormatAnswer(isEven(questionValue));
  return [questionValue, correctAnswer];
};

const runBrainEven = () => runGame(gameCondition, getRondData);

export default runBrainEven;
