import "./Home.css";
import React, { useState } from 'react';

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileUpload = () => {
        if (selectedFile) {
            // Process the file upload here
            console.log('File uploaded:', selectedFile);
        } else {
            console.log('No file selected');
        }
    };

    return (
        <div className="main-container">
            <h1 className="title">E&B</h1>
            <div className="card-container">
                <button className="card">
                    <p>Please create a diagonal line from a to b</p>
                </button>
                <button className="card">
                    <p>Please check this document for errors</p>
                </button>
                <button className="card">
                    <p>Can you explain the process behind this?</p>
                </button>
                <button className="card">
                    <p>Correct the calculations in this project</p>
                </button>
            </div>
            <h1 className="title-2">Requirements</h1>
            <div className="requirements">
                <div className="req">
                    <p>File Type</p>
                </div>
                <div className="req">
                    <p>File Size</p>
                </div>
            </div>
            <div className="input-container">
                <div className="icon"></div>
                <input type="text" className="input-box" placeholder="Enter your question" />
                <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="file-input" />
                <button className="button" onClick={handleFileUpload}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="10 5 25 23" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                    </svg>
                </button>
                <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="file-input" />
                <label htmlFor="file-input" className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                        <path d="M21.5 12.5v4a5.5 5.5 0 01-11 0V7.5a4.5 4.5 0 119 0v9a3.5 3.5 0 11-7 0v-8" />
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Home;
