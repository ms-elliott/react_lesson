import { useState } from "react";

// プリミティブ型: 1, "str", bool, 10n(big int/大きい数値), Symbol(), null, undefined
// オブジェクト型: {}, []などのプリミティブ型以外

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj)

  const changeName = (e) => {
    //setPerson({name: e.target.value, age: person.age})  // stateで保持している構造と同じ構造で更新すること
    setPerson({...person, name: e.target.value})          // もしくはスプレッド演算子(...person)でpersonオブジェクトを展開し、特定のプロパティを更新する記述方法でもOK
  }
  const changeAge = (e) => {
    setPerson({name: person.name, age: e.target.value})
  }
  const reset = () => {
    setPerson({name: "", age: ""})
  }

  return (
    <>
        <h3>Name:{person.name}</h3>
        <h3>Age:{person.age}</h3>
        <input type="text" value={person.name} onChange={changeName} />
        <input type="number" value={person.age} onChange={changeAge} />
        <div><button onClick={reset}>リセット</button></div>
    </>
  )

};

export default Example;
