const UserRouter = require("express").Router();

const { createUser, getAllUsers, getUserByName, updateUser, deleteUser } = require("../controllers/UserControllers");

UserRouter.post("/", createUser);
UserRouter.get("/", getAllUsers);
UserRouter.get("/:name", getUserByName);
UserRouter.put("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);

module.exports = UserRouter;