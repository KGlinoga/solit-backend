const router = require('express').Router();
const sequelize = require('sequelize');
const { Book, Review } = require('../../models');

router.get("/", (req, res) => {
  Book.findAll({
    include: [{
      model: Review,
      attributes: [
        [sequelize.fn("avg",sequelize.col("plot_rating")), "plotAvg"],
        [sequelize.fn("avg",sequelize.col("character_rating")), "characterAvg"],
        [sequelize.fn("avg",sequelize.col("accessibility_rating")), "accessibilityAvg"],
        [sequelize.fn("avg",sequelize.col("pacing_rating")), "pacingAvg"],
      ]}],
  }).then((results) => {

    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  Book.findOne({
    where: {
      id: req.params.id,
    },
    include: [Review],
  }).then((result) => {
    res.json(result);
  });
});

router.post("/", (req, res) => {
  Book.create(req.body).then((result) => {
    res.json(result);
  });
});

router.put("/:id", (req, res) => {
  Book.update(
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
  Book.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
  });
});

module.exports = router;