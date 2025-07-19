import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export default function runGameEngine(generateRound, description) {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cual es tu nombre? ');
  console.log(`¡Hola, ${name}`);
  console.log(description);

  for (let i = 0; i < ROUNDS_COUNT; i++) {
    const [question, correctAnswer] = generateRound();
    console.log(`Pregunta: ${question}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'. `);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }

    console.log('¡Correcto!');
  }
  console.log(`¡Felicidades, ${name}!`);
}
