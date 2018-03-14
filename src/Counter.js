import React from 'react';
import Store from './store';
import {Subscribe} from 'unstated';

function Counter() {
  return (
    <Subscribe to={Store}>
      {counter => (
        <div>
          <button onClick={() => counter.decrement()}>-</button>
          <span>{counter.state.count}</span>
          <button onClick={() => counter.increment()}>+</button>
        </div>
      )}
    </Subscribe>
  );
}

class CounterAlt extends React.Component {

  render() {
    console.log(this.props);
    return (
      <Subscribe to={Store}>
        {counter => (
          <div>
            <button onClick={() => counter.decrement()}>-</button>
            <span>{counter.state.count}</span>
            <button onClick={() => counter.increment()}>+</button>
          </div>
        )}
      </Subscribe>
    );
  }
}
export default Counter;
