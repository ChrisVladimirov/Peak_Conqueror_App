import {editPicture, getSinglePicture} from "../../services/pictureService.js";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {NavbarTemplate} from "../commonsDomain/NavbarTemplate";
import styles from "./EditPicture.module.css";
import {Footer} from "../commonsDomain/Footer";

export const EditPicturePage = (props) => {
    const {pictureId} = useParams();

    const [picture, setPicture] = useState({});
    const {title, url} = picture;
    const [errors, setErrors] = useState(null);

    function inputChangeHandler(e) {
        let {name, value} = e.target;
        setPicture({...picture, [name]: value});
    }

    async function editPictureHandler(e) {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);
        let data = Object.fromEntries(formData);

        const r = await editPicture(pictureId, data);
        if (!!r) {
            setErrors(Object.values(r));
            return;
        }
        setPicture({title: '', url: ''});
        setErrors(null);
        props.history.push("/pictures/all");
    }

    useEffect(() => {
        getSinglePicture(pictureId).then(r => setPicture(r))
    }, [])

    return (
        <>
            <NavbarTemplate/>
            <section className="container">
                <div className="mx-auto d-flex flex-column justify-content-center col-lg-8">
                    <h2 className={styles.editPictureHeader}>Edit Picture</h2>
                    <form onSubmit={editPictureHandler}>
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="pictureTitle" className="text-white">Title</label>
                                <input id="pictureTitle" name="title" onChange={inputChangeHandler}
                                       value={title} min={5} max={25}
                                       className="form-control" type="text" required/>
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="pictureUrl" className="text-white">Url</label>
                                <input id="pictureUrl" name="url" onChange={inputChangeHandler}
                                       value={url} min={20} max={200}
                                       className="form-control" type="text" required/>
                            </div>
                        </div>
                        {!!errors
                            ? <div>
                                <ol>{errors.map(e =>
                                    <li style={{listStyle: 'none', fontWeight: 'bold'}}
                                        className="text-white bg-danger">{e}</li>)}</ol>
                            </div>
                            : null}
                        <div className="row">
                            <div className="col col-md-4">
                                <div className="button-holder d-flex">
                                    <input type="submit"
                                           className="btn btn-info btn-lg" value="Edit Picture"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <img src={url} alt={title} className={`${styles.editPictureContainerImg}`}/>
            <Footer/>
        </>
    );
}