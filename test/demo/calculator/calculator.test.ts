// Here, we test all the calculation functions separate from the component

import { test, expect } from "vitest";
import { splitEquation, multiplyExpression } from "../../../utils/demo/calculator/calculator";


test("check basic equation splitting", () => {
  let equation = "1 + 2";
  expect(splitEquation(equation)).toEqual(["1", "+", "2"]);

  // Testing without spaces, even though we strip them out anyways.
  equation = "1*2";
  expect(splitEquation(equation)).toEqual(["1", "*", "2"]);
});

test("check multiplication", () => {
  let equation = ["4", "*", "5"];
  expect(multiplyExpression(equation)).toEqual(["20"]);

  equation = ["4", "*", "5", "+", "2"];
  expect(multiplyExpression(equation)).toEqual(["20", "+", "2"]);

  equation = ["4", "+", "2", "*", "5"];
  expect(multiplyExpression(equation)).toEqual(["4", "+", "10"]);
});