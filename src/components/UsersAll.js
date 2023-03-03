import {useEffect, useState} from "react";
import {UserCard} from "./UserCard";
import {getAllUsers} from "../services/usersService.js";

export const UsersAll = (props) => {

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getAllUsers().then(r => setAllUsers(r));
        }, 1000)
    }, [])

    useEffect(() => {
        const currentStyle = document.body.style;
        currentStyle.backgroundImage = `url("https://res.cloudinary.com/dhr071bhp/image/upload/v1677864431/Ferdinandovo_ezero.jpg")`;
        currentStyle.backgroundPosition = 'center center';
        currentStyle.backgroundRepeat = 'no-repeat';
        currentStyle.backgroundAttachment = 'fixed';
        currentStyle.backgroundSize = 'cover';
    })

    return (
        <>
            <section className="d-flex justify-content-center">
                <div className="card-group">
                    {allUsers.length > 0 ?
                        allUsers.map(u => <UserCard key={u.id} userDTO={u}/>)
                        : <p>No users!</p>
                    }
                </div>
            </section>

        </>
    );
}