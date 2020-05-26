import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import Text from './Text';

const Jumbo = () => {
  const ref = useRef();

  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x = ref.current.rotation.x =
        Math.sin(clock.getElapsedTime()) * 0.3)
  );

  return (
    <group ref={ref} position={[10, 10, -10]}>
      <Text hAlign='left' position={[-4, 5, 0]}>
        GAY
      </Text>
      <Text hAlign='left' position={[0, 0, 0]}>
        RIGHTS
      </Text>
    </group>
  );
};

export default Jumbo;
