import TheHeader from "../../../components/main/organisms/TheHeader.vue";

export default {
  component: TheHeader,
};

export const Header = {
  name: "Header",
  render: () => ({
    components: { TheHeader },
    template: "<TheHeader></TheHeader>",
  }),
};
