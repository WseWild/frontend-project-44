import readlineSync from 'readline-sync';
import {
  getRandomArrayIndex,
  getRandomInt,
  isEven,
  isPrime,
} from './utils/utils.js';

export const ROUNDCOUNT = 3;

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const gameConditions = (gameType) => {
  switch (gameType) {
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;

    case 'calc':
      console.log('What is the result of the expression?');
      break;

    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;

    case 'progression':
      console.log('What number is missing in the progression?');
      break;

    case 'prime':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    default:
  }
};

const getRandomOperator = () => {
  const OPERATORS = ['+', '-', '*'];
  const result = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
  return result;
};

const getExpressionForCalc = () => {
  const minInt = 1;
  const maxInt = 20;

  const operator = getRandomOperator();
  const num1 = getRandomInt(minInt, maxInt);
  const num2 = getRandomInt(minInt, maxInt);
  const result = [num1, operator, num2];
  return result;
};

const getArithProg = () => {
  const firstElement = getRandomInt();
  const difernceInt = getRandomInt();
  const unknownElement = '..';

  const minArrLength = 5;
  const maxArrLength = 12;

  const len = getRandomInt(minArrLength, maxArrLength);
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
    if (arr[i] === unknownElement) {
      result = arr[i + 1] - difference;
    }
  }

  return result;
};

const getExpressionForGcd = () => {
  const minInt = 1;
  const maxInt = 30;

  const num1 = getRandomInt(minInt, maxInt);
  const num2 = getRandomInt(minInt, maxInt);
  const result = [num1, num2];
  return result;
};

const getQuestionValue = (gameType) => {
  switch (gameType) {
    case 'even':
      return getRandomInt();

    case 'calc':
      return getExpressionForCalc();

    case 'gcd':
      return getExpressionForGcd();

    case 'progression':
      return getArithProg();

    case 'prime':
      return getRandomInt();

    default: return undefined;
  }
};

const question = (gameType, value) => {
  switch (gameType) {
    case 'even':
      console.log(`'Question: ' ${value}`);
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
      console.log(`'Question: ' ${value}`);
      break;

    default:
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

    default: return undefined;
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

    default: return undefined;
  }
};

const getCorrectAnswer = (gameType, value) => {
  switch (gameType) {
    case 'even':
      return isEven(value);

    case 'calc':
      return getResultOfExpressionForCalc(value);

    case 'gcd':
      return getResultOfExpressionForGcd(value);

    case 'progression':
      return getUnknownNumOfProgression(value);

    case 'prime':
      return isPrime(value);

    default: return undefined;
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
