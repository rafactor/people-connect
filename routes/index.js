const express = require('express');
const router = express.Router();
const db = require('../models/')

// get  serivces 
router.get('/services', (req, res) => {
  let q = {};
  let query = req.query;
  // build on query obj
  if (query.category) q.category = query.category;
  if (query.subCategory) q.subCategory = query.subCategory;
  if (query.provider) q.provider = query.provider;
  db.Services.find(query).then(services => {
    res.json(services)
  })
})

// add service 
router.post('/services/add', (req, res) => {
  db.Services.create(req.body).then(service => {
    res.json({ created: true, msg: "service has been created" })
  }).catch(err => {
    res.json({ created: false, msg: "something went wrong", err })
  })
})

// delete service 
router.get('/services/delete/:serviceid', (req, res) => {
  db.Services.findOneAndRemove({ _id: req.params.id }).then(done => {
    res.json({ deleted: true, msg: "Service has been deleted" });
  }).catch(err => {
    res.json({ deleted: false, msg: "Somthing went wrong" })
  });
})


module.exports = router;