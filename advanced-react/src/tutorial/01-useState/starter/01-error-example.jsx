import {useState} from "react";

const ErrorExample = () => {
  let [count, setCount] = useState(0)

  const handleIncrease = () => {
    if (count >= 10) {
      return alert("Stop mthfker!")
    }
    count += 1;
    setCount(count)
  }
  const handleDecrease = () => {
    if (count <= 0) {
      return alert("Stop mthfker!")
    }
    count -= 1;
    setCount(count)
  }

  return (
      <>
          <h2>{count}</h2>
          <button className="btn" type="button" onClick={handleIncrease}>Increase</button>
          <button className="btn" type="button" onClick={handleDecrease}>Decrease</button>
      </>
  );
};

export default ErrorExample;
