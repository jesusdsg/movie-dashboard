import Sidebar from "@components/Sidebar/Sidebar";
import { themeStore } from "../store/theme";
import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import Content from "@components/Content/Content";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(
    () =>
      themeStore.subscribe((state: any) => {
        setDarkMode(state.darkMode);
      }),
    []
  );

  return (
    <div className="dashboard">
      <div className="dashboard__left-panel">
        <Sidebar darkMode={darkMode} />
      </div>
      <div className="dashboard__mid-panel">
        <Content />
      </div>
      <div
        className={
          darkMode
            ? "dashboard__right-panel dashboard__right-panel--dark"
            : "dashboard__right-panel"
        }
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, debitis
        ratione! Corporis autem et nemo ab facere ipsum, ea, nihil quod
        voluptate incidunt numquam ullam consequuntur magnam voluptatem at amet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi
        fugiat iusto nisi quaerat nemo nam ducimus reiciendis impedit numquam
        perspiciatis magnam reprehenderit, totam sapiente? Incidunt similique
        sequi quas facilis!
      </div>
    </div>
  );
}
