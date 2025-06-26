import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/AdminPage.css';

const AdminPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    dateTime: ''
  });

  const [newsList, setNewsList] = useState([]);

  // Fetch news list
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    axios.get('http://localhost/React/Project/get_news.php')
      .then(res => {
        setNewsList(res.data);
      })
      .catch(err => {
        console.error('Fetch error:', err);
      });
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('dateTime', formData.dateTime);
    if (formData.image) {
      data.append('image', formData.image);
    }

    axios.post('http://localhost/React/Project/save_news.php', data)
      .then(res => {
        if (res.data.status === 'success') {
          alert('News submitted successfully!');
          setFormData({
            title: '',
            description: '',
            image: null,
            dateTime: ''
          });
          fetchNews();
        } else {
          alert('Submission failed: ' + res.data.message);
        }
      })
      .catch(err => {
        console.error('Submit error:', err);
        alert('An error occurred during submission.');
      });
  };

  return (
    <div className="dashboard-wrapper" style={{ marginTop: "60px" }}>
      <h1 className="main-heading">Admin Dashboard</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title" className="input-label">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="text-field"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter an engaging title..."
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="description" className="input-label">Description</label>
          <textarea
            id="description"
            name="description"
            className="description-field"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write a detailed description..."
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="image" className="input-label">Upload Image</label>
          <input
            type="file"
            id="image"
            name="image"
            className="upload-field"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="dateTime" className="input-label">Date & Time</label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            className="datetime-field"
            value={formData.dateTime}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="primary-button">Submit Data</button>
      </form>

      <h2 className="main-heading">News List</h2> 
      {/* <div className="news-list">
        {newsList.length === 0 ? (
          <p>No news found</p>
        ) : (
          newsList.map((item, index) => (
            <div key={index} className="news-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><strong>DateTime:</strong> {item.dateTime}</p>
              {item.image && (
                <img
                  src={`http://localhost/your-backend/uploads/${item.image}`}
                  alt={item.title}
                  style={{ width: '200px', marginTop: '10px' }}
                />
              )}
              <hr />
            </div>
          ))
        )}
      </div> */}
    </div>
  );
};
export default AdminPage;