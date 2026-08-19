import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe('Counterコンポーネントの動作確認', () => {
    describe('初期表示の確認', () => {
        test("現在のカウントが０かどうか", () => {
        render(<Counter originCount={0} />);

        const spanElBeforeUpdate = screen.getByText("現在のカウント:0");
        expect(spanElBeforeUpdate).toBeInTheDocument();
        });
    })
    describe('初期表示の確認', () => {
        test("現在のカウントが1かどうか", () => {
        render(<Counter originCount={1} />);

        const spanElBeforeUpdate = screen.getByText("現在のカウント:1");
        expect(spanElBeforeUpdate).toBeInTheDocument();
        });
    })

    describe('ボタン制御の確認', () => {
        test("「カウントアップ」押下で「現在のカウント」が+1されるか", () => {
        render(<Counter originCount={0} />);

        const spanElBeforeUpdate = screen.getByText("現在のカウント:0");
        expect(spanElBeforeUpdate).toBeInTheDocument();

        const btn = screen.getByRole("button", { name: "カウントアップ" });
        fireEvent.click(btn);

        const spanEl = screen.getByText("現在のカウント:1");
        expect(spanEl).toBeInTheDocument();
        });
    })
});

