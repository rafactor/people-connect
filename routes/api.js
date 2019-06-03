const express = require('express');
const router = express.Router();
const db = require('../models/')


// route for the application
// services/market
// services/market/:id
// orders/market
// orders/market/id

// services/myshop
// services/myshop/:id
// orders/myshop
// orders/myshop/id

//get     --get     services
// services/     //post    --add     service
// services/:id  //get     --get     service
// services/:id  //delete  --delete  service
// services/:id  //post    --edit    service

// market/     //get     --get market services
// market/:id  //get     --get market service

// order/     //get     --get orders
// order/:id  //delete  --delete



router.route('/orders/market')
  // get my orders from market serivces 
  .get((req, res) => {
    db.Orders.find({ client: req.session.user.id }).populate(["service", "provider"])
      .then(values => {
        console.log('/orders/market', values)
        let orders = [];
        if (values) {
          values.forEach((val) => {
            orders.push({
              "_id": val["_id"],
              contact: val.provider.name,
              title: val.service.title,
              category: val.service.category,
              language: val.service.language,
              confirm: (val.isCompleted) ? "Confirmed" : "Not Yet",
            })
          })
        }
        res.status(200).json(orders)
      }).catch(err => {
        console.log(err);
        res.status(404).json({ message: "Something went wrong" })
      });

  })

router.route('/orders/market/:id')
  // cancel order from market by id
  .delete((req, res) => {
    db.Orders.findByIdAndDelete(req.params.id).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      console.log(err);
      res.status(404).json({ message: "Something went wrong" })
    });
  })

router.route('/services/market')
  // get market serivces 
  .get((req, res) => {
    db.Services.find({ provider: { $ne: req.session.user.id } }).populate("provider")
      .then(values => {
        let services = [];
        if (values) {
          values.forEach((val) => {
            services.push({
              "_id": val["_id"],
              contact: val.provider.name,
              title: val.title,
              category: val.category,
              language: val.language,
              description: val.description,
              price: val.price,
              coverage: val.coverage,
            })
          })
        }
        res.status(200).json(services)
      }).catch(err => {
        console.log(err);
        res.status(404).json({ message: "Something went wrong" })
      });

  })

router.route('/services/market/:id')
  // order service from market services 
  .post((req, res) => {
    db.Orders.findOne({ service: req.params.id, client: req.session.user.id }).then(order => {
      if (order) {
        console.log("You Already ordered this service!", order)
        res.status(404).json({ message: "You Already ordered this service!" })
      } else {
        db.Services.findById(req.params.id).then(result => {
          let order = {
            provider: result.provider._id,
            client: req.session.user.id,
            service: req.params.id,
          }
          db.Orders.create(order)
        })
          .then(result => {
            res.status(200).json(result)
          }).catch(err => {
            console.log(err);
            res.status(404).json({ message: "Something went wrong" })
          });
      }
    })
  })


router.route('/orders/myshop')
  // get orders of my services 
  .get((req, res) => {
    db.Orders.find({ provider: req.session.user.id }).populate(["client", "service"])
      .then(values => {
        let orders = [];
        if (values) {
          values.forEach((val) => {
            orders.push({
              "_id": val["_id"],
              contact: val.client.name,
              title: val.service.title,
              category: val.service.category,
              language: val.service.language,
              confirm: (val.isCompleted) ? "Confirmed" : "Not Yet",
            })
          })
        }
        res.status(200).json(orders)
      }).catch(err => {
        console.log(err);
        res.status(404).json({ message: "Something went wrong" })
      });
  })

router.route('/orders/myshop/:id')
  // confirm client's request of myshop's service 
  .put((req, res) => {
    db.Orders.findOneAndUpdate({ "_id": req.params.id }, { isCompleted: true }, { new: true })
      .then(order => {
        res.status(200).json(order)
      }).catch(err => {
        console.log(err);
        res.status(404).json({ message: "Something went wrong" })
      });
  })

router.route('/services/myshop')
  // get my serivces 
  .get((req, res) => {
    console.log('/services/myshop', "get", "id", req.session.user.id)

    db.Services.find({ provider: req.session.user.id })
      .then(values => {
        let services = [];
        if (values) {
          values.forEach((val) => {
            services.push({
              "_id": val["_id"],
              title: val.title,
              category: val.category,
              language: val.language,
              description: val.description,
              price: val.price,
              coverage: val.coverage
            })
          })
        }
        console.log(JSON.stringify(services, undefined, 5))
        res.status(200).json(services)
      }).catch(err => {
        console.log(err);
        res.status(404).json({ message: "Something went wrong" })
      });
  })
  // add new service 
  .post((req, res) => {
    let service = req.body;
    service.provider = req.session.user.id;
    db.Services.create(service)
      .then(result => {
        res.status(200).json(result)
      }).catch(err => {
        console.log(err);
        res.status(404).json({ message: "Something went wrong" })
      });
  })

router.route('/services/myshop/:id')
  //get my service by id  
  .get((req, res) => {
    db.Services.findById(req.params.id)
      .then(result => {
        res.status(200).json(result)
      }).catch(err => {
        console.log(err);
        res.status(404).json({ message: "Something went wrong" })
      });
  })
  // edit my service by id
  .put((req, res) => {
    db.Services.findByIdAndUpdate(req.params.id, req.body)
      .then(result => {
        res.status(200).json(result)
      }).catch(err => {
        console.log(err);
        res.status(404).json({ message: "Something went wrong" })
      });
  })
  // delete my service by id
  .delete((req, res) => {
    db.Services.findByIdAndDelete(req.params.id)
      .then(result => {
        res.status(200).json(result)
      }).catch(err => {
        console.log(err);
        res.status(404).json({ message: "Something went wrong" })
      });
  })


module.exports = router;