import { useEffect } from "react";
import axios from "axios";

const Example = () => {
  useEffect(() => {
    // レスポンスが帰ってきたらconsole.logを実行する為、thenで繋ぐ
    axios.get('http://localhost:3003/user').then((res) => {
        console.log(res)
    })
  })
};

export default Example;
