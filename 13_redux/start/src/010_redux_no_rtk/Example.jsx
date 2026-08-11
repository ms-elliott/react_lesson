// // useContext x useReduser

// import Counter from "./components/Counter";
// import { CounterProvider } from "./context/CounterContext";

// const Example = () => {
//   return (
//     <CounterProvider>
//       <Counter />
//     </CounterProvider>
//   );
// };

// Reduxに書き換える

import Counter from './components/Counter';
import { Provider } from "react-redux";
import store from "./store";

const Example = () => {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
};

export default Example;
