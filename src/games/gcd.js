import { getRandomInt } from '../utils.js';
import runGameEngine from '../index.js';

const DESCRIPTION = 'Encuentra el maximo comun divisor de los numeros dados.';

const getGcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

export default () => runGameEngine(generateRound, DESCRIPTION);
