import useFetch from "../hook/useFetch";
import PostList from "./PostList";
import PostSearch from "./PostSearch";
import React, { useState } from "react";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);

    if (searchValue !== "") {
      const filteredData = posts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      });

      setFilteredPosts(filteredData);
    }
  };

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {/* <PostSearch/> */}
      <div className="post-search">
        <input
          type="text"
          placeholder="Search Posts..."
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
	  {searchInput.length > 1 ? <PostList posts={filteredPosts} title="All Posts" /> : <PostList posts={posts} title="All Posts" />}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Home;
