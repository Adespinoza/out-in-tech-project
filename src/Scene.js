import React, { useRef } from 'react';
import Fatline from './Fatline';
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';

function Scene() {
  let group = useRef();
  const numLines = 100;
  const lines = new Array(numLines).fill();
  let theta = 0;

  // Hook into the render loop and rotate the scene a bit
  useFrame(() =>
    group.current.rotation.set(
      0,
      5 * Math.sin(THREE.Math.degToRad((theta += 0.02))),
      0
    )
  );

  return (
    <group ref={group}>
      {lines.map((_, index) => (
        <Fatline key={index} />
      ))}
    </group>
  );
}

export default Scene;
