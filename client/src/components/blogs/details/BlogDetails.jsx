import { Link, useNavigate, useParams } from "react-router";
import { useBlog, useDeleteBlog } from "../../../api/blogService";
import { useOptimistic, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import CommentCreate from "../../comments/CommentCreate";
import CommentShow from "../../comments/CommentShow";
import {v4 as uuid} from 'uuid';
import { useComments, useCreateComment } from "../../../api/commentApi";

export default function BlogDetails(){
    const navigate = useNavigate();
    const { email, _id } = useAuth();
    const {blogid} = useParams();
    const {blog} = useBlog(blogid);
    const { deleteBlog } = useDeleteBlog()
    const {create} = useCreateComment();
    const {comments, addComment} = useComments(blogid);
    const [_,setOptimisticComments] = useState(comments); 

    const Delete = async () => {
       const hasConfirm = confirm(`Are you sure you want to delete ${blog.title}?`);

        if(!hasConfirm)
        {
            return;
        }

        await deleteBlog(blogid);

       navigate('/blogs');
    };

    const commentCreateHandler = async (formData) => {
        const comment = formData.get('comment');
        const newComment = {
            _id: uuid(),
            _ownerId: _id,
            blogid,
            comment,
            pending: true,
            author: {
                email,
            }
        };
        
        setOptimisticComments((newState) => [...newState, newComment]);

        const commentResult = await create(blogid, comment);

        addComment({...commentResult, author: {email} });

    };
    const owner = _id === blog._ownerId;
    
    return(
        <>
        <div className="blog-title">Blog Title: 
            {blog.title}
        </div>
        <div className="blog-body">Blog Body: 
            {blog.body}
        </div>
        {}
        {owner && <div className="buttons">
            <Link to={`/blogs/${blogid}/edit`} className="edit-btn">Edit</Link>
            <button onClick={Delete} className="delete-btn">Delete</button>
        </div>}

        <CommentCreate 
        email={email}
        blogid={blogid}
        onCreate={commentCreateHandler}/>

        <CommentShow comments={comments}/>
        </>
    );
}