import React, { useState } from "react";
import ReactDOM from "react-dom";

const Title = ({ text }) => (
  <div>
    <h1>{text}</h1>
  </div>
);

const FeedbackBtn = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ text, count }) => {
  return (
    <tr>
      <td>{text} </td>
      <td>{count}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, total, value }) => {
  const getTotal = arr => {
    return arr.reduce((a, b) => a + b, 0);
  };

  const getPercentage = (val, total) => {
    return `${(val * 100) / total} %`;
  };

  if (total == 0) {
    return (
      <div>
        <p>No feedback given.</p>{" "}
      </div>
    );
  }

  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" count={good} />
          <Statistic text="neutral" count={neutral} />
          <Statistic text="bad" count={bad} />
          <Statistic text="total" count={getTotal(total)} />
          <Statistic text="average" count={getTotal(value) / total.length} />
          <Statistic
            text="positive"
            count={getPercentage(good, getTotal(total))}
          />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState([]);
  const [value, setValue] = useState([]);

  const handleGood = () => {
    setTotal(total.concat(1));
    setValue(value.concat(1));
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setTotal(total.concat(1));
    setValue(value.concat(0));
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setTotal(total.concat(1));
    setValue(value.concat(-1));
    setBad(bad + 1);
  };

  return (
    <div>
      <Title text="give feedback" />
      <FeedbackBtn text="good" handleClick={handleGood} />
      <FeedbackBtn text="neutral" handleClick={handleNeutral} />
      <FeedbackBtn text="bad" handleClick={handleBad} />
      <Title text="statistics" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        value={value}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
