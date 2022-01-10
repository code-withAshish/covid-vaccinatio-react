import axios from "axios";
import { useState } from "react";

const Data = (props) => {
  const [apiData, setApiData] = useState("");
  axios
    .get(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${props.code}&date=14-01-2022`
    )
    .then((res) => setApiData(JSON.stringify(res.data.sessions[1])));

  return (
    <>
      <div>data:{apiData}</div>
    </>
  );
};

export default Data;
