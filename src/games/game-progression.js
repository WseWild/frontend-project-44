import {
  greetings,
  gameFlow,
} from '../index.js';
import { gameConditions } from '../utils.js';

const GAMETYPE = 'progression';

const runBrainProgression = () => {
  const name = greetings();
  gameConditions(GAMETYPE);
  gameFlow(name, GAMETYPE);
};

export default runBrainProgression;
