const router = require('express').Router();
const { Review, User } = require('../../models');
const jwt = require('jsonwebtoken');


router.get("/:book_id", (req, res) => {
  Review.findAll({
    where: {
      ol_key: req.params.book_id
    },
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

router.post("/review-from-token", (req, res) => {
  
  const token = req.headers.authorization.split(" ")[1]
  try {
    console.log(token)
    const userData = jwt.verify(token, process.env.JWT_SECRET)
    console.log("user data")
    console.log(userData)
    Review.create(
      {
        review_title: req.body.review_title,
        review_author: req.body.review_author,
        review_text: req.body.review_text,
        plot_rating: req.body.plot_rating,
        character_rating: req.body.character_rating,
        accessibility_rating: req.body.accessibility_rating,
        pacing_rating: req.body.pacing_rating,
        ol_key: req.body.ol_key,
        userId: userData.id

      }).then(reviewData => {
        res.json(reviewData)
      }).catch(err => {
        res.status(500).json({ msg: "an error occurred", err })
      })
  } catch {
    res.status(403).json({ msg: "invalid token" })
  }
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