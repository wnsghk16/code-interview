import React from 'react';

const Input = props => {
    return (
        <div>
            <input
                name={props.name}
                placeholder={props.placeholder}
                value={props.title}
                onChange={props.onChange}
              />
        </div>
    );
};

export default Input;