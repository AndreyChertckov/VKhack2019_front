import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import { fetchActions } from '../store/action/actions';
import * as actionsSelector from '../store/action/reducer';

import ActionView from '../components/ActionView';


function Action(props) {
    useEffect(() => {
        props.dispatch(fetchActions())
    }, []);

    return (
        <ActionView {...props}/>
    );
}

function mapStoreToProps(state) {
    const actions = actionsSelector.getActions(state);
    return actions;
}

export default connect(mapStoreToProps)(Action);