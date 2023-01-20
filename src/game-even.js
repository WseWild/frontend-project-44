import readlineSync from 'readline-sync';
import greetings from './cli.js';

const maxInt = 99;
const roundCount = 3;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isEven = (int) => {
  if (int % 2 === 0) {
    return 'yes';
  } return 'no';
};

const brainEven = () => {
  const name = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let curRound = 0; curRound < roundCount; curRound += 1) {
    const curNum = getRandomInt(maxInt);
    console.log(`'Question: ' ${curNum}`);
    const userResponse = readlineSync.question('Your answer: ');
    const curNumIsEven = isEven(curNum);

    if (userResponse === curNumIsEven) {
      console.log('Correct!');
      if (curRound === roundCount - 1) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${curNumIsEven}'
      Let's try again, ${name}!`);
      return;
    }
  }
};

export default brainEven;
