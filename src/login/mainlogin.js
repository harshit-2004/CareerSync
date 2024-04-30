import React from 'react'
import './mainlogin.css'
import { useNavigate } from 'react-router-dom';

const data=[
    {
        id:1,
        name:"Representative Login",
        image:"/student.svg",
        route:'/login'
    },
    {
        id:2,
        name:"Student Login",
        image:"/ir.svg",
        route:'/login'
    },
    {
        id:3,
        name:"T&P Office Login",
        image:"/tpo.svg",
        route:'/tpo_portal'
    },
];

function Comp(props){
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(props.route)} className='box-container'>
            <button class="w-120 h-80 ">
                <img class="w-60 h-60" src={props.image} alt="" />
                <h2 class="font-bold font-quick text-lg">{props.name}</h2>
            </button>
        </div>
    )
}

function Mainlogin() {
    return (
        <div className='box'>
                {data.map((a) => (
                    <Comp key={a.id} name={a.name} image={a.image} route={a.route}/>
                ))}
        </div>
    )
}

export default Mainlogin;