const Example = () => {
  let strOrNum: string | number = 'Hello';
  strOrNum = 123;
  console.log(strOrNum);

  let strOrNumOrBool: string | number | boolean = 'Hello';
  strOrNumOrBool = true;
  console.log(strOrNumOrBool);

  // リテラル型と組み合わせて使用することが可能
  let helloOrNumOrBool: 'Hello' | number | boolean = 'Hello';
  console.log(helloOrNumOrBool);

  type helloOrNum = 'Hello' | number;
  const hello: helloOrNum = 'Hello';

  // 先頭にある「｜」は無視される。あくまでコードの見栄えのために記述する場合がある。
  type dayOfWeek =
    | 'Monday'
    | 'Tuesday' ;

};

export default Example;
