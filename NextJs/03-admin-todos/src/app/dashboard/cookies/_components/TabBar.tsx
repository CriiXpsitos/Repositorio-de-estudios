"use client";

import { setCookie } from "cookies-next";
import { useState } from "react";

interface TabBarProps {
  currentIndex?: number;
  tabOptions?: number[];
}

export const TabBar = ({
  tabOptions = [1, 2, 3, 4],
  currentIndex,
}: TabBarProps) => {
  const [selected, setSelected] = useState(currentIndex || 1);

  const onTabSelected = (index: number) => {
    setSelected(index);
    setCookie('selectedTab', index.toString(), { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <div
      className={`grid w-full ${
        "grid-cols-" + tabOptions.length
      } space-x-2 rounded-xl bg-gray-200 p-2`}
    >
      {tabOptions.map((tab) => (
        <div key={tab}>
          <input onChange={() => {}} checked={selected === tab} type="radio" id={tab.toString()} className="peer hidden" />
          <label onClick={() => onTabSelected(tab)}  className="block cursor-pointer select-none rounded-xl p-2 text-center transition-all peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
