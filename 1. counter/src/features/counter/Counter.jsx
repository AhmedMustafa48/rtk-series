import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section className="text-center">
      <h1>{count}</h1>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={resetAll}>Reset All</button>

        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
};

export default Counter;
