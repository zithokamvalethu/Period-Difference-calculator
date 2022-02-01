import "./App.css";
import React from "react";

function PeriodCalculator() {
  const [startDate, setStartDate] = React.useState({
    // date: new Date(),
    date1: new Date(),
    date2: new Date(),
  });

  const getNumberOfDays = (e) => {
    var date1 = e.target.value;
    var date2 = e.target.value;

    console.log("kamva".date1);
    let oneDay = 1000 * 60 * 60 * 24;
    let diffInTime = date2 - date1;
    let diffInDays = Math.round(diffInTime / oneDay);
    console.log("kamva", diffInDays);
    return diffInDays;
  };

  const updateChangedValue = (e) => {
    setStartDate({
      ...startDate,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="container">
      <label>oldest Date</label>
      <input
        name="date1"
        onChange={updateChangedValue}
        type="date"
        value={startDate.date1}
      />{" "}
      <br />
      <label>Newest Date</label>
      <input
        type="date"
        value={startDate.date2}
        name="date2"
        onChange={updateChangedValue}
      />{" "}
      <br />
      <button onSubmit={getNumberOfDays.diffInDays} type="submit">
        calculate period
      </button>
      <span>{getNumberOfDays}</span>
    </form>
  );
}

export default PeriodCalculator;
