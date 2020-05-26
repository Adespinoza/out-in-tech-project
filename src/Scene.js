import React from 'react';
import Jumbo from './Jumbo';
import Foods from './Foods';
import PropTypes from 'prop-types';

const Scene = ({ data }) => {
  return (
    <>
      <Jumbo />
      <group>
        <Foods data={data} />
      </group>
    </>
  );
};

Scene.propTypes = {
  data: PropTypes.object,
};

export default Scene;
