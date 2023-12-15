import React from 'react'
import './mainlogin.css'
import { useNavigate } from 'react-router-dom';

const data=[
    {
        id:1,
        name:"Representative Login",
        image:"/student.svg",
    },
    {
        id:2,
        name:"Student Login",
        image:"/ir.svg",
    },
    {
        id:3,
        name:"T&P Office Login",
        image:"/tpo.svg",
    },
];

function Comp(props){
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate('/login')} className='box-container'>
            <button class="w-120 h-80 ">
                <img class="w-60 h-60" src={props.image} alt="" />
                <h2 >{props.name}</h2>
            </button>
        </div>
    )
}

function Mainlogin() {
    return (
        <div className='box'>
            <div className='compo'>
                {data.map((a) => (
                    <Comp key={a.id} name={a.name} image={a.image} />
                ))}
            </div>
        </div>
    )
}

export default Mainlogin;