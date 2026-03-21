import Link from "next/link";
import { useState } from "react";
import appData from "@data/app.json";
import { useRouter } from 'next/router';
import LogoMark from "@components/LogoMark";

const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);

  const navItems = [];

  const { asPath } = useRouter();

  appData.header.menu.forEach((item, index) => {
    let s_class1 = '';

    if ( item.children != 0 ) {
      s_class1 = 'mil-has-children';
    }
    if ( ( asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) {
      s_class1 += ' mil-active';
    }
    let newobj = Object.assign({}, item, { "classes" :  s_class1 });
    navItems.push(newobj);
  });

  return (
    <>

    {/* top bar */}
    <div className="mil-top-panel">
      <div className="nav-pill">

        <Link href="/" className="nav-logo">
          <LogoMark size={34} variant="badge" />
        </Link>

        <div className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
            <nav id="swupMenu" className="mil-menu-transition">
                <ul>
                    {navItems.map((item, key) => (
                    <li className={item.classes} key={`header-menu-item-${key}`}>
                        <a href={item.link}>{item.label}</a>
                        {item.children != 0 &&
                        <ul>
                            {item.children.map((subitem, key2) => (
                            <li key={`header-submenu${key}-item-${key2}`}><Link href={subitem.link}>{subitem.label}</Link></li>
                            ))}
                        </ul>
                        }
                    </li>
                    ))}
                </ul>
            </nav>
        </div>

        <div className="mil-top-panel-btns">
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
                <span />
            </div>
        </div>

      </div>
    </div>
    {/* top bar end */}

    </>
  );
};
export default DefaultHeader;
