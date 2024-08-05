"use client"
import React, { useState } from 'react';
import PromptInput from './PromptInput';

const Generator = () => {
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');

  const handleImagesGenerated = (generatedImages, generatedMessage) => {
    setImages(generatedImages);
    setMessage(generatedMessage);
  };

  return (
    <section className="generator">
      <h1 className='firstline'>A mini image generator</h1>
      <h2 className='quote'>
        <span className='red'>Unlock</span> the infinite memories we <span className='red'>shared together.</span> You are my inspiration and my forever <span className='red'>love.</span>
      </h2>
      <div className="cards">
        {images.length === 0 ? (
          <>
            <div className="card">
              <img src="/images/rabbit.png" alt="Deer" />
            </div>
            <div className="card">
              <img src="/images/panda.png" alt="Panda" />
            </div>
            <div className="card">
              <img src="/images/bunny.png" alt="Bunny" />
            </div>
          </>
        ) : (
          images.map((image, index) => (
            <div key={index} className="card">
              <img src={image} alt={`Generated ${index}`} />
            </div>
          ))
        )}
      </div>
      <div className='firstline'>{message}</div>
      <PromptInput onImagesGenerated={handleImagesGenerated} />
    </section>
  );
};

export default Generator;
