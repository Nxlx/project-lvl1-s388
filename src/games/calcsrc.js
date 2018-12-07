import gameFlow from '..';
import rndmNumGen from '../utils';

const intro = 'What is the result of the expression? \n';

const chooseRndOperator = () => { 
  const strOfOperators = ('-*+');
  return strOfOperators[rndmNumGen(1, 3)];
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
  const firstNum = rndmNumGen(1, 10);
  const secondNum = rndmNumGen(1, 10);
  const operator = chooseRndOperator();
  const gameQuest = `${firstNum} ${operator} ${secondNum}`;
  const rightAnswer = calculationQuest(firstNum, secondNum, operator);
  return { gameQuest, rightAnswer };
};

export default () => gameFlow(intro, newQuestion);
