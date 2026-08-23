const Example = () => {
    let str: string = 'hello';
    // ↓　strをホバーするとstringと表示され、型推論によって型定義されている
    let str = 'hello';

    // constで定義すると'bye'のリテラル型になる
    const bye = 'bye';

};

export default Example;
