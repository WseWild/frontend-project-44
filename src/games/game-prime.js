import {
  greetings,
  gameFlow,
} from '../index.js';
import { gameConditions } from '../utils.js';

const GAMETYPE = 'prime';

const runBrainPrime = () => {
  const name = greetings();
  gameConditions(GAMETYPE);
  gameFlow(name, GAMETYPE);
};

export default runBrainPrime;
