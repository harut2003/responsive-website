import {
  faGaugeHigh,
  faKey,
  faUser,
  faBullhorn,
  faChartArea,
  faArrowRightArrowLeft,
  faGear,
  faHeart,
  faClock,
  faEye,
  faArrowRight,
  faArrowLeft,
  faHome,
  faChartColumn,
  faPen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
import NavItem from "./NavItem";

function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const ref = useRef(null);

  const navItems = [
    {
      icon: toggle ? faGaugeHigh : faHome,
      name: "Home",
    },
    {
      icon: faKey,
      name: "Account Managment",
    },
    {
      icon: toggle && faUser,
      name: "",
    },
    {
      icon: faBullhorn,
      name: "Marketing Tools",
    },
    {
      icon: toggle ? faChartArea : faChartColumn,
      name: "Reports",
    },
    {
      icon: faArrowRightArrowLeft,
      name: "Payments",
    },
    {
      icon: !toggle && faPen,
      name: "Content",
    },
    {
      icon: faGear,
      name: "Settings",
    },
    {
      icon: !toggle && faEnvelope,
      name: "Communications",
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (!toggle) {
          setToggle(!toggle);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className={toggle ? "sidebar" : "sidebar_open"}>
      <div className="logo_content">
        <div className="logo">
          <img src={logo} alt="logo" />
          {
            <p
              className={`${
                toggle
                  ? "d-none"
                  : "d-flex justify-content-between m-0 align-items-center"
              }`}
            >
              <strong className="me-1">BIGWIN365</strong> AFFILIATES
            </p>
          }
        </div>
      </div>
      <ul className="nav_list">
        <div className="nav_up">
          <div className="d-flex toggle_container">
            <button
              onClick={() => {
                setToggle(!toggle);
              }}
              className="toggle"
              ref={ref}
            >
              <FontAwesomeIcon
                className="link"
                icon={toggle ? faArrowRight : faArrowLeft}
              />
            </button>
            <strong className="ms-2 d-none d-sm-block text-secondary">
              Dashboard
            </strong>
          </div>
          {navItems.map((item, i) => {
            return item.icon && <NavItem key={i} icon={item.icon} text={item.name} />;
          })}
        </div>
        <div className="nav_bottom">
          <NavItem icon={faHeart} text="Favorites" bottom />
          <NavItem icon={faClock} text="Recently Used" bottom />
          {toggle && <NavItem icon={faEye} />}
        </div>
      </ul>
    </div>
  );
}
export default Sidebar;
