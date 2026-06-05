import { hello, User } from "./module.js";
import funcB from "./module.js";

// まとめて１行で記述したい場合は、下記 (デフォルトエクスポートはオブジェクトで囲まない。)
// import funcB, { hello, User } from "./module.js";

hello();
funcB();
const user = new User("Tom");
user.hello();
