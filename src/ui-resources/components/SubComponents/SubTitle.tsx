import React from 'react';
import { TextInterface } from '../../../config/Interfaces/SubComponents';

export const SubTitle:React.FC<TextInterface> = ({ content, fontSize = '25px' }) => {
    return (
        <div className="divSubTitle">
            <h2 style={{fontSize:fontSize}}>{content}</h2>
        </div>
    );
}
