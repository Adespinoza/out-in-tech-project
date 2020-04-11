import React, { Component } from 'react';
import Scene from './Scene';
import { Canvas } from 'react-three-fiber';

class App extends Component {
  render() {
    return (
      <div>
        <Canvas
          style={{ background: '#324444' }}
          camera={{ position: [0, 50, 10], fov: 75 }}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Scene />
        </Canvas>
      </div>
    );
  }
}

export default App;
