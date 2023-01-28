import {
  greetings,
  gameConditions,
  gameFlow,
} from '../index.js';

const GAMETYPE = 'gcd';

const brainGcd = () => {
  const name = greetings();
  gameConditions(GAMETYPE);
  gameFlow(name, GAMETYPE);
};

export default brainGcd;
