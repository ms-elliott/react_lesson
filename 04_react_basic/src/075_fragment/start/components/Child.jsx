import "./Child.css";
import React from "react"

// returnで返すのはつの束ねられた要素。
// 無駄なdivタブで囲まず、react.Fragmentで囲む。   →描写される際にはタグは消える
// <React.Fragment>と記述しなくとも、 <> </> と省略することも可能
// htmlに変換する際に消えるので基本的に属性はつけれない。１つだけ例外でkey属性は付けれる。※その際は省略記述不可。
const Child = () => {
  return (
    <React.Fragment>
    <div className="component">
      <h3>Hello Component</h3>
    </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minima magni impedit? Distinctio neque mollitia laboriosam voluptatibus deleniti eligendi delectus. Dolorum at ut eos, libero ducimus cumque. Quae, saepe quis?</p>
    </React.Fragment>
  );
};

export default Child;
