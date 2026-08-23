const Example = () => {
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  };

  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  };

  const strArry = repeatStr("hello", 3);
  console.log(strArry); // ["hello", "hello", "hello"]

  const numArry = repeatNum(10, 3);
  console.log(numArry); // [10, 10, 10]

  // TSでは戻り値の方が異なる場合はそれぞれの関数を記述する必要がある　-> 冗長になる
  // その場合に型引数を使用する
  // T, K, U 等の大文字１文字で指定するのが一般的
  // <T, U> のように複数指定することも可能
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  };

  // 関数実行時に型引数<number>を指定することで、関数の<T>の部分がnumberとして扱われる
  const numArry1 = repeat<number>(10, 3);
  const strArry1 = repeat<string>("hello", 3);
  const boolArry1 = repeat<boolean>(true, 3);
  const byeArry1 = repeat<"bye">("bye", 3); // リテラル型も指定可能
  // 型が明白な場合は型引数の記述は不要
  const numArry2 = repeat(10, 3);
};

export default Example;
