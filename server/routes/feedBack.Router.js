const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /api/feedback')
    pool.query('SELECT * from "feedback";').then((results) =>{
        res.send(results.rows);
        console.log('GET SUCESS', results.rows)
    }).catch((error) => {
        console.log('Error in server GET', error)
    });
})

module.exports = router;