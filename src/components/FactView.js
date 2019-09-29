import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'

export default function FactView(props) {
    const [textIsWrapped, setTextWrappedStatus] = useState(true);

    return (
        <TouchableHighlight
            onPress={() => {setTextWrappedStatus(!textIsWrapped)}}
            underlayColor="#032956"
        >
            <View
                style={styles.facts}
            >
                <View style={styles.bulbIconCont}>
                    <View style={styles.bulbIconWrapper}>
                        <Image style={styles.bulbIcon} source={require('./../../assets/icons/bulb.png')} />
                    </View>
                </View>

                <Text style={styles.text}>
                    {
                        (textIsWrapped && props.description.length > 200)
                        ? props.description.slice(0, 197) + "..."
                        : props.description
                    }
                </Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    facts: {
        width: "90%",
        alignSelf: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "stretch",
        paddingTop: 30,
        paddingBottom: 30
    },
    text: {
        color: "#fff",
        fontSize: 15,
        fontWeight: '100',
        width: "75%"
    },
    bulbIconCont: {
        width: "20%",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingTop: 20,
        alignItems: "center",
    },
    bulbIconWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#032956",
        borderRadius: 40
    },
    bulbIcon: {
        width: 32,
        height: 32,
        resizeMode: "contain"
    }
});