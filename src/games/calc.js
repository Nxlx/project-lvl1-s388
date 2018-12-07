import gameFlow from '..';
import generateRandomNum from '../utils';

const intro = 'What is the result of the expression?';

const chooseRandomeOperator = () => {
  const setOfOperators = ('-*+');
  const operator = setOfOperators[generateRandomNum(0, 2)];
  return operator;
};

const calculateExpression = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '-': return firstNum - secondNum;
    case '*': return firstNum * secondNum;
    case '+': return firstNum + secondNum;
    default: return undefined;
  }
};

const newQuestion = () => {
  const firstNum = generateRandomNum(1, 10);
  const secondNum = generateRandomNum(1, 10);
  const operator = chooseRandomeOperator();
  const gameQuestion = `${firstNum} ${operator} ${secondNum}`;
  const rightAnswer = calculateExpression(firstNum, secondNum, operator);
  return { gameQuestion, rightAnswer };
};

export default () => gameFlow(intro, newQuestion);
