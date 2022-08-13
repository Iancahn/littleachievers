
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {/* This will show Loading while we wait for data from API call */}
            {isPending && <div>Loading...</div>}
            {/* This will only show blogs when blogs = true(meaning it got data from the API) */}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;