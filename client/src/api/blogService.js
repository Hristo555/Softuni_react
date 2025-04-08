import { useEffect, useState } from "react";
import request from "../utils/request"
import useAuth from "../hooks/useAuth";

const baseURL = 'http://localhost:3030/data/blogs';

export const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        request.get(baseURL).then(setBlogs);
    }, []);

    return {
        blogs,
    };
};

export const userCreateBlog = () => {
    const {request} = useAuth();

    const create = (blogData) =>
         request.post(baseURL, blogData);

    return {create,}
};

export const useBlog = (blogid) => {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        request.get(`${baseURL}/${blogid}`).then(setBlog);
    }, [blogid])

    return {
        blog,
    };
};

export const useLatesBlogs = () => {
    const [latesBlogs, setLatestBlogs] = useState([]);

    const page_size = 3;
    
    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: page_size
        });

        request.get(`${baseURL}?${searchParams.toString()}`).then(setLatestBlogs);
    }, [searchParams]);

    return {
        latestBlogs,
    };
};

export const useEditBlog = () => {
    const {request} = useAuth();

    const edit = (blogid, blogData) => request.put(`${$baseURL}/${blogid}`, {...blogData, _id: blogid});
    

    return {
        edit,
    };
};

export const useDeleteBlog = () => {
    const {request} = useAuth();

    const deleteBlog = (blogid) => request.delete(`${baseURL}/${blogid}`);

    return {
        deleteBlog,
    };
};