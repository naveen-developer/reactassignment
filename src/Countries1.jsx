import React, { useEffect, useState } from "react";
import Select from "react-select";

const Countries1 = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [rank, setRank] = useState("");

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

  const newData = data.map((elem) => {
    // console.log({ value: elem.name, label: elem.name, image: elem.flag });
    return {
      value: elem.name,
      label: elem.name,
      image: elem.flag,
      rank: elem.rank,
    };
  });

  const changeHanlder = (event) => {
    console.log(event);
    setName(event.name);
    setImage(event.image);
    setRank(event.rank);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="secondCountries">
      <h1>Countries1 - Medium</h1>
      <Select options={newData} onChange={(e) => changeHanlder(e)} />
      <h3>{name}</h3>
      <div className="imgDiv">
        <img src={image} />
      </div>
      <h4>Rank {rank}</h4>
    </div>
  );
};

export default Countries1;
