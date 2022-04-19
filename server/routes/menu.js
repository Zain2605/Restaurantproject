const express = require('express');
const router = express.Router();
const menumodel = require('../models/menumodel')
router.get("/", async (req, res) => {
    try {
      await menumodel
        // .aggregate([
        //   {
        //     $lookup: {
        //       from: "answers", //collection to join
        //       localField: "_id", //field from input document
        //       foreignField: "questionId",
        //       as: "allAnswers", //output array field
        //     },
        //   },
        // ])
        .find()
        .exec()
        .then((doc) => {
          //res.status(200).send(doc);
          console.log(doc);
        })
        .catch((error) => {
          res.status(500).send({
            status: false,
            message: "Unable to get menu",
          });
        });
    } catch (e) {
      res.status(500).send({
        status: false,
        message: "Unexpected error",
      });
    }
  });

module.exports = router;