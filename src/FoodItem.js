/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Burger from './assets/out.glb';
import { useFrame } from 'react-three-fiber';

// This component was auto-generated from GLTF by: https://github.com/react-spring/gltfjsx
function FoodItem({ speed, factor, ...props }) {
  const { nodes, materials } = useLoader(GLTFLoader, Burger);
  const [x, y, z] = props.position;
  const group = useRef();
  const delta = 0.04385000000183936; // random number

  useFrame(
    () =>
      (group.current.rotation.y +=
        speed * Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2))
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[x, y, z]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]}>
          <mesh
            material={materials.defaultMat}
            scale={[0.5, 0.5, 0.5]}
            geometry={nodes.mesh_0.geometry}
          />
          <mesh
            material={materials.defaultMat}
            scale={[0.5, 0.5, 0.5]}
            geometry={nodes.mesh_1.geometry}
          />
          <mesh
            material={materials.defaultMat}
            scale={[0.5, 0.5, 0.5]}
            geometry={nodes.mesh_2.geometry}
          />
          <mesh
            material={materials.defaultMat}
            scale={[0.5, 0.5, 0.5]}
            geometry={nodes.mesh_3.geometry}
          />
        </group>
      </group>
    </group>
  );
}

export default FoodItem;
