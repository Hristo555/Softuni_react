import request from "../utils/request"

const baseURL = 'http://localhost:3030/jsonstore/blogs';

export default{
    async getAll(){
       const result = await request.get(baseURL);

       const blogs = Object.values(result);

       return blogs;
    },
    create(blogData){
        console.info(blogData)
        return request.post(baseURL, blogData);
    }
}