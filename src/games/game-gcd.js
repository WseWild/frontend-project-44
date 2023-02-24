import runGame from '../index.js';
import { getRandomNum } from '../utils.js';

const gameCondition = 'Find the greatest common divisor of given numbers.';

const getResultOfExpressionForGcd = ([num1, num2]) => {
  const gcd = (x, y) => {
    if (y > x) return gcd(y, x);
    if (!y) return x;
    return gcd(y, x % y);
  };
  return gcd(num1, num2);
};

const getExpressionForGcd = () => {
  const minNum = 1;
  const maxNum = 30;
  const num1 = getRandomNum(minNum, maxNum);
  const num2 = getRandomNum(minNum, maxNum);

  return [num1, num2];
};

const getRoundData = () => {
  const questionValue = getExpressionForGcd();
  const correctAnswer = String(getResultOfExpressionForGcd(questionValue));
  return [questionValue.join(' '), correctAnswer];
};

const runBrainGcd = () => runGame(gameCondition, getRoundData);

export default runBrainGcd;
