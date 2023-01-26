import readlineSync from 'readline-sync';

export const ROUNDCOUNT = 3;

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const isEven = (int) => {
  if (int % 2 === 0) {
    return 'yes';
  } return 'no';
};

export const gameConditions = (gameType) => {
  switch (gameType) {
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    default:
  }
};

export const getRandomInt = () => {
  const maxInt = 1;
  const minInt = 99;
  const result = Math.floor(Math.random() * (maxInt - minInt)) + minInt;
  return result;
};

const getRandomOperator = () => {
  const OPERATORS = ['+', '-', '*'];
  const result = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
  return result;
};

const getExpression = () => {
  const operator = getRandomOperator();
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const result = [num1, operator, num2];
  return result;
};

const getQuestionValue = (gameType) => {
  switch (gameType) {
    case 'even':
      return getRandomInt();

    case 'calc':
      return getExpression();

    default: return undefined;
  }
};

export const question = (gameType, value) => {
  switch (gameType) {
    case 'even':
      console.log(`'Question: ' ${value}`);
      break;

    case 'calc':
      console.log(`Question: ${value.join(' ')}`);
      break;

    default:
  }
};

const getResultOfExpression = ([num1, operator, num2]) => {
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

export const getUserAnswer = (gameType) => {
  switch (gameType) {
    case 'even':
      return readlineSync.question('Your answer: ');

    case 'calc':
      return readlineSync.questionInt('Your answer: ');

    default: return undefined;
  }
};

const getCorrectAnswer = (gameType, value) => {
  switch (gameType) {
    case 'even':
      return isEven(value);

    case 'calc':
      return getResultOfExpression(value);

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
