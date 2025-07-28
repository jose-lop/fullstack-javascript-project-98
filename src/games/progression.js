import getRandomInt from '../utils.js';
import runGameEngine from '../index.js';

const DESCRIPTION = '¿Qué número falta en la progresión?';

// eslint-disable-next-line max-len
const generateProgression = (start, step, length) => Array.from({ length }, (_, i) => start + i * step);

const generateRound = () => {
  const progressionLength = 10;
  const start = getRandomInt(1, 20);
  const step = getRandomInt(1, 10);
  const hiddenIndex = getRandomInt(0, progressionLength - 1);

  const progression = generateProgression(start, step, progressionLength);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => runGameEngine(generateRound, DESCRIPTION);
