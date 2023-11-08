import BaseInput from "../../../components/main/atoms/BaseInput.vue"

export default {
  component: BaseInput,
};

export const Input = {
  name: 'Input',
  render: () => ({
components: {BaseInput},
template: '<BaseInput label="Input"></BaseInput>',
  })
}