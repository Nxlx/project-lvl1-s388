import gameFlow from '..';
import rndmNumGen from '../utils';

const intro = 'What number is missing in the progression \n';

const progressLength = 10;

const hideNumInLineGenerator = (startNum, step, hidePosition) => {
  let line = '';
  let numberPosition = 0;
  const lineAdd = (number) => {
    numberPosition += 1;
    line += (numberPosition === hidePosition) ? ' ..' : ` ${number}`;
  };

  for (let i = 0, number = startNum; i < progressLength; i += 1) {
    lineAdd(number);
    number += step;
  }
  return line;
};

const calculationQuest = (startNum, step, hidePosition) => startNum + (hidePosition - 1) * step;

const newQuestion = () => {
  const startNum = rndmNumGen(0, 100);
  const step = rndmNumGen(1, 5);
  const hidePosition = rndmNumGen(1, progressLength);
  const gameQuest = hideNumInLineGenerator(startNum, step, hidePosition);
  const rightAnswer = calculationQuest(startNum, step, hidePosition);
  return { gameQuest, rightAnswer };
};

export default () => gameFlow(intro, newQuestion);
