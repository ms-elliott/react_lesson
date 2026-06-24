
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {

    // パターン①：for文
    const animalList = [];
    for(const animal of animals) {
        animalList.push(<li>{animal}</li>);
    }

    //パターン②：map・・・配列のメソッド
    const helloAnimals = animals.map((animal) => <li>Hello, {animal}</li>)
    // for文はJSX内に記述できないが、mapの式は記述可能

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {animalList}
        {helloAnimals}
        {/* {animals.map((animal) => <li>Hello, {animal}</li>)} */}
      </ul>
    </>
  );
};

export default Example;
