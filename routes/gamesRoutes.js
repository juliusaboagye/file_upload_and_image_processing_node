const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gamesController");

router
  .route("/:id")
  .get(gameController.getGame)
  .delete(gameController.deleteGame)
  .patch(gameController.updateGame);

router
  .route("/")
  .post(
    gameController.uploadImage,
    gameController.processImages,
    gameController.createGame
  )
  .get(gameController.getAllGames);

router
  .route("/playground")
  .post(
    gameController.uploadImage,
    gameController.processImages,
    gameController.playground
  );

module.exports = router;
