import Post from "../Post";
import { useEffect, useState } from "react";

export default function IndexPage({ searchTerm }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  console.log(posts);
  return (
    <>
      {posts.length > 0 &&
        posts
          .filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((post) => <Post {...post} />)
      }
    </>
  );
}