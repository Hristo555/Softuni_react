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

export const useCreateBlog = () => {
    const {request} = useAuth();

    const create = (blogData) => {
        try {
            request.post(baseURL, blogData);
        } catch (error) {
            console.error(error);         
        }
        
    }

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

export const useLatestBlogs = () => {
    const [latestBlogs, setLatestBlogs] = useState([]);

    const page_size = 4;
    
    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: page_size
        });
        try {
            request.get(`${baseURL}?${searchParams.toString()}`).then(setLatestBlogs);
        } catch (error) {
            console.error(error)
        }
    }, []);

    return {
        latestBlogs,
    };
};

export const useEditBlog = () => {
    const {request} = useAuth();

    const edit = (blogid, blogData) => {
        try {
            request.put(`${baseURL}/${blogid}`, {...blogData, _id: blogid});
        } catch (error) {
            console.error(error)
        }
    }
    

    return {
        edit,
    };
};

export const useDeleteBlog = () => {
    const {request} = useAuth();

    const deleteBlog = (blogid) => {
        try {
            request.delete(`${baseURL}/${blogid}`);
        } catch (error) {
            console.error(error)
        }
    };

    return {
        deleteBlog,
    };
};