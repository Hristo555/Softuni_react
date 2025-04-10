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
        <div className="page-wraper">
            <div className="blog- flex flex-col">
                <div className="blog-title p-3 mt-3 mb-3 text-center bg-white">
                    {blog.title}
                </div>
                <div className="flex border-b-2 border-t-2">
                    <div className="blog-body p-2 m-2">
                        {blog.body}
                    </div>
                    <img className="p-2 m-2" src={blog.image} alt="Post image" />
                </div>
                {owner && <div className="buttons m-4 w-1/2">
                    <Link className="pl-4 pr-4 pt-2 pb-2 mx-2.5 border-2 bg-white edit-btn" to={`/blogs/${blogid}/edit`}>Edit</Link>
                    <Link className="pl-4 pr-4 pt-2 pb-2 mx-2.5 border-2 bg-white delete-btn" onClick={Delete}>Delete</Link>
                        </div>}
            </div>

            <div className="flex justify-around mt-10">
                <div className="comments-wrapper w-1/2 m-4">
                    <div className="create-comment order-2">
                        <CommentCreate 
                        email={email}
                        blogid={blogid}
                        onCreate={commentCreateHandler}/>
                    </div>
                    <CommentShow comments={comments}/>
                </div>
            </div>
        </div>
    );
}