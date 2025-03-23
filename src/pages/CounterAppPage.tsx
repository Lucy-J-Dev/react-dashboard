import { useState } from "react";
import AnimatedButton from "../ui/Button";
import Title from "../ui/Title";

import { MdExposurePlus1, MdExposureNeg1 } from "react-icons/md";
import { RiResetLeftLine } from "react-icons/ri";

const CounterAppPage = () => {
  const [numClicks, setNumClicks] = useState(0);

  const incrementClicks = () => {
    setNumClicks((prev) => prev + 1);
  };

  const decrementarClicks = () => {
    setNumClicks((prev) => prev - 1);
  };

  const resetClicks = () => {
    setNumClicks(0);
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center px-6 py-6 gap-2 rounded-xl">
      <Title>Contador de clicks</Title>
      <div className=" bg-purple-300 text-8xl px-4 py-4 border border-purple-950 min-w-36 text-center">{numClicks}</div>
      <div className="flex gap-4">
        <AnimatedButton
          icon={<MdExposurePlus1 className="text-3xl" />}
          text={""}
          desc={"Incrementar"}
          onClick={incrementClicks}
        />
        <AnimatedButton
          icon={<MdExposureNeg1 className="text-3xl" />}
          text={""}
          desc={"Decrementar"}
          onClick={decrementarClicks}
        />
      </div>
      <AnimatedButton
        icon={<RiResetLeftLine className="text-3xl" />}
        text={""}
        desc={"Reiniciar"}
        onClick={resetClicks}
      />
    </div>
  );
};

export default CounterAppPage;
