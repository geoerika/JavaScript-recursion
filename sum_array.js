const sumArray = (numberArray) => {

  if (numberArray.length === 0) {
    return 0;
  }

  return numberArray.pop() + sumArray(numberArray);
}

console.log(sumArray([1,2,3,9]));