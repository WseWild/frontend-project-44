import { runGame } from '../index.js';
import {
  getGameCondition,
  getRandomNum,
  getUserAnswer,
  getStringFormatAnswer,
} from '../utils.js';

const GAMETYPE = 'even';

export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } return false;
};

const getGameData = (gameType) => {
  const questionValue = getRandomNum();
  const userAnswer = getUserAnswer(gameType, questionValue);
  const correctAnswer = getStringFormatAnswer(isEven(questionValue));
  const arr = [userAnswer, correctAnswer];
  return arr;
};

const gameCondition = getGameCondition(GAMETYPE);
const gameData = () => getGameData(GAMETYPE);

const runBrainEven = () => {
  runGame(gameCondition, gameData);
};

export default runBrainEven;
