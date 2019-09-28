import React, { useState } from 'react';
import {StyleSheet, Button, Dimensions} from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg'

export default function ClockView(props) {
    const radius = "110",
        circumference = +radius * 2 * Math.PI,
        strokeDasharray = circumference,
        [posStrokeDashoffset, setPosStrokeDashoffset] = useState(circumference),
        [negStrokeDashoffset, setNegStrokeDashoffset] = useState(circumference),
        [posMins, setPosMins] = useState(0),
        [negMins, setNegMins] = useState(0);

    function addProgress(mins) {
        if (posMins < 60) {
            const offset = circumference - (posMins + mins) / 60 * circumference;
            setPosMins(posMins + mins);
            setPosStrokeDashoffset(offset);
            if (posMins == negMins) {
                setNegMins(posMins + mins);
                setNegStrokeDashoffset(offset);
            }
        }
    }

    function removeProgress(mins) {
        if (posMins > 0) {
            const offset = circumference - (posMins - mins) / 60 * circumference;
            setPosMins(posMins - mins);
            setPosStrokeDashoffset(offset)
        }
    }
    
    function resetProgress() {
        setPosMins(0);
        setNegMins(0);
        setPosStrokeDashoffset(circumference);
        setNegStrokeDashoffset(circumference);
    }

    const screenWidth = Math.round(Dimensions.get('window').width);

    return (
        <React.Fragment>
            <Svg style={styles.rot} className="prefix__progress-ring" width={screenWidth} height={screenWidth} {...props}>
                <Circle
                    stroke="#00a876"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={negStrokeDashoffset}
                    strokeWidth="20"
                    fill="transparent"
                    r={radius}
                    cx="50%"
                    cy="50%"
                />
                <Circle
                    stroke="#f83e5b"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={posStrokeDashoffset}
                    strokeWidth="20"
                    fill="transparent"
                    r={radius}
                    cx="50%"
                    cy="50%"
                />
                <Rect
                    transform={"rotate("+ posMins*6 +", " + (screenWidth/2) + ", " + (screenWidth/2) + ")"}
                    fill="#fff"
                    width="90"
                    height="20"
                    rx="15"
                    x={screenWidth/2}
                    y={screenWidth/2 - 10}
                />
            </Svg>
            <Button onPress={() => addProgress(5)} title="ADD" />
            <Button onPress={() => removeProgress(5)} title="REMOVE" />
            <Button onPress={() => resetProgress()} title="RESET" />
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    rot: {
        transform: [{rotateZ: "-90deg"}]
    }
});