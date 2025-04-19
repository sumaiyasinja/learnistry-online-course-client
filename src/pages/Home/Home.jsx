import { Helmet } from "react-helmet";
import Navbar from "../../components/shared/Navbar";
import Banner from "../../components/shared/Banner";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Learnistry | Home</title>
      </Helmet>
      
      {/* sections */}
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Home;
