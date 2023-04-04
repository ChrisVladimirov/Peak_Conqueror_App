import {createContext, useContext, useEffect, useState} from "react";
import {getAllLikesForRoute} from "../services/likesService.js";
import {likeARoute, removeLike} from "../services/routeService";

export const LikesContext = createContext();

export const LikesProvider = ({children, routeId}) => {
    const [likes, setLikes] = useState([]);
    const [likesCount, setLikesCount] = useState(!!likes.length | 0);

    useEffect(() => {
        getLikesForRoute().then(r => setLikes(r));
    }, [])

    const onLike = async () => {
        await likeARoute(routeId);
        setLikes(await getLikesForRoute());
        setLikesCount(oldLikes => oldLikes + 1);
    }

    const onRemoveLike = async () => {
        await removeLike(routeId);
        setLikes(await getLikesForRoute());
        setLikesCount(oldLikes => oldLikes - 1);
    }

    const getLikesForRoute = async () => {
        return await getAllLikesForRoute(routeId);
    }

    const contextValues = {
        likes,
        likesCount,
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