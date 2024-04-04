import React from 'react';

export const Title:React.FC<any> = (props) => {
    return (
        <div className="divTitle">
            <h1>{props.text}</h1>
        </div>
    );
}
