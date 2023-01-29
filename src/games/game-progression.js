import {
  greetings,
  gameConditions,
  gameFlow,
} from '../index.js';

const GAMETYPE = 'progression';

const brainProgression = () => {
  const name = greetings();
  gameConditions(GAMETYPE);
  gameFlow(name, GAMETYPE);
};

export default brainProgression;
