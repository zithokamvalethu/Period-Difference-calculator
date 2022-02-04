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

    let years = parseInt((date2 - date1) / (1000 * 60 * 60 * 24) / 365);
    let months = parseInt(((date2 - date1) / (1000 * 3600 * 24)) % 31);
    let days = parseInt(((date2 - date1) / (1000 * 60 * 60 * 24)) % 24);
    // let day = Math.floor(days * 31);
    // console.log('day',days, day);
    let hours = parseInt((Math.abs(date2 - date1) / (1000 * 60 * 60)) % 24);
    let minutes = parseInt(
      (Math.abs(date2.getTime() - date1.getTime()) / (1000 * 60)) % 60
    );
    let seconds = parseInt(
      (Math.abs(date2.getTime() - date1.getTime()) / 1000) % 60
    );

    return (
      years +
      " years" +
      " " +
      months +
      " months" +
      " " +
      days +
      " days" +
      " " +
      hours +
      " hours" +
      " " +
      minutes +
      " minutes " +
      seconds +
      " seconds"
    );
  };

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
        <button
          onClick={handleSubmit}
          type="submit"
          className="button-30"
          role="button"
        >
          calculate period
        </button>
      </form>
      <div className="panel-footer">
        <span>{startDate.startingDate}</span> <br />
        <span>{startDate.endingDate}</span> <br />
        <span>{date}</span>
      </div>
    </div>
  );
}

export default PeriodCalculator;
