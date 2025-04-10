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
        <form className="edit" action={formAction}>
        <div className="wrap flex flex-col text-center m-10 w-[250px] absolute left-[40%] bg-white p-4 rounded-md">
            <div className="input-wrap p-2 m-2 relative">
                <label className="absolute bottom-[35px]" htmlFor="title">Title:*</label>
                <input type="text" className="border-2" id="title" name="title" placeholder="Enter blog title.." defaultValue={blog.title} required/>
            </div>
            <div className="input-wrap p-2 m-2 relative">
                <label className="absolute bottom-[110px]" htmlFor="text ">Text:*</label>
                <textarea className="border-2 h-[100px]" id="text" name="body" placeholder="Enter blog text.." defaultValue={blog.body} required></textarea>
            </div>
           

            <button className="submit-btn inline-block rounded-md bg-orange-200 text-black bold" type="submit">Edit Post</button>
        </div>
        </form>
    );
}