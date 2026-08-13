import { useState, useTransition } from "react";

const generateDummyItem = (num) => {
  return new Array(num).fill(null).map((item, index) => `item ${index}`);
};

const dummyItems = generateDummyItem(10000);

const Example = () => {
  const [isPending, startTransition] = useTransition();
  const [filterVal, setFilterVal] = useState("");

  const changeHandler = (e) => {
    // startTransitionの引数で指定した処理の優先順位を下げる
    // 入力欄の描写がタイムリーにされ、フィルターは遅れて描写される
    startTransition(() => {
        setFilterVal(e.target.value);
    })
  };

  return (
    <>
      <input type="text" onChange={changeHandler} />
      {/* startTransitionの処理が処理中はtrueを返し、処理が完了するとfalseを返す */}
      {isPending && <div>Loading...</div>}
      <ul>
        {dummyItems
          .filter((item) => {
            if (filterVal === "") return true;
            return item.includes(filterVal);
          })
          .map((item) => (
            <li key={item}>{item}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;
