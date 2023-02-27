import {editThoughts} from "../services/usersService";
import {useEffect, useState} from "react";
import {getUserData} from "../api/util";

export const UserProfile = (props) => {

    const user = getUserData();

    const [thoughts, setThoughts] = useState(user.thoughts);

    useEffect(() => {
        let currentStyle = document.body.style;
        currentStyle.backgroundImage = `url("/images/weather-images/forecast/firy-dark-clouds.jpg")`;
        currentStyle.backgroundPosition = 'center center';
        currentStyle.backgroundRepeat = 'no-repeat';
        currentStyle.backgroundAttachment = 'fixed';
        currentStyle.backgroundSize = 'cover';
    }, []);

    async function editThoughtsFormSubmitHandler(e) {
        e.preventDefault();
        let newThoughts = e.target.querySelector('input').value;
        setThoughts(newThoughts);
        await editThoughts(newThoughts);
        setThoughts('');
    }

    return (
        <section className="float-end" style={{marginTop: '130px', marginBottom: '140px', marginRight: '50px'}}>
            <div className="card d-flex justify-content-center" style={{width: '18rem'}}>
                <div id="profileImage-me" className="card-img-top mx-auto">
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
                        <input className="form-control" value={thoughts} type="text" id="thoughts-input"/>
                        <button className="btn btn-dark my-2 my-sm-0">Confirm Changes</button>
                    </form>
                </div>
            </div>
        </section>
    );
}