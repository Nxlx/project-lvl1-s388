import gameFlow from '..';
import generateRandomNum from '../utils';

const intro = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const newQuestion = () => {
  const gameQuestion = generateRandomNum(1, 999);
  const rightAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return { gameQuestion, rightAnswer };
};

export default () => gameFlow(intro, newQuestion);
