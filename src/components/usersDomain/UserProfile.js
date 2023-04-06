import {editThoughts, getParticularUser} from "../../services/usersService.js";
import {useEffect, useState} from "react";
import {getUserData} from "../../api/util.js";
import {PrettyFooter} from "../commonsDomain/PrettyFooter";
import {NavbarTemplate} from "../commonsDomain/NavbarTemplate";
import {useBackground} from "../../hooks/useBackground";
import styles from "./UserProfile.module.css";

export const UserProfile = (props) => {

    const user = getUserData();

    const [thoughts, setThoughts] = useState(user.thoughts || '');
    const [errors, setErrors] = useState('');

    useEffect(() => {
        getParticularUser(user.username).then(r => setThoughts(r.thoughts));
    }, [])

    useBackground("https://res.cloudinary.com/dhr071bhp/image/upload/v1672599535/peak-climber-pictures/weather-images/firy-dark-clouds_wcmr1u.jpg")

    async function editThoughtsFormSubmitHandler(e) {
        e.preventDefault();
        let newThoughts = e.target.querySelector('input').value;
        setThoughts(newThoughts);
        let response = await editThoughts(user.id, newThoughts);
        if (response) {
            setErrors("Invalid updated thoughts!");
            return;
        }
        setErrors('');
    }

    function inputChangeHandler(e) {
        e.preventDefault();
        let value = e.target.value;
        setThoughts(value);
    }

    return (
        <>
            <NavbarTemplate/>
            <section className={`${styles.userProfileSection} float-end`}>
                <div className={`card d-flex justify-content-center ${styles.profileCard}`}>
                    <div className={`${styles.profileImageMe} card-img-top mx-auto`}>
                        {user.firstName.charAt(0)} {user.lastName.charAt(0)}
                    </div>
                    <div className="card-body">
                        <h5 id="nickname" className="card-title">
                            {user.firstName} {user.lastName}
                        </h5>
                        <h6 className="card-subtitle">{user.username}</h6>
                        <p className="card-text">{user.email}</p>
                        <p className="card-text">{user.thoughts}</p>
                    </div>

                    <div id="write-thoughts-field">
                        <h4>Add or Edit your Thoughts</h4>
                        <form onSubmit={editThoughtsFormSubmitHandler} className="form-inline">
                            <label htmlFor="thoughts-input">Share something that inspires!</label>
                            <input className="form-control" onChange={inputChangeHandler} value={thoughts}
                                   type="text" id="thoughts-input"/>
                            {!!errors && errors !== '' ? <span className="text-white bg-danger">{errors}</span> : null}
                            <button className="btn btn-dark my-2 my-sm-0">Confirm Changes</button>
                        </form>
                    </div>
                </div>
            </section>
            <PrettyFooter/>
        </>
    );
}