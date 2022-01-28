import "./App.css";
import React from "react";

function PeriodCalculator() {
  const [startDate, setStartDate] = React.useState({
    // date: new Date(),
    date1: "",
    date2: "",
  });
  // console.log("period");

  const updateChangedValue = (e) => {
    setStartDate({
      ...startDate,
      [e.target.name]: e.target.value,
    });
    // console.log("period", e.target.value);
    // console.log(startDate.date1);
  };

  const getNumberOfDays = () => {
    var date1 = new Date( );
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

  return (
    <form className="container">
      <label>oldest Date</label>
      <input
        name="date1"
        onChange={updateChangedValue}
        type="date"
        value={startDate.date1}
      // format="yyyy-MM-dd"
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
