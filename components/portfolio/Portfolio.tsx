"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { BsFillCloudDownloadFill }  from "react-icons/bs";
import { RootState } from "types/state/root";
import IconElement from "./IconElement";

/**
 * Component for the portfolio
 * @returns JSX.Element for the portfolio
 */
const Portfolio = (): JSX.Element => {
  const { filteredPortfolios } = useSelector(
    (state: RootState) => state.portfolio
  );

  return (
    <div className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2 lg:grid-cols-3">
      {filteredPortfolios.map((portfolio, i) => (
        <div key={i} className="block relative overflow-hidden">
          <div className="portfolio-image">
            <Image
              width="1000"
              height="1000"
              className="w-full h-[30vh] object-cover"
              src={portfolio.image}
              alt=""
            />
            <ul className="-translate-y-[300px] transition-all duration-[0.4s] ease-in-out absolute left-1/2 top-[35%] opacity-0">
              {portfolio.link1 !== "#" && (
                <IconElement
                  title="Code"
                  Icon={FaGithub}
                  href={portfolio.link1}
                />
              )}
              {portfolio.link2 && <IconElement
                title="Production"
                Icon={MdWeb}
                href={portfolio.link2}
                />
              }

              {
                portfolio.link3 && <li
                  className="bg-border-color flex items-center justify-center p-4 rounded-full 
                w-12 h-12 my-0 mx-2 transition-all duration-[0.4s] ease-in-out 
                hover:bg-primary-color"
                >
                  <a
                    className="flex items-center justify-center transition-all duration-[0.4s] ease-in-out"
                    href={portfolio.link3}
                    download={true}
                    target="_blank"
                    rel="noreferrer"
                    title={'Download'}
                  >
                    <BsFillCloudDownloadFill />
                  </a>
                </li>
              }

            </ul>
          </div>
          <h6 className="text-2xl font-bold">{portfolio.title}</h6>
          <p className="m-0 w-full">{portfolio.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
