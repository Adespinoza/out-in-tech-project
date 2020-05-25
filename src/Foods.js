import React from 'react';
// import { MeshBasicMaterial } from 'three';
import FoodItem from './FoodItem';

const Foods = ({ data }) => {
  return new Array(data.number).fill().map((_, i) => {
    const x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1);
    const y = -10 + Math.random() * 20;
    const z = -5 + Math.random() * 10;

    const bird = ['Stork', 'Parrot', 'Flamingo'][Math.round(Math.random() * 2)];

    let factor =
      bird === 'Stork'
        ? 0.55 + Math.random()
        : bird === 'Flamingo'
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