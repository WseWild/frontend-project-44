import runGame from '../index.js';
import { getRandomNum } from '../utils.js';

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

const getRoundData = () => {
  const progressionArray = getArithProg();
  const indexUnknownElement = getRandomNum(0, progressionArray.length - 1);
  const correctAnswer = String(progressionArray[indexUnknownElement]);
  progressionArray[indexUnknownElement] = unknownElement;

  return [progressionArray.join(' '), correctAnswer];
};

const runBrainProgression = () => runGame(gameCondition, getRoundData);

export default runBrainProgression;
