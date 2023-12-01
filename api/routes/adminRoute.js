import express from "express";
// import { test, updateUser, deleteUser } from "../controllers/UserController.js";
import getAllUsers from '../controllers/Admin/getAllUsers.js'
import { verifyToken } from "../utils/verifyUser.js";
import toggleIsVerified from "../controllers/Admin/toggleIsVerified.js";
import changeRole from "../controllers/Admin/changeRole.js";
import addUser from '../controllers/Admin/addUser.js'

const router = express.Router();

// router.get("/", (req,res) => {
//     console.log('inside get admin route')
// });
router.get('/getAllUsers', verifyToken, getAllUsers)
router.put('/blockUser/:id', verifyToken, toggleIsVerified)
router.put('/changeRole/:id', verifyToken, changeRole)
router.post('/addUser',verifyToken, addUser)
// router.delete('/delete/:id',verifyToken, deleteUser)


export default router;