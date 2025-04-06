import request from "../utils/request"

const baseURL = 'http://localhost:3030/jsonstore/blogs';

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
}