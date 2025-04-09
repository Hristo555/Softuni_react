import {useNavigate, useParams } from "react-router";
import { useBlog, useEditBlog } from "../../../api/blogService";

export default function BlogEdit(){
    const navigate = useNavigate();
    const { blogid } = useParams();
    const { edit } = useEditBlog();
    const { blog } = useBlog(blogid);
    
    const formAction = async (formData) => {
        const blogData = Object.fromEntries(formData);

        await edit(blogid, blogData);

        navigate(`/blogs/${blogid}/details`);
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
        </>
    );
}