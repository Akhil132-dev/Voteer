

import Card from './Card'
import React, { useEffect, useContext, useState } from 'react'
import { setstate } from './context';
import './Vote.css'
function Vote() {
    const {
        election, account
    } = useContext(setstate);
    const [candiates, setcandiates] = useState([]);
    const Getallcandidates = async () => {
        setcandiates(await election.methods.getLength().call())
    }
 
setTimeout(() => {
    Getallcandidates()
},5000);


    return (


        <div className="vote">


            {
                candiates.map((candidate) => (

                    console.log(candiates)
                    //  <Card key={candidate.VoteCount} name ={candiates.candidate_name} id ={candidate.VoteCount}/>
                )

                )
            }




        </div>
    )
}

export default Vote
