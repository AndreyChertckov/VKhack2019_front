import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import * as clockActions from '../store/clock/actions';
import * as clockSelector from '../store/clock/reducer';
import ClockView from '../components/ClockView';


function Clock(props){

    useEffect(() => {
        props.dispatch(clockActions.fetchClock());
    }, []);

    return (
        <ClockView {...props}/>
    )
}

function mapStoreToProps(state) {
    const clock = clockSelector.getClock(state);
    return clock;
}

export default connect(mapStoreToProps)(Clock);
