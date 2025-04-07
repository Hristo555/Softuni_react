import request from "../utils/request"

const baseURL = 'http://localhost:3030/jsonstore/comments';

export default{
    async getAll(gameid){
        const comments = await request.get(baseURL);

        const blogComments = Object.values(comments).filter(comment => comments.blogid === blogid);

        return blogComments;
    },
    create(email, blogid, comment){
       return request.post(baseURL, {email, blogid, comment});
    }
}