const Example = () => {
  // 引数に関して必ず型定義する
  function sum1(x: number, y: number) {
    return x + y;
  }

  sum1(1, 2);

  // アロー関数で定義する場合
  const sum2 = (x: number, y: number) => x + y;

  // デフォルト値を設定する
  function sum3(x: number, y: number = 1) {
    return x + y;
  }

  sum3(5);

  // 引数を任意にする
  function sum4(x: number, y?: number) {
    return x + y;
  }

  sum4(4); // 数値 + undefinedとなり計算不可の為、NaN(not a number)が返ってくる

  // 戻り値の型を定義する
  function sum5(x: number, y: number): number {
    return x + y;
  }

  // 戻り値がない場合
  function sum6(x: number, y: number): void {
    console.log(x + y);
  }

  // 関数の型定義
  type Sum = (x: number, y: number) => number;
  const sum7: Sum = (x, y) => x + y;

};

export default Example;
