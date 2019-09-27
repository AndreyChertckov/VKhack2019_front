import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import { fetchLogs } from '../store/action_log/actions';
import * as logSelector from '../store/action_log/reducer';

import LogsView from '../components/LogsView';


function Logs(props) {
    useEffect(() => {
        props.dispatch(fetchLogs());
    });

    return (
        <LogsView {...props}/>
    );
}

function mapStoreToProps(state) {
    const logs = logSelector.getLogs(state);
    return logs;
}

export default connect(mapStoreToProps)(Logs);