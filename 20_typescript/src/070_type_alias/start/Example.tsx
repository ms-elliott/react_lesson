const Example = () => {
  // type文はパスカルケース(先頭が大文字)
  type UserProfile = {
    name: string,
    age: number
  }
  const user: UserProfile = { name: 'Taro', age: 10};
};

export default Example;
