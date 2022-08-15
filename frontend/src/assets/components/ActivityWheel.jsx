import React from "react";
import { Wheel } from "react-custom-roulette";
import { Link } from "react-router-dom";
// import Activity from "./Activity";
import ActivityList from "../pages/ActivityList";
import pointer from "../pointer.webp"

function ActivityWheel(props) {

    return (
        <div>
            <div className='prizeWheelBox'>
                <p id="logo">DR</p>
                <img src={pointer} id="pointer" />
                <Wheel
                    mustStartSpinning={props.mustSpin}
                    prizeNumber={props.prizeNumber}
                    data={props.wheeldata}
                    onStopSpinning={props.onStopSpinning}
                    outerBorderWidth={12}
                    innerRadius={28}
                    innerBorderWidth={10}
                    innerBorderColor={'black'}
                    radiusLineWidth={2.5}
                    radiusLineColor={'goldenrod'}
                    fontSize={18}
                    perpendicularText={true}
                    textDistance={86}
                    spinDuration={0.75}
                />
            </div>
            <br />
            <button id="spinButton" onClick={
                props.handleSpinClick
            }>
                Spin the Wheel</button>
            <h3>Your Date Activity Tonight Shall Be...</h3>
            {/* <p>Prize Number: {props.prizeNumber}</p> */}
            {/* <Activity prizeNumber={prizeNumber} /> */}
            {/* <br /> */}
            {/* <button id="accept">
                <Link to="activitymap">Accept</Link>
            </button>
            <button id="respin" onClick={props.handleSpinClick}>RE-SPIN</button>
            <br /> */}
            {/* <button>
                <Link to="activities">Activities</Link>
            </button> */}
        </div >
    )

}

export default ActivityWheel


// stack overflow example of calling multiple functions with one click
// onClick={() => { func1(); func2();}}>
// alt idea: write a function that calls two functions an pass that as the one onclick function
// might be problematic because I need the answer for function one to call function two:
/*
possible syntax:

function spinClicks() {
    function 1: spin wheel, return prize number
    function 2: getPrizeNum(prizeNum)
}



*/
