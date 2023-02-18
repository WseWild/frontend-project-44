import {
  showWelcomeMsg,
  getUserName,
  showUserGreeting,
} from './utils.js';

const runBrainGames = () => {
  showWelcomeMsg();
  const userName = getUserName();
  showUserGreeting(userName);
  return userName;
};

export default runBrainGames;
