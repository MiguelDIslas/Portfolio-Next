"use client"
import { useDispatch } from "react-redux";
import { portfolioData } from "@/data/portfolio";
import { setFilter, filterPortfolio } from "@/redux/slices/portfolio.slice";

const techs = ["All", ...new Set(portfolioData.map((item) => item.tech))];

/**
 * Component for the filter buttons
 * @returns JSX.Element for the filter buttons
 */
const FilterButtons = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center flex-wrap w-3/4 my-8 mx-auto">
      {techs.map((tech) => (
        <button
          onClick={() => {
            dispatch(setFilter(tech));
            dispatch(filterPortfolio(''));
          }}
          key={tech}
          className="outline-none border-none bg-transparent cursor-pointer py-2 px-1 mx-2 font-bold text-white transition-all duration-300 hover:text-primary-color focus:text-primary-color active:text-primary-color"
          type="button"
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
