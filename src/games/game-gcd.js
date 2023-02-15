import { runGame } from '../index.js';
import {
  getGameCondition,
  getRandomNum,
  getUserAnswer,
} from '../utils.js';

const GAMETYPE = 'gcd';

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
  const result = [num1, num2];
  return result;
};

const getGameData = (gameType) => {
  const questionValue = getExpressionForGcd();
  const userAnswer = getUserAnswer(gameType, questionValue);
  const correctAnswer = getResultOfExpressionForGcd(questionValue);
  const arr = [userAnswer, correctAnswer];
  return arr;
};

const gameCondition = getGameCondition(GAMETYPE);
const gameData = () => getGameData(GAMETYPE);

const runBrainGcd = () => {
  runGame(gameCondition, gameData);
};

export default runBrainGcd;
