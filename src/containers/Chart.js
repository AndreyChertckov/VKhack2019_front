import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { fetchChart } from '../store/chart/actions';
import * as chartSelector from '../store/chart/reducer';

import ChartView from '../components/ChartView';


function Chart(props) {
    const [type, setType] = useState('weekly');

    useEffect(() => {
        props.dispatch(fetchChart(type));
    });

    return (
        <ChartView typeSetter={setType} {...props}/>
    );
}

function mapStoreToProps(state) {
    const weeklyChart = chartSelector.getWeeklyChart(state);
    const monthlyChart = chartSelector.getMonthlyChart(state);
    return {
        weekly: weeklyChart,
        monthlyChart: monthlyChart
    };
}

export default connect(mapStoreToProps)(Chart);