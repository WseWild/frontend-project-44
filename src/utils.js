import readlineSync from 'readline-sync';

export const getRandomArrayIndex = (arr) => Math.floor(Math.random() * arr.length);

export const showWelcomeMsg = () => console.log('Welcome to the Brain Games!');
export const showUserGreeting = (userName) => console.log(`Hello, ${userName}!`);
export const shoeGameCondition = (gameCondition) => console.log(gameCondition);

// eslint-disable-next-line max-len
export const getRandomNum = (minNum = 1, maxNum = 99) => Math.floor(Math.random() * (maxNum - minNum)) + minNum;

export const getStringFormatAnswer = (value) => (value ? 'yes' : 'no');

export const getUserName = () => readlineSync.question('May I have your name?: ');

export const getGameCondition = (gameType) => {
  switch (gameType) {
    case 'even':
      return 'Answer "yes" if the number is even, otherwise answer "no".';

    case 'calc':
      return 'What is the result of the expression?';

    case 'gcd':
      return 'Find the greatest common divisor of given numbers.';

    case 'progression':
      return 'What number is missing in the progression?';

    case 'prime':
      return 'Answer "yes" if given number is prime. Otherwise answer "no".';

    default:
      throw new Error(`Unknown order state: '${gameType}'!`);
  }
};

export const getUserAnswer = (gameType, value) => {
  switch (gameType) {
    case 'even':
      console.log(`Question: ${value}`);
      return readlineSync.question('Your answer: ');

    case 'calc':
      console.log(`Question: ${value.join(' ')}`);
      return readlineSync.questionInt('Your answer: ');

    case 'gcd':
      console.log(`Question: ${value.join(' ')}`);
      return readlineSync.questionInt('Your answer: ');

    case 'progression':
      console.log(`Question: ${value.join(' ')}`);
      return readlineSync.questionInt('Your answer: ');

    case 'prime':
      console.log(`Question: ${value}`);
      return readlineSync.question('Your answer: ');

    default:
      throw new Error(`Unknown order state: '${gameType}'!`);
  }
};
