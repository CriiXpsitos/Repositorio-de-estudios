"use client";

interface Props {
  children: React.ReactNode;
}

import { Provider } from "react-redux";
import { AppStore, makeStore } from ".";
import {  useRef } from "react";
import { initCounterState } from "./counter/counterSlicer";

export const Providers = ({ children }: Props) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(initCounterState(20));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
