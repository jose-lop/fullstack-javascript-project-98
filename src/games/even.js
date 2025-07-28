import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const runEvenGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cual es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  console.log(
    'Responde "yes" si el número es par, de lo contrario responde "no".'
  );

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Pregunta: ${number}`);
    const userAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(
        `'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`
      );
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }

    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' es una respuesta incorrecta ;(. Larespuesta correcta era '${correctAnswer}'.`
      );
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default runEvenGame;
