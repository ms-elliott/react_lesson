import { useState } from "react";

// 引数で渡された値を変更しない （immutability）
const Child = ({ state, setState }) => {
    // setState({ value: 1 })
    // props.state = { value: 1 }

    const increment = () => {
        setState(prev => {
            // 下記のように、propsを直接変更しない
            // prev.value += 1;
            // return prev;

            const newState = { value: prev.value + 1 }
            return newState;
        })
    }
  return (
    <>
      <span>{state.value}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

const Example = () => {
  const [ state, setState ] = useState({ value: 0 });

  return (
    <>
      <div>
        <Child state={state}/>
      </div>
    </>
  );
};

export default Example;
