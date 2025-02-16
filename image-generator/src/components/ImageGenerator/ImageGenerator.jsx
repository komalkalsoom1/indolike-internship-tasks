import React, { useState, useEffect } from 'react';
import './ImageGenerator.css';

const ImageGenerator = () => {
  const [url, setUrl] = useState('/images/travel6.jpg');
  const [inputValue, setInputValue] = useState('');

  // Predefined images stored in localStorage for simplicity
  useEffect(() => {
    const predefinedImages = {
      "travel": "/images/travel1.jpg",
      "sunset": "/images/travel2.jpg",
      "mountains": "/images/travel3.jpg",
      "ocean": "/images/travel4.jpg",
    };
    localStorage.setItem('images', JSON.stringify(predefinedImages));
  }, []);

  const imageGenerator = () => {
    if (inputValue.trim() === '') return;

    const images = JSON.parse(localStorage.getItem('images'));
    if (images[inputValue.toLowerCase()]) {
      setUrl(images[inputValue.toLowerCase()]);
    } else {
      setUrl('/images/travel1.jpg');
    }
  };

  return (
    <div className='ai-image-generator'>
      {/* Heading */}
      <div className="header">AI Image <span>Generator</span></div>

      {/* Image Display */}
      <div className="img-loading">
        <div className="image">
          <img src={url} alt="Generated" />
        </div>
      </div>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='search-input'
          placeholder='Type a keyword (e.g., sunset, mountains)'
        />
        <div className='generate-btn' onClick={imageGenerator}>
          Generate
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
