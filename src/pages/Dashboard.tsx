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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
        distinctio eius quas minus? Perferendis ex quasi error cupiditate
        dolorum unde neque esse asperiores minus saepe, ad voluptates reiciendis
        mollitia molestias? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Dolores dolor adipisci veniam placeat autem incidunt vitae dolorem
        doloremque, sequi commodi voluptatum illo quisquam sed delectus
        repudiandae consequuntur necessitatibus dignissimos debitis? Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum incidunt
        eveniet quidem repudiandae consectetur illum a cum cumque rem illo
        voluptatem porro consequuntur, odio magnam! Odio provident ipsum dolore
        consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quod dignissimos laborum deserunt blanditiis iste optio atque vero
        doloremque expedita. Sit reprehenderit voluptatibus at eveniet
        perferendis alias corporis repudiandae necessitatibus iste?
      </div>
      <div className="dashboard__right-panel">
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
