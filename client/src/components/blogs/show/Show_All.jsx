import { Link } from "react-router";

import { useBlogs } from "../../../api/blogService";
import Showallitem from "./Showallitem"
import Create from "../create/Create"

export default function Show_all(){
    const {blogs} = useBlogs();
    return(
        <div className="text-center">
        <div className="m-2.5"><Link className="p-2.5 m-2.5 border-2 bg-white inline-block" to="/createblog" element={<Create />}>Create your post</Link></div>
        <div className="blogs-wrapper text-center">
            <div className="all-blogs flex justify-evenly flex-wrap mt-5">
            {blogs.length > 0 
                ? blogs.map(blog => <Showallitem key
                    ={blog._id} {...blog} />)
                : <h3 className="no-blogs">There are no posts avaliable</h3>}
            </div>

            <div className="create-blog">
            </div>
        </div>
        </div>
    );
}