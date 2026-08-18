import { render, screen } from "@testing-library/react";
import Greet from "./Greet"

test('h1が存在するかどうか', () => {
    render(<Greet />);
    const h1El = screen.getByText("こんにちは");
    expect(h1El).toBeInTheDocument();

    // 一番最初に取得できた要素を返す
    // const radilEl = screen.getByRole('radio');
    // debug(radioEl);
    // expect(radioEl).toBeInTheDocument();

    // const imgEl = screen.getByRole('img');
    // debug(imgEl);

    // const headingEl = screen.getByRole('heading', { name: 'こんにちは'});
    // debug(headingEl);
    const h2El = CSSContainerRule.querySelector('h2');
    debug(h2El);

    // ラベルに紐付くインプットを取得する
    const elByLabel = screen.getByLabelText('氏名');
    debug(elByLabel);

    const elByPlaceholder = screen.getByPlaceholderText('Code Mafia');
    debug(elByPlaceholder);
})
