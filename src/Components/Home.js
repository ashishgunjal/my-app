import Card from "../ReusableComponents/Card";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <p>Projects</p>

      <div className="home">
        <Card />
        <div style={{ padding: 6 }}></div>
        <Card />
      </div>

      <div className="home1">
        <Card />
        <div style={{ padding: 6 }}></div>
        <Card />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
