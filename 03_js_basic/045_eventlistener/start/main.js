// DOM(DOMオブジェクト, ノード, エレメント)を取得する
const h1Element = document.querySelector("h1");

console.dir(h1Element);

console.log(h1Element.textContent);
h1Element.textContent = "変更後のタイトル";

const btnEl = document.querySelector("button");
const helloFn = (e) => {
    console.log(e.target.textContent);
    console.log("hello");
};

// 第２引数に実行したい関数を渡す
btnEl.addEventListener("click", helloFn);
