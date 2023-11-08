<template>
  <div>
    <h1>A Simple Calculator</h1>
    <p>
      Type in the equation you want to calculate. Currently, only basic math is
      available (+, -, *, /). Uses regular numbers.
    </p>
    <p>
     Limitations: Two operands in a row will break the equation
    </p>
  </div>
</template>

<script setup lang="ts">

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

export function solveEquation(Array: string) {
  /* This is where the magic happens. 
  *  Because we need to find the previous and next string around the operand, a for loop is used
  */

}


</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
