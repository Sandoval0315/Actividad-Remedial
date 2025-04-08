const doctoresC = {};

import DoctoresM from "../models/DoctoresM.js"

doctoresC.getdoctores = async( req, res) =>{
    const doctores = await DoctoresM.find()
    res.json(doctores)
}

doctoresC.insertdoctores = async (req, res) =>{
    const{} = req.body;
    const newDoctor = new DoctoresM({})
    await newDoctor.save()
    res.json({menssage: "doctor saved"})
}

doctoresC.deletedoctores = async (req,res) => {
    await DoctoresM.findByIdAndDelete(req.params.id); 
    req.json({message: "delete doctor"})
}

doctoresC.updatedoctores = async (req,res) => {
    const{} = req.body;
    const updatedoctores = await DoctoresM.findByIdAndUpdate(req.params.id,{ }, {new: true} )
    res.json({message: "update complete"})
}

export default doctoresC;