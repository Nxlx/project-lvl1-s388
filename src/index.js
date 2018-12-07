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

const gameRound = (gameQuest, rightAnswer) => {
  console.log(`Question: ${gameQuest}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  const checkAnswer = (playerAnswer === `${rightAnswer}`);
  console.log((checkAnswer) ? 'Correct!' : `'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return checkAnswer;
};

export default (intro, newQuestion) => {
  welcomeMessage();
  console.log(intro);
  const playerName = getName();
  for (let answCounter = 0; answCounter < countAnswToWin; answCounter += 1) {
    const { gameQuest, rightAnswer } = newQuestion();
    if (!gameRound(gameQuest, rightAnswer)) {
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
