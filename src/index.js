import readlineSync from 'readline-sync';

const welcomeMessage = () => {
  console.log('\nWelcome to the Brain Games!');
};

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const rndmNumGenerator = () => {
  const maxNumLength = 5;
  const rndmNumLength = Math.floor(Math.random() * maxNumLength + 1);
  const rndmNum = Math.floor((10 ** rndmNumLength) * Math.random());
  return rndmNum;
};

const evenQuestion = () => {
  const questNum = rndmNumGenerator();
  console.log(`Question: ${questNum}`);
  const rightAnswer = (questNum % 2 === 0) ? 'yes' : 'no';
  const playerAnswer = readlineSync.question('Your answer: ');
  const checkAnswer = (playerAnswer === rightAnswer);
  console.log((checkAnswer) ? 'Correct!' : `'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return checkAnswer;
};

const countAnswToWin = 3;
export const playGameEven = () => {
  welcomeMessage();
  console.log('Answer "yes" if number even otherwise answer "no". \n');
  const playerName = getName();
  for (let answCounter = 0; answCounter < countAnswToWin; answCounter += 1) {
    if (evenQuestion() === false) {
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export const braingamesIntro = () => {
  welcomeMessage();
  getName();
};
