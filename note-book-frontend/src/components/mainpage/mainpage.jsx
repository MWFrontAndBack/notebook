import "./main.css";
import imageSrc from "../../assets/background.jpg";
const MainPage = () => {
  return (
    <div className="main-page">
      <h1 className="title">Notes App</h1>
      <img src={imageSrc} alt="Note" className="note-image" />
    </div>
  );
};
//
export default MainPage;
