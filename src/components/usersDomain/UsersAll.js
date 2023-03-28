import {useEffect, useState} from "react";
import {UserCard} from "./UserCard";
import {getAllUsers} from "../../services/usersService.js";
import {NavbarTemplate} from "../commonsDomain/NavbarTemplate";
import {Footer} from "../commonsDomain/Footer";
import {Header} from "../commonsDomain/Header";
import styles from "./UserCard.module.css";
import {getUserData} from "../../api/util.js";
import {useBackground} from "../../hooks/useBackground";

export const UsersAll = (props) => {

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getAllUsers().then(d => d.filter(
                u => u.username !== getUserData().username)).then(r => setAllUsers(r));
        }, 1000)
    }, [])

    useBackground("https://res.cloudinary.com/dhr071bhp/image/upload/v1677864431/Ferdinandovo_ezero.jpg")

    return (
        <>
            <Header/>
            <section className={`${styles.allUsersSection} d-flex justify-content-center`}>
                <div className="card-group">
                    {allUsers.length > 0 ?
                        allUsers.map(u => <UserCard key={u.id} userDTO={u}/>)
                        : <p className="text-white">No users!</p>
                    }
                </div>
            </section>
            <Footer/>
        </>
    );
}