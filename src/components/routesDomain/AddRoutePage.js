import {useEffect, useState} from "react";
import {getAllToughnessLevels} from "../../services/routeService.js";
import {getAllPictures} from "../../services/pictureService.js";

export const AddRoutePage = (props) => {

    const [levels, setLevels] = useState([]);
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        const [_tLevels, _pictures] = Promise.all([getAllToughnessLevels(), getAllPictures()]);
        setLevels(_tLevels);
        setPictures(_pictures);
    }, [])

    return (
        <>
            <form>
                <p>All fields with '*' are required!</p>
                <div className="form-group">
                    <label>*Name</label>
                    <input required={true} placeholder={"Rilski manastir-Chakar Voivoda"} type={"text"}/>
                </div>
                <div className="form-group">
                    <label>*Description</label>
                    <textarea required={true}/>
                </div>
                <div className="form-group">
                    <label>*<i className="fa-regular fa-hourglass"></i></label>
                    <input required={true} type={"number"}/>
                </div>
                <div className="form-group">
                    <label>Coordinates File URL</label>
                    <input type={"text"}/>
                </div>
                <div className="form-group">
                    <label>*Difficulty</label>
                    <select required={true}>
                        {levels.map(l => <option defaultValue={l}>{l}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label>*Pictures</label>
                    <select required={true}>
                        {pictures.map(p => <option defaultValue={p.url}>{p.title}</option>)}
                    </select>
                </div>
            </form>
        </>
    );
}//todo