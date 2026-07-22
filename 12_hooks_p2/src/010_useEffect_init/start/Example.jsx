import { useEffect } from "react";
import { useState } from "react";

const Example = () => {
    const [time, setTime] = useState(0);

    // useEffectで設定することで、再レンダリングの際に呼ばれなくなる。（最初の1回のみ呼び出す）
    // 第２引数には空の配列を渡す
    useEffect(() => {
    window.setInterval(() => {
        setTime(prev => prev + 1);
    }, 1000);
    }, [])

  return (
    <h3>
        <time>{time}</time>
        <span>秒経過</span>
    </h3>
  );
};

export default Example;
