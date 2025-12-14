import { ArrowCounterClockwiseIcon } from "@phosphor-icons/react";
import classNames from "classnames";
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <div className=" w-80 h-90 mx-auto bg-black text-center border-10   mt-10 rounded-2xl gap-5 ]">
                <div className="bg-black text-white border-white border p-2 mt-5 inline-block rounded-2xl text-center"> Interactive Counter </div>
                <div
                    className={classNames("text-[100px]", {
                        "text-white": counter === 0,
                        "text-green-500": counter > 0,
                        "text-red-500": counter < 0,
                    })}
                >
                    {counter}
                </div>
                <div className="flex gap-3 justify-center">
                    <button className="bg-gray-700 text-white px-6 py-4 rounded hover:opacity-80 hover:scale-105" onClick={() => setCounter(counter + 1)}>+</button>
                    <button className=" mb-5  bg-gray-100  p-2 m-1 rounded-2xl" onClick={() => setCounter(0)}><ArrowCounterClockwiseIcon size={32} /></button>
                    <button className="bg-gray-700 text-white px-6 py-4 rounded hover:opacity-80 hover:scale-105 " onClick={() => setCounter(counter - 1)}>-</button>

                </div>
            </div>
        </>
    )
}
export default Counter;