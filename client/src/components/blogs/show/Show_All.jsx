import { Link } from "react-router";

import { useBlogs } from "../../../api/blogService";
import Showallitem from "./Showallitem"
import Create from "../create/Create"

export default function Show_all(){
    const {blogs} = useBlogs();
    return(
        <div className="blogs-wrapper">
            <div className="all-blogs">
            {blogs.length > 0 
                ? blogs.map(blog => <Showallitem key
                    ={blog._id} {...blog} />)
                : <h3 className="no-blogs">There are no blogs avaliable</h3>}
            </div>


            <div>
                <Link to="/createblog" element={<Create />}>Create a blog</Link>
            </div>
        </div>

    );
}