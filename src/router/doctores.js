import express from "express"
import doctoresC from "../controllers/doctores.js"

const router = express.Router();
router.route("/")
.get(doctoresC.getdoctores)
.post(doctoresC.insertdoctores)
router.route("/:id")
.put(doctoresC.updatedoctores)
.delete(doctoresC.deletedoctores)

export default router;