const express = require("express");
const router = express.Router();
const {handleGetAllUsers,hanldeGetUserById, handleUpdateUserById, handleDeleteUserById,handleCreateNewUser} = require("../controllers/user")

// Rest API
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser)
;
router.route("/:id")
    .get(hanldeGetUserById) 
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);
   
module.exports = router;