// import React from "react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import {
  FaGithubSquare,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Accordion = () => {
  return (
    <Category className="nav-bg">
      <CategoryItem icon={<FaGithub />} />
      <CategoryItem icon={<FaGithub />} />
      <CategoryItem icon={<FaGithub />} />
      <CategoryItem icon={<FaGithub />} />
      <CategoryItem icon={<FaGithubSquare />} />
      <CategoryItem icon={<FaArrowAltCircleRight />}>
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
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<FiSettings />}
            rightIcon={<FaChevronCircleRight />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<FaArrowAltCircleLeft />} goToMenu="main" />
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
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
