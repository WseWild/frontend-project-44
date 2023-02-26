import runGame from '../index.js';
import {
  getRandomNum,
  getRandomArrayIndex,
} from '../utils.js';

const gameCondition = 'What number is missing in the progression?';
const unknownElement = '..';

const getArithProg = () => {
  const firstElement = getRandomNum();
  const difernceInt = getRandomNum();
  const minArrLength = 5;
  const maxArrLength = 12;

  const len = getRandomNum(minArrLength, maxArrLength);
  const arr = [];

  arr[0] = firstElement;

  for (let i = 1; i <= len; i += 1) {
    arr[i] = arr[i - 1] + difernceInt;
  }

  return arr;
};

const getDifference = (arr) => arr[1] - arr[0];

// eslint-disable-next-line max-len
const getUnknownNumOfProgression = (arr, difference, indexUnknownElement) => arr[indexUnknownElement + 1] - difference;

const getRoundData = () => {
  const progressionArray = getArithProg();
  const difference = getDifference(progressionArray);
  const indexUnknownElement = getRandomArrayIndex(progressionArray);
  progressionArray[indexUnknownElement] = unknownElement;
  const questionValue = progressionArray;
  // eslint-disable-next-line max-len
  const correctAnswer = String(getUnknownNumOfProgression(questionValue, difference, indexUnknownElement));
  return [questionValue.join(' '), correctAnswer];
};

const runBrainProgression = () => runGame(gameCondition, getRoundData);

export default runBrainProgression;
