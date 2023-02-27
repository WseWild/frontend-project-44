import runGame from '../index.js';
import { getRandomNum } from '../utils.js';

const gameCondition = 'What is the result of the expression?';

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomNum(0, operators.length - 1);
  return operators[operatorIndex];
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

  return [num1, operator, num2];
};

const getRoundData = () => {
  const questionValue = getExpressionForCalc();
  const correctAnswer = String(getResultOfExpressionForCalc(questionValue));

  return [questionValue.join(' '), correctAnswer];
};

const runBrainCalc = () => runGame(gameCondition, getRoundData);

export default runBrainCalc;
