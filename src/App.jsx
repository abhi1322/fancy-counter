import { useState } from "react";

const App = () => {
  const limit = 10;
  const [count, setCount] = useState(0);
  const [limitCheck, setLimitCheck] = useState(false);

  const handleIncrement = () => {
    if (count >= limit) {
      setLimitCheck(true);
    } else {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      if (limitCheck) {
        setLimitCheck(false);
      }
    }
  };

  const handleReset = () => {
    setCount(0);
    setLimitCheck(false);
  };

  return (
    <>
      <div className="container">
        <div className="counter">
          <p>
            {!limitCheck
              ? "Fancy Counter"
              : `You exed the limit ${limit}, Buy pro to continue`}
          </p>
          <h1>{count}</h1>
          <button onClick={handleReset}>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency-systems-regular/48/76a333/return.png"
              alt="return"
            />
          </button>
        </div>

        <div className="btn-container">
          <button onClick={handleDecrement}>-</button>
          <hr />
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </>
  );
};

export default App;
