import { useEffect, useCallback, useState } from "react";
import useAuth from "../hooks/useAuth";
import request from "../utils/request";

const baseURL = 'http://localhost:3030/data/comments';

// function commReducer(state, action){
//     switch (action.type){
//         case 'ADD_COMMENT':
//             return [...state, action.payload]
//         case 'GET_ALL':
//             return action.payload
//         default:
//             return state
//     }
// };

export const useComments = (blogid) => {
    const { request } = useAuth();
    const [comments, setComments] = useState([]);

    // Memoize the fetchComments function to ensure it's stable between renders
    const fetchComments = useCallback(() => {
        const searchParams = new URLSearchParams({
            where: `blogid="${blogid}"`,
            load: `author=_ownerId:users`
        });

        // Fetch comments from the API
        return request.get(`${baseURL}?${searchParams.toString()}`)
            .then(setComments);
    }, [request, blogid]); // Only recreate fetchComments if request or blogid changes

    // Add a new comment
    const addComment = useCallback((newComment) => {
        // Make a POST request to add the new comment
        console.info(newComment);
        request.post(`${baseURL}`, {
            data: {
                blogid,
                content: newComment.content, // or whatever fields you need
                author: newComment.author,   // example of author field
            },
        })
        .then(() => {
            // After adding the comment, refetch the comments
            fetchComments();
        })
        .catch((error) => {
            console.error('Error adding comment:', error);
        });
    }, [request, blogid, fetchComments]); // addComment will be recreated if blogid or request changes

    // Fetch comments when component mounts or blogid changes
    useEffect(() => {
        fetchComments();
    }, []);

    return {
        comments,
        addComment, // Expose the addComment function
    };
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