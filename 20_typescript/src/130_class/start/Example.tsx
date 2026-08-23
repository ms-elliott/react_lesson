class User {
    public name: string;
    private age: number;
    // public name: string = 'Taro';  初期値を設定する場合
    // protected name: string;    クラス内および継承したクラス内からのみアクセス可能

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const Example = () => {
  const user1 = new User("Hanako", 22);
  console.log(user1);
};

export default Example;
