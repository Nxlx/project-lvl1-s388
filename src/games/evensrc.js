import gameFlow from '..';
import rndmNumGen from '../utils';

const intro = 'Answer "yes" if number even otherwise answer "no". \n';
const isEven = number => number % 2 === 0;
const newQuestion = () => {
  const gameQuest = rndmNumGen(1, 999);
  const rightAnswer = isEven(gameQuest) ? 'yes' : 'no';
  return { gameQuest, rightAnswer };
};

export default () => gameFlow(intro, newQuestion);
