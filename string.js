export const stringLength = (str) => {
  let checkLength = str.length;
  if (checkLength == 0) {
    return 'please insert a character';
  } else if (checkLength > 0 && checkLength <= 10) {
    return checkLength;
  } else if(checkLength > 10) {
    return 'string must be one or less than 10 character long';
  }
}

export const reverseString = (str) => {
  let currentString = str.split('');
  let changeString = currentString.reverse();
  let reverseStr = changeString.join('');
  return reverseStr;
}

export const calculator = {
  sum: (x, y) => {
    let numOne = x, numTwo = y, sum;
    sum =  numOne + numTwo
    return sum;
  },
  subtract: (x, y) => {
    let numOne = x, numTwo = y, subtraction;
    subtraction = numOne - numTwo;
    return subtraction;
  },
  divide: (x, y) => {
    let numOne = x, numTwo = y, division;
    division = numOne / numTwo;
    return division;
  },
  multiply: (x, y) => {
    let numOne = x, numTwo = y, multiplication;
    multiplication = numOne * numTwo;
    return multiplication;
  }
}

export const capitalize = (str) => {
  const strText = str;
  const changedString = strText.charAt(0).toUpperCase() + strText.slice(1);
  return changedString;
}


