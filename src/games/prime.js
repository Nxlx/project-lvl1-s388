import gameFlow from '..';
import generateRandomNum from '../utils';

const intro = 'Answer "yes" if number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const newQuestion = () => {
  const gameQuestion = `${generateRandomNum(1, 30)}`;
  const rightAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return { gameQuestion, rightAnswer };
};

export default () => gameFlow(intro, newQuestion);
