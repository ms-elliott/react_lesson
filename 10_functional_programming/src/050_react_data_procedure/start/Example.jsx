import { useState } from "react";

// 状態管理と処理を分離
// 関数コンポーネントはJSXを作成する場所
const Example = () => {
  // 状態管理
  const [ state, setState ] = useState(0);
  // 更新処理
  const increment = () => {
    setState(state + 1);
  }
  return (
    <>
      <button onClick={increment}>+</button>
      <h3>{state}</h3>
    </>
  );
};

export default Example;
