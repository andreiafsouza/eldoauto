import Carousel from "./Carousel";

const Home = () => {
  return (
    <section
      className="h-screen h-[100svh] w-full -mt-[3.5rem] bg-blue flex items-center justify-center relative z-10"
      id="home"
    >
      <Carousel />
    </section>
  );
};

export default Home;
