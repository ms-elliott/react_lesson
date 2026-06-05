function fn(number) {
    return number * 2;
}

// 無名関数を変数fnに代入
const fn = function (number) {
    return number * 2;
};

// アロー関数にした場合　（記述量が少なくて済む)
const fnArrow = (number) => {
    return number * 2;
};

// アロー関数は特定の場合に省略して記述可能(引数が１つの場合はかっこを省略可。中身が１行の場合は{ return }を省略可。)
//const fnArrow = number => number * 2;

// 戻り値がオブジェクトの場合、（）で囲む
const fnArrowObj = (number) => ({
    result: number * 2,
});
