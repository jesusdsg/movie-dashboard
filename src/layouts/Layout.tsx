import React, { useEffect, useState } from "react";

interface ReactProps {
  children: React.ReactNode;
}

import { themeStore } from "../store/theme";

export default function Layout({ children }: ReactProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode = themeStore((store: any) => store.toggleDarkMode);
  useEffect(
    () =>
      themeStore.subscribe((state: any) => {
        setDarkMode(state.darkMode);
      }),
    []
  );
  return (
    <div>
      <button className="bg-blue-200" onClick={toggleDarkMode}>
        toggle {darkMode}
      </button>
      <div>{children}</div>
    </div>
  );
}
