import React from 'react';
import { Text } from 'react-native'

export default function LogsView(props) {
    return (
        <Text>{JSON.stringify(props.logs)}</Text>
    )
}