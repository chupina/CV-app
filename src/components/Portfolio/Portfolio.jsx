import React, { useEffect, useRef } from "react";
import "./Portfolio.scss";
import Card from "../Card/Card";
import Isotope from "isotope-layout";
import { CardInfo } from "./../CardInfo/CardInfo";
import data from "../../utils/data";

const portfolioData = data.portfolio;
const filterData = [
  { key: "*", id: "filterAll", value: "all" },
  { key: "ui", id: "filterUI", value: "UI" },
  { key: "code", id: "filterCode", value: "code" },
];

const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = React.useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".portfolio__card",
      layoutMode: "fitRows",
    });
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <div className="filter">
        {filterData.map(({ id, key, value }) => {
          return (
            <div className="filter__item" key={id}>
              <input
                className="filter__input"
                type="radio"
                name="portfolio"
                id={id}
                value={value}
                checked={filterKey === key}
                onChange={handleFilterKeyChange(key)}
              />
              <label htmlFor={id}>{value}</label>
            </div>
          );
        })}
      </div>

      <div className="filter-container">
        {portfolioData.map(({ type, ...rest }) => {
    return (
      <Card key={rest.title} type={type}>
        <CardInfo {...rest} />
      </Card>

          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
