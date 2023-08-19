import React from 'react'
import "./layout.css"
import { useState } from 'react';

function Layout() {


  const [calc, setCalc]=useState("");
  const [result, setResult]=useState("");

  const ops=['/', '*', '+', '-', '.'];

  const updateCals =value=>{

    if(ops.includes(value) && calc ==='' || 
    ops.includes(value) && ops.includes(calc.slice(-1)
    )
    ){
      return;
    }
    setCalc(calc+value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }

  const createDigit=()=>{
    const digit=[];

    for(let i=1; i<10; i++){
      digit.push(
        <button 
        onClick={()=> updateCals(i.toString())}
        key={i}>{i}</button>
      )
    }
    return digit;
  }

  const calculate=()=>{
    setCalc(eval(calc).toString());
  }

  const deletelast=()=>{
    if(calc==''){
      return;
    }

    const value=calc.slice(0,-1);
    setCalc(value)
  }
  return (
    <div>

     <div className='App'>
        <div className='calculator'> 
          <div className='display'>
           {/* {result ? <span>({result})</span> : ''}  */}
           {calc || "0"}
          </div>
          <div className='operator'>
             <button onClick={()=> updateCals('/')}>/</button>
             <button onClick={()=> updateCals('*')}>*</button>
             <button onClick={()=> updateCals('+')}>+</button>
             <button onClick={()=> updateCals('-')}>-</button>
             <button onClick={deletelast}>DEL</button>
          </div>

          <div className='digits'>
             {createDigit()}
             <button onClick={()=> updateCals('0')}>0</button>
             <button onClick={()=> updateCals('.')}>.</button>
             <button onClick={calculate}>=</button>
          </div>
        </div>
     </div>

     
        
    </div>
  )
}

export default Layout;