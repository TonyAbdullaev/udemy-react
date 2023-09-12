import {useEffect, useState} from "react";

const SecondComponent = () => {
  useEffect(() => {
    const intId = setInterval(() => {
      console.log("Tony")
    }, 1000);
    return () =>{
      clearInterval(intId)
    }
  }, [])
  return <h2>FUCK U</h2>
}

const CleanupFunction = () => {
  const [val, setVal] = useState(false)

  return <>
    <h2>cleanup function</h2>
    <button className="btn" type="button" onClick={() => setVal(prevState => !prevState)}>change state</button>
    {
      val ? <SecondComponent value={val} /> : <h2>first component</h2>
    }
  </>;
};

export default CleanupFunction;
