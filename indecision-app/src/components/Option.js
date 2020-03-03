import React from 'react';

const Option = (props) => (
    <div>
        - {props.optionText}
        <button 
            onClick={() => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            remove
        </button>
    </div>
);

export { Option as default };