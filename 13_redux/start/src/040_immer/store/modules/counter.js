import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    add(state, { type, payload }) {
      // stateのプロパティを直接変更するミュータブルな操作・・・toolkitの中では許可される(Immer使用)
      state.count = state.count + payload;
      //   const newState = { ...state };
      //   newState.count = state.count + payload;
      //   return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      //   const newState = { ...state };
      //   newState.count = state.count - payload;
      //   return newState;
    },
  },
});

const { add, minus } = counter.actions;

export { add, minus };
export default counter.reducer;
