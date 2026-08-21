import { render, screen } from "@testing-library/react";
import Message from "../../../050_userEvent/start/components/Message";

describe("Messageコンポーネントの動作確認", () => {
  describe("初期表示確認", () => {
    test("inputが画面上に存在", () => {
      render(<Message />);
      const inputEl = screen.getByRole("textbox");
      expect(inputEl).toBeInTheDocument();
    });
  });

  describe("画面操作正常性確認", () => {
    test("inputのstateが更新され、値が正しく変更されているか", async () => {
      const user = userEvent.setup();

      render(<Message />);

      const inputEl = screen.getByRole("textbox");

      await user.type(inoutEl, "こんにちは");

      expect(inputEl.value).toBe("こんにちは");
    });
  });
});
