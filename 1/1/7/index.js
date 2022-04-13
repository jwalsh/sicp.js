const average = (x, y) => (x + y) / 2;

console.log(average(4, 6));

const improve = (guess, x) => average(guess, x / guess);

console.log(improve(5, 10));

const square = (x) => x * x;

// square
const isGoodEnough = (guess, x) => Math.abs(square(guess) - x) < .001;

console.log(isGoodEnough(1.5, 2));
console.log(isGoodEnough(1.4142, 2));


const sqrtIter = (guess, x) => isGoodEnough(guess, x)
      ? guess
      : sqrtIter(improve(guess, x), x);

const sqrt = (x) => sqrtIter(1, x);

console.log(sqrt(9));

console.log(square(sqrt(100)));
