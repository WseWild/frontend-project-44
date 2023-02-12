import {
  greetings,
  gameFlow,
} from '../index.js';
import { gameConditions } from '../utils.js';

const GAMETYPE = 'calc';

const runBrainCalc = () => {
  const name = greetings();
  gameConditions(GAMETYPE);
  gameFlow(name, GAMETYPE);
};

export default runBrainCalc;
