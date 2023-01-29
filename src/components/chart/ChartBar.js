import React from "react";
import './ChartBar.css'
const ChartBar = (props)=>{
    let barFiled= '0%';
    if(props.maxValue >0){
        barFiled = Math.round((props.value/props.maxValue)*100 )+ '%';
    }
  return (<div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFiled}}>
        </div>
        </div>

          <div className="chart-bar__label">{props.label}</div>
  </div>)
}
export default ChartBar;