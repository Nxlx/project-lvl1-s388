import gameFlow from '..';
import generateRandomNum from '../utils';

const intro = 'What number is missing in the progression?';
const progressionLength = 10;

const hideNumInProgression = (startNum, step, hiddenElementPosition) => {
  let progressionString = '';
  const addToProgressionString = (newNumber, position) => {
    progressionString += (position === hiddenElementPosition) ? '.. ' : `${newNumber} `;
  };
  for (let position = 1, newNumber = startNum; position <= progressionLength; position += 1) {
    addToProgressionString(newNumber, position);
    newNumber += step;
  }
  return progressionString;
};

const findHideNumber = (startNum, step, hiddenPosition) => startNum + (hiddenPosition - 1) * step;

const newQuestion = () => {
  const startNum = generateRandomNum(0, 100);
  const step = generateRandomNum(1, 5);
  const hiddenElementPosition = generateRandomNum(1, progressionLength);
  const gameQuestion = hideNumInProgression(startNum, step, hiddenElementPosition);
  const rightAnswer = findHideNumber(startNum, step, hiddenElementPosition);
  return { gameQuestion, rightAnswer };
};

export default () => gameFlow(intro, newQuestion);
