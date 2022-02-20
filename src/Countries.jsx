import React, { useEffect, useState } from "react";

const Countries = () => {
  const [selectOption, setSelectOption] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [rank, setRank] = useState("");

  //console.log(selectOption);
  const [data, setData] = useState([]);

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

  //   data.filter((value) => {
  //     if (value.name === selectOption) {
  //       setImage(value.flag);
  //       console.log("selected flag is " + value.flag);
  //     }
  //   });

  const onSubmitHandler = () => {
    data.filter((value) => {
      if (value.name === selectOption) {
        setImage(value.flag);
        setName(value.name);
        setRank(value.rank);
        console.log("selected flag is " + value.flag);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  //  console.log(data);

  return (
    <div className="firstCountries">
      <h1>Countries - Simple</h1>
      <select
        value={selectOption}
        onChange={(e) => setSelectOption(e.target.value)}
      >
        <option value="select">Select</option>
        {data.map((val, index) => {
          return (
            <option key={index} value={val.name}>
              {val.name}
            </option>
          );
        })}
      </select>
      <button onClick={() => onSubmitHandler()}>Submit</button>
      <h3>{name}</h3>
      <div className="imgDiv">
        <img src={image} />
      </div>
      <h4>Rank {rank}</h4>
    </div>
  );
};

export default Countries;
