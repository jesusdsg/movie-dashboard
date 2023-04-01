import React from "react";
import "./Sidebar.scss";
import {
  BiBuildings,
  BiHome,
  BiWorld,
  BiLogOutCircle,
  BiCog,
  BiUser,
  BiWinkTongue,
  BiRadioCircleMarked,
} from "react-icons/bi";

export default function Sidebar({ darkMode }: any) {
  const menu = {
    title: "Menu",
    items: [
      {
        title: "Home",
        children: [
          {
            title: "Home",
            url: "/",
            icon: <BiHome />,
          },
          {
            title: "Comunity",
            url: "/about",
            icon: <BiBuildings />,
          },
          {
            title: "Discovery",
            url: "/contact",
            icon: <BiWorld />,
          },
        ],
      },
      {
        title: "Social",
        children: [
          {
            title: "Friends",
            url: "/",
            icon: <BiUser />,
          },
          {
            title: "Party",
            url: "/about",
            icon: <BiWinkTongue />,
          },
          {
            title: "Media",
            url: "/about",
            icon: <BiRadioCircleMarked />,
          },
        ],
      },
      {
        title: "General",
        children: [
          {
            title: "Settings",
            url: "/",
            icon: <BiCog />,
          },
          {
            title: "Logout",
            url: "/about",
            icon: <BiLogOutCircle />,
          },
        ],
      },
    ],
  };

  return (
    <div
      className={
        darkMode
          ? "sidebar-container sidebar-container--dark"
          : "sidebar-container sidebar-container--light"
      }
    >
      <img
        src="/src/assets/logo.png"
        alt="logo"
        className="sidebar-container__logo"
      ></img>
      <h3>Menu</h3>
      {menu.items.map((item: any) => {
        return (
          <div key={item.title}>
            <h4>{item.title}</h4>
            <ul className="sidebar-container__list">
              {!!item.children
                ? item.children.map((child: any) => {
                    return (
                      <li key={child.title}>
                        {child.icon}
                        <a href={child.url} key={child.title}>
                          {child.title}
                        </a>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
