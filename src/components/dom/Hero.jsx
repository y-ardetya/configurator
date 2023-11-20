import { motion as m } from "framer-motion";
import { useConfiguratorStore } from "../../store/configStore";

const Hero = () => {
  const isConfiguratorOpen = useConfiguratorStore(
    (state) => state.isConfiguratorOpen
  );
  const HeroVariant = {
    show: {
      width: "65rem",
      height: "65rem",
    },
    hidden: {
      width: "60rem",
      height: "60rem",
    },
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.5,
    },
  };

  const ContainerVariant = {
    hidden: { rotate: 0 },
    show: {
      rotate: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const atas = {
    hidden: { right: "21rem" },
    show: { right: "18.2rem" },
  };

  const tengah = {
    hidden: { right: "17.5rem" },
    show: { right: "15rem" },
  };

  const bawah = {
    hidden: { right: "21rem" },
    show: { right: "18.2rem" },
  };

  return (
    <>
      <m.div
        variants={HeroVariant}
        animate={isConfiguratorOpen ? "show" : "hidden"}
        className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 border-2 border-white z-[1] rounded-full"
      ></m.div>
      {/* hiasan */}
      <m.div
        variants={ContainerVariant}
        animate={isConfiguratorOpen ? "show" : "hidden"}
        className=""
      >
        <m.div
          variants={atas}
          className="absolute w-4 h-4 bg-white top-[10rem] z-[1] right-[21rem] rounded-full"
        ></m.div>
        <m.div
          variants={tengah}
          className="absolute w-4 h-4 bg-white top-96 z-[1] right-[17.5rem] rounded-full"
        ></m.div>
        <m.div
          variants={bawah}
          className="absolute w-4 h-4 bg-white top-[38rem] z-[1] right-[21rem] rounded-full"
        ></m.div>
      </m.div>
    </>
  );
};

export default Hero;
