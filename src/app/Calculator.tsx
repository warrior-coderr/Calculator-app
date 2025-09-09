import { useState } from "react";
import Button from "../components/Button"

const Calculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (value: string) => {
        setInput((prev) => prev + value)
    };

    const handleClear = () => {
        setInput("");
    };

    const handleEqual = () => {
        const sanitizedInput = input.replace(/[^0-9+\-*/.%()]/g, '');

        if (sanitizedInput !== input) {
            setInput("Error");
            return;
        }

        try {
            const result = new Function('return ' + sanitizedInput)();
            setInput(result.toString());
        } catch {
            setInput("Error");
        }
    };


    return (
        <div className="bg-gray-500 w-full h-[100vh] flex justify-center items-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
            <div className="flex flex-col w-xs backdrop-blur-2xl shadow-2xl shadow-amber-50 bg-black p-10 rounded-4xl border-white border-2">
                <div className="bg-white p-4 mb-4 rounded-lg text-right text-2xl font-mono">
                    {input || "0"}
                </div>
                <section className="">
                    <div className="grid grid-cols-4 gap-2">
                        {/* Numbers */}
                        <Button variant="numbers" onClick={() => handleClick("7")}>7</Button>
                        <Button variant="numbers" onClick={() => handleClick("8")}>8</Button>
                        <Button variant="numbers" onClick={() => handleClick("9")}>9</Button>
                        <Button variant="operations" onClick={() => handleClick("/")}>÷</Button>

                        <Button variant="numbers" onClick={() => handleClick("4")}>4</Button>
                        <Button variant="numbers" onClick={() => handleClick("5")}>5</Button>
                        <Button variant="numbers" onClick={() => handleClick("6")}>6</Button>
                        <Button variant="operations" onClick={() => handleClick("*")}>×</Button>

                        <Button variant="numbers" onClick={() => handleClick("1")}>1</Button>
                        <Button variant="numbers" onClick={() => handleClick("2")}>2</Button>
                        <Button variant="numbers" onClick={() => handleClick("3")}>3</Button>
                        <Button variant="operations" onClick={() => handleClick("-")}>−</Button>

                        <Button variant="functions" onClick={handleClear}>AC</Button>
                        <Button variant="numbers" onClick={() => handleClick("0")}>0</Button>
                        <Button variant="functions" onClick={handleEqual}>=</Button>
                        <Button variant="operations" onClick={() => handleClick("+")}>+</Button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Calculator