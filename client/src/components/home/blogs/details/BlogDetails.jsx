import { useEffect, useState } from "react";
import { useParams } from "react-router";
import blogService from "../../../../api/blogService";

export default function BlogDetails(){
    const [blog, setBlog] = useState({});
    const {blogid} = useParams();

    useEffect(() => {
        (async ()=>{
            const result = await blogService.getOne(blogid)
            setBlog(result);
        })();
    }, [blogid]);

    return(
        <>
        {blog.title}title | 
        {blog.body}
        </>
    );
}