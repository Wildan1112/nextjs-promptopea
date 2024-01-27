"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search State
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedPosts, setSearchedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setAllPosts(data);
    };

    fetchPosts();
  }, []);

  // Filtered Posts
  const filteredPosts = (search) => {
    const regex = new RegExp(search, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (post) =>
        regex.test(post.tag) ||
        regex.test(post.prompt) ||
        regex.test(post.creator.username)
    );
  };
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const result = filteredPosts(e.target.value);
        setSearchedPosts(result);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const result = filteredPosts(tagName);
    setSearchedPosts(result);
  };
  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>

      {/* All Prompts */}
      {searchText ? (
        <PrompCardList data={searchedPosts} handleTagClick={handleTagClick} />
      ) : (
        <PrompCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

const PrompCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

export default Feed;
