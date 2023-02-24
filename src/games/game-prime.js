import runGame from '../index.js';
import {
  getRandomNum,
  getStringFormatAnswer,
} from '../utils.js';

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0 && i !== num) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const questionValue = getRandomNum();
  const correctAnswer = getStringFormatAnswer(isPrime(questionValue));

  return [questionValue, correctAnswer];
};

const runBrainPrime = () => runGame(gameCondition, getRoundData);

export default runBrainPrime;
