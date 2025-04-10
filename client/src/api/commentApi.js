import { useEffect, useReducer, useState } from "react";
import useAuth from "../hooks/useAuth";
import request from "../utils/request";

const baseURL = 'http://localhost:3030/data/comments';

function commReducer(state, action){
    switch (action.type){
        case 'ADD_COMMENT':
            return [...state, action.payload]
        case 'GET_ALL':
            return action.payload
        default:
            return state
    }
};

export const useComments = (blogid) => {
    // const {request} = useAuth();
    const {accessToken} = useAuth();
    // const [comments, setComments] = useState([]);
    const [comments, dispatch] = useReducer(commReducer, []);

    useEffect(() =>{
        const searchParams = new URLSearchParams({
            where: `blogId="${blogid}"`,
            load: `author=_ownerId:users`
        });

        const options = {
            headers: {
                'X-Authorization': accessToken
            }
        }

        request.get(`${baseURL}?${searchParams.toString()}`, null, options)
               .then(result => dispatch({type: 'GET_ALL', payload: result}));
    }, [blogid, accessToken]);

    return {
        comments,
        addComment: (commentData) => dispatch({type: 'ADD_COMMENT', payload: commentData})
    }
};

export const useCreateComment = () => {
    const {request} = useAuth();
    const create = (blogid, comment) => {

        const commentData = {
            blogid,
            comment
        };

        request.post(baseURL, commentData);
    };

    return {
        create,
    }
};