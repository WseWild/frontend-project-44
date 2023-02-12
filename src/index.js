import readlineSync from 'readline-sync';
import {
  getRandomArrayIndex,
  getRandomNum,
  isEven,
  isPrime,
  getStringFormatAnswer,
} from './utils.js';

export const ROUNDCOUNT = 3;

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomOperator = () => {
  const OPERATORS = ['+', '-', '*'];
  const result = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
  return result;
};

const getExpressionForCalc = () => {
  const minNum = 1;
  const maxNum = 20;

  const operator = getRandomOperator();
  const num1 = getRandomNum(minNum, maxNum);
  const num2 = getRandomNum(minNum, maxNum);
  const result = [num1, operator, num2];
  return result;
};

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

const getExpressionForGcd = () => {
  const minNum = 1;
  const maxNum = 30;

  const num1 = getRandomNum(minNum, maxNum);
  const num2 = getRandomNum(minNum, maxNum);
  const result = [num1, num2];
  return result;
};

const getQuestionValue = (gameType) => {
  switch (gameType) {
    case 'even':
      return getRandomNum();

    case 'calc':
      return getExpressionForCalc();

    case 'gcd':
      return getExpressionForGcd();

    case 'progression':
      return getArithProg();

    case 'prime':
      return getRandomNum();

    default:
      throw new Error(`Unknown order state: '${gameType}'!`);
  }
};

const question = (gameType, value) => {
  switch (gameType) {
    case 'even':
      console.log(`Question: ${value}`);
      break;

    case 'calc':
      console.log(`Question: ${value.join(' ')}`);
      break;

    case 'gcd':
      console.log(`Question: ${value.join(' ')}`);
      break;

    case 'progression':
      console.log(`Question: ${value.join(' ')}`);
      break;

    case 'prime':
      console.log(`Question: ${value}`);
      break;

    default:
      throw new Error(`Unknown order state: '${gameType}'!`);
  }
};

const getResultOfExpressionForCalc = ([num1, operator, num2]) => {
  switch (operator) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const getResultOfExpressionForGcd = ([num1, num2]) => {
  const gcd = (x, y) => {
    if (y > x) return gcd(y, x);
    if (!y) return x;
    return gcd(y, x % y);
  };
  return gcd(num1, num2);
};

const getUserAnswer = (gameType) => {
  switch (gameType) {
    case 'even':
      return readlineSync.question('Your answer: ');

    case 'calc':
      return readlineSync.questionInt('Your answer: ');

    case 'gcd':
      return readlineSync.questionInt('Your answer: ');

    case 'progression':
      return readlineSync.questionInt('Your answer: ');

    case 'prime':
      return readlineSync.question('Your answer: ');

    default:
      throw new Error(`Unknown order state: '${gameType}'!`);
  }
};

const getCorrectAnswer = (gameType, value) => {
  switch (gameType) {
    case 'even':
      return getStringFormatAnswer(isEven(value));

    case 'calc':
      return getResultOfExpressionForCalc(value);

    case 'gcd':
      return getResultOfExpressionForGcd(value);

    case 'progression':
      return getUnknownNumOfProgression(value);

    case 'prime':
      return getStringFormatAnswer(isPrime(value));

    default:
      throw new Error(`Unknown order state: '${gameType}'!`);
  }
};

export const gameFlow = (userName, gameType) => {
  for (let curRound = 0; curRound < ROUNDCOUNT; curRound += 1) {
    const questionValue = getQuestionValue(gameType);
    question(gameType, questionValue);
    const userAnswer = getUserAnswer(gameType);
    const correctAnswer = getCorrectAnswer(gameType, questionValue);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (curRound === ROUNDCOUNT - 1) console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'
      Let's try again, ${userName}!`);
      return;
    }
  }
};
