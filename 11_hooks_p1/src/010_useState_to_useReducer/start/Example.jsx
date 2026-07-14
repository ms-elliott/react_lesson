import { useReducer, useState } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, action) => {
    if(action === '+') {
        return ++prev;
    } else if(action == '-') {
        return --prev;
    }
  }, 0);

  const countUp = () => {
    setState(prev => ++prev);
  }

  const rCountUp = () => {
    dispatch('+');
    // dispath()を実行すると、useReducerの第一引数で設定した関数が実行される
  }

  const rCountDown = () => {
    dispatch('-');
  }
  return (
    <>
        <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
        </div>
        <div>
        <h3>{rstate}</h3>
        <button onClick={rCountUp}>+</button>
        <button onClick={rCountDown}>-</button>
        </div>
    </>
  );
};

export default Example;
