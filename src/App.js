import "./App.css";
import React from "react";
import moment from "moment";

function PeriodCalculator() {
  const [startDate, setStartDate] = React.useState({
    // date: new Date(),
    date1: "",
    date2: "",
    time1: "",
    time2: "",
  });

  const updateChangedValue = (e) => {
    setStartDate({
      ...startDate,
      [e.target.name]: e.target.value,
    });
  };

  const getNumberOfDays = (e) => {
    var m1 = moment("{admission}", "DD-MM-YYYY HH:mm");
    var m2 = moment("{discharge}", "DD-MM-YYYY HH:mm");
    var m3 = m2.diff(m1, "minutes");
    // var m4 = m2.diff(m1, "h");

    var numdays = Math.floor(m3 / 1440);
    var numhours = Math.floor((m3 % 1440) / 60);
    var numminutes = Math.floor((m3 % 1440) % 60);
    return numdays + " day(s) " + numhours + "h " + numminutes + "m";
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
      <button onSubmit={getNumberOfDays} type="submit">
        calculate period
      </button>
      <span>{getNumberOfDays.daydiff}</span>
    </form>
  );
}

export default PeriodCalculator;
