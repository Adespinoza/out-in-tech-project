import React, { Component } from 'react';
import DatGui, { DatNumber } from '@tim-soft/react-dat-gui';
import CanvasWrapper from './CanvasWrapper';

class DatGUI extends Component {
  state = {
    data: {
      speed: 1,
      number: 10,
    },
  };

  // Update current state with changes from controls
  handleUpdate = newData =>
    this.setState(prevState => ({
      data: { ...prevState.data, ...newData },
    }));

  render() {
    const { data } = this.state;
    return (
      <>
        <CanvasWrapper data={data} />
        <main className='react-dat-gui-demo'>
          <DatGui
            data={data}
            onUpdate={this.handleUpdate}
            className='react-dat-gui-relative-position'
          >
            <DatNumber
              path='number'
              label='Number'
              min={0}
              max={100}
              step={1}
            />
            <DatNumber path='speed' label='Speed' min={1} max={2} step={0.1} />
          </DatGui>
        </main>
      </>
    );
  }
}

export default DatGUI;
