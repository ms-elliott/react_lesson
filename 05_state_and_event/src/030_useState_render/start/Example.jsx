import { useState } from "react";

const Example = () => {
  let displayVal;
  // 入力で値が変更された場合、Example()を再実行しないと反映されない。
  // しかしExample()を再実行すると変更した値も行３のところで初期化される。
  // その部分を補う機能 = state
  let [ val, setVal ] = useState();  // useStateで初期化
  console.log('再レンダリングされました');
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setVal(e.target.value);   // 更新した値をセットして保持 (同時にExample()を再実行する)
          // displayVal = e.target.value;
        }}
      />
      = {val}
    </>
  );
};

export default Example;
