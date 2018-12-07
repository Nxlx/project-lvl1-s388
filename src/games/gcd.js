import gameFlow from '..';
import generateRandomNum from '../utils';

const intro = 'Find the greatest common divisior of given numbers.';

const findGcd = (firstNum, secondNum) => {
  if (secondNum === 0) return Math.abs(firstNum);
  return findGcd(secondNum, firstNum % secondNum);
};

const newQuestion = () => {
  const firstNum = generateRandomNum(1, 100);
  const secondNum = generateRandomNum(1, 100);
  const gameQuestion = `${firstNum} ${secondNum}`;
  const rightAnswer = findGcd(firstNum, secondNum);
  return { gameQuestion, rightAnswer };
};

export default () => gameFlow(intro, newQuestion);
