import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import Text from './Text';

const Jumbo = ({ data }) => {
  const ref = useRef();

  const regex = /([A-Z])\s(?=[A-Z]\b)/g;

  const arr = data.stringm s.toUpperCase().split(' ');
  console.log(arr);

  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x = ref.current.rotation.x =
        Math.sin(clock.getElapsedTime()) * 0.3)
  );

  return (
    <group ref={ref} position={[10, 10, -10]}>
      {arr.map(word => 
      return (
        <Text key={word} hAlign='left' position={[-5, 4, 0]}>
          word
        </Text>);
      )}
      {/* <Text hAlign='left' position={[0, 0, 0]}>
        RIGHTS
      </Text> */}
    </group>
  );
};

export default Jumbo;
