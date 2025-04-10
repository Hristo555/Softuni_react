export default function CommentCreate({onCreate}){
    return(
        <>
         <form className="text-center" id="comment-add" action={onCreate}>
            <div className="comment-add">Add new comment</div>
            <div className="flex justify-center">
                <textarea className="border-2 w-[300px] bg-white" name="comment" placeholder="Add your comment here" required></textarea>
                <input className="add-btn border-2 ml-4 p-2 bg-white" type="submit" value="Add Comment"/>    
            </div>
         </form>
        </>
    );
}