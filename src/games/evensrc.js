import { rndmNumGen, gameRound, gameFlow } from '..';

const intro = 'Answer "yes" if number even otherwise answer "no". \n';
const difficulty = 5;

const newRound = () => {
  const gameQuest = rndmNumGen(difficulty);
  const rightAnswer = (gameQuest % 2 === 0) ? 'yes' : 'no';
  return gameRound(gameQuest, rightAnswer);
};

const gameEvenStart = () => gameFlow(intro, newRound);

export default gameEvenStart;
