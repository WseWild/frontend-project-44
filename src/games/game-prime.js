import { runGame } from '../index.js';
import {
  getGameCondition,
  getRandomNum,
  getUserAnswer,
  getStringFormatAnswer,
} from '../utils.js';

const GAMETYPE = 'prime';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0 && i !== num) {
      return false;
    }
  }
  return true;
};

const getGameData = (gameType) => {
  const questionValue = getRandomNum();
  const userAnswer = getUserAnswer(gameType, questionValue);
  const correctAnswer = getStringFormatAnswer(isPrime(questionValue));
  const arr = [userAnswer, correctAnswer];
  return arr;
};

const gameCondition = getGameCondition(GAMETYPE);
const gameData = () => getGameData(GAMETYPE);

const runBrainPrime = () => {
  runGame(gameCondition, gameData);
};

export default runBrainPrime;
