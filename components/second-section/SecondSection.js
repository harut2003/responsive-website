import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SecondSection.scss";

function SecondSection(){
    return (
        <div className="second_section_container">
            <div className="favorite">
                <FontAwesomeIcon icon = {faHeart} className="text-muted"/>
                <p>ADD THIS PAGE TO FAVORITES</p>
            </div>
        </div>
    )
}

export default SecondSection;