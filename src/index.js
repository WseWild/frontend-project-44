import readlineSync from 'readline-sync';
import { showGameCondition } from './utils.js';

const ROUNDS_COUNT = 3;

const runGame = (gameCondition, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  showGameCondition(gameCondition);

  for (let currentRound = 0; currentRound < ROUNDS_COUNT; currentRound += 1) {
    const [questionValue, correctAnswer] = generateRoundData();
    console.log(`Question: ${questionValue}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer && currentRound < ROUNDS_COUNT) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'
      Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
