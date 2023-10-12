import React from 'react';
import './Linemake.css';

export default function Linemake(props) {
    var thickness = props.thickness;
    return (
        <div className='line-container' >
            <div className='line-making' style={{ width: `${thickness}%` }}/>
            <div className='line-making'/>
        </div>
    );
};

