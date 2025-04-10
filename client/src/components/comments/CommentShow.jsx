
export default function CommentShow({comments}){
    return(
        <>
        <div className="comments-wrapper">
            {comments.length > 0
            ? comments.map(({_id, author, comment}) => (
                <div className="comment-wrap">
                <div key={_id} className="comment">{author.email}: {comment}</div>
            </div>))
            : <div className="no-comments">There are no comments</div>}
         </div>
         
        </>
    );
}
