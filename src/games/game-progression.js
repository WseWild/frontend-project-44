import { runGame } from '../index.js';
import {
  getGameCondition,
  getRandomNum,
  getUserAnswer,
  getRandomArrayIndex,
} from '../utils.js';

const GAMETYPE = 'progression';

const getArithProg = () => {
  const firstElement = getRandomNum();
  const difernceInt = getRandomNum();
  const unknownElement = '..';

  const minArrLength = 5;
  const maxArrLength = 12;

  const len = getRandomNum(minArrLength, maxArrLength);
  const arr = [];

  arr[0] = firstElement;

  for (let i = 1; i <= len; i += 1) {
    arr[i] = arr[i - 1] + difernceInt;
  }
  arr[getRandomArrayIndex(arr)] = unknownElement;

  return arr;
};

const getUnknownNumOfProgression = (arr) => {
  let difference;
  let result;
  const unknownElement = '..';

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== unknownElement && arr[i + 1] !== unknownElement) {
      difference = arr[i + 1] - arr[i];
      break;
    }
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === unknownElement && i !== arr.length - 1) {
      result = arr[i + 1] - difference;
      break;
    } result = arr[i - 1] + difference;
  }

  return result;
};

const getGameData = (gameType) => {
  const questionValue = getArithProg();
  const userAnswer = getUserAnswer(gameType, questionValue);
  const correctAnswer = getUnknownNumOfProgression(questionValue);
  const arr = [userAnswer, correctAnswer];
  return arr;
};

const gameCondition = getGameCondition(GAMETYPE);
const gameData = () => getGameData(GAMETYPE);

const runBrainProgression = () => {
  runGame(gameCondition, gameData);
};

export default runBrainProgression;
