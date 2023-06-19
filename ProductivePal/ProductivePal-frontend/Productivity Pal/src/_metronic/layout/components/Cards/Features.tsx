// vinit
import React, {FC} from 'react'
import { Chart } from "react-google-charts";
import './Features.css'
type Props = {
  className: string
  chartColor: string
  Title: string
  Description: string
  Start: number
  Completed: number
}


export const data = [
        [
 "Courses",
 "fgh"
        ],
        ["Done", 32],
        ["In Progress",45],
        ["To Start", 33],
       
];

export const options =  {
  legend: "none",
 
//  "vAxis": { "title": "Grade" },
//  "hAxis": { "title": "Students" },
 "seriesType": "bars",
 "series": { "3": { "type": "line" } },
 "pieHole": "0.4",
 "is3D": false,
      };

function Charts() {
  return (
      <Chart
      chartType="PieChart"
        data={data}
         options={options}
        width={"150px"}
        height={"100%"}
        className='hideBg'
         //style={{borderRadius: "50%"}}
      />
  );
}

export default Charts;
const Features: FC<Props> = ({className, chartColor, Title, Description, Start, Completed}) => {
  return (
    <>
      <div className={`card bg-${className} text-${chartColor} w-25 px-5 my-5`}>
        
        <div className={`card-header border-0 my-2 `}>
          <h3 className='card-title fw-bolder text-white'>{Title}</h3>
        </div>
        <div className="separator border-secondary"></div>
        <div className='d-flex justify-content-evenly'>
          <div className='fw-bolder'>
            <div className='w-75 text-wrap' style={{height:"50px",overflow:"hidden",whiteSpace:"break-spaces",textOverflow:"ellipsis"}}>
            <p style={{}}>{Description}</p>
            </div>
            <div><p>Start-{Start}</p>--<p>End-{Completed}</p></div>
          </div>
          {/* style={{objectFit:"cover",mixBlendMode:"color-burn"}} */}
          <div className='py-2 text-center' >
          <Charts />
          </div>
        </div>
        
      </div>
    </>
  )
}

export {Features}
