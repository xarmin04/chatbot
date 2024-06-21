import React, { useState } from 'react';
import axios from 'axios';
import { IoMdDownload } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
import './Home.css';

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);  
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile); 

      axios.post('http://localhost:5000/upload', formData, {
        responseType: 'blob'  
      })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'modified.pdf');  
          document.body.appendChild(link);
          link.click();  
          document.body.removeChild(link);  
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
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
        <input type="file" accept=".pdf" onChange={handleFileChange} className="input-box" id="file-input" />
        <button className="button" onClick={() => document.getElementById('file-input').click()}>
          <IoIosAttach className="icon" />
          <span>{selectedFile ? selectedFile.name : "Choose PDF File"}</span>
        </button>
        <button className="button" onClick={handleFileUpload}>
          <MdNavigateNext className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Home;










