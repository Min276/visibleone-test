import AboutSection from "../components/AboutSection";
import ChallengeSection from "../components/ChallengeSection";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import SliderSection from "../components/SliderSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ChallengeSection />
      <SliderSection />
    </Layout>
  );
};

export default Home;
