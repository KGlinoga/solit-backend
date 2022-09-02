const router = require('express').Router();
const { Review, User } = require('../../models');


router.get("/", (req, res) => {
    Review.findAll({
      include: [User],
    }).then((result) => {
      res.json(result);
    });
  });
  
  router.get("/:id", (req, res) => {
    Review.findOne({
      where: {
        id: req.params.id,
      },
      include: [User],
    }).then((result) => {
      res.json(result);
    });
  });
  
  router.post("/", (req, res) => {
    Review.create(req.body).then((result) => {
      res.json(result);
    }).catch((error) => {
        res.status(503).json({error: error})
    })
  });
  
  router.put("/:id", (req, res) => {
    Review.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      },
      {
        new: true,
      }
    )
    .then((result) => {
      res.json(result)
    });
  });
  
  router.delete("/:id", (req, res) => {
    Review.destroy({
      where: {
        id: req.params.id,
      },
    }).then((result) => {
      res.json(result);
    });
  });
  
  module.exports = router;