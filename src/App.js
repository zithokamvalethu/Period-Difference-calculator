import "./App.css";
import React from "react";

function PeriodCalculator() {
  const [startDate, setStartDate] = React.useState({
    // date: new Date(),
    date1: "",
    date2: "",
  });

  const getNumberOfDays = () => {
    var date1 = new Date();
    var date2 = new Date();

    console.log(date1);
    // One day in milliseconds
    let oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    let diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    let diffInDays = Math.round(diffInTime / oneDay);

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
      <button onSubmit={getNumberOfDays} type="submit">
        calculate period
      </button>
      <span>{getNumberOfDays.daydiff}</span>
    </form>
  );
}

export default PeriodCalculator;
