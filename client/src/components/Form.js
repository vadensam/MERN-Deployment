import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {navigate, Link} from '@reach/router'

const Form = () => {

    const [pirate, setPirate] = useState({
        name: "",
        url: "",
        chests: 0,
        phrase: "",
        position: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        url: "",
        chests: 0,
        phrase: "",
        position: ""
    })

    const handleChange = e =>{
        const mate = {
            ...pirate,
            [e.target.name] : e.target.value
        }
        validate(mate)
        setPirate(mate)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(validate(pirate)){
            axios.post('http://localhost:8000/api/pirates', pirate)
                .then(response =>{
                    console.log(response)
                    if(response.data.message === "success"){
                        navigate(`/pirate/${response.data.results._id}`)
                    }
                })
                .catch(err => console.log(err))
        }
    }

    const validate = mate => {
        let valid = true;
        const {...curErr} = errors;
        if(mate.name.length === 0){
            curErr.name = "This field is required"
            valid = false
        }else{
            curErr.name = ""
        }

        if(mate.url.length === 0){
            curErr.url = "This field is required"
            valid = false
        } else{
            curErr.url = ""
        }

        if(mate.phrase.length === 0){
            curErr.phrase = "This field is required"
            valid = false
        } else{
            curErr.phrase = ""
        }

        if(mate.position.length === 0){
            curErr.position = "This field is required"
            valid = false
        } else{
            curErr.position = ""
        }

        if(mate.chests.length === 0){
            curErr.chests = "This field is required."
        } else{
            curErr.chests = ""
        }

        setErrors(curErr);
        return valid;
    }
    

    return (
        <div className="container">
            <header className="text-center">
                <h1>Add Pirate    <Link to='/pirates'>Crew board</Link></h1>
            </header>

            <form onSubmit={handleSubmit} className="col-sm-12">
                <div className="form-group row">
                    {
                        errors.name ? 
                        <p className="col-sm-8 offset-sm-4 text-danger">{ errors.name }</p>
                        :
                        ''
                    }
                    <label htmlFor="name" className="col-sm-4">Name:</label>
                    <input type="text" name="name" value={pirate.name} onChange={handleChange} className="col-sm-8 form-control"/>
                </div>
                <div className="form-group row">
                    {
                        errors.url ? 
                        <p className="col-sm-8 offset-sm-4 text-danger">{ errors.url }</p>
                        :
                        ''
                    }
                    <label htmlFor="url" className="col-sm-4">Image URL:</label>
                    <input type="text" name="url" value={pirate.url} onChange={handleChange} className="col-sm-8 form-control"/>
                </div>
                <div className="form-group row">
                    {
                        errors.chests ? 
                        <p className="col-sm-8 offset-sm-4 text-danger">{ errors.chests }</p>
                        :
                        ''
                    }
                    <label htmlFor="chests" className="col-sm-4"># of Treasure Chests:</label>
                    <input type="number" name="chests" value={pirate.chests} onChange={handleChange} className="col-sm-8 form-control"/>
                </div>
                <div className="form-group row">
                    {
                        errors.phrase ? 
                        <p className="col-sm-8 offset-sm-4 text-danger">{ errors.phrase }</p>
                        :
                        ''
                    }
                    <label htmlFor="phrase" className="col-sm-4">Pirate catch phrase:</label>
                    <input type="text" name="phrase" value={pirate.phrase} onChange={handleChange} className="col-sm-8 form-control"/>
                </div>
                <div className="form-group row">
                    {
                        errors.position ? 
                        <p className="col-sm-8 offset-sm-4 text-danger">{ errors.position }</p>
                        :
                        ''
                    }
                    <label htmlFor="position" className="col-sm-4">Crew Position:</label>
                    <select name="position" value={pirate.position} onChange={handleChange} className="col-sm-8 form-control">
                        <option value="Captian">Captain</option>
                        <option value="First Mate">First mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </div>
                <div className="form-group row">
                    <input type="submit" value="Add Pirate"/>
                </div>
            </form>
        </div>
    )
}

export default Form
