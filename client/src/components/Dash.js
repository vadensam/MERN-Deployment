import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router'

const Dash = () => {

    const [piratelist, setPirateList] = useState([]);
    const [count, setCount] = useState(0)

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(response =>{
                let pList = response.data.results;
                pList.sort((a, b) => (a.name.localeCompare(b.name)))
                setPirateList(pList)
            })
            .catch(err => console.log(err))
    }, [count])

    const handleClick = (e, num) =>{
        if(window.confirm("Are you sure?")){
            axios.delete(`http://localhost:8000/api/pirates/${num}`)
                .then(response=>{
                    setCount(count + 1)
                })
        }
    }

    return (
        <div className="container">
            <header className="text-center">
                <h1>Pirate Crew     <Link to='/pirates/new'>Add Pirate</Link></h1>
            </header>
            <div>
                {
                    piratelist.map((mate, i) => 
                        <div key={i} className="dashBox">
                            <img src={mate.url} alt=" fakek url"/>
                            <div className="textBox text-center">
                                <h3>{mate.name}</h3>
                                <button><Link to={`/pirate/${mate._id}`}>View Pirate</Link></button>
                                <button onClick={ (e) => handleClick(e, mate._id)}> Walk the Plank</button>
                            </div>
                        </div>
                    )
                }
            </div>


        </div>
    )
}

export default Dash
