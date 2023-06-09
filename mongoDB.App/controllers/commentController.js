"use strict";
let Models = require("../models"); //matches index.js
const getComments = (res) => {
    //finds all Comments
    Models.Comment.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
const createComment = (data, res) => {
    //creates a new post using JSON data Commented in request body
    console.log(data)
    new Models.Comment(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 555, error: err.message })
        })
}

const updateComment = (req, res) => {
    //updates the Comment matching the ID from the param usingJSON data Comment in request body
    console.log(req.body)
    Models.Comment.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
const deleteComment = (req, res) => {
    //deletes the Comment matching the ID from the param
    Models.Comment.findByIdAndRemove(req.params.id, req.body, { useFindAndModify: false })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    getComments, createComment, updateComment, deleteComment
}