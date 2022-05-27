const {Guide} = require('../models/guide.model')

//get all 
module.exports.allGuides = (req, res) => {
    // console.log(req.params)
    Guide.find({championID: req.params.championID})
        .then(guides => res.json(guides))
        .catch(err => res.status(400).json(err))
}

//create  
module.exports.createGuide = (req, res) => {
    Guide.create(req.body)
        .then(newGuide => res.json(newGuide))
        .catch(err => res.status(400).json(err))
}

// //get one 
// module.exports.oneChampion= (req, res) => {
//     Champion.findOne({ _id: req.params.id })
//         .then(champion=> res.json(champion))
//         .catch(err => res.status(400).json(err))
// }

// //update one
// module.exports.updateChampion = (req, res) => {
//     Champion.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedChampion => res.json(updatedChampion))
//         .catch(err => res.status(400).json(err))
// }

//delete
module.exports.deleteGuide = (req, res) => {
    Guide.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}