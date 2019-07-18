import React, { useState } from "react";
import "./App.css";
import DashBordListView from "./pages/DashBordListView";
import InputJsonData from "./pages/InputJsonData";

const App = () => {
  const [dataInput, setDataInput] = useState("");
  const [dataDashBord, setDataDashBord] = useState("");

  const handleSubmit = () => {
    const name = Array.from(
      document
        .getElementById("root_check")
        .getElementsByClassName("form-check-input")
    );
    name.forEach(element => {
      if (element.checked) {
        getData(element.getAttribute("uid"));
        console.log(dataDashBord);
        // sendData(element.getAttribute("uid"));
      }
    });
  };

  const getData = async uid => {
    let response = await fetch("/api/dashboards/uid/" + uid, {
      credentials: "include",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": " application/json",
        Authorization:
          "Bearer eyJrIjoiRDhHb2NLYmljdmNsY2hCMDE0a1BWS3NNanB5MEpGN0UiLCJuIjoidGVzdCIsImlkIjoxfQ=="
      }
    });
    let response2 = await Promise.resolve(response).then(data => {
      return data;
    });
    let response3 = response.json();
    return response3;
  };
  const createBody = element => {
    let data = JSON.parse(dataInput);
    data.Dashboard.uid = element;
    return JSON.stringify(data);
  };
  const sendData = element => {
    let body = createBody(element);
    console.log(body);
    fetch("http://localhost:3000/api/dashboards/db", {
      credentials: "include",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": " application/json",
        Authorization:
          "Bearer eyJrIjoiRDhHb2NLYmljdmNsY2hCMDE0a1BWS3NNanB5MEpGN0UiLCJuIjoidGVzdCIsImlkIjoxfQ=="
      },
      body: body
    });
  };

  return (
    <div className="App">
      <InputJsonData setDataInput={setDataInput} />
      <DashBordListView />
      <input type="submit" onClick={handleSubmit} />
    </div>
  );
};

export default App;
