import { useContext, useEffect, useState } from "react";
import request from "../utils/request"
import { UserContext } from "../context/UserContext";

const baseURL = 'http://localhost:3030/data/blogs';

export default{
    delete(blogid){
        return request.delete(`${baseURL}/${blogid}`);
    },
    getOne(blogid){
        return request.get(`${baseURL}/${blogid}`);
    },
    edit(blogid, blogData){
        return request.put(`${$baseURL}/${blogid}`, {...blogData, _id: blogid});
    }
}

export const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        request.get(baseURL).then(setBlogs);
    }, []);

    return {
        blogs,
        setBlogs
    }
}

export const userCreateBlog = () => {
    const {accessToken} = useContext(UserContext);

    const options = {
        headers: {
            'X-Authorization': accessToken
        }
    };
    const create = (blogData) =>
         request.post(baseURL, blogData, options);

    return {create,}
};

export const useBlog = (blogid) => {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        request.get(`${baseURL}/${blogid}`).then(setBlog);
    }, [blogid])

    return {
        blog,
    }
}