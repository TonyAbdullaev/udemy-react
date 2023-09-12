import {useState} from "react";

const ConditionalComponent = () => {
  return (
      <>
        <h2>Here we go!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, in.</p>
      </>
  )
};

const ToggleChallenge = () => {
  const [isShowed, setShowed] = useState(false)
  return (
      <>
        <h2>toggle challenge</h2>
        {
          isShowed ? <ConditionalComponent /> : <p>condition is false</p>
        }
        <button className="btn" type="button" onClick={() => setShowed(prevState => !prevState)}>
          Show me
        </button>
      </>
  );

};

export default ToggleChallenge;
