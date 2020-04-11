import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import * as meshline from 'three.meshline';
import { extend, useFrame } from 'react-three-fiber';

const Fatline = () => {
  extend(meshline);

  const colors = ['#A2CCB6', '#FCEEB5', '#EE786E', '#EE786E'];
  const material = useRef();
  const [color] = useState(
    () => colors[parseInt(colors.length * Math.random())]
  );
  const [ratio] = useState(() => 0.5 + 0.5 * Math.random());
  const [width] = useState(() => Math.max(0.1, 0.3 * Math.random()));

  // Calculate wiggly curve
  const [curve] = useState(() => {
    let pos = new THREE.Vector3(
      30 - 60 * Math.random(),
      -5,
      10 - 20 * Math.random()
    );
    return new Array(30)
      .fill()
      .map(() =>
        pos
          .add(
            new THREE.Vector3(
              2 - Math.random() * 4,
              4 - Math.random() * 2,
              5 - Math.random() * 10
            )
          )
          .clone()
      );
  });

  // Hook into the render loop and decrease the materials dash-offset
  useFrame(() => (material.current.uniforms.dashOffset.value -= 0.0005));

  return (
    <mesh>
      {/** MeshLine and CMRCurve are a OOP factories, not scene objects, hence all the imperative code in here :-( */}
      <meshLine onUpdate={self => (self.parent.geometry = self.geometry)}>
        <geometry onUpdate={self => self.parent.setGeometry(self)}>
          <catmullRomCurve3
            args={[curve]}
            onUpdate={self => (self.parent.vertices = self.getPoints(500))}
          />
        </geometry>
      </meshLine>
      {/** MeshLineMaterial on the other hand is a regular material, so we can just attach it */}
      <meshLineMaterial
        attach='material'
        ref={material}
        transparent
        depthTest={false}
        lineWidth={width}
        color={color}
        dashArray={0.1}
        dashRatio={ratio}
      />
    </mesh>
  );
};

export default Fatline;
