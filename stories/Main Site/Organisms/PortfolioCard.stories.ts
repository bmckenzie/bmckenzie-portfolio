import PortfolioCard from "../../../components/main/organisms/PortfolioCard.vue";

export default {
  component: PortfolioCard,
};

export const Card = {
  name: "PortfolioCard",
  render: () => ({
    components: { PortfolioCard },
    template: `<PortfolioCard :demo="{ image: 'https://placehold.co/600x400',
    title: 'Portfolio Card',
    description: 'This is the portfolio card.', path: '/demo/first'}"></PortfolioCard>`,

  }),
};
