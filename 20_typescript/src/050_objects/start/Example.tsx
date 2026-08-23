const Example = () => {
  // 配列
  const arry1: number[] = [1, 2, 3];
  const arry2: string[] = ['hello', 'bye'];
  // arrayコンストラクターを使用して記述する場合
  const arry3 : Array<number> = [1, 2, 3];
  // ユニオン型の配列
  const arry4: (string | number)[] = [1, 'bye'];
  const arry3 : Array<string | number> = [1, 2, 'bye'];

  const obj1: { name: string, age: number } = { name: 'Taro', age: 18 };

  type Person = { name: string, age: number }
  const obj2: Person = { name: 'Taro', age: 18 };

  // プロパティの末尾に「？」を付与することで、プロパティ値がundefinedでもエラーにならない
  type Person2 = { name: string, age?: number }
  const obj3: Person2 = { name: 'Taro' };

  // オブジェクトと配列の組み合わせ
  const users: Person2[] = [
    { name: 'Taro'},
    { name: 'Hanako', age: 30}
  ]
};

export default Example;
