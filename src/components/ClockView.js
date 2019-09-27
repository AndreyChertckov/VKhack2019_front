import React from 'react';
import { Text } from 'react-native'

export default function ClockView(props) {
    return (
        <Text>{props.time}</Text>
    )
}