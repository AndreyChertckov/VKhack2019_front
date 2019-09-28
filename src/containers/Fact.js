
import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import { fetchFact } from '../store/fact/actions';
import * as factSelector from '../store/fact/reducer';

import FactView from '../components/FactView';


function Fact(props) {
    useEffect(() => {
        props.dispatch(fetchFact())
    }, []);

    return (
        <FactView {...props}/>
    );
}

function mapStoreToProps(state) {
    const fact = factSelector.getFact(state);
    return fact;
}

export default connect(mapStoreToProps)(Fact);