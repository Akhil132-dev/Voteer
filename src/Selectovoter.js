import { Button, Input, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { setstate } from './context';
import './SelectVoter.css'
function Selectovoter() {

    const {
        election, account
    } = useContext(setstate);

const [candiates, setcandiates] = useState([]);

    const [partyName, setpartyName] = useState();

    const AddCandidate = async () => {

        console.log(await election.methods.setCandidates(partyName).send({ from: account }));

        console.log(await election.methods.showresult().call())
       setcandiates(await election.methods.getLength().call()) 

    }


    return (
        <div className="SelectVoter">
            <div className="from">
                <Input className="input"
                    placeholder="Participaint Name"
                    type="text"
                    value={partyName}
                    onChange={(e) => setpartyName(e.target.value)}
                />
                <Input className="input"
                    placeholder="Particiapint Img"
                    type="text"
                />
                <button className="buttons" onClick={AddCandidate}>Add </button>
            </div>


        </div>
    )
}

export default Selectovoter
