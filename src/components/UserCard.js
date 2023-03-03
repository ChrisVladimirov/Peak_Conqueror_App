import {Link} from "react-router-dom";
import {isAdmin} from "../api/util.js";
import styles from "./UserCard.module.css";

export const UserCard = ({userDTO}) => {

    function promoteHandler(e) {
        //todo
    }

    function demoteHandler(e) {
        //todo
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
                    {isAdmin() ?
                        userDTO.roles.includes('ADMIN') ?
                            <a className="card-link" onClick={demoteHandler}>Demote</a>
                            : <a className="card-link" onClick={promoteHandler}>Promote</a>
                        : null
                    }
                </div>
            </div>
        </>
    );
}