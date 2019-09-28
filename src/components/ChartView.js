import React from 'react';
import { Text } from 'react-native'

export default function ChartView(props) {
    return (
            <Text>{JSON.stringify(props.weekly)}</Text>
    )
}