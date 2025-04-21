import { Helmet } from "react-helmet";
import Navbar from "../../components/shared/Navbar";
import Banner from "../../components/shared/Banner";
import Footer from './../../components/shared/Footer';
import StatsSection from "../../components/StatsSection";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Learnistry | Home</title>
      </Helmet>
      
      {/* sections */}
      <Navbar></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
