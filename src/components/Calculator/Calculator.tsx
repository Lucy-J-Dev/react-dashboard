import { useState } from "react";
import Title from "../../ui/Title";
import Button from "./Button";
import Screen from "./Screen";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [input, setInput] = useState("0");

  const handleCreateOperation = (val: string) => {
    console.log("click: " + " - " + val);
    if (input === "0") {
      setInput(val);
    } else {
      setInput((prev) => prev + val);
    }
  };

  const handleResolveOperation = () => {
    console.log("=: " + input);
    if (input === "0") {
      setInput("0");
    } else {
      setInput(evaluate(input));
    }
  };

  const handleCleanScreen = () => {
    setInput("0");
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center px-6 py-6 rounded-xl lg:w-1/3">
      <Title>Calculadora</Title>
      <Screen input={input} />
      <div className="m-1 w-full flex gap-2 items-center justify-center">
        <Button onButtonClick={handleCreateOperation}>7</Button>
        <Button onButtonClick={handleCreateOperation}>8</Button>
        <Button onButtonClick={handleCreateOperation}>9</Button>
        <Button onButtonClick={handleCreateOperation}>+</Button>
      </div>
      <div className="m-1 w-full flex gap-2 items-center justify-center">
        <Button onButtonClick={handleCreateOperation}>4</Button>
        <Button onButtonClick={handleCreateOperation}>5</Button>
        <Button onButtonClick={handleCreateOperation}>6</Button>
        <Button onButtonClick={handleCreateOperation}>-</Button>
      </div>
      <div className="m-1 w-full flex gap-2 items-center justify-center">
        <Button onButtonClick={handleCreateOperation}>1</Button>
        <Button onButtonClick={handleCreateOperation}>2</Button>
        <Button onButtonClick={handleCreateOperation}>3</Button>
        <Button onButtonClick={handleCreateOperation}>*</Button>
      </div>
      <div className="m-1 w-full flex gap-2 items-center justify-center">
        <Button onButtonClick={handleResolveOperation}>=</Button>
        <Button onButtonClick={handleCreateOperation}>0</Button>
        <Button onButtonClick={handleCreateOperation}>.</Button>
        <Button onButtonClick={handleCreateOperation}>/</Button>
      </div>
      <div className="m-1 w-full flex gap-2 items-center justify-center">
        <Button onButtonClick={handleCleanScreen}>Borrar</Button>
      </div>
    </div>
  );
};

export default Calculator;
