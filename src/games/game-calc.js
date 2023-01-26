import {
  greetings,
  gameConditions,
  gameFlow,
} from '../index.js';

const GAMETYPE = 'calc';

const brainCalc = () => {
  const name = greetings();
  gameConditions(GAMETYPE);
  gameFlow(name, GAMETYPE);
};

export default brainCalc;
