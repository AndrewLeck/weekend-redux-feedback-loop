const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// router.get('/', (req, res) => {
//     console.log('GET /api/feedback')
//     pool.query('SELECT * from "feedback";').then((results) =>{
//         res.send(results.rows);
//     }).catch((error) => {
//         console.log('Error in server GET', error)
//     });
// })


router.post('/', (req, res) => {
    console.log('Inside Server POST', req.body)
    let queryText = `INSERT into  "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;


    pool.query(queryText, [
        req.body.feeling, 
        req.body.understanding,
        req.body.support,
        req.body.comments])
    .then(() => {
        res.sendStatus(201)
    })
    .catch((err) => {
        console.log('ERROR INSIDE SERVER POST', err)
    })
})

module.exports = router;