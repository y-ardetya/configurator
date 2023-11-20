import { motion as m } from "framer-motion";
import { useConfiguratorStore } from "../../store/configStore";

const Texts = () => {
  const isConfiguratorOpen = useConfiguratorStore(
    (state) => state.isConfiguratorOpen
  );
  const TextVariant = {
    show: {
      zIndex: 100,
    },
    hidden: {
      zIndex: 0,
      scale: 0,
    },
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.5,
    },
  };
  return (
    <>
      <m.div
        variants={TextVariant}
        animate={isConfiguratorOpen ? "hidden" : "show"}
        className="absolute w-[20rem] h-[20rem] bg-white top-[25rem] left-40 z-[1] text-center flex justify-center items-center rounded-full"
      >
        <h1>
          Furniture featuring exquisite silk accents, showcasing a combination
          of opulence and beauty.
        </h1>
      </m.div>
    </>
  );
};

export default Texts;
