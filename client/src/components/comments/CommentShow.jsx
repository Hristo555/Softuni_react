
export default function CommentShow({comments}){
    
    return(
        <>
        {comments.length > 0 
        ? comments.map(({_id, email, comment}) => (<div className="comments-wrap">
            <div key={_id} className="comment">{email}: {email}</div>
         </div>))
         : <div className="no-comments">There are no comments</div>}
         
        </>
    );
}