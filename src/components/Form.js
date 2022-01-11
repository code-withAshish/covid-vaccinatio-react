import { useState } from "react";
import Data from "./Data";

const Form = () => {
  const [date, setDate] = useState("");
  const [pin, setPin] = useState("");
  const [submit, setSubmit] = useState(false);
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth();
  const year = today.getFullYear();
  const minDate = year + "-" + mm + 1 + "-" + dd;
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    const userDateInput = new Date(value.date);
    const apiDate = `${userDateInput.getDate()}-${
      userDateInput.getMonth() + 1
    }-${userDateInput.getFullYear()}`;
    setPin(value.pin);
    setDate(apiDate);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
          Cowin API
        </h1>
      </div>
      <div className="m-7">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Enter your PIN code
            </label>
            <input
              type="text"
              name="pin"
              id="pin"
              required={true}
              className="w-full px-3 py-2 placeholder-gray-300 border border-rose-400 rounded-md focus:outline-none focus:ring focus:ring-rose-100 focus:border-rose-300"
            />
          </div>
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <label
                htmlFor="password"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Enter the Date here
              </label>
            </div>
            <input
              type="date"
              name="date"
              id="date"
              required={true}
              min={minDate}
              placeholder="DD/MM/YYYY"
              className="w-full px-3 py-2 placeholder-gray-300 border border-rose-400 rounded-md focus:outline-none focus:ring focus:ring-rose-100 focus:border-rose-300"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full px-3 py-4 text-white bg-rose-500 rounded-md hover:bg-red-400 focus:outline-none"
            >
              Find
            </button>
          </div>
        </form>
        <Data pinCode={pin} date={date} submitted={submit} />
      </div>
    </>
  );
};

export default Form;
