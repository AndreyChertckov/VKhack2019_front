import React, { useState } from 'react';
import {StyleSheet, Button, Dimensions} from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg'

export default function ClockView(props) {
    const radius = "110",
        circumference = +radius * 2 * Math.PI,
        strokeDasharray = circumference,
        [posMins, setPosMins] = useState(0),
        [negMins, setNegMins] = useState(0),
        [clockFaceRotation, setClockFaceRotation] = useState("-90deg"),
        [offsetPositive, setOffsetPositive] = useState(circumference),
        [offsetNegative, setOffsetNegative] = useState(circumference),
        [bottomLimit, setBottomLimit] = useState(0), 
        [topLimit, setTopLimit] = useState(1440), 
        [hourLimit, setHourLimit] = useState(60);

    function addProgress(mins) {
        if (posMins < topLimit) {
            if (posMins >= hourLimit)
                setClockFaceRotation((+clockFaceRotation.slice(0, -3) + mins*6) + "deg");
            else {
                if (posMins >= negMins) {
                    setOffsetNegative(offsetNegative - mins/60*circumference);
                    setOffsetPositive(offsetPositive - mins/60*circumference);
                } else
                    setOffsetNegative(offsetNegative - mins/60*circumference);
            }

            setPosMins(posMins + mins);
            if (posMins >= negMins)
                setNegMins(posMins + mins);
        }
    }

    function removeProgress(mins) {
        if (posMins > bottomLimit) {
            if (negMins >= hourLimit && posMins <= negMins - 60) {
                setClockFaceRotation((+clockFaceRotation.slice(0, -3) - mins*6) + "deg");
            } else
                setOffsetNegative(offsetNegative + mins/60*circumference);
            setPosMins(posMins - mins);
        }
    }
    
    function reset() {
        setClockFaceRotation("-90deg");
        setPosMins(0);
        setNegMins(0);
        setBottomLimit(0);
        setTopLimit(1440);
        setHourLimit(60);
        setOffsetPositive(circumference);
        setOffsetNegative(circumference);
    }

    function resetProgress() {
        setNegMins(posMins);
        setBottomLimit(posMins);
        setTopLimit(topLimit + posMins);
        setHourLimit(hourLimit + posMins);
        setClockFaceRotation((-90 + posMins*6) + "deg");
        setOffsetPositive(circumference);
        setOffsetNegative(circumference);
    }

    const screenWidth = Math.round(Dimensions.get('window').width);

    return (
        <React.Fragment>
            <Svg 
                style={{transform: [{rotateZ: clockFaceRotation}]}}
                className="prefix__progress-ring" 
                width={screenWidth} 
                height={screenWidth} 
                {...props}
            >
                <Circle
                    stroke="#0e53a7"
                    strokeWidth="20"
                    fill="transparent"
                    r={radius}
                    cx="50%"
                    cy="50%"
                />
                <Circle
                    stroke="#00a876"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={offsetPositive}
                    strokeWidth="20"
                    fill="transparent"
                    r={radius}
                    cx="50%"
                    cy="50%"
                />
                <Circle
                    stroke="#f83e5b"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={offsetNegative}
                    strokeWidth="20"
                    fill="transparent"
                    r={radius}
                    cx="50%"
                    cy="50%"
                />
            </Svg>
            <Svg
                style={{position: "absolute", transform: [{rotateZ: "-90deg"}]}}
                width={screenWidth} 
                height={screenWidth} 
                {...props}
            >
                {/* Minute hand */}
                <Rect
                    transform={"rotate("+ posMins*6 +", " + (screenWidth/2) + ", " + (screenWidth/2) + ")"}
                    fill="#fff"
                    width="90"
                    height="20"
                    rx="15"
                    x={screenWidth/2}
                    y={screenWidth/2 - 10}
                />
                {/* Hours hand */}
                <Rect
                    transform={"rotate("+ posMins/6 +", " + (screenWidth/2) + ", " + (screenWidth/2) + ")"}
                    fill="#04346c"
                    stroke="#fff"
                    strokeWidth="5"
                    width="55"
                    height="20"
                    rx="15"
                    x={screenWidth/2}
                    y={screenWidth/2 - 10}
                />
                {/* Hands' pin */}
                <Circle
                    stroke="#fff"
                    strokeWidth="8"
                    fill="#04346c"
                    r="15"
                    cx="50%"
                    cy="50%"
                />
            </Svg>
            <Button onPress={() => addProgress(5)} title="ADD" />
            <Button onPress={() => removeProgress(5)} title="REMOVE" />
            <Button onPress={() => resetProgress()} title="RESET PROGRESS" />
            <Button onPress={() => reset()} title="RESET" />
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    
});