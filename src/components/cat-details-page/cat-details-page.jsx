import React, { useState, useEffect } from "react";
import { getCatData } from "../../utils/utils";
import { useLocation } from "react-router-dom";
import { getBoolean } from "../../utils/utils";

const CatDetailsPage = () => {
  const [catData, setCatData] = useState();
  const location = useLocation();

  useEffect(() => {
    const catPath = location.pathname.split("/");
    const catId = catPath[catPath.length - 1];
    getCatData("NewDatabase", catId).then((data) => {
      console.log("data", data);
      setCatData(data.fields);
    });
  }, [location.pathname]);
  console.log(catData);
  return (
    <div className="cat-details">
      {catData && (
        <>
          <h1>{catData.name}</h1>
          <ul>
            <li>{`Age: ${catData.age}`}</li>
            <li>{`Description: ${catData.description}`}</li>
            <li>
              <img alt={catData.name} src={catData.imageUrl} />
            </li>
            <li>Date: {catData.intakeDate}</li>
            <li>Microchipped: {getBoolean(catData.microchipped)}</li>
            <li>Vaccinated: {getBoolean(catData.vaccinated)}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default CatDetailsPage;
