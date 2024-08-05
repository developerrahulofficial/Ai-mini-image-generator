"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input'; // Adjust the import path as necessary

const PromptInput = ({ onImagesGenerated }) => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const messages = [
    "I may be gone, but my love for you will never fade.",
    "Every bark and wag was for you, my dear friend.",
    "Remember our walks? I’m still with you on every step.",
    "You gave me a lifetime of happiness in my short years.",
    "I’m watching over you, always with a wagging tail.",
  ];

  const [prompt, setPrompt] = useState('');

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");

    try {
      const generateImage = async () => {
        const response = await axios.post('https://api.deepai.org/api/text2img', {
          text: prompt,
        }, {
          headers: {
            'Api-Key': '2ea270cc-eaac-4bd4-8478-5b053811887d',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        return response.data.output_url; // Adjust according to the actual response structure
      };

      const imagePromises = [generateImage(), generateImage(), generateImage()];
      const images = await Promise.all(imagePromises);

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      onImagesGenerated(images, randomMessage);
    } catch (error) {
      console.error('Error generating images:', error);
      alert('Error generating images. Please try again.');
    }
  };

  return (
    <div className="prompt-input h-[10rem] flex flex-col justify-center items-center px-4">
      <h2 className='pitext'>Prompt Input</h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default PromptInput;
