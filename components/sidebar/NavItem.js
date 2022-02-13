import { faAngleDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./NavItem.scss";

function NavItem({ icon, text, bottom, to = "/" }) {
  return (
    <Link className="link" to={to}>
      <li>
        <div>
          <FontAwesomeIcon className="menu_icon" icon={icon} />
          <span className="links_name">{text}</span>
        </div>
        <FontAwesomeIcon className="down_btn" icon={bottom ? faAngleDown : faCaretDown} />
      </li>
    </Link>
    // </li>
  );
}

export default NavItem;
