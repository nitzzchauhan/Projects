import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementAsync } from '../features/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);
  const dispatch = useDispatch();
//   console.log(status)

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementAsync())} disabled={status === 'loading'}>
        {status === 'loading' ? 'Incrementing...' : 'Increment Async'}
      </button>
    </div>
  );
};

export default Counter;
