import { runGame } from '../index.js';
import {
  getGameCondition,
  getRandomNum,
  getUserAnswer,
} from '../utils.js';

const GAMETYPE = 'calc';

export const getRandomOperator = () => {
  const OPERATORS = ['+', '-', '*'];
  const result = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
  return result;
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

const getExpressionForCalc = () => {
  const minNum = 1;
  const maxNum = 20;

  const operator = getRandomOperator();
  const num1 = getRandomNum(minNum, maxNum);
  const num2 = getRandomNum(minNum, maxNum);
  const result = [num1, operator, num2];
  return result;
};

const getGameData = (gameType) => {
  const questionValue = getExpressionForCalc();
  const userAnswer = getUserAnswer(gameType, questionValue);
  const correctAnswer = getResultOfExpressionForCalc(questionValue);
  const arr = [userAnswer, correctAnswer];
  return arr;
};

const gameCondition = getGameCondition(GAMETYPE);
const gameData = () => getGameData(GAMETYPE);

const runBrainCalc = () => {
  runGame(gameCondition, gameData);
};

export default runBrainCalc;
