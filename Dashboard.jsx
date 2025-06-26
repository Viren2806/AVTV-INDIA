import React, { useState, useEffect } from 'react';
import axios from '../Services/Api';
import '../css/Dashboard.css';

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  // --- NEW STATE for the checkbox ---
  const [isHotNews, setIsHotNews] = useState(false); 

  // Load categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get('/api/category');
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    formData.append('videoUrl', videoUrl);
    formData.append('image', image);
    // --- ADD THE NEW DATA to the form submission ---
    formData.append('isHotNews', isHotNews); 

    try {
      const res = await axios.post('/api/news', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('News posted successfully!');
      // Optionally reset form here
    } catch (error) {
      console.error(error);
      alert('Upload failed.');
    } 
  }; 

  return (
    <div className="max-w-3xl mx-auto p-4" style={{ marginTop: "100px" }}>
      <h2 className="text-xl font-bold mb-4">Upload News Article</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ... other input fields (title, content) ... */}
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          className="w-full border p-2 rounded h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        {/* <select
          className="w-full border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select> */}
        
        {/* --- NEW CHECKBOX ELEMENT --- */}
        <div className="flex items-center"> 
          <input
            id="hot-news-checkbox"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            checked={isHotNews}
            onChange={(e) => setIsHotNews(e.target.checked)}
          />
          <label htmlFor="hot-news-checkbox" className="ml-2 block text-sm text-gray-900">
            Mark as Hot News
          </label>
        </div>
        
        {/* ... other input fields (videoUrl, image) ... */}
        <input
          type="text"
          placeholder="YouTube Live URL (optional)"
          className="w-full border p-2 rounded"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <input
          type="file"
          accept="image"
          className="w-full border p-2 rounded"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload News
        </button>
      </form>
    </div>
  );
};

export default Dashboard;