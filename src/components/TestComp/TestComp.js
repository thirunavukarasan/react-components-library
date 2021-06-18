import React from 'react';
import propTypes from 'prop-types';

export const Test = ({label}) => {
    return(<><p className="weaverz-ai-bg-red-500">{label}</p></>);
}

Test.propTypes = {
    label : propTypes.string.isRequired
}

Test.defaultProps = {
    label : "Test Components asa" 
}