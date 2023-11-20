import Navbar from "./dom/Navbar";
import Hero from "./dom/Hero";
import Texts from "./dom/Texts";

const Overlay = () => {
  return (
    <>
      <div className="w-screen h-screen pointer-events-none absolute flex">
        {/* <div className="first"></div> */}
        {/* <div className="first bottom"></div> */}
        {/* <Navbar /> */}
        <Hero />
        <Texts />
      </div>
    </>
  );
};

export default Overlay;
