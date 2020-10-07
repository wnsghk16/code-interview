import React from 'react';

const Text = props => {
    return (
        <>
            <div
                style={{
                    color: props.TextColor,
                    margin: props.Margin
                }}
            >
                {props.TextTitle}
            </div>
        </>
    )
}

export default Text;
