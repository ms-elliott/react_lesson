import { useState } from "react";

const Example = () => {
    const [val, setVal] = useState("");
    const clearVal = () => setVal("");

    return (
    // <p style={{ textAlign: "center" }}>
    //   startフォルダの内容が表示されます。
    //   <br />
    //   練習用に使ってください！
    // </p>

    <div>
        <div>
            <label htmlFor="465">ラベル</label>
            <input
                id="123"
                placeholder="こんにちは"
                value={val}
                onChange={(e) => setVal(e.target.value)}
            />
            <textarea
                id="465"
                placeholder="こんにちは"
                value={val} // jsxの場合は入力したい値をtextareaタグで囲まず、value属性で指定する
                onChange={(e) => setVal(e.target.value)}
            />
        </div>
        <h3>{val}</h3>
        <button onClick={{clearVal}}>クリア</button>
    </div>
  );
};

export default Example;
