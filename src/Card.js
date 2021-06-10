
import './Card.css'
import React, {  useEffect,useContext, useState } from 'react'
import { setstate } from './context';
function Card({name,id}) {
            const {
        election, account
    } = useContext(setstate);
    const Voteforparty = async () =>{
    await election.methods.voteforParticiten(id).send({ from: account })
    }
    return (
        <div className="card" >
            <img src="http://1.bp.blogspot.com/-35_aDYbwFM8/TtzWta_dERI/AAAAAAAADjw/YxlTXuvlvFk/s1600/bjp%2Blogo.png" alt="" />
            <h2>{name}</h2>
            
            {console.log(name)}
            <button className="buttons" onClick={Voteforparty} >Vote</button>
        </div>
    )
}

export default Card
