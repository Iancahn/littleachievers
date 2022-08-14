import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    // const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const { data: blog, error, isPending } = useFetch('https://jsonkeeper.com/b/I9BJ' + id);
    const Navigate = useNavigate();

    // Delete Click Handler    
    const deleteHandler = () => {
        // fetch('http://localhost:8000/blogs/' + blog.id, {
        fetch('https://jsonkeeper.com/b/I9BJ' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            Navigate('/');
            console.log('You deleted a blog article');
        });
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title} - This is blog #{blog.id}</h2>
                    <p><strong>Written by {blog.author}</strong></p>
                    <div>{blog.body}</div>
                    <button onClick={deleteHandler}>Delete this blog article</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;