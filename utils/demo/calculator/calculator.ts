export function splitEquation(string: string) {
  /* Here, we're removing the whitespaces from the string and creating an empty array to hold our values.
   */

  const cleanString = string.replace(/\s/g, "");
  const finalArray: Array<string> = [];

  /* Breaking down the regex here:
   * ((\w|(\w|\+|\-|\*|\/|\w)|)) - This splits between numbers, and includes the operand in the array to calculate.
   *
   * There's a lot of escaped characters, since we're using +,-,*, and / as separators that need to be
   * included for proper functioning.
   *
   */
  const equationComponents = cleanString.split(/(\d|\+|\-|\*|\/)/g);

  for (const match of equationComponents) {
    if (match) {
      finalArray.push(match);
    }
  }
  return finalArray;
}

export function multiplyExpression(expressionToSolve: Array<string>) {
  // Step-by-step

  // findIndex() wants a function to determine what to look for in the array
  const findSign = (element: string) => element === "*";

  // Once we have the function to find the "*" sign, we look for the first one.
  const indexOfSign = expressionToSolve.findIndex(findSign);

  // We want the number before and after the "*" sign. 
  const firstNumberIndex: number = indexOfSign - 1;
  const secondNumberIndex: number = indexOfSign + 1;

  // We're going to create a smaller array with the multiplication part.
  // We're slicing to the second number +1 to include the second number
  const equation = expressionToSolve.slice(
    firstNumberIndex,
    secondNumberIndex + 1
  );

  // Now, we multiply the two numbers in the Array together. We convert the string over to numbers 
  // to do so.
  const answer: number = Number(equation[0]) * Number(equation[2]);

  // We're adding the first number with the answer and removing the operand and second number
  // from the original array. We then return the original array in order to continue processing
  // the equation.
  const newArrayWithAnswer: Array<string> = [];
  newArrayWithAnswer.unshift(answer.toString());
  const remainingExpression: Array<string> = expressionToSolve.slice(indexOfSign + 2, expressionToSolve.length);
  const newExpression: Array<string> = [];
  

  return newExpression.concat(newArrayWithAnswer, remainingExpression); ;
}
