import { useState } from "react";
import "./App.css";

function App() {
  const[data,setData] = useState({
    height:"",
    weight:"",
  })
  const [result, setResult] = useState("");
  const [status,setStatus] = useState("");
  const [showMessage,setShowMessage] = useState(false);
  const handleChange = (e)=>{
    const {name,value} = e.target;
    console.log(value);
    setData({
      ...data,
      [name]:value,
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(data.weight.length !==0  && data.height.length !==0){
    calculateBmi();
    }else{
      alert("Please enter the values")
    }
  }

  const calculateBmi = ()=>{
    const heightInMeters = data.height / 100;
    const calculatedBmi = (data.weight / (heightInMeters * heightInMeters)).toFixed(2);
    setResult(calculatedBmi);
    setShowMessage(true);

    if(result < 18.5){
      setStatus("Underweight")
    } else if (result >= 18.5 && result < 24.9) {
      setStatus("Normal weight");
    } else if (result >= 25 && result < 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  }
  const handleReset = (e)=>{
    e.preventDefault();
    setData({
      weight:"",
      height:"",
    })
    setShowMessage(false);
    setResult("");
  }
  return (
    <>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Weight</label>
            <input type="text" name="weight" placeholder="Enter Weight" value={data.weight} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Height</label>
            <input type="text" name="height" placeholder="Enter Height" value={data.height} onChange={handleChange} />
          </div>
          <div className="buttons">
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <button type="reset" onClick={handleReset}>Reset</button>
          </div>
          <div className="message">
          {showMessage ? <h4>Your Bmi is : {result}</h4> : ""}
          {showMessage ? <p>You are : {status}</p>: ""}
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
