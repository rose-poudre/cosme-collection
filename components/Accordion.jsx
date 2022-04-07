import { FaArrowAltCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { MenuIcon } from "@heroicons/react/solid";
import { FiSettings } from "react-icons/fi";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";

const Accordion = () => {
  const router = useRouter();

  const search = ({ categorySmall }) => {
    router.push({
      pathname: "/productlist",
      query: {
        categorySmall: categorySmall,
      },
    });
  };

  return (
    <Category className="nav-bg">
      <CategoryItem icon={<MenuIcon className="h-6" />}>
        <DropdownMenu />
      </CategoryItem>
    </Category>
  );
};

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight + 30;
    console.log(height);
    setMenuHeight(height);
  }

  const DropdownItem = (props) => {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>詳細検索</DropdownItem>
          <DropdownItem
            leftIcon={<FiSettings />}
            rightIcon={<FaChevronCircleRight />}
            goToMenu="skincare"
          >
            スキンケア・基礎化粧品
          </DropdownItem>
          <DropdownItem
            leftIcon={<FiSettings />}
            rightIcon={<FaChevronCircleRight />}
            goToMenu="sunscreen"
          >
            日焼け対策
          </DropdownItem>
          <DropdownItem
            leftIcon={<FiSettings />}
            rightIcon={<FaChevronCircleRight />}
            goToMenu="basemakeup"
          >
            ベースメイク
          </DropdownItem>
          <DropdownItem
            leftIcon={<FiSettings />}
            rightIcon={<FaChevronCircleRight />}
            goToMenu="makeup"
          >
            メイクアップ
          </DropdownItem>
          <DropdownItem
            leftIcon={<FiSettings />}
            rightIcon={<FaChevronCircleRight />}
            goToMenu="perfume"
          >
            香水・フレグランス
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "skincare"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<FaArrowAltCircleLeft />} goToMenu="main" />
          <DropdownItem>クレンジング</DropdownItem>
          <DropdownItem>洗顔料</DropdownItem>
          <DropdownItem>化粧水</DropdownItem>
          <DropdownItem>美容液</DropdownItem>
          <DropdownItem>乳液</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "sunscreen"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<FaArrowAltCircleLeft />} goToMenu="main" />
          <DropdownItem>日焼け止め（顔用）</DropdownItem>
          <DropdownItem>日焼け止め（体用）</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "basemakeup"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<FaArrowAltCircleLeft />} goToMenu="main" />
          <DropdownItem>ファンデーション</DropdownItem>
          <DropdownItem>化粧下地</DropdownItem>
          <DropdownItem>コンシーラー</DropdownItem>
          <DropdownItem>フェイスパウダー</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "makeup"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<FaArrowAltCircleLeft />} goToMenu="main" />
          <DropdownItem>アイブロー</DropdownItem>
          <DropdownItem>アイライナー</DropdownItem>
          <DropdownItem>マスカラ</DropdownItem>
          <DropdownItem>アイシャドウ</DropdownItem>
          <DropdownItem>チーク</DropdownItem>
          <DropdownItem>口紅・グロス</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "perfume"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<FaArrowAltCircleLeft />} goToMenu="main" />
          <DropdownItem>香水（レディース）</DropdownItem>
          <DropdownItem>香水（メンズ）</DropdownItem>
          <DropdownItem>フレグランス（レディース）</DropdownItem>
          <DropdownItem>フレグランス（メンズ）</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

const Category = (props) => {
  return (
    <nav className="category">
      <ul className="category-title">{props.children}</ul>
    </nav>
  );
};

const CategoryItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="accordion-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
};

export default Accordion;
