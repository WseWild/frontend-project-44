import {
  greetings,
  gameFlow,
} from '../index.js';
import { gameConditions } from '../utils.js';

const GAMETYPE = 'gcd';

const runBrainGcd = () => {
  const name = greetings();
  gameConditions(GAMETYPE);
  gameFlow(name, GAMETYPE);
};

export default runBrainGcd;
