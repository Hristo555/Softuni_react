import { useNavigate } from "react-router";

import blogService from "../../../api/blogService";

export default function Create(){
    const navigate = useNavigate();
    
    const submitAction = async (formData) => {
        const blogData = Object.fromEntries(formData);

        await blogService.create(blogData);
        
        navigate('/blogs');
    };

    return(
        <>
        <form className="create" action={submitAction}>
            <div className="container">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" placeholder="Enter blog title.."/>
                <label htmlFor="text">Text:</label>
                <input type="text" id="text" name="body" placeholder="Enter blog text."/>
                <label htmlFor="imageURL">Image:</label>
                <input type="hidden" id="imageURL" name="_id" />

                <button className="submit-btn" type="submit">Submit</button>
            </div>
        </form>
        </>
    );
}