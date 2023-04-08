import styles from "./AddRoutePage.module.css";
import {editRoute, getAllToughnessLevels, getParticularRoute} from "../../services/routeService.js";
import {useEffect, useState, Suspense} from "react";
import {usePictures} from "../../hooks/usePictures.js";
import {NavbarTemplate} from "../commonsDomain/NavbarTemplate";
import {Footer} from "../commonsDomain/Footer";

export const EditRoutePage = (props) => {

    const routeId = props.match.params.routeId;
    const [routeDTO, setRouteDTO] = useState(null);

    const [pictures, ] = usePictures();
    const [levels, setLevels] = useState([]);

    useEffect(() => {
        getParticularRoute(routeId).then(r => setRouteDTO(r));
        getAllToughnessLevels().then(r => setLevels(Object.keys(r)));
    }, [])

    const [errors, setErrors] = useState(null);
    const [pictureUrls, setPictureUrls] = useState([]);

    useEffect(() => {
        if (routeDTO) {
            setPictureUrls(() => {
                let arr = []
                for (let pictureEntity of Object.values(routeDTO?.pictures)) {
                    arr.push(pictureEntity.url)
                }
                return arr;
            })
        }
    }, [routeDTO]);

    async function submitEditRouteHandler(e) {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);
        let data = Object.fromEntries(formData);
        data['pictureUrls'] = pictureUrls;
        let r = await editRoute(routeId, data);
        if (!!r) {
            setErrors(r);
        }
        props.history.push("/routes/all");
    }

    return (
        <>
            <NavbarTemplate/>
            {!!routeDTO ?
                <Suspense fallback={<p>Loading...</p>}>
                    <section id="routeEdit">
                        <div className="section-center">
                            <div className="container">

                                <div className={`${styles.formHeader}`}>
                                    <h2 className="text-center text-white">Edit Route</h2>
                                </div>

                                <form onSubmit={submitEditRouteHandler} className={`${styles.mainForm} 
                    mx-auto col-sm-4 d-flex flex-column justify-content-center`}>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="routeName">Name</label>
                                                <input id="routeName" name="name"
                                                       type="text" className="form-control"
                                                       required minLength="7" maxLength="30"
                                                       defaultValue={routeDTO.name}
                                                />
                                            </div>
                                            <label htmlFor="routeDuration">Duration <em>(in hours)</em> </label>
                                            <input id="routeDuration" name="duration"
                                                   className="form-control" type={"number"}
                                                   min={0.5} max={23}
                                                   step={0.5} defaultValue={routeDTO.duration}/>

                                            <label htmlFor="routeLevel">Difficulty Level</label>
                                            <select required={true} name="toughness"
                                                    defaultValue={routeDTO.toughnessLevel.toughness}>
                                                {levels.map(l => <option key={l}>{l}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="routeNotes">Description</label>
                                            <textarea id="routeNotes" name="itinerary"
                                                      className="form-control"
                                                      required={true} minLength={30} maxLength={5000}
                                                      defaultValue={routeDTO.itinerary}/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <h5 style={{marginTop: '1m'}}>
                                            Coordinates <em>(Type a file url)</em>
                                        </h5>
                                        <div className="col-md-6 mb-3">
                                            <input id="coordinatesUrl" className="form-control-file"
                                                   name="coordinatesUrl" type="url"
                                                   defaultValue={
                                                       (!!routeDTO.coordinatesUrl
                                                           && routeDTO.coordinatesUrl !== '') ?
                                                           routeDTO.coordinatesUrl
                                                           : null}/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="routeInitialImage">Pictures</label>
                                            <select id="routeInitialImage" name="pictureUrls" required={true}
                                                    multiple={true}
                                                    value={pictureUrls}
                                                    onChange={e => {
                                                        const options = [...e.target.selectedOptions];
                                                        const values = options.map(option => option.value);
                                                        setPictureUrls(values);
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
                                                       value="Submit changes"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </Suspense>
                : null}
            <Footer/>
        </>
    )
}
