import Carousel from "../../components/Carousel";
import CardHome from "../../components/CardHome";

const HomePage = () => {
  return (
    <div className="h-auto w-full bg-gradient-to-b from-[#E37E21] to-[#ffffff]">
      <Carousel />
      <CardHome />
    </div>
  );
};

export default HomePage;
