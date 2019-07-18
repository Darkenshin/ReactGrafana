import React, { useState, useEffect } from "react";
import DashBordView from "./DashBordView";

const DashBordListView = props => {
  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    items: []
  });

  useEffect(() => {
    const requestOptions = {
      credentials: "include",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": " application/json",
        Authorization:
          "Bearer eyJrIjoiRDhHb2NLYmljdmNsY2hCMDE0a1BWS3NNanB5MEpGN0UiLCJuIjoidGVzdCIsImlkIjoxfQ=="
      }
    };
    fetch("http://localhost:3000/api/search", requestOptions)
      .then(res => Promise.resolve(res))
      .then(response => {
        response.json().then(
          data => {
            setState({
              isLoaded: true,
              items: data
            });
          },
          error => {
            setState({
              isLoaded: true,
              error
            });
          }
        );
      });
  }, []);

  const { error, isLoaded, items } = state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    if (items) {
      return (
        <div id="root_check">
          {items.map(item => (
            <DashBordView key={item.id} prop={item} />
          ))}
        </div>
      );
    } else {
      return <div>RIENS</div>;
    }
  }
};

export default DashBordListView;
