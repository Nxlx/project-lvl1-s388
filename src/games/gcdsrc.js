import gameFlow from '..';
import rndmNumGen from '../utils';

const intro = 'Find the greatest common divisior of given numbers. \n';

const calculationQuest = (firstNum, secondNum) => {
  if (secondNum === 0) return Math.abs(firstNum);
  return calculationQuest(secondNum, firstNum % secondNum);
};

const newQuestion = () => {
  const firstNum = rndmNumGen(1, 100);
  const secondNum = rndmNumGen(1, 100);
  const gameQuest = `${firstNum} ${secondNum}`;
  const rightAnswer = calculationQuest(firstNum, secondNum);
  return { gameQuest, rightAnswer };
};

export default () => gameFlow(intro, newQuestion);
