import "./App.css";
import React from "react";

function PeriodCalculator() {
  const [startDate, setStartDate] = React.useState({
    // date: new Date(),
    startingDate: "",
    endingDate: "",
  });
  const [date, setDate] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(getNumberOfDays(startDate.startingDate, startDate.endingDate));
  };
  const getNumberOfDays = (startingDate, endingDate) => {
    var date1 = new Date(startingDate);
    var date2 = new Date(endingDate);
    // console.log("lethu", startingDate);

    let diffInTime = Number(date2.getTime()) - Number(date1.getTime());
    let oneDay = diffInTime / (1000 * 60 * 60 * 24);
    console.log("kamva", oneDay / 365);
    return oneDay / 365;
  };

  //   Considering
  // 1 Year => 365 Days
  // 1 MONTH => 30 Days
  // 1 WEEK => 7 Days
  // value => NUMBER OF DAYS

  function parseDays(value) {
    var year, months, week, days;

    year = value >= 365 ? Math.floor(value / 365) : 0;
    value = year ? value - year * 365 : value;

    months = value >= 30 ? Math.floor((value % 365) / 30) : 0;
    value = months ? value - months * 30 : value;

    week = value >= 7 ? Math.floor((value % 365) / 7) : 0;
    value = week ? value - week * 7 : value;

    days = value < 7 ? Math.floor((value % 365) % 7) : 0;

    console.log("years = ", year);
    console.log("months = ", months);
    console.log("weeks = ", week);
    console.log("days = ", days);
  }

  const updateChangedValue = (e) => {
    setStartDate({
      ...startDate,
      [e.target.name]: e.target.value,
    });
    // console.log("hi", e.target.value);
  };

  return (
    <div>
      <form className="container">
        <label>oldest Date</label>
        <input
          name="startingDate"
          onChange={updateChangedValue}
          type="datetime-local"
          value={startDate.startingDate}
        />{" "}
        <br />
        <label>Newest Date</label>
        <input
          type="datetime-local"
          value={startDate.endingDate}
          name="endingDate"
          onChange={updateChangedValue}
        />{" "}
        <br />
        <button onClick={handleSubmit} type="submit">
          calculate period
        </button>
      </form>
      <div className="panel-footer">
        <p disabled>{startDate.startingDate}</p> <br />
        <p disabled>{startDate.endingDate}</p> <br />
        <p disabled>{date}</p>
      </div>
    </div>
  );
}

export default PeriodCalculator;
