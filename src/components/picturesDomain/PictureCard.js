import {Link} from "react-router-dom";
import {deletePicture} from "../../services/pictureService.js";

export const PictureCard = ({pictureDTO}) => {

    async function deletePictureHandler(e) {
        e.preventDefault();
        let confirmation = window.confirm("Are you sure \nyou want to delete \nthis picture entry?");
        if (confirmation)
            await deletePicture(pictureDTO.id)
    }

    return (<div className="card-body">
        <img className="card-img" src={pictureDTO.pictureUrl} alt="Landscape picture"/>
        <h5 className="card-title">
            {pictureDTO.title}
        </h5>
        <Link to={`/pictures/${pictureDTO.id}/edit`} className="btn btn-primary btn-md">Edit</Link>
        <Link onClick={deletePictureHandler} className="btn btn-dark btn-md">Delete</Link>
    </div>);
}