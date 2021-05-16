import Card from "../ReusableComponents/Card";
import Footer from "./Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          // backgroundColor: "red",
          marginLeft: 12,
        }}
      >
        <text
          style={{
            fontSize: 28,
            marginTop: 12,
            marginBottom: 12,
            fontFamily: "sans-serif",
          }}
        >
          #Projects
        </text>
      </div>

      <div className="home">
        <Card
          projectName="Club Mahindra App"
          info="This mobile application used to do booking on Club Mahindra Resorts.. "
        />
        <div style={{ padding: 6 }}></div>
        <Card
          projectName="Club Mpower"
          info="Club MPower is used by Sales persons of Club Mahindra... "
        />
      </div>

      <div className="home1">
        <Card
          projectName="I2I"
          info="Idea to Innovations is about getting people’s ideas. And implementing it in the real world..."
        />
        <div style={{ padding: 6 }}></div>
        <Card
          projectName="EMAF"
          info="This app is used by Salespeople of club mahindra..."
        />
      </div>
    </div>
  );
};

export default Home;
