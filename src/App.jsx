import { useState } from "react";
 


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
const [step,setStep]=useState(1)

  const handlenext=()=>{
    setStep(step+1)
  }
  const handleprev=()=>{
    setStep(step-1)
  }
 
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >=1 ? "active" :"step-1"}`}> 1</div>
      <div className={`${step>=2 ?"active" :"step-2"}`}>2</div>
        <div className={`${step>=3 ? "active" :"step-3"}`}>3</div>
      </div>

      <p className="message"></p>

      <div className="buttons">
        <button className="previous" style={{backgroundColor:"#7950f2" , color:"#fff"}} onClick={handleprev}>Previous</button>
        <button className="next"  style={{backgroundColor:"#7950f2" , color:"#fff"}}onClick={handlenext}> Next</button>
      </div>
    </div>
  );
}
