import React from "react";

type HelloProps = {
    text: string,
    children: React.ReactNode
    // propsの末尾に?を付与することで、propsが渡ってこなくてもエラーにならない
    // text?: string

}

const Hello: React.FC<HelloProps> = (props) => {
    // return <h1>Hello {props.text}</h1>
    return <h1>Hello {props.text} ! {props.children}</h1>
}

type FnProps = {
    fn: (text: string) => void
}

export const Btn: React.FC<FnProps> = (props) => {
    return <button onClick={() => props.fn('TypeScript')}>ボタン</button>
}

export default Hello;
