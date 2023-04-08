import {Link} from "react-router-dom";
import {useState} from "react";
import styles from "./MountainRouteCard.module.css";
import {deleteRoute} from "../../services/routeService.js";
import {getUserData, isAdmin} from "../../api/util.js";
import {useLikesContext} from "../../contexts/LikesContext";

export const MountainRouteCard = (props) => {

    const routeDTO = props.routeDTO;
    let {likes, onLike, isLiked, onRemoveLike} = useLikesContext();

    async function likeClickHandler(e) {
        let likeIcon = e.target;
        likeIcon.classList.add('fa-shake')
        if (isLiked === false) {
            onLike();
        } else {
            onRemoveLike();
        }
    }

    let setRoutes = props.setRoutes;
    let routeIndex = props.routeIndex;

    async function deleteRouteHandler(e) {
        e.preventDefault();
        let confirmation = window.confirm("Are you sure you want to proceed\nwith the deletion\nof this route entry?");
        if (confirmation) {
            await deleteRoute(routeDTO.id);
            setRoutes(oldRoutes => {
                let newArr = [];
                for (let i = 0; i < oldRoutes.length; i++) {
                    let currentRoute = oldRoutes[i];
                    if (i !== routeIndex) {
                        newArr.push(currentRoute)
                    }
                }
                return newArr;
            });
        }
    }

    return (
        <div className="card col-sm-6 col-md-4 col-lg-3 m-1 p-0">
            <div className="card-body">
                <h3 className="card-title">{routeDTO.name}</h3>
                {routeDTO.pictures.length > 0 ?
                    <img className="card-img"
                         src={routeDTO.pictures[0].url} alt={routeDTO.pictures[0].title}/>
                    : null
                }
                <h4 className="card-text">{routeDTO.toughnessLevel.toughness}</h4>
                <h4 className="card-text">Duration: {routeDTO.duration}h</h4>
                <span className="card-body">
                    <Link to={`/routes/${routeDTO.id}`}>View Route</Link>
                </span>
                <br/>
                {!!getUserData() ?
                    <>
                        <i className={`fa-regular fa-thumbs-up fa-2xl 
                    ${isLiked === true ? styles.likedRoute : styles.notLikedRoute}`} onClick={likeClickHandler}>
                        </i>
                        <p>{likes.length} likes</p>
                        {isAdmin() ?
                            <>
                                <Link className="btn btn-primary"
                                      to={`/routes/${routeDTO.id}/edit`}>Edit</Link>
                                <a className="btn btn-dark" onClick={deleteRouteHandler}>Delete route</a>
                            </>
                            : null
                        }
                    </>
                    : null}
            </div>
        </div>
    );
}