import { Helmet } from "react-helmet";
import Banner from "../../components/shared/Banner";
import StatsSection from "../../components/StatsSection";
import Categorys from "../../components/categorySection/categorys";
import FAQSection from "../../components/FAQSection";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Learnistry | Home</title>
      </Helmet>

      {/* sections */}
      <Banner></Banner>
      <StatsSection></StatsSection>
      <Categorys></Categorys>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
