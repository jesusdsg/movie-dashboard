import "./MenuTabs.scss";
export default function MenuTabs({ darkMode }: any) {
  const menu = [
    { title: "TV Series", link: "#", active: false },
    { title: "Movies", link: "#", active: true },
    { title: "Animes", link: "#", active: false },
  ];
  return (
    <div className="menu">
      {menu.map(
        (menuItem: { title: string; link: string; active: boolean }) => {
          if (menuItem.active) {
            return (
              <a
                key={menuItem.title}
                className={
                  darkMode
                    ? "menu__tab menu__tab--dark menu__tab--active"
                    : "menu__tab menu__tab--light menu__tab--active"
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
    </div>
  );
}
