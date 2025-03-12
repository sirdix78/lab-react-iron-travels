import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  function handleDelete(id) {
    const filteredElements = travelPlans.filter(
      (oneElement) => oneElement.id !== id
    );
    setTravelPlans(filteredElements);
  }
  return (
    <div>
      {travelPlans.map((element) => {
        return (
          <div className="card">
            <div className="image-card">
              <img src={element.image}></img>
            </div>
            <div className="content-card">
              <h3>{element.destination}</h3>
              <p>{element.description}</p>
              <p>Price: {element.totalCost}</p>
              <button className="deal">
                {element.totalCost <= "350"
                  ? "Great Deal"
                  : element.totalCost >= "1500"
                  ? "Premium"
                  : element.allInclusive === "true"
                  ? "All Inclusive"
                  : "All Inclusive"}
                {/* {element.totalCost <= 350 && (
                  <div className="deal">Great Deal</div>
                )} */}
              </button>
              <br></br>
              <button
                className="delete"
                onClick={() => {
                  handleDelete(element.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TravelList;
