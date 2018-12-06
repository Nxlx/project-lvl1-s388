import {
  rndmNumGen, gameRound, gameFlow, rndmOperatorGen,
} from '..';

const intro = 'What is the result of the expression? \n';
const difficulty = 2;

const calculationQuest = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '-': return firstNum - secondNum;
    case '*': return firstNum * secondNum;
    case '+': return firstNum + secondNum;
    default: return undefined;
  }
};

const newRound = () => {
  const firstNum = rndmNumGen(difficulty);
  const secondNum = rndmNumGen(difficulty);
  const operator = rndmOperatorGen();
  const gameQuest = `${firstNum} ${operator} ${secondNum}`;
  const rightAnswer = calculationQuest(firstNum, secondNum, operator);
  return gameRound(gameQuest, rightAnswer);
};

const gameCalcStart = () => gameFlow(intro, newRound);

export default gameCalcStart;
