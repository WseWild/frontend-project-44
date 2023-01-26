import {
  greetings,
  gameConditions,
  gameFlow,
} from '../index.js';

const GAMETYPE = 'even';

const brainEven = () => {
  const name = greetings();
  gameConditions(GAMETYPE);
  gameFlow(name, GAMETYPE);
};

export default brainEven;
