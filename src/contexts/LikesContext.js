import {createContext, useContext, useEffect, useState} from "react";
import {getAllLikesForRoute} from "../services/likesService.js";
import {likeARoute, removeLike} from "../services/routeService";
import {getUserData} from "../api/util";

export const LikesContext = createContext();

export const LikesProvider = ({children, routeId}) => {
    const [likes, setLikes] = useState([]);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        getLikesForRoute().then(r => {
            setLikes(r);
            let condition = isLikedByMe(r);
            setIsLiked(condition)
        });

    }, [])

    const isLikedByMe = (_likes = likes) => {
        const userId = getUserData().id;
        const condition = Boolean(Array.from(_likes).find(l => l['userId'] === userId));
        setIsLiked(condition)
        return condition;
    }

    const onLike = async () => {
        await likeARoute(routeId);
        setLikes(await getLikesForRoute());
        setIsLiked(true)
    }

    const onRemoveLike = async () => {
        await removeLike(routeId);
        setLikes(await getLikesForRoute());
        setIsLiked(false)
    }

    const getLikesForRoute = async () => {
        return await getAllLikesForRoute(routeId);
    }

    const contextValues = {
        likes,
        isLiked,
        onLike,
        onRemoveLike,
        getLikesForRoute
    }

    return <LikesContext.Provider value={contextValues}>
        {children}
    </LikesContext.Provider>
}

export const useLikesContext = () => {
    return useContext(LikesContext);
}