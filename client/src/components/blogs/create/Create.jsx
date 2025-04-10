import { useNavigate } from "react-router";
import { useCreateBlog } from "../../../api/blogService";

export default function Create(){
    const navigate = useNavigate();
    const { create } = useCreateBlog();

    const submitAction = async (formData) => {
        const blogData = Object.fromEntries(formData);

        await create(blogData);
        
        navigate('/blogs');
    };

    return(
        <div className="form-container relative">
        <form className="create" action={submitAction}>
            <div className="wrap flex flex-col text-center m-10 w-[250px] absolute left-[40%] bg-white p-4 rounded-md">
                <div className="input-wrap p-2 m-2 relative">
                    <label className="absolute bottom-[35px]" htmlFor="title">Title:*</label>
                    <input type="text" className="border-2" id="title" name="title" placeholder="Enter blog title.." required/>
                </div>
                <div className="input-wrap p-2 m-2 relative">
                    <label className="absolute bottom-[110px]" htmlFor="text ">Text:*</label>
                    <textarea className="border-2 h-[100px]" id="text" name="body" placeholder="Enter blog text.." required></textarea>
                </div>
                <div className="input-wrap p-2 m-2 relative">
                    <label className="absolute bottom-[35px]" htmlFor="imageURL">Image:*</label>
                    <input type="text" className="border-2" id="imageURL" name="image" placeholder="Enter img url.." required/>
                </div>

                <button className="submit-btn inline-block rounded-md bg-orange-200 text-black bold" type="submit">Submit</button>
            </div>
        </form>
        </div>
    );
}