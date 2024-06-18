import "./Home.css";
import send from '../../Assets/send.jpg';
import link from "../../Assets/link.jpg";

const Home = () => {
    return (
        
        <div className="main-container">
            <h1 className="title">E&B </h1>
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
                    <p>Correct the caluclations in this project</p>
                </button>
            </div>
            <h1 className="title-2">Requirements </h1>
            <div className="requirements">
                <div className="req">
                    <p>File Type</p>
                </div>
                <div className="req">
                    <p>File Size</p>
                </div>
            </div>
            <div className="input-container">
                <div className="icon" ></div>
                    <input type="text"  class="input-box" placeholder="Enter your question"/>
                    <img className="icon" src={send}/>
                    <img className="icon" src={link}/>
         
                </div>
        </div>
    )
}

export default Home;

