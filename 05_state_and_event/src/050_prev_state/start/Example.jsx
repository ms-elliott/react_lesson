import { useState } from "react";

const Example = () => {
    const [count, setCount] = useState(0)
    const countUp = () => {
        setCount(count + 1)
        // setCount(count + 1) 同じ処理を２回書いても、count=0のままなので、意図した値にはならない。
        // 反映後の値に対して、何か処理を実行したい場合はprevstateを使用する
        setCount(prevstate => {
            return prevstate + 1
        })
    }
    const countDown = () => {
        setCount(count - 1)
    }
  return (
    <>
        <p>現在のカウント数: {count}</p>
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>
    </>
  )
};

export default Example;
