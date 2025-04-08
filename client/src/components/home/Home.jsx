import { useLatesBlogs } from "../../api/blogService";

export default function Home(){
    const {latestBlogs} = useLatesBlogs()
    console.log(latestBlogs);
    return(
        <h1>Home</h1>
    );
}