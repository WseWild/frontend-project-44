import runGame from '../index.js';
import {
  getRandomNum,
  getRandomArrayIndex,
} from '../utils.js';

const gameCondition = 'What number is missing in the progression?';

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

const getRoundData = () => {
  const questionValue = getArithProg();
  const correctAnswer = String(getUnknownNumOfProgression(questionValue));
  return [questionValue.join(' '), correctAnswer];
};

const runBrainProgression = () => runGame(gameCondition, getRoundData);

export default runBrainProgression;
