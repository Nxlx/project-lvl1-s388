import gameFlow from '..';
import generateRandomNum from '../utils';

const intro = 'What number is missing in the progression';
const progressionLength = 10;

const hideNumInProgression = (startNum, step, hidePosition) => {
  let progressionString = '';
  const addToProgressionString = (newNumber, position) => {
    progressionString += (position === hidePosition) ? '.. ' : `${newNumber} `;
  };
  for (let position = 1, newNumber = startNum; position <= progressionLength; position += 1) {
    addToProgressionString(newNumber, position);
    newNumber += step;
  }
  return progressionString;
};

const findHideNumber = (startNum, step, hidePosition) => startNum + (hidePosition - 1) * step;

const newQuestion = () => {
  const startNum = generateRandomNum(0, 100);
  const step = generateRandomNum(1, 5);
  const hidePosition = generateRandomNum(1, progressionLength);
  const gameQuestion = hideNumInProgression(startNum, step, hidePosition);
  const rightAnswer = findHideNumber(startNum, step, hidePosition);
  return { gameQuestion, rightAnswer };
};

export default () => gameFlow(intro, newQuestion);
