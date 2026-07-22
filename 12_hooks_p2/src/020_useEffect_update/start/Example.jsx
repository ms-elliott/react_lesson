import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  // 第２引数 = 依存配列
  // 依存配列に含めたステートが実行されると、コールバック関数が再実行される
  useEffect(() => {
    console.log('useEffect is called');
    window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  }, [])

  // この場合、１秒毎にコンソールにupdatedが出力される
  // 注) 依存関数に指定したステートを、コールバック関数の中で更新NG。（無限ループ発生する）
  useEffect(() => {
    console.log('updated');
  }, [time])

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
