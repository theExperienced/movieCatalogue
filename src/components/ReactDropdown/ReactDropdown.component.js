import React from 'react';
import Select from "react-dropdown-select";


const ReactDropdown = ({ optVals, purpose, onChange }) => {
    const values = Object.keys(optVals);
    const options = Object.values(optVals);

    return (
        <Select options={options} values={values} onChange={onChange} placeholder={`Select a ${purpose}... `} />
    )
}

export default ReactDropdown;

