import { useState } from "react";

const Example = () => {
    const options = ["Apple", "Banana", "Cherry"]
    const [selected, setSelected] = useState("Apple");
  return (
    // <p style={{ textAlign: "center" }}>
    //   startフォルダの内容が表示されます。
    //   <br />
    //   練習用に使ってください！
    // </p>
    <>
        <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}>
            {options.map(opt => <option key={opt} value={opt}>
                {opt}
            </option>)}
        </select>
        <div>選択された果物：{selected}</div>
    </>
  );
};

export default Example;
