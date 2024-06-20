import "./Content.css";
// import downloads from "../../Assets/downloads.png";

const Content = () => {
  return (
    <div>
      <h1 className="header">E&B</h1>
      <div className="pdf-container">
        <h1 className="pdf-title">PDF</h1>
      </div>
      <div className="text">
        <div className="text-content">
          <h2>Generated text</h2>
          <p>This is a report on the pdf. This is just some placeholder text</p>
        </div>
        {/* <img className="icon-2" src={downloads} alt="Download icon" /> */}
      </div>
    </div>
  );
};
export default Content;


