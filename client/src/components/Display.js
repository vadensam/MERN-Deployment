import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'

const Display = (props) => {

    const [pirate, setPirate] = useState({})
    const {id} = props

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(response =>{
                console.log(response)
                if(response.data.message === "success"){
                    setPirate(response.data.results)
                }
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="container">
            <header className="text-center">
                <h1>{pirate.name}</h1>
                <Link to='/pirates'>Crew board</Link>
            </header>
            <div className="displayDiv">
                <img src={pirate.url} alt={`the url is ${pirate.url}`}/>
                <h2>{pirate.phrase}</h2>
            </div>
            <div className="displayDiv text-center">
                <h3>About</h3>
                <p>Position: {pirate.position}</p>
                <p>Treasures: {pirate.chests}</p>
                <p>Peg Leg: {pirate.leg ? "Yes" : "No"}</p>
                <p>Patch Eye: {pirate.eye ? "Yes" : "No"}</p>
                <p>Hook hand: {pirate.hand ? "Yes" : "No"}</p>
            </div>
        </div>
    )
}

export default Display
