import {isOwner} from "../api/util.js";
import styles from "./UserCard.module.css";
import {demoteUser, promoteUser} from "../services/usersService.js";
import {Link} from "react-router-dom";
//import {useState} from "react";

export const UserCard = ({userDTO}) => {

    //const [isRoleChanged, setIsRoleChanged] = useState(false);

    async function promoteHandler(e, userId) {
        e.preventDefault();
        await promoteUser(userId);
        //setIsRoleChanged(true);
    }

    async function demoteHandler(e, userId) {
        e.preventDefault();
        await demoteUser(userId);
        //setIsRoleChanged(true);
    }

    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <div className={`${styles.profileImage} card-img mx-auto`}>
                    {userDTO.firstName.charAt(0)}{userDTO.lastName.charAt(0)}
                </div>
                <div className="card-body">
                    <h5 id="nickname" className="card-title">
                        {userDTO.firstName} {userDTO.lastName}
                    </h5>
                    <h6 className="card-subtitle">{userDTO.username}</h6>
                    <p className="card-text">{userDTO.thoughts}</p>
                    {/*<Link to="/journey/invite" className="card-link">Invite to Journey</Link>*/}
                    <br/>
                    {isOwner() ?
                        userDTO.roles.includes('ADMIN') ?
                            <a className="card-link btn btn-dark" href="#"
                               onClick={(e) => demoteHandler(e, userDTO.id)}>Demote</a>
                            : <a href="#" className="card-link btn btn-dark"
                                 onClick={(e) => promoteHandler(e, userDTO.id)}>Promote</a>
                        : null
                    }
                </div>
            </div>
        </>
    );
}