import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);
    const style = {
        width: 120, // 単位を省略すると、自動的にpxで設定される
        height: 60,
        display: "block",       // 文字列の場合はダブルクォーテーションで囲む
        fontWeight: "bold",     // CSSではハイフンでつなぐプロパティ(ケバブケース/font-weight)だが、JSではキャネルケース(fontWeight)で記述する
        borderRadius: 9999,     // ハイフンでプロパティを記述したい場合は、ダブルクォーテーションで囲む
        cursor: "pointer",
        border: "none",
        margin: "auto",
        background: isSelected ? "pink" : ""
    }

    return (
        <>
            <button onClick={clickHandler} style={style}>ボタン</button>
            <div style={{ textAlign : "center" }}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
