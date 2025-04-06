
export default function Showallitem({id, title, body}){
    return(
        <div className="blogs">
            <div className="blog">
                <div className="blog-inner">
                    {id}
                    {title}
                    {body}
                    <div>Check Out Blog</div>
                </div>
            </div>
        </div>
    );
}