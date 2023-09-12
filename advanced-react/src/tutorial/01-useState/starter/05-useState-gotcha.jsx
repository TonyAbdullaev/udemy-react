import {useState} from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const increaseValue = () => {
    setTimeout(() => {setValue(prevState => prevState + 1)}, 3000)
  }
  return <>
    <h2>useState "gotcha"</h2>
    <h2>{value}</h2>
    <button className="btn" type="button" onClick={increaseValue}>increase</button>
  </>;
};

export default UseStateGotcha;
