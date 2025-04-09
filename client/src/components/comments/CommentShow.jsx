
export default function CommentShow({comments}){
    console.info(comments)
    return(
        <>
        <div className="comments-wrapper">
            {comments.length > 0
            ? comments.map(({_id, comment, pending, author}) => (
                <div className="comment-wrap">
                <div key={_id} className={`${pending ? 'comment-pending' : ''} comment `.trim()}>{author}: {comment}</div>
            </div>))
            : <div className="no-comments">There are no comments</div>}
         </div>
         
        </>
    );
}