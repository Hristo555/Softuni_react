import { Link } from "react-router";
export default function Showallitem({_id, title, body}){
    return(
        <div className="blogs">
            <div className="blog">
                <div className="blog-inner">
                    {title}
                    {body}
                    <Link to={`/blogs/${_id}/details`}>Check Out Blog</Link>
                </div>
            </div>
        </div>
    );
}