import { use, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import blogService from "../../../api/blogService";
import commentService from "../../../api/commentService";
import CommentCreate from "../../comments/CommentCreate"
import CommentShow from "../../comments/CommentShow";
import { UserContext } from "../../../context/UserContext";

export default function BlogEdit(){
    const navigate = useNavigate();
    const { email } = useContext(UserContext)
    const { blogid } = useParams();
    const [comments, setComments] = useState();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        blogService.getOne(blogid).then(setBlog);

        commentService.getAll(blogid).then(setComments);
    }, [blogid]);
    
    const commentCreateHandl = (newComment) => {
        setComments(state => [...state, newComment])
    };

    return(
        <>
         <form className="edit">
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
        onCreate={commentCreateHandl}/>

        <CommentShow comments={comments}/>
        </>
    );
}