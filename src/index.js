import readlineSync from 'readline-sync';

const countAnswToWin = 3;
const welcomeMessage = () => {
  console.log('\nWelcome to the Brain Games!');
};

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const rndmNumGen = (difficulty) => {
  const maxNumLength = difficulty;
  const rndmNumLength = Math.floor(Math.random() * maxNumLength + 1);
  const rndmNum = Math.floor((10 ** rndmNumLength) * Math.random());
  return rndmNum;
};

export const rndmOperatorGen = () => {
  const minQtty = 1;
  const maxQtty = 3;
  let rand = minQtty + Math.random() * (maxQtty + 1 - minQtty);
  rand = Math.floor(rand);
  switch (rand) {
    case 1: return '-';
    case 2: return '*';
    case 3: return '+';
    default: return undefined;
  }
};

export const gameRound = (gameQuest, rightAnswer) => {
  console.log(`Question: ${gameQuest}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  const checkAnswer = (playerAnswer === `${rightAnswer}`);
  console.log((checkAnswer) ? 'Correct!' : `'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return checkAnswer;
};

export const gameFlow = (intro, newRound) => {
  welcomeMessage();
  console.log(intro);
  const playerName = getName();
  for (let answCounter = 0; answCounter < countAnswToWin; answCounter += 1) {
    if (newRound() === false) {
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
