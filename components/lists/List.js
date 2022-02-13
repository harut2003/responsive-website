import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function List({ title, tableTitles, listPersons }) {
  return (
    <>
      <div className="title_context">
        <h5>{title}</h5>
      </div>
      <table>
        <thead>
          <tr>
            {tableTitles.map((title, i) => (
              <th key={i}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listPersons.map((person, i) => (
            <tr key={person.id}>
              <td data-label="ID">{person.id}</td>
              <td data-label="Username">{person.username}</td>
              <td data-label="Profit($)">{person.profit}</td>
              <td data-label="Comission($)">{person.comission}</td>
              <td data-label="View">
                <Link to="/">
                  <FontAwesomeIcon icon={faAlignJustify} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default List;
