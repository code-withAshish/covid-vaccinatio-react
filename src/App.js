import { useState } from "react";
import Data from "./components/Data";
const App = () => {
  const [pinCode, setPinCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setPinCode(data.get("pinCode"));
    document.getElementById("code").value = "";
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div
          className="flex-row  space-y-3 p-4 bg-white 
        rounded-xl shadow-xl min-h-[200px] min-w-[200px]"
        >
          <form onSubmit={handleSubmit}>
            <div className="p-2 font-medium text-xl">
              Please enter your pincode
            </div>
            <div className=" flex flex-col items-center space-y-10">
              <input
                id="code"
                name="pinCode"
                type="text"
                className="border-blue-400 font-medium text-cyan-800 
            h-10 outline-none p-2 border-b-2 focus:border-blue-800"
              />

              <button
                type="submit"
                className="p-2 bg-cyan-500 rounded-xl hover:bg-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
          <Data code={pinCode} />
        </div>
      </div>
    </>
  );
};
export default App;
