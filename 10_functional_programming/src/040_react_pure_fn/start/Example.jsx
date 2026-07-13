let value = 0;

// 純粋関数・・・propsを受け取って、JSXを返す。
const Example = () => {

  return (
    <>
    {/* 関数外で定義した変数を使用してはいけない。 */}
    {/* <div>{value}</div> */}
    </>
  );
};

export default Example;
