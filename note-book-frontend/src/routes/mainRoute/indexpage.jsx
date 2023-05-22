import MainPage from "../../components/mainpage/mainpage";
import Navbar from "../../components/mainpage/navbar/mainnavbar";
import "./index.css";
const IndexPage = () => {
  return (
    <div className="index-page">
      <Navbar />
      <MainPage />
    </div>
  );
};

export default IndexPage;
