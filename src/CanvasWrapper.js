import React, { Suspense } from 'react';
import Scene from './Scene';
import { Canvas } from 'react-three-fiber';
import PropTypes from 'prop-types';

const CanvasWrapper = ({ data }) => {
  return (
    <Canvas
      style={{
        height: '100vh',
        width: '100vw',
        background:
          'linear-gradient(to right top, #efe741, #ffc24c, #ff9f74, #ff88a1, #ff84c8, #e197e8, #bdaafb, #9bb9ff, #6dcdff, #1be0ff, #00f1ff, #00ffef)',
      }}
      camera={{ position: [0, 0, 50], fov: 75 }}
    >
      <ambientLight />
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback={null}>
        <Scene data={data} />
      </Suspense>
    </Canvas>
  );
};

CanvasWrapper.propTypes = {
  data: PropTypes.object,
};

export default CanvasWrapper;
