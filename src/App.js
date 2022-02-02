import "./App.css";
import React from "react";

function PeriodCalculator() {
  const [startDate, setStartDate] = React.useState({
    // date: new Date(),
    date1: "",
    date2: "",
  });
  const [date, setDate] = React.useState([]);

  const getNumberOfDays = (e) => {
    e.preventDefault();
    var date1 = new Date(date);
    var date2 = new Date(setDate);
    console.log("lethu", date);

    let diffInTime = new Date.getTime(date2) - new Date.getTime(date1);
    // console.log(diffInTime);
    let diffInDays = diffInTime;
    let oneDay = (diffInDays / 1000) * 60 * 60 * 24;
    console.log("kamva", oneDay);
    return oneDay;
  };

  const updateChangedValue = (e) => {
    setStartDate({
      ...startDate,
      [e.target.name]: e.target.value,
    });
    console.log("hi", e.target.value);
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
      <button onClick={getNumberOfDays} type="submit">
        calculate period
      </button>
      {/* <span>{getNumberOfDays}</span> */}
    </form>
  );
}

export default PeriodCalculator;
