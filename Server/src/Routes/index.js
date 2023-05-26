const router = require("express").Router();
const { getCharacterById } = require("../Controllers/getCharById");
const { login } = require("../Controllers/login");
const { postFav, deleteFav } = require("../Controllers/HandleFavorites");

router.get("/character/:id", getCharacterById);

router.get("/login", login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = {router};