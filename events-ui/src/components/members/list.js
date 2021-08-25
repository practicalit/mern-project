import axios from "axios";
import {useEffect, useState} from 'react';

/**
 * Member listing component
 * @author Practical IT <info@thePracticalIT.com>
 */
function MemberList(props) {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        getMembers();
        return () => {
            //anything to be cleaned here.
        }
    }, []);

    /**
     * Method to get all the members 
     */
    const getMembers = () => {
        let url = `${process.env.REACT_APP_BACKEND_URL}${process.env.REACT_APP_MEMBERS}`;
        axios.get(url)
        .then( members => setMembers(members.data));
    }
    return(<>
        {
            members && members.map(
                member => {
                    return <p>{member.firstName}</p>
                }
            )
        }
    </>);
}

export default MemberList;