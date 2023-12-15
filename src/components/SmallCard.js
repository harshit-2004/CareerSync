import React from 'react';
import './SmallCard.module.css';

function SmallCard(props) {

  return (
    <div className={`flex flex-col h-60 w-56 rounded-3xl 
    ${props.first && 'bg-[#E0E6FA]'}
    ${props.second && 'bg-[#E2D7F9]'}
    ${props.third && 'bg-[#DAF1DF]'}
    `}>
        <div key={props.id} className={`h-24 flex flex-col gap-2 justify-center items-start pl-6 rounded-3xl
          ${props.first && 'bg-[#CFD7F7]'}
          ${props.second && 'bg-[#D5C6F6]'}
          ${props.third && 'bg-[#BDE5C5]'}
        `}>
            <img className='h-10' src={props.images}></img>
            <div className=''>{props.heading}</div>
        </div>

        <div className='flex-1 flex flex-col pl-6 justify-center'>
            <div className='text-3xl font-bold items-baseline gap-2 flex flex-row whitespace-nowrap'>
            {props.percentage}
            {
              props.subText && <p className='text-sm'>{props.subText}</p>
            }
            </div>
            <div className='text-lg font-medium'>{props.contentbox}</div>
        </div>
    </div>
  );
}

export default SmallCard;