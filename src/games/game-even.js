import {
  greetings,
  gameFlow,
} from '../index.js';
import { gameConditions } from '../utils.js';

const GAMETYPE = 'even';

const runBrainEven = () => {
  const name = greetings();
  gameConditions(GAMETYPE);
  gameFlow(name, GAMETYPE);
};

export default runBrainEven;
