function add(num1: number, num2: number, showResult: boolean) {
  if (showResult) {
    console.log(num1 + num2);
  } else {
    return num1 + num2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;

add(number1, number2, printResult);
