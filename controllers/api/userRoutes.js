// const router = require('express').Router();
// const { User } = require('../../models');

// router.get("/", (req, res) => {
//     User.findAll({
//     }).then((result) => {
//       res.json(result);
//     });
//   });
  
//   router.get("/:id", (req, res) => {
//     User.findOne({
//       where: {
//         id: req.params.id,
//       },
//     }).then((result) => {
//       res.json(result);
//     });
//   });
  
//   router.post("/", (req, res) => {
//     User.create(req.body).then((result) => {
//       res.json(result);
//     });
//   });
  
//   router.put("/:id", (req, res) => {
//     User.update(
//       req.body,
//       {
//         where: {
//           id: req.params.id,
//         },
//       },
//       {
//         new: true,
//       }
//     )
//     .then((result) => {
//       res.json(result)
//     });
//   });
  
//   router.delete("/:id", (req, res) => {
//     User.destroy({
//       where: {
//         id: req.params.id,
//       },
//     }).then((result) => {
//       res.json(result);
//     });
//   });
  
//   module.exports = router;