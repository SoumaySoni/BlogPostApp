// src/components/BlogForm.js
import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import { v4 as uuidv4 } from 'uuid';

const BlogForm = () => {
  const { dispatch } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: uuidv4(),
      title,
      category,
      content,
      likes: 0,
    };

    dispatch({ type: 'ADD_BLOG', payload: newBlog });

    setTitle('');
    setCategory('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Blog</button>
    </form>
  );
};

export default BlogForm;
