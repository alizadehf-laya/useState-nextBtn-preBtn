import { useState } from "react";


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // let clr1={color:"#7950f2"}
  const[ColorMe,setColorMe]=useState("#f7f7f7")
  const nextBtn=()=>{
    return(
      setColorMe()
    )
  }
 
  return (
    <div class="steps">
      <div class="numbers">
        <div class="step-1" style={{backgroundColor:"#7950f2"}}> 1</div>
      <div class="step-2" style={{backgroundColor:ColorMe}}>2</div>
        <div class="step-3">3</div>
      </div>

      <p class="message"></p>

      <div class="buttons">
        <button class="previous">Previous</button>
        <button class="next"  onClick={()=>{setColorMe(ColorMe ==="#f7f7f7" &&"#7950f2" )}} >Next</button>
      </div>
    </div>
  );
}
