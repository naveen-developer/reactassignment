import React, { useState, useEffect } from "react";
import { createStore } from "redux";

const cityReducer = (state, action) => {
  console.log("This is current state value from switch " + state);
  switch (action.type) {
    case "Australia":
      state = action.payload;
      break;
    case "England":
      state = action.payload;
      break;
    case "Namibia":
      state = action.payload;
      break;
    case "New Zealand":
      state = action.payload;
      break;
    case "Pakistan":
      state = action.payload;
      break;
    case "Zimbabwe":
      state = action.payload;
      break;
    case "South Africa":
      state = action.payload;
      break;
    case "India":
      state = action.payload;
      break;
    default:
      break;
  }
  return state;
};

export const store = createStore(cityReducer, "");

const Countries2 = () => {
  const [selectOption, setSelectOption] = useState("");
  const [data, setData] = useState([]);
  const [onedata, setoneData] = useState([]);
  console.log(onedata);

  store.subscribe(() => {
    setoneData(store.getState());
    // console.log("This is current store state value " + store.getState());
  });

  const changeHanler = (e) => {
    setSelectOption(e.target.value);

    const newData = data.filter((value) => value.name === e.target.value);
    // console.log(newData);

    store.dispatch({
      type: e.target.value,
      payload: newData,
    });
  };

  const getData = async () => {
    const result = await fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await result.json();
    setData(data.countries);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="thirdCountries">
      <h1>Countries2 - Redux</h1>
      <select value={selectOption} onChange={(e) => changeHanler(e)}>
        <option value="select">Select</option>
        {data.map((value, index) => {
          return (
            <option key={index} value={value.name}>
              {value.name}
            </option>
          );
        })}
      </select>
      {onedata[0] ? (
        <>
          <div className="imgDiv">
            <img src={onedata[0].flag} alt="" />
          </div>
          <h4>Rank {onedata[0].rank}</h4>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Countries2;
