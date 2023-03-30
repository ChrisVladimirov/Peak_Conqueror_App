import {useEffect, useState} from "react";
import {createRoute, getAllToughnessLevels} from "../../services/routeService.js";
import {getAllPictures} from "../../services/pictureService.js";
import styles from "./AddRoutePage.module.css";
import {useBackground} from "../../hooks/useBackground.js";

export const AddRoutePage = (props) => {

    const [levels, setLevels] = useState([]);
    const [pictures, setPictures] = useState([]);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        (async () => {
            const [_tLevels, _pictures] = await Promise.all([getAllToughnessLevels(), getAllPictures()]);
            setLevels(Object.keys(_tLevels));
            setPictures(_pictures);
        })()
    }, [])

    useBackground("https://res.cloudinary.com/dhr071bhp/image/upload/v1672599122/peak-climber-pictures/Babreka_rxzixu.jpg")

    const [pictureUrls, setPictureUrls] = useState(['','']);

    async function submitPictureHandler(e) {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);
        let data = Object.fromEntries(formData);
        data['pictureUrls'] = pictureUrls;
        console.log(data)
        let r = await createRoute(data);
        if (!!r) {
            setErrors(Object.values(r));
            return;
        }
        setErrors(null)
        props.history.push("/routes/all")
    }

    /*function changeHandler(e) {
        let value = e.target;
        setPictureUrls([Array.from(pictureUrls).push(value)]);
    }*/

    return (
        <section id="routeAddition">
            <div className="section-center">
                <div className="container">

                    <div className={`${styles.formHeader}`}>
                        <h2 className="text-center text-white">Add a new Route</h2>
                    </div>

                    <form onSubmit={submitPictureHandler} className={`${styles.mainForm} 
                    mx-auto col-sm-4 d-flex flex-column justify-content-center`}
                          method="POST">

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <label htmlFor="routeName">Name</label>
                                    <input id="routeName" name="name"
                                           type="text" className="form-control"
                                           required minLength="7" defaultValue={''}
                                    />
                                </div>
                                <label htmlFor="routeDuration">Duration <em>(in hours)</em> </label>
                                <input id="routeDuration" name="duration"
                                       className="form-control" type={"number"}
                                       min={0.5}
                                       step={0.5} defaultValue={0.5}/>

                                <label htmlFor="routeLevel">Difficulty Level</label>
                                <select required={true} name="toughness"
                                        defaultValue={'EASY'}>
                                    {levels.map(l => <option key={l}>{l}</option>)}
                                </select>
                            </div>
                        </div>


                        <div className="form-group">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="routeNotes">Description</label>
                                <textarea id="routeNotes" name="itinerary"
                                          className="form-control"
                                          required={true}
                                          defaultValue={''}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <h5>
                                Coordinates <em>(Type a file url)</em>
                            </h5>
                            <div className="col-md-6 mb-3">
                                <input id="coordinatesUrl" className="form-control-file"
                                       name="coordinatesUrl" type="url"
                                       defaultValue={''}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="routeInitialImage">Pictures</label>
                                <select name="pictureUrls" required={true} multiple={true}
                                        value={pictureUrls}
                                        onChange={e => {
                                            const options = [...e.target.selectedOptions];
                                            const values = options.map(option => option.value);
                                            setPictureUrls(values);
                                            console.log(pictureUrls)
                                            //console.log('Values are: ' + values)
                                        }}>
                                    {pictures.map(p => <option key={p.id}
                                                               value={p.url}>{p.title}</option>)}
                                </select>
                            </div>
                        </div>

                        {!!errors ?
                            <div>
                                <ol>{errors.map(e =>
                                    <li style={{listStyle: 'none', fontWeight: 'bold'}}
                                        className="text-white bg-danger">{e}</li>)}</ol>
                            </div>
                            : null}

                        <div className="row d-flex justify-content-between">
                            <div className="col col-md-4">
                                <div className="button-holder d-flex">
                                    <input type="submit" className="btn btn-dark btn-lg"
                                           value="Create"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}