import React, { useEffect, useState } from "react";
import Button from "./Button";
import Table from "./Table";

const Body = () => {
  const [listItems, setListItems] = useState([]);
  const [nuOfRecord, setNuOfRecord] = useState(2);

  //hook

  useEffect(() => {
    handleFetchRecords();
    return () => {
      setListItems([]);
    };
  }, []);

  /*
  useEffect(() => {
    handleFetchRecords();
  }, []);
  */

  const handleFetchRecords = () => {
    console.log("Number of reords: ", nuOfRecord);
    //const apiUrl = "https://jsonplaceholder.typicode.com/comments";
    // fetch total number of "nuOfRecord" only
    const apiUrl =
      "https://jsonplaceholder.typicode.com/comments?_limit=" + nuOfRecord;
    fetch(apiUrl)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Not ok network response!");
        }
        return resp.json();
      })
      .then((payload) => {
        console.log("FetchRecords:payload:", payload);
        let filteredData = [];
        // filter out what you need, headers=["Id", "Name", "Email", "Comment"]
        payload.forEach((element) => {
          filteredData.push([
            element.id,
            element.name,
            element.email,
            element.body,
          ]);
        });
        setListItems(filteredData);
      })
      .catch((error) => {
        console.error("Error occured:", error);
      });
  };

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
      }}
    />
  );
  return (
    <div className="body">
      <label>
        Number of records to fetch:
        <input
          className="input-number"
          type="number"
          fill="solid"
          value={nuOfRecord}
          onChange={(e) => setNuOfRecord(e.target.value)}
        />
      </label>
      <Button
        text="Fetch"
        color="green"
        hoverText="Fetch records"
        onClick={handleFetchRecords}
      />
      <ColoredLine color="black" />
      <Table items={listItems} headers={["Id", "Name", "Email", "Comment"]} />
    </div>
  );
};

export default Body;
