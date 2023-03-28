import {useState} from "react";
import {createPicture} from "../../services/pictureService.js";

export const CreatePicturePage = (props) => {

    const [picture, setPicture] = useState({title: '', url: ''});
    const {title, url} = picture;

    function inputChangeHandler(e) {
        let {name, value} = e.target;
        setPicture({...picture, [name]: value});
    }

    async function createPictureHandler(e) {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);
        let data = Object.fromEntries(formData);

        await createPicture(data);
        props.history.push('/pictures/all');
    }

    return (
        <>
            <section>
                <div className="container" style={{marginBottom: '6.3em'}}>
                    <h2>Add Picture</h2>
                    <form action="/pictures/create" method="POST" onSubmit={createPictureHandler}
                          className="main-form mx-auto col-md-8 d-flex flex-column justify-content-center">
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="title" className="text-white">Title</label>
                                <input id="title" value={title} name="title" onChange={inputChangeHandler}
                                       className="form-control" type="text" required/>
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="url" className="text-white">Url</label>
                                <input id="url" value={url} name="url" onChange={inputChangeHandler}
                                       className="form-control" type="text" required/>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}