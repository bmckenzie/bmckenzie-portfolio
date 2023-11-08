import BaseButton from "../../../components/main/atoms/BaseButton.vue";

export default {
  component: BaseButton,
  argTypes: {
    type: {
      options: ["primary", "secondary", "icon"],
      control: "select"
    },
  },
};

export const Button = {
  name: "Button",
  render: () => ({
    components: { BaseButton },
    template: '<BaseButton type="primary">Primary</BaseButton>',
  }),
};
