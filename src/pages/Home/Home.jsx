import { Helmet } from "react-helmet";
import Banner from "../../components/shared/Banner";
import StatsSection from "../../components/StatsSection";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Learnistry | Home</title>
      </Helmet>
      
      {/* sections */}
      <Banner></Banner>
      <StatsSection></StatsSection>
    </div>
  );
};

export default Home;
