import { themeStore } from "@stores/theme";
import "./MenuTabs.scss";
import { BiMenu } from "react-icons/bi";
/**
 * Menu of movie sections and responsive button
 * @param param0
 * @returns
 */
export default function MenuTabs({ darkMode }: any) {
  const toggleMenu = themeStore((store: any) => store.toggleMenu);
  const menu = [
    { title: "TV Series", link: "#", active: false },
    { title: "Movies", link: "#", active: true },
    { title: "Animes", link: "#", active: false },
  ];
  return (
    <div className={darkMode ? "menu menu--dark" : "menu menu--light"}>
      {menu.map(
        (menuItem: { title: string; link: string; active: boolean }) => {
          if (menuItem.active) {
            return (
              <a
                key={menuItem.title}
                className={
                  darkMode
                    ? "menu__tab menu__tab--dark menu__tab--active--dark"
                    : "menu__tab menu__tab--light menu__tab--active--light"
                }
                href={menuItem.link}
              >
                {menuItem.title}
              </a>
            );
          } else {
            return (
              <a
                key={menuItem.title}
                className={
                  darkMode
                    ? "menu__tab menu__tab--dark"
                    : "menu__tab menu__tab--light"
                }
                href={menuItem.link}
              >
                {menuItem.title}
              </a>
            );
          }
        }
      )}
      <button type="button" className="mobile__menu" onClick={toggleMenu}>
        <BiMenu size="1.5rem" />
      </button>
    </div>
  );
}
