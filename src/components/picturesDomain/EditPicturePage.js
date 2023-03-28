import {editPicture} from "../../services/pictureService.js";
import {useState} from "react";

export const EditPicturePage = (props) => {
    const pictureId = props.match.params.id;

    const [picture, setPicture] = useState({title: '', url: ''});
    const {title, url} = picture;

    function inputChangeHandler(e) {
        let {name, value} = e.target;
        setPicture({...picture, [name]: value});
    }

    async function editPictureHandler(e) {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);
        let data = Object.fromEntries(formData);

        await editPicture(pictureId, data);
        props.history.push("/pictures/all");
    }

    return (
        <>
            <form onSubmit={editPictureHandler}>
                <div className="row">
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="pictureTitle" className="text-white">Title</label>
                        <input id="pictureTitle" name="pictureTitle" onChange={inputChangeHandler}
                               value={title}
                               className="form-control" type="text" required/>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="pictureUrl" className="text-white">Url</label>
                        <input id="pictureUrl" name="pictureUrl" onChange={inputChangeHandler}
                               value={url}
                               className="form-control" type="text" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-4">
                        <div className="button-holder d-flex">
                            <input type="submit"
                                   className="btn btn-info btn-lg" value="Edit Picture"/>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}