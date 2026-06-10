// 同期処理　　コードが読まれた順番に処理が完了していく
let a = 0;
console.log(a);

// 非同期処理(Promise)
// 2000ミリ秒待った後に実行される
setTimeout(() => {
    a = 1;
    console.log(a);
}, 2000);

console.log(a);

new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1;
        resolve(a);
    }, 2000);
})
    .then((b) => {
        // resolve(a)が完了してから実行される
        // thenメソッドはいくつか繋げて記述することも可能
        console.log(b);
    })
    .catch((c) => {
        // もしreject(a)を実行した場合はcatchが実行される
        console.log("catchが実行", c);
    });
