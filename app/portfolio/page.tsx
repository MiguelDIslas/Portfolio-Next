import Title from "@components/general/Title";
import { FilterButtons, Portfolio } from "@components/portfolio";

/**
 * Component for the portfolio page
 * @returns JSX.Element for the portfolio page
 */
const PortfolioPage = (): JSX.Element => {
  return (
    <div className="py-8 px-2 mid:py-18 mid:px-18 md:py-20 md:px-20 prevent-select">
      <Title title="Portfolio" />
      <FilterButtons />
      <Portfolio />
    </div>
  );
};

export default PortfolioPage;
