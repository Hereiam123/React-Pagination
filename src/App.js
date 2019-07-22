import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  //Runs when component mounts. Empty array at end, stops run at mounting
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1 className="text-primary mb-3">Pagination Station</h1>
      <Posts posts={posts} loading={loading} />
    </div>
  );
};

export default App;
