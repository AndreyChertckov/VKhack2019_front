import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

export default function ActionView(props) {
    const [isPulledUp, setIsPulledUpStatus] = useState(false);

    return (
        // <Text>{JSON.stringify(props.actions)}</Text>
        <View style={[styles.actionsPanel, {height: isPulledUp ? 350 : 165}]}>
            <TouchableHighlight
                style={styles.circleBtn}
                underlayColor="rgba(255,255,255,0.2)"
                onPress={() => {setIsPulledUpStatus(!isPulledUp)}}
            >
                <Svg width="40" height="40">
                    <Circle
                        stroke="#fff"
                        strokeWidth="5"
                        fill="#04346c"
                        r="8"
                        x="20"
                        y="20"
                    />
                </Svg>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    actionsPanel: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: {width: 20, height: 20},
        shadowRadius: 40,
        zIndex: 10,
    },
    circleBtn: {
        position: "absolute",
        top: -20,
        alignSelf: "center",
        zIndex: 12,
        borderRadius: 20,
    }
});