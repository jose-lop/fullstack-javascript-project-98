import getRandomInt from '../utils.js';
import runGameEngine from '../index.js';

const DESCRIPTION = 'Encuentra el maximo comun divisor de los numeros dados.';

const getGcd = (a, b) => {
  let x = a;
  let y = b;

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
};

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

export default () => runGameEngine(generateRound, DESCRIPTION);
