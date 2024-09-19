const UserRouter = require("express").Router();

const { createUser, readUser, updateUser, deleteUser } = require("../controllers/UserControllers");

UserRouter.post("/", createUser);
UserRouter.get("/", readUser);
UserRouter.put("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);

module.exports = UserRouter;