import React from "react";
import { motion } from "framer-motion";

const Article = () => {
  let data = [
    {
      id: 1,
      title: "Lorem ipsum dolor.",
      par: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, provident.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor.",
      par: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, provident.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor.",
      par: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, provident.",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor.",
      par: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, provident.",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor.",
      par: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, provident.",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor.",
      par: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, provident.",
    },
  ];

  let Items = data?.map((el, inx) => (
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1.3, delay: inx * 0.2 }}
      key={el.id}
      className="article-card"
    >
      <h3>{el.title}</h3>
      <p>{el.par}</p>
    </motion.div>
  ));
  return (
    <div>
      <h1 className="article-title">Article</h1>
      <div className="article-cards">{Items}</div>
    </div>
  );
};

export default Article;
