import {useState} from "react";
import {createPicture} from "../../services/pictureService.js";
import {NavbarTemplate} from "../commonsDomain/NavbarTemplate";
import {Footer} from "../commonsDomain/Footer";
import {useBackground} from "../../hooks/useBackground";

export const CreatePicturePage = (props) => {

    const [picture, setPicture] = useState({title: '', url: ''});
    const {title, url} = picture;

    const [errors, setErrors] = useState(null);

    useBackground("https://res.cloudinary.com/dhr071bhp/image/upload/v1672598737/peak-climber-pictures/by-the-fire_gpbzvq.jpg")

    function inputChangeHandler(e) {
        let {name, value} = e.target;
        setPicture({...picture, [name]: value});
    }

    async function createPictureHandler(e) {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);
        let data = Object.fromEntries(formData);

        let r = await createPicture(data);
        if (!!r) {
            setErrors(Object.values(r));
            return;
        }
        setPicture({title: '', url: ''});
        setErrors(null);
        props.history.push('/pictures/all');
    }

    return (
        <>
            <NavbarTemplate/>
            <section className="mx-auto col-md-8 d-flex flex-column justify-content-center">
                <div className="container" style={{marginBottom: '6.3em', marginTop: '6em'}}>
                    <h2 className="text-center text-white mt-5">Add Picture</h2>
                    <form action="/pictures/create" method="POST" onSubmit={createPictureHandler}
                          className="main-form mx-auto col-md-8 d-flex flex-column justify-content-center">
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="title" className="text-white">Title</label>
                                <input id="title" value={title} name="title" onChange={inputChangeHandler}
                                       className="form-control" min={5} max={25} type="text" required/>
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="url" className="text-white">Url</label>
                                <input id="url" value={url} name="url" onChange={inputChangeHandler}
                                       className="form-control" min={20} max={200} type="text" required/>
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
                                        <input type="submit" className="btn btn-info btn-lg" value="Add Picture"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    );
}