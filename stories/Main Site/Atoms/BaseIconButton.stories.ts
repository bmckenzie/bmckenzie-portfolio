import BaseIconButton from "../../../components/main/atoms/BaseIconButton.vue";

export default {
  component: BaseIconButton,
};

export const Icon = {
  name: "Icon",
  render: () => ({
    components: {BaseIconButton},
    template: '<BaseIconButton icon="fa-solid fa-left-long"></BaseIconButton>'
  })
}