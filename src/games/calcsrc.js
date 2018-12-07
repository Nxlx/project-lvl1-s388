import gameFlow from '..';
import rndmNumGen from '../utils';

const intro = 'What is the result of the expression? \n';

export const rndmOperatorGen = () => {
  const minQtty = 1;
  const maxQtty = 3;
  const rand = rndmNumGen(minQtty, maxQtty);
  switch (rand) {
    case 1: return '-';
    case 2: return '*';
    case 3: return '+';
    default: return undefined;
  }
};

const calculationQuest = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '-': return firstNum - secondNum;
    case '*': return firstNum * secondNum;
    case '+': return firstNum + secondNum;
    default: return undefined;
  }
};

const newQuestion = () => {
  const firstNum = rndmNumGen(1, 100);
  const secondNum = rndmNumGen(1, 100);
  const operator = rndmOperatorGen();
  const gameQuest = `${firstNum} ${operator} ${secondNum}`;
  const rightAnswer = calculationQuest(firstNum, secondNum, operator);
  return { gameQuest, rightAnswer };
};

export default () => gameFlow(intro, newQuestion);
