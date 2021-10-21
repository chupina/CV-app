import React from "react";
import "./Article.scss";

export const Article = ({ title, text }) => (
  <article>
    <h3 className="article__title">{title}</h3>
    <p className="article__content">{text}</p>
  </article>
);

export default Article;
