const router = require('express').Router();
const { DailyDiary, User } = require('../../models');
const jwt = require('jsonwebtoken');


router.get("/", (req, res) => {
  DailyDiary.findAll({
    include: [User],
  }).then((result) => {
    res.json(result);
  });
});

router.get("/:id", (req, res) => {
  DailyDiary.findOne({
    where: {
      id: req.params.id,
    },
    include: [User],
  }).then((result) => {
    res.json(result);
  });
});

router.post("/diary-from-token", (req, res) => {

  const token = req.headers.authorization.split(" ")[1]
  try {
    console.log(token)
    const userData = jwt.verify(token, process.env.JWT_SECRET)
    console.log("user data")
    console.log(userData)
    DailyDiary.create(
      {
        diary_title: req.body.diary_title,
        book_title: req.body.book_title,
        diary_text: req.body.diary_text,
        userId: userData.id

      }).then(diaryData => {
        res.json(diaryData)
      }).catch(err => {
        res.status(500).json({ msg: "an error occurred", err })
      })
  } catch {
    res.status(403).json({ msg: "invalid token" })
  }
});

router.put("/:id", (req, res) => {
  DailyDiary.update(
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
  DailyDiary.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
  });
});

module.exports = router;