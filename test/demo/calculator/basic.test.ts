// This is a basic mount test to make sure the component mounts.

import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Calculator from "../../../pages/demo/calculator/index.vue";

test('mount component', () => {
  expect(Calculator).toBeTruthy();

  const wrapper = mount(Calculator);
  expect(wrapper.text()).toContain("A Simple Calculator");

})