import { Link } from "react-router";
import { useLatestBlogs } from "../../api/blogService";
import Slider from "react-slick";

export default function Home(){
    const {latestBlogs} = useLatestBlogs()
    const slides = latestBlogs.length;

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true
      };
    return(
        <section classNameid="welcome">
                    <div className="home-page flex flex-col text-center h-screen bg-gray-100">
                        <h1 className="m-7">Here you can check different opinions on different themes..</h1>
                        <h1 className="m-7">Latest Posts</h1>
                        <div className="wrapper flex justify-evenly">
                            {latestBlogs.map(blog => (
                                <div className="blog p-3" key={blog._id}>
                                    <h3 className="mb-2 p-2 bg-amber-200 border-1">{blog.title}</h3>
                                    <div className="in-wrapper flex border-1">
                                        <div className="m-1 p-2 bg-amber-200 w-1/2 text-left">{blog.body.substring(0, 300)}...</div>
                                        <div className="data-buttons flex w-1/2 justify-center">
                                            <Link to={`/blogs/${blog._id}/details`} className="btn details-btn p-3 rounded-md bg-amber-200 self-center">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
        
                        {latestBlogs.length === 0 && <p className="no-articles">No Blogs yet</p>}
                    </div>
                </section >
    );
}