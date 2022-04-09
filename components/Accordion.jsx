import { FaArrowAltCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { MenuIcon } from "@heroicons/react/solid";
import { FiSettings } from "react-icons/fi";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Router from "next/router";

const Accordion = () => {
  return (
    <Category className="nav-bg">
      <CategoryItem icon={<MenuIcon className="h-6" />}>
        <DropdownMenu />
      </CategoryItem>
    </Category>
  );
};

const handlClick1 = (categorySmall) => {
  Router.push({
    pathname: "/productlist",
    query: { categorySmall },
  });
};

const handlClick2 = (path) => {
  Router.push(path);
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
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => Router.push("/filtered")}>詳細検索</button>
          </DropdownItem>
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
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("クレンジング")}>
              クレンジング
            </button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("洗顔料")}>洗顔料</button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("化粧水")}>化粧水</button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("美容液")}>美容液</button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("乳液")}>乳液</button>
          </DropdownItem>
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
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("日焼け止め（顔用）")}>
              日焼け止め（顔用）
            </button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("日焼け止め（体用）")}>
              乳日焼け止め（体用）液
            </button>
          </DropdownItem>
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
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("ファンデーション")}>
              ファンデーション
            </button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("化粧下地")}>化粧下地</button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("コンシーラー")}>
              コンシーラー
            </button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("フェイスパウダー")}>
              フェイスパウダー
            </button>
          </DropdownItem>
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
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("アイブロー")}>
              アイブロー
            </button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("アイライナー")}>
              アイライナー
            </button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("マスカラ")}>マスカラ</button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("アイシャドウ")}>
              アイシャドウ
            </button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("チーク")}>チーク</button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("口紅・グロス")}>
              口紅・グロス
            </button>
          </DropdownItem>
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
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("香水（レディース）")}>
              香水（レディース）
            </button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("香水（メンズ）")}>
              香水（メンズ）
            </button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("フレグランス（レディース）")}>
              フレグランス（レディース）
            </button>
          </DropdownItem>
          <DropdownItem leftIcon={<FiSettings />}>
            <button onClick={() => handlClick1("フレグランス（メンズ）")}>
              フレグランス（メンズ）
            </button>
          </DropdownItem>
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
