import React, {useState} from "react";
import "./BMI.css"

function BMI () {

    const[age, setAge] = useState()
    const[weight, setWeight] = useState()
    const[height, setHeight] = useState()
    const[bmi, setBmi] = useState()
    const[msg, setMsg] = useState('');

    const reload = () => {
        window.location.reload()
    }

    const handleCalculations = (e) => {
        e.preventDefault()
    
        if (weight === 0 || height === 0) {
            alert("Hello please enter a valid number")
        } else {
            let bmiFormula = (weight / (height * height));
            setBmi(bmiFormula.toFixed(2));
    
            if (bmiFormula < 18) {
                setMsg("You are Underweight");
            } else if (bmiFormula >= 18 && bmiFormula < 25) {
                setMsg("You are Healthy");
            } else if (bmiFormula >= 25 && bmiFormula < 30) {
                setMsg("You are Overweight");
            } else if (bmiFormula >= 30) {
                setMsg("You are Obese");
            } else {
                setMsg("You are unhealthy, please seek medical attention");
            }
        }
    }
    

    return(
        <div className="app">
          <div className="container">
            <h1 className="title">BMI Calculator</h1>
            <form onSubmit={handleCalculations}>
              <div>

                <div className="Bmi-feilds">
                    <label className="labels">Age: </label>
                    <input className="bmi-input" type="number" placeholder="Age..." value={age} onChange={(e) => setAge(e.target.value)}/>
                </div>

                <div className="Bmi-feilds">
                    <label className="labels">Weight: </label>
                    <input className="bmi-input" type="number" placeholder="Enter Weight in kg..." value={weight} onChange={(e) => setWeight(e.target.value)}/>
                </div>

                <div className="Bmi-feilds">
                    <label className="labels">Height: </label>
                    <input className="bmi-input" type="number" step="0.01" placeholder="Enter Height in meter..." value={height} onChange={(e) => setHeight(e.target.value)}/>
                </div>
                
                <div className="Bmi-feilds">
                    <button className="btn" type="submit" >Calculate</button>
                    <button className="btn btn-reload" type="submit" onClick={reload}>Reload</button>
                </div>

                <div className="result">
                    <h3>Age: {age}</h3>
                    <h3>Your BMI is: {bmi} </h3>
                    <p className="p-msg">{msg}</p>
                </div>

              </div>
            </form>
       </div>
     </div>
    )
}
export default BMI;

