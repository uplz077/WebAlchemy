import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { profiles, navLinks } from "../constants";
import { logo, linkedin, menu, close } from "../assets";

// link渲染内容
const LinkContent = ({ nav }) => {
  let linkCtx;
  if (nav.id === "linkedin") {
    // 渲染领英
    linkCtx = (
      <a href={nav.url} target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="linkedin-icon" />
      </a>
    );
  } else if (nav.id === "cv") {
    // 渲染在线简历-暂不开放
    linkCtx = (
      <a
        href={nav.url}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-gray-500 rounded-lg px-3 py-1"
      >
        {" "}
        CV{" "}
      </a>
    );
  } else {
    // 渲染模块普通连接
    linkCtx = <span>{nav.title}</span>;
  }

  return linkCtx;
};

const Navbar = () => {
  const [active, setActive] = useState(""); // 右侧导航列表栏激活状态
  const [toggle, setToggle] = useState(false); // 移动端菜单切换
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // 初始化滚动事件监听，并更新的已滚动的区域
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 点击导航跳转到滚动方法
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* 左侧logo, 跳转最顶部 */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            {profiles.name}&nbsp;
            <span className="sm:block hidden"> | {profiles.position}</span>
          </p>
        </Link>
        {/* 右侧导航列表，跳转各个模块 */}
        <ul className="list-none hidden sm:flex flex-row gap-10 justify-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer flex items-center`}
              onClick={() => {
                setActive(nav.title);
                scrollToSection(nav.id); // 跳转对应模块
              }}
            >
              <LinkContent nav={nav} />
            </li>
          ))}
        </ul>
        {/* 右侧移动端适配 */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* 菜单切换按钮 */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          {/* 菜单列表 */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                    scrollToSection(nav.id); // Scroll to the section
                  }}
                >
                  <LinkContent nav={nav} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
