import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
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
import { CallbackHook } from './06-memo/CallbackHook';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWhitCustomHook /> */}
    {/* <MultipleCustomHook /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <MemoHook /> */}
    <CallbackHook />
  </StrictMode>
);
