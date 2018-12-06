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
  const num = rndmNumGenerator();
  const numIsEven = num % 2 === 0;
  console.log(`Question: ${num}`);
  const isEvenAnswer = readlineSync.question('Your answer: ');
  if (numIsEven && isEvenAnswer === 'yes') {
    console.log('Correct!');
    return true;
  }
  if (!numIsEven && isEvenAnswer === 'no') {
    console.log('Correct!');
    return true;
  }
  console.log(`'${isEvenAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
  return false;
};

export const playGameEven = () => {
  welcomeMessage();
  console.log('Answer "yes" if number even otherwise answer "no". \n');
  const playerName = getName();
  const countToWin = 3;
  for (let answCounter = 0; answCounter < countToWin; answCounter += 1) {
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
