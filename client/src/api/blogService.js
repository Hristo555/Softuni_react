import { useContext } from "react";
import request from "../utils/request"
import { UserContext } from "../context/UserContext";

const baseURL = 'http://localhost:3030/data/blogs';

export default{
    async getAll(){
       const result = await request.get(baseURL);

       const blogs = Object.values(result);

       return blogs;
    },
    delete(blogid){
        return request.delete(`${baseURL}/${blogid}`);
    },
    getOne(blogid){
        return request.get(`${baseURL}/${blogid}`);
    },
    create(blogData){
        return request.post(baseURL, blogData);
    },
    edit(blogid, blogData){
        return request.put(`${$baseURL}/${blogid}`, {...blogData, _id: blogid});
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

    return {
        create,
    }
};