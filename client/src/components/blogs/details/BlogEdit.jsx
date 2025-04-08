import {useNavigate, useParams } from "react-router";
import CommentCreate from "../../comments/CommentCreate"
import CommentShow from "../../comments/CommentShow";
import { useBlogs, useEditBlog } from "../../../api/blogService";
import useAuth from "../../../hooks/useAuth";

export default function BlogEdit(){
    const navigate = useNavigate();
    const { email } = useAuth();
    const { blogid } = useParams();
    const { edit } = useEditBlog();
    const { blog } = useBlogs();
    const {comments} = useComments(blogid);
    
    const formAction = async (formData) => {
        const blogData = Object.fromEntries(formData);

        await edit(blogid, blogData);

        navigate(`/blogs/${blogid}/details`);
    };
    
    const commentCreateHandler = (newComment) => {
        // setComments(state => [...state, newComment])
    };

    return(
        <>
         <form className="edit" action={formAction}>
            <div className="container">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" placeholder="Enter blog title.." defaultValue={blog.title}/>
                <label htmlFor="text">Text:</label>
                <input type="text" id="text" name="body" placeholder="Enter blog text." defaultValue={blog.body}/>
                <label htmlFor="imageURL">Image:</label>
                <input type="hidden" id="imageURL" name="_id" />

                <button className="submit-btn" type="submit">Edit Post</button>
            </div>
        </form>
        <CommentCreate 
        email={email}
        blogid={blogid}
        onCreate={commentCreateHandler}/>

        <CommentShow comments={comments}/>
        </>
    );
}