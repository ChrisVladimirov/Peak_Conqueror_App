import {Link} from "react-router-dom";
import {deletePicture} from "../../services/pictureService.js";

export const PictureCard = ({pictureDTO, setPictures, pictureIndex}) => {

    async function deletePictureHandler(e) {
        e.preventDefault();
        let confirmation = window.confirm("Are you sure \nyou want to delete \nthis picture entry?");
        if (confirmation) {
            await deletePicture(pictureDTO.id)
            setPictures(oldPictures => {
                let newArr = []
                for (let i = 0; i < oldPictures.length; i++) {
                    if (i !== pictureIndex) {
                        newArr.push(oldPictures[i])
                    }
                }
                return newArr;
            });
        }
    }

    return (
        <div className="card col-sm-6 col-md-4 col-lg-3 m-1 p-0">
            <div className="card-body">
                <img className="card-img" src={pictureDTO.url} alt="Landscape picture"/>
                <h5 className="card-title">
                    {pictureDTO.title}
                </h5>
                <Link to={`/pictures/${pictureDTO.id}/edit`} className="btn btn-primary btn-md">Edit</Link>
                <a onClick={deletePictureHandler} className="btn btn-dark btn-md">Delete</a>
            </div>
        </div>
    );
}