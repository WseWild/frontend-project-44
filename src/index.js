import { getUserName } from './utils.js';

export const ROUNDCOUNT = 3;

export const runGame = (gameCondition, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(gameCondition);

  for (let curRound = 0; curRound < ROUNDCOUNT; curRound += 1) {
    const [userAnswer, correctAnswer] = gameData();

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
