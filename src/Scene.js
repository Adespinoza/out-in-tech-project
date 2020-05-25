import React, { useRef } from 'react';
import Jumbo from './Jumbo';
import * as THREE from 'three';
import Foods from './Foods';

const Scene = ({ data }) => {
  return (
    <>
      <Jumbo data={data} />
      <group>
        <Foods data={data} />
      </group>
    </>
  );
};

export default Scene;
