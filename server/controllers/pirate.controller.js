const Pirate = require('../models/pirate.model');

module.exports = {
    allPirates: (req,res) =>{
        Pirate.find({})
            .then(data => res.json({ message: "success", results: data}))
            .catch(err => res.json({ message: "error", results: err}))
    },
    onePirate: (req,res) =>{
        Pirate.findOne({_id: req.params.id})
            .then(data => res.json({ message: "success", results: data}))
            .catch(err => res.json({ message: "error", results: err}))
    },
    createPirate: (req,res) =>{
        Pirate.create(req.body)
            .then(data => res.json({ message: "success", results: data}))
            .catch(err => res.json({ message: "error", results: err}))
    },
    updatePirate: (req,res) =>{
        Pirate.findOneAndUpdate({_id: req.params.id}, req.body, {runValidations: true, new: true})
            .then(data => res.json({ message: "success", results: data}))
            .catch(err => res.json({ message: "error", results: err}))
    },
    deletePirate: (req,res) =>{
        Pirate.findOneAndDelete({_id: req.params.id})
            .then(data => res.json({ message: "success", results: data}))
            .catch(err => res.json({ message: "error", results: err}))
    }
}