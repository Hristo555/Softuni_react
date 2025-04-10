import { Link } from "react-router";
export default function Showallitem({_id, title, body, image}){
    return(
        <div className="blogs m-2.5 w-1/4 text-center">
            <div className="blog-inner h-[400px] border-2 flex justify-between flex-col bg-white">
                <div className="post-image"><img className="w-[500px] hgit h-[300px]" src={image} alt="Post image" /></div>
                <div className="inner-wrap">
                    <div className="title border-t-2 p-2.5 ">{title}</div>
                </div>
            </div>
            <Link className="border-2 p-2 mt-2 bg-white block" to={`/blogs/${_id}/details`}>Check Out Post</Link>
        </div>
    );
}