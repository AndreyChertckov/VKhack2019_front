import React from 'react';
import { Text } from 'react-native'

export default function ActionView(props) {
    return (
        <Text>{JSON.stringify(props.actions)}</Text>
    )
}