import React, { Component } from 'react';
import loading from './loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center mt-5 mb-3'>
        <img src={loading} alt="" />
      </div>
    )
  }
}

export default Spinner
