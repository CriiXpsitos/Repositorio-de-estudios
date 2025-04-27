import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";

// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memo/Memorize";
// import { MemoHook } from "./06-memo/memoHook";
// import { HookApp } from './HookApp'
// import {CounterApp} from './01-useState/CounterApp'
// import { CounterWhitCustomHook } from "./01-useState/CounterWhitCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { CallbackHook } from './06-memo/CallbackHook';
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer"
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <HookApp /> */}
      {/* <CounterApp /> */}
      {/* <CounterWhitCustomHook /> */}
      {/* <MultipleCustomHook /> */}
      {/* <FocusScreen /> */}
      {/* <Layout /> */}
      {/* <MemoHook /> */}
      <MainApp />
    </BrowserRouter>
  </StrictMode>
);
