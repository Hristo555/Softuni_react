import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import request from "../utils/request"

const baseURL = 'http://localhost:3030/data/comments';

export default{
    async getAll(blogid){
        const comments = await request.get(baseURL);

        const blogComments = Object.values(comments).filter(comment => comments.blogid === blogid);

        return blogComments;
    },
    create(email, blogid, comment){
       return request.post(baseURL, {email, blogid, comment});
    }
};

export const  useComments = (blogid) => {
    const {request} = useAuth();
    const [comments, setComments] = useState([]);

    useEffect(() =>{
        const searchParams = new URLSearchParams({
            where: `blogId="${blogid}"`
        });

        request.get(`${baseURL}?${searchParams.toString()}`).then(setComments);
    }, [request, blogid]);

    return {
        comments,
    }


}