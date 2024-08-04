import React from 'react';
import { TextInterface } from '../../config/Interfaces/SubComponents';

export const Title:React.FC<TextInterface> = ({ content, fontSize = '35px' }) => {
    return (
        <div className="divTitle">
            <h1 style={{fontSize:fontSize}}>{content}</h1>
        </div>
    );
}
