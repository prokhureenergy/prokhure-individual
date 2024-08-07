import { useReducer } from "react";

function counterReducer(initialState, action) {
  switch (action) {
    case "increment":
      return initialState + 1;
    case "decrement":
      return Math.max(0, initialState - 1) 
    default:
      return initialState;
  }
}

export const QuantityCounter = (props) => {
  const [value, setValue] = useReducer(counterReducer, props.counterValue);

  return (
    <>
      <div className="border border-gray-600 text-gray-400 bg-white text-base rounded-md w-[80px] p-1 flex justify-between">
        {" "}
        <button className="ml-1" onClick={() => setValue("decrement")}>
          {" "}
          -{" "}
        </button>{" "}
        <p className="text-black py-1">{value}</p>{" "}
        <button className="mr-1" onClick={() => setValue("increment")}>
          +
        </button>
      </div>
    </>
  );
};
