import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { motion as m } from "framer-motion";
import Overlay from "./components/Overlay";
import { useConfiguratorStore } from "./store/configStore";

const App = () => {
  const isConfiguratorOpen = useConfiguratorStore(
    (state) => state.isConfiguratorOpen
  );
  const setIsConfiguratorOpen = useConfiguratorStore(
    (state) => state.setIsConfiguratorOpen
  );
  const ContainerVariant = {
    hidden: {
      clipPath: "circle(25% at 50% 50%)",
      left: "50%",
    },
    show: {
      clipPath: "circle(65% at 0% 50%)",
      left: "50%",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        left: {
          duration: 0.3,
          delay: 0.2,
        },
      },
    },
  };

  return (
    <>
      <Suspense fallback={null}>
        <m.div
          onDoubleClick={() => setIsConfiguratorOpen(!isConfiguratorOpen)}
          variants={ContainerVariant}
          animate={isConfiguratorOpen ? "show" : "hidden"}
          className="w-[100vw] h-[100vw] fixed top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-transparent border-4 border-black overflow-hidden z-10"
        >
          <Canvas>
            <color attach="background" args={["#000"]} />
            <OrbitControls />
            <mesh scale={1}>
              <boxGeometry />
              <meshNormalMaterial />
            </mesh>
          </Canvas>
          
        </m.div>
      </Suspense>
      <Overlay />
    </>
  );
};

export default App;
