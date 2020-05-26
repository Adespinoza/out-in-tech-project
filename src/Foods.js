import React from 'react';
import FoodItem from './FoodItem';

const Foods = ({ data }) => {
  return new Array(data.number).fill().map((_, i) => {
    const x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1);
    const y = -10 + Math.random() * 20;
    const z = -5 + Math.random() * 10;

    const combos = ['a', 'b', 'c'][Math.round(Math.random() * 2)]; // sets random speed

    let factor =
      combos === 'a'
        ? 0.55 + Math.random()
        : combos === 'b'
        ? 0.35 + Math.random()
        : 1 + Math.random() - 0.5;

    return (
      <FoodItem
        key={i}
        position={[x, y, z]}
        rotation={[0, x > 0 ? Math.PI : 0, 0]}
        speed={data.speed}
        factor={factor}
      />
    );
  });
};

export default Foods;
