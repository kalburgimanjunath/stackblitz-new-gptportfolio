import React from 'react';
import { Link } from 'react-router-dom';
export default function Cards({ items, loop = false }) {
  // images, descriptions, and links
  const RepeatElement = ({ item }) => {
    const NewElement = [];
    for (let i = 1; i <= 100; i++) {
      NewElement.push(
        <div>
          <div>{item.image ? <img src={item.image} /> : ''}</div>
          <div>{item.title ? item.title + i : ''}</div>
          <div>{item.description ? item.description : ''}</div>
          <div>{item.link ? <Link to={item.link}>{item.link}+</Link> : ''}</div>
        </div>
      );
    }
    return NewElement;
  };
  return (
    <div className="cards">
      {items &&
        items.map((item) => {
          return <RepeatElement item={item} />;
        })}
    </div>
  );
}
