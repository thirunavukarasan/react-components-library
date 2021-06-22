import React from 'react';
import propTypes from 'prop-types';
import './TestComp.css';

export const Test = (props) => {
    const {label} = props
    return(<><p className="test-comp">{label}</p></>);
}

Test.propTypes = {
    label : propTypes.string.isRequired
}

Test.defaultProps = {
    label : "Test Components asa" 
}