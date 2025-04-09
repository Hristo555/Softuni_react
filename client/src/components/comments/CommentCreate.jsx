export default function CommentCreate({onCreate}){

    
    
    return(
        <>
         <div className="comment-add">Add new comment</div>
         <form id="comment-add" action={onCreate}>
            <textarea name="comment" placeholder="Add your comment here"></textarea>
            <input className="add-btn" type="submit" value="Add Comment"/>    
         </form>
        </>
    );
}