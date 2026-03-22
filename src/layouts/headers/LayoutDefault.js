import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import appData from "@data/app.json";
import { useRouter } from 'next/router';
import LogoMark from "@components/LogoMark";
import { useLanguage } from "@library/LanguageContext";
import { translations } from "@library/i18n";

const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);
  const [dragging, setDragging] = useState(false);
  const { lang, setLang } = useLanguage();
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
    e.preventDefault();

    const panel = e.currentTarget.closest('.mil-top-panel');
    const rect = panel.getBoundingClientRect();

    dragRef.current = {
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startRight: window.innerWidth - rect.right,
      startPosY: rect.top,
    };

    setDragging(true);

    let latestPos = null;

    const onMove = (e) => {
      if (!dragRef.current) return;
      const dx = e.clientX - dragRef.current.startMouseX;
      const dy = e.clientY - dragRef.current.startMouseY;
      const newRight = Math.max(0, dragRef.current.startRight - dx);
      latestPos = {
        right: newRight,
        y: Math.max(0, dragRef.current.startPosY + dy),
      };
      setPos(latestPos);
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
    right: pos.right,
    left: 'auto',
    top: pos.y,
    transform: 'none',
  } : {};

  return (
    <>

    {/* top bar */}
    <div className="mil-top-panel" style={panelStyle}>
      <div className="nav-pills-container">
      <div className={`nav-pill${dragging ? ' nav-dragging' : ''}`}>

        <div
          className={`nav-pill-drag-handle${dragging ? ' nav-dragging' : ''}`}
          onMouseDown={handleMouseDown}
        >
          <span className="drag-grip" />
        </div>

        <Link href="/" className="nav-logo">
          <LogoMark size={34} variant="badge" />
        </Link>

        <div className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
            <nav id="swupMenu" className="mil-menu-transition">
                <ul>
                    {navItems.map((item, key) => (
                    <li className={item.classes} key={`header-menu-item-${key}`}>
                        <a href={item.link}>{translations.nav[item.label]?.[lang] ?? item.label}</a>
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

      <div className="icon-pill">
          <ul className="nav-pill-social">
              <li>
                  <a href="/_Tonghan__Resume.pdf" target="_blank" rel="noopener noreferrer"
                     className="social-icon" aria-label="Resume">
                      <i className="fas fa-file-alt" />
                      <span className="icon-tip">Resume</span>
                  </a>
              </li>
              {appData.social.map((item, key) => (
                  <li key={`nav-social-${key}`}>
                      <a href={item.link}
                         target={item.link.startsWith('mailto') ? '_self' : '_blank'}
                         rel="noopener noreferrer"
                         className="social-icon"
                         aria-label={item.title}>
                          <i className={item.icon} />
                          <span className="icon-tip">{item.title}</span>
                      </a>
                  </li>
              ))}
          </ul>
          <button
              className="lang-toggle"
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              aria-label={lang === 'en' ? 'Switch to Chinese' : 'Switch to English'}
          >
              {lang === 'en' ? '中文' : 'EN'}
              <span className="icon-tip">{lang === 'en' ? 'Switch to Chinese' : '切换到英文'}</span>
          </button>
      </div>
      </div>

    </div>
    {/* top bar end */}

    </>
  );
};
export default DefaultHeader;
