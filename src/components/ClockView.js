import React, { useState } from 'react';
import {StyleSheet, Button} from 'react-native';
import Svg, { Circle } from 'react-native-svg'

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

    return (
        <React.Fragment>
            <Svg style={styles.rot} className="prefix__progress-ring" width="100%" height="50%" {...props}>
                <Circle
                    className="prefix__progress-ring__circle"
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
                    className="prefix__progress-ring__circle"
                    stroke="#f83e5b"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={posStrokeDashoffset}
                    strokeWidth="20"
                    fill="transparent"
                    r={radius}
                    cx="50%"
                    cy="50%"
                />
            </Svg>
            {/* <Button onPress={() => addProgress(5)} title="ADD" />
            <Button onPress={() => removeProgress(5)} title="REMOVE" />
            <Button onPress={() => resetProgress()} title="RESET" /> */}
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    rot: {
        transform: [{rotateZ: "-90deg"}]
    }
});