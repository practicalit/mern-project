import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Member listing component
 * @author Practical IT <info@thePracticalIT.com>
 */
function MemberList(props) {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    getMembers();
    return () => {};
  }, []);

  /**
   * Method to get all the members
   */
  const getMembers = () => {
    let url = `${process.env.REACT_APP_BACKEND_URL}${process.env.REACT_APP_MEMBERS}`;
    axios.get(url).then((members) => setMembers(members.data));
  };
  return (
    <table className="table table-hover">
      <tbody>
        <tr>
          <td>Members List</td>
        </tr>
        <tr>
          <td>FirstName</td>
          <td>LastName</td>
          <td>E-mail</td>
        </tr>

        {members &&
          members.map((member, cell) => {
            return (
              <tr className="table-responsive" key={cell}>
                <td>
                  <Link
                    to={{
                      pathname: "/member-detail",
                      state: {
                        eventObject: member,
                      },
                    }}
                  >
                    {member.firstName}
                  </Link>
                </td>
                <td>{member.lastName}</td>
                <td>{member.email}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default MemberList;
