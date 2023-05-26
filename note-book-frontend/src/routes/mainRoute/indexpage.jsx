import Footer from "../../components/footer/footer";
import MainPage from "../../components/mainpage/mainpage";
import Navbar from "../../components/mainpage/navbar/mainnavbar";
import "./index.css";

const IndexPage = () => {
  return (
    <div className="index-page">
      <Navbar />
      <MainPage />
      <Footer />
    </div>
  );
};

export default IndexPage;
