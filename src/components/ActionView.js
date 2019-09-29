import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, View, ScrollView, Text } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

export default function ActionView(props) {
    const [isPulledUp, setIsPulledUpStatus] = useState(false),
          [currentAction, setCurrentAction] = useState(0);;

    return (
        <View style={[styles.actionsPanelCont, {height: isPulledUp ? 375 : 155}]}>
            <TouchableHighlight
                style={styles.circleBtn}
                underlayColor="rgba(255,255,255,0.2)"
                onPress={() => {setIsPulledUpStatus(!isPulledUp)}}
            >
                <Svg width="50" height="50">
                    <Circle
                        stroke="#fff"
                        strokeWidth="5"
                        fill="#04346c"
                        r="8"
                        x="25"
                        y="25"
                    />
                </Svg>
            </TouchableHighlight>

            <View style={styles.actionsPanel}>
                {
                    props.actions.map((action, index) => {
                        return (
                            <View key={index} style={[styles.actionInfo, {opacity: +(currentAction == index)}]}>
                                <Text style={[{fontWeight: '600'}, {textAlign: "center"}, {fontSize: 15}]}>{action.name}</Text>
                                <Text>{action.effect}</Text>
                                <Text>{index}</Text>
                            </View>
                        );
                    })
                }
                <ScrollView
                    style={styles.horScroll}
                    overScrollMode="always"
                    horizontal={true}
                    centerContent={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.scrollCont}>
                        {
                            props.actions.map((action, index) => {
                                return (
                                    <View
                                        key={index}
                                        style={[styles.action, {marginRight: index == Object.keys(props.actions).length - 1 ? 0 : 25}]}
                                    >
                                        <TouchableHighlight
                                            style={styles.actionBtn}
                                            underlayColor="rgba(1,1,1,0.1)"
                                            onPress={() => {setCurrentAction(index)}}
                                        >
                                            <Text>{action.name}</Text>
                                        </TouchableHighlight>
                                    </View>
                                );
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    actionsPanelCont: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingTop: 25,
    },
    actionsPanel: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 10,
        height: "100%",
        overflow: "hidden",
        alignItems: "center",
        backgroundColor: "#e9f3ff",
    },
    circleBtn: {
        position: "absolute",
        top: 0,
        alignSelf: "center",
        zIndex: 15,
        borderRadius: 25,
    },
    horScroll: {
        height: 130,
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        paddingBottom: 25,
    },
    scrollCont: {
        height: "100%",
        alignSelf: "center",
        marginLeft: 120,
        marginRight: 120,
        flexDirection: "row",
        alignItems: "stretch",
    },
    action: {
        marginRight: 25,
        justifyContent: "flex-end",
    },
    actionBtn: {
        width: 80,
        height: 80,
        backgroundColor: "pink",
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    actionInfo: {
        height: 150,
        width: 300,
        borderRadius: 25,
        position: "absolute",
        top: 25,
        backgroundColor: "white",
        padding: 20,
    }
});