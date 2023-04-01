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

import { BiSun, BiMoon } from "react-icons/bi";
import { themeStore } from "@stores/theme";

import logoDark from '@assets/logo.png';
import logoLight from '@assets/logolight.png';

export default function Sidebar({ darkMode }: any) {
  const toggleDarkMode = themeStore((store: any) => store.toggleDarkMode);
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
        src={darkMode ? logoDark : logoLight}
        alt="logo"
        className="sidebar-container__logo"
      ></img>
      <div className="sidebar-container__header">
        <h3>Menu</h3>
        <button type="button" onClick={toggleDarkMode}>
          {darkMode ? <BiSun /> : <BiMoon />}
        </button>
      </div>

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
                        <a href={child.url} key={child.title} className={darkMode ? 'sidebar__container__link--dark' : 'sidebar__container__link-light'}>
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
