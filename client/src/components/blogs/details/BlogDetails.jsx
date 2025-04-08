import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useBlog, useDeleteBlog } from "../../../api/blogService";

export default function BlogDetails(){
    const navigate = useNavigate();
    const {blogid} = useParams();
    const {blog} = useBlog();
    const { deleteBlog } = useDeleteBlog()

    // useEffect(() => {
    // }, [blogid]);

    const Delete = async () => {
       const hasConfirm = confirm(`Are you sure you want to delete ${blog.title}?`);

        if(!hasConfirm)
        {
            return;
        }

        await deleteBlog(blogid);

       navigate('/blogs');
    }

    return(
        <>
        <div className="blog-title">Blog Title: 
            {blog.title}
        </div>
        <div className="blog-body">Blog Body: 
            {blog.body}
        </div>

        <div className="buttons">
            <Link to={`/blogs/${blogid}/edit`} className="edit-btn">Edit</Link>
            <button onClick={Delete} className="delete-btn">Delete</button>
        </div>
        </>
    );
}