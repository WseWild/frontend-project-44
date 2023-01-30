import {
  greetings,
  gameConditions,
  gameFlow,
} from '../index.js';

const GAMETYPE = 'prime';

const brainPrime = () => {
  const name = greetings();
  gameConditions(GAMETYPE);
  gameFlow(name, GAMETYPE);
};

export default brainPrime;
