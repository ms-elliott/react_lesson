const Example = () => {
  const str: string = 'Hello';
  console.log(str);

  let num: number = 102;
  console.log(num);

  let bignum: bigint = 103n;
  console.log(bignum);

  let bool: boolean = true;
  console.log(bool);

  let nullish: null = null;
  let undefinedValue: undefined = undefined;

  // リテラル型 ・・・　特定の値のみを設定可能に指定する
  let trueVal: true = true;
};

export default Example;
