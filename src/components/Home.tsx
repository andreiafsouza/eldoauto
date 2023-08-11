import Carousel from "./Carousel";

const Home = () => {
  return (
    <section
      className="h-screen w-full bg-blue flex items-center justify-center relative z-10"
      id="home"
    >
      <Carousel />
    </section>
  );
};

export default Home;
