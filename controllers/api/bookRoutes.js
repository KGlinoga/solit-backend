const router = require('express').Router();
const { Book, Review } = require('../../models');

router.get("/", (req, res) => {
    Book.findAll({
      include: [Review],
    }).then((results) => {
        
        const updatedResults = results.map((result) => {
        const avg_plotRating = (result.Reviews.reduce( (a,b)=> {
                return a.plot_rating + b.plot_rating
               }) ) / result.Reviews.length;

        const avg_characterRating = (result.Reviews.reduce( (a,b)=> {
                return a.character_rating + b.character_rating
               }) ) / result.Reviews.length;

        const avg_accessibilityRating = (result.Reviews.reduce( (a,b)=> {
                return a.accessibility_rating + b.accessibility_rating
               }) ) / result.Reviews.length;

        const avg_pacingRating = (result.Reviews.reduce( (a,b)=> {
                return a.pacing_rating + b.pacing_rating
               }) ) / result.Reviews.length;

            return  {
                id: result.id,
                book_title: result.book_title,
                author: result.author,
                cover: result.cover,
                description: result.description,
                ISBN: result.ISBN,
                avg_plotRating: avg_plotRating,
                avg_characterRating: avg_characterRating,
                avg_accessibilityRating: avg_accessibilityRating,
                avg_pacingRating: avg_pacingRating,
                Reviews: result.Reviews
            };
        })
       
      res.json(updatedResults);
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