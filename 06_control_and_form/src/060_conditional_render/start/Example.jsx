import { useState } from "react";

// if文、＆＆、？？（null合体演算子)、３項演算子
const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => {
        // ??
        // A ?? B    AがnullorUNDEFINEDの場合は、Bの値を返す

        // &&
        return <li key={animal}>{
            animal
        }{animal === "Dog" && "★"}</li>

        // ３項演算子
        //    return <li key={animal}>{
        //     animal + (animal === "Dog"
        //       ? "★"
        //         : "")}</li>

        // if文
        //   if(animal === "Dog") {
        //     return <li key={animal}>{animal}★</li>
        //   } else {
        //     return <li key={animal}>{animal}</li>
        //   }
        })}
      </ul>
    </>
  );
};

export default Example;
