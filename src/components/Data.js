import axios from "axios";
import { useState } from "react";

const Data = (props) => {
  const [data, setData] = useState("");

  const fetchApi = (date, pin) => {
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
      )
      .then((res) => {
        if (res.data.sessions.length !== 0) setData(res.data.sessions);
        else setData("404");
      });
  };

  console.log(data);
  const checkDataEmpty = () => {
    if (data === "404") {
      return <option>Data not available </option>;
    }
  };
  if (props.submitted === true) {
    fetchApi(props.date, props.pinCode);
  }
  return (
    <>
      <div>
        <select name="Center Name" id="center">
          {checkDataEmpty()}
        </select>
      </div>
    </>
  );
};

export default Data;
