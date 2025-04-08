import commentService from "../../api/commentApi";

export default function CommentCreate({email, blogid}){
    const commentAdd = async (formData) => {
        const comment = formData.get('comment');

        const createdComment = await commentService.create(email, blogid, comment);

        onCreate(createdComment);
    };
    
    return(
        <>
         <div className="comment-add">Add new comment</div>
         <div className="added-comment">{email}</div>
         <form id="comment-add" action={commentAdd}>
            <textarea name="comment" placeholder="Add your comment here"></textarea>
            <input className="add-btn" type="submit" value="Add Comment"/>    
         </form>
        </>
    );
}