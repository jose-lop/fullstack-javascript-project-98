import runGameEngine from '../index.js';

const operations = ['+', '-', '*'];

const getRandomNumber = () => Math.floor(Math.random() * 100);
const getRandomOperation = () =>
  operations[Math.floor(Math.random() * operations.length)];

const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperation();

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Operador desconocido: ${operator}`);
  }

  const question = `${num1} ${operator} ${num2}`;
  return [question, String(correctAnswer)];
};

export default function runCalcGame() {
  const description = '¿Cuál es el resultado de la expresión?';
  runGameEngine(generateRound, description);
}
