import { Link } from "react-router";
import { useLatestBlogs } from "../../api/blogService";

export default function Home(){
    const {latestBlogs} = useLatestBlogs()

    const width = latestBlogs.length;
    console.info(latestBlogs)
    if(!width){
        return false;
    }
    
    return(
        <section className="welcome">
                    <div className="home-page flex flex-col text-center bg-orange-200">
                        <h1 className="m-7">Here you can check different opinions on different themes..</h1>
                        <h1 className="m-7">Latest Posts</h1>
                        <div className="wrapper flex justify-evenly">
                            {latestBlogs.map(blog => (
                                <div className="blog p-3 w-1/4" key={blog._id}>
                                    <h3 className="mb-2 p-2 bg-gree-200 border-1 bg-white">{blog.title}</h3>
                                    <div className="in-wrapper h-[400px] border-1 bg-white">
                                        <div className="post-image"><img className="w-[500px] h-[300px]" src={blog.image} alt="Post image" /></div>
                                        <div className="mt-10">{blog.body.substring(0, 100)}...</div>
                                    </div>
                                    <Link to={`/blogs/${blog._id}/details`} 
                                    className="btn details-btn inline-block m-2.5 p-3 border-2 self-center bg-white ">Read More</Link>
                                </div>
                            ))}
                        </div>
        
                        {latestBlogs.length === 0 && <p className="no-articles">No Blogs yet</p>}
                    </div>
                </section >
    );
}