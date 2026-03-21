import Link from "next/link";
import { useState, useRef } from "react";
import appData from "@data/app.json";
import { useRouter } from 'next/router';
import LogoMark from "@components/LogoMark";

const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState(null); // null = use CSS default position
  const dragRef = useRef(null);

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

  const handleMouseDown = (e) => {
    // Let clicks on links and buttons through
    if (e.target.closest('a') || e.target.closest('button')) return;
    e.preventDefault();

    const panel = e.currentTarget.closest('.mil-top-panel');
    const rect = panel.getBoundingClientRect();

    dragRef.current = {
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startPosX: rect.left,
      startPosY: rect.top,
    };

    setDragging(true);

    const onMove = (e) => {
      if (!dragRef.current) return;
      const dx = e.clientX - dragRef.current.startMouseX;
      const dy = e.clientY - dragRef.current.startMouseY;
      setPos({
        x: Math.max(0, dragRef.current.startPosX + dx),
        y: Math.max(0, dragRef.current.startPosY + dy),
      });
    };

    const onUp = () => {
      setDragging(false);
      dragRef.current = null;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  // When pos is set by drag, override CSS position with inline styles
  const panelStyle = pos ? {
    right: 'auto',
    left: pos.x,
    top: pos.y,
    transform: 'none',
  } : {};

  return (
    <>

    {/* top bar */}
    <div className="mil-top-panel" style={panelStyle}>
      <div
        className={`nav-pill${dragging ? ' nav-dragging' : ''}`}
        onMouseDown={handleMouseDown}
      >

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
