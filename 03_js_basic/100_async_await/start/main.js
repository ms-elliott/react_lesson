// 非同期処理（await/async）
let a = 0;

new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1;
        resolve(a);
    }, 2000);
})
    .then((b) => {
        console.log(b);
        return b;
    })
    .then((b) => {
        console.log(b);
    })
    .catch((c) => {
        console.log("catchが実行", c);
    });

init();
// awaitを関数内で使用する場合は、関数の頭にasyncを記述する
async function init() {
    // thenメソッドで繋げなくても、頭にawaitを付けると、resolve(a)が完了してからその後の処理が実行される
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            a = 1;
            resolve(a);
        }, 2000);
    });
    console.log(a);
    // .catch((c) => {
    //     console.log("catchが実行", c);
    // });
}
